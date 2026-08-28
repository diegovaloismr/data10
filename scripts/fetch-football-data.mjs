#!/usr/bin/env node
/**
 * Busca dados reais de futebol na football-data.org (plano gratuito) para as
 * 7 competições listadas em src/data/leagues-config.json (Brasileirão Série A,
 * Premier League, La Liga, Serie A da Itália, Bundesliga, Ligue 1 e Champions
 * League) — grava tudo em src/data/leagues/{code}-*.json.
 *
 * Para cada competição: tabela de classificação, casa x fora + sequência,
 * evolução de pontos por rodada (corrida) e artilheiros.
 *
 * O plano gratuito tem limite de 10 requisições/minuto — este script pausa
 * entre chamadas para nunca estourar esse limite.
 *
 * Roda antes do `astro build`. Se FOOTBALL_DATA_KEY não estiver definida,
 * não falha o build — só mantém os arquivos JSON existentes.
 */

const API_KEY = process.env.FOOTBALL_DATA_KEY;
const API_BASE = 'https://api.football-data.org/v4';

// Espaçamento entre chamadas para respeitar o limite de 10 req/min do plano
// gratuito (6.5s entre chamadas ≈ 9.2 req/min, com margem de segurança).
const RATE_LIMIT_DELAY_MS = 6500;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let lastCallAt = 0;

async function apiFetch(path) {
  const waitFor = lastCallAt ? Math.max(0, RATE_LIMIT_DELAY_MS - (Date.now() - lastCallAt)) : 0;
  if (waitFor > 0) await sleep(waitFor);
  lastCallAt = Date.now();

  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'X-Auth-Token': API_KEY },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`football-data.org respondeu ${res.status} em ${path}: ${body}`);
  }
  return res.json();
}

function normalizeStandings(table) {
  return table.map((row) => ({
    position: row.position,
    team: row.team?.name ?? 'Time',
    crest: row.team?.crest ?? null,
    points: row.points,
    played: row.playedGames ?? 0,
    win: row.won ?? 0,
    draw: row.draw ?? 0,
    lose: row.lost ?? 0,
    goalsFor: row.goalsFor ?? 0,
    goalsAgainst: row.goalsAgainst ?? 0,
    goalDiff: row.goalDifference ?? 0,
    form: row.form ?? '',
  }));
}

function computeHomeAwayAndStreaks(matches, teamNames) {
  const finished = matches
    .filter((m) => m.status === 'FINISHED')
    .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));

  const stats = new Map();
  for (const name of teamNames) {
    stats.set(name, {
      team: name,
      home: { played: 0, won: 0, draw: 0, lost: 0, points: 0 },
      away: { played: 0, won: 0, draw: 0, lost: 0, points: 0 },
      resultsSequence: [], // cronológico, mais antigo -> mais recente
    });
  }

  for (const match of finished) {
    const homeName = match.homeTeam?.name;
    const awayName = match.awayTeam?.name;
    const homeGoals = match.score?.fullTime?.home;
    const awayGoals = match.score?.fullTime?.away;
    if (homeGoals == null || awayGoals == null) continue;

    const homeStats = stats.get(homeName);
    const awayStats = stats.get(awayName);
    if (!homeStats || !awayStats) continue;

    homeStats.home.played++;
    awayStats.away.played++;

    if (homeGoals > awayGoals) {
      homeStats.home.won++;
      homeStats.home.points += 3;
      awayStats.away.lost++;
      homeStats.resultsSequence.push('V');
      awayStats.resultsSequence.push('D');
    } else if (homeGoals < awayGoals) {
      awayStats.away.won++;
      awayStats.away.points += 3;
      homeStats.home.lost++;
      homeStats.resultsSequence.push('D');
      awayStats.resultsSequence.push('V');
    } else {
      homeStats.home.draw++;
      homeStats.home.points += 1;
      awayStats.away.draw++;
      awayStats.away.points += 1;
      homeStats.resultsSequence.push('E');
      awayStats.resultsSequence.push('E');
    }
  }

  return stats;
}

function finalizeHomeAwayAndStreaks(stats) {
  return Array.from(stats.values()).map((s) => {
    const last5 = s.resultsSequence.slice(-5);
    let unbeatenStreak = 0;
    for (let i = s.resultsSequence.length - 1; i >= 0; i--) {
      if (s.resultsSequence[i] === 'D') break;
      unbeatenStreak++;
    }
    return {
      team: s.team,
      home: s.home,
      away: s.away,
      form: last5.join(''),
      unbeatenStreak,
    };
  });
}

/**
 * Evolução acumulada de pontos por rodada (matchday), para o gráfico de
 * "corrida pelo título".
 */
function computePointsRace(matches, teamNames) {
  const finished = matches.filter((m) => m.status === 'FINISHED' && m.matchday != null);
  const matchdays = [...new Set(finished.map((m) => m.matchday))].sort((a, b) => a - b);

  const running = new Map(teamNames.map((name) => [name, 0]));
  const series = new Map(teamNames.map((name) => [name, []]));

  for (const matchday of matchdays) {
    const roundMatches = finished.filter((m) => m.matchday === matchday);
    for (const match of roundMatches) {
      const homeName = match.homeTeam?.name;
      const awayName = match.awayTeam?.name;
      const homeGoals = match.score?.fullTime?.home;
      const awayGoals = match.score?.fullTime?.away;
      if (homeGoals == null || awayGoals == null) continue;
      if (!running.has(homeName) || !running.has(awayName)) continue;

      if (homeGoals > awayGoals) running.set(homeName, running.get(homeName) + 3);
      else if (homeGoals < awayGoals) running.set(awayName, running.get(awayName) + 3);
      else {
        running.set(homeName, running.get(homeName) + 1);
        running.set(awayName, running.get(awayName) + 1);
      }
    }
    for (const name of teamNames) {
      series.get(name).push(running.get(name));
    }
  }

  return { matchdays, series: Object.fromEntries(series) };
}

function normalizeScorers(scorers) {
  return scorers.map((entry, index) => ({
    rank: index + 1,
    player: entry.player?.name ?? 'Jogador',
    team: entry.team?.name ?? 'Time',
    crest: entry.team?.crest ?? null,
    goals: entry.goals ?? 0,
    assists: entry.assists ?? null,
    playedMatches: entry.playedMatches ?? null,
  }));
}

/** Busca tabela, casa/fora+sequência, corrida e artilheiros de uma competição. */
async function fetchCompetition(code, displayName) {
  const standingsData = await apiFetch(`/competitions/${code}/standings`);
  const totalTable = standingsData.standings?.find((s) => s.type === 'TOTAL')?.table;
  if (!totalTable) {
    throw new Error('standings vazio (sem tabela do tipo TOTAL)');
  }

  const seasonStart = standingsData.season?.startDate ?? null;
  const seasonEnd = standingsData.season?.endDate ?? null;
  const startYear = seasonStart?.slice(0, 4) ?? null;
  const endYear = seasonEnd?.slice(0, 4) ?? null;
  // Temporada europeia (cruza o ano civil, ex: "2026/27") x temporada em ano
  // único (Brasileirão, ex: "2026").
  const seasonLabel =
    startYear && endYear && startYear !== endYear ? `${startYear}/${endYear.slice(2)}` : startYear;
  // Se a temporada "atual" retornada pela API já terminou, é porque a API
  // ainda não publicou a próxima temporada — mostramos isso na página em vez
  // de fingir que os dados são do momento presente.
  const seasonEnded = seasonEnd ? new Date(seasonEnd) < new Date() : false;

  const standingsPayload = {
    league: displayName,
    season: startYear,
    seasonLabel,
    seasonEnded,
    lastUpdated: new Date().toISOString(),
    isMockData: false,
    source: 'football-data.org',
    standings: normalizeStandings(totalTable),
  };

  const teamNames = standingsPayload.standings.map((row) => row.team);
  const matchesData = await apiFetch(`/competitions/${code}/matches?status=FINISHED`);
  const matches = matchesData.matches ?? [];

  const stats = computeHomeAwayAndStreaks(matches, teamNames);
  const extraPayload = {
    season: standingsPayload.season,
    lastUpdated: standingsPayload.lastUpdated,
    isMockData: false,
    teams: finalizeHomeAwayAndStreaks(stats),
  };

  const race = computePointsRace(matches, teamNames);
  const racePayload = {
    season: standingsPayload.season,
    lastUpdated: standingsPayload.lastUpdated,
    isMockData: false,
    ...race,
  };

  const scorersData = await apiFetch(`/competitions/${code}/scorers?limit=20`);
  const scorersPayload = {
    season: standingsPayload.season,
    lastUpdated: standingsPayload.lastUpdated,
    isMockData: false,
    source: 'football-data.org',
    scorers: normalizeScorers(scorersData.scorers ?? []),
  };

  return { standingsPayload, extraPayload, racePayload, scorersPayload };
}

async function writeJson(filePath, data) {
  const { writeFile } = await import('node:fs/promises');
  await writeFile(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

async function main() {
  if (!API_KEY) {
    console.warn(
      '[football-data] FOOTBALL_DATA_KEY não definida — pulando busca. ' +
        'O site vai usar os arquivos JSON já existentes em src/data/.'
    );
    return;
  }

  const { mkdir, readFile } = await import('node:fs/promises');
  const { fileURLToPath } = await import('node:url');
  const path = await import('node:path');

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  const leaguesDir = path.join(dataDir, 'leagues');
  await mkdir(leaguesDir, { recursive: true });

  // Brasileirão + as 6 competições internacionais, todas gravadas em
  // src/data/leagues/{code}-*.json a partir da mesma config.
  const configRaw = await readFile(path.join(dataDir, 'leagues-config.json'), 'utf-8');
  const leagues = JSON.parse(configRaw);

  for (const league of leagues) {
    try {
      const { standingsPayload, extraPayload, racePayload, scorersPayload } = await fetchCompetition(
        league.code,
        league.name
      );
      await writeJson(path.join(leaguesDir, `${league.code}-standings.json`), standingsPayload);
      await writeJson(path.join(leaguesDir, `${league.code}-extra.json`), extraPayload);
      await writeJson(path.join(leaguesDir, `${league.code}-race.json`), racePayload);
      await writeJson(path.join(leaguesDir, `${league.code}-scorers.json`), scorersPayload);
      console.log(
        `[football-data] ${league.name}: ${standingsPayload.standings.length} times, ` +
          `${racePayload.matchdays.length} rodadas, ${scorersPayload.scorers.length} artilheiros ` +
          `(temporada ${standingsPayload.seasonLabel}${standingsPayload.seasonEnded ? ', já encerrada — fonte ainda não publicou a próxima' : ''}).`
      );
    } catch (err) {
      console.warn(`[football-data] Falha ao buscar ${league.name}: ${err.message} — mantendo dados existentes.`);
    }
  }
}

await main();
