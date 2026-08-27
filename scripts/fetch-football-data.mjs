#!/usr/bin/env node
/**
 * Busca dados reais do Brasileirão Série A na football-data.org (plano
 * gratuito) e grava:
 *   - src/data/brasileirao-serie-a.json        (tabela — mesmo formato usado
 *     pelo BrasileiraoTable.astro, populado também pelo fetch-brasileirao.mjs)
 *   - src/data/brasileirao-serie-a-extra.json  (casa x fora + sequência/forma)
 *   - src/data/brasileirao-serie-a-race.json   (evolução de pontos por rodada)
 *   - src/data/brasileirao-artilheiros.json    (ranking de artilheiros)
 *
 * O plano gratuito da football-data.org só cobre a Série A (não a Série B),
 * então brasileirao-serie-b.json continua vindo do fetch-brasileirao.mjs
 * (API-FOOTBALL) — hoje com dados de exemplo, até decidirmos sobre um plano
 * pago para a Série B.
 *
 * Roda antes do `astro build`, junto com fetch-brasileirao.mjs. Se
 * FOOTBALL_DATA_KEY não estiver definida, não falha o build — só mantém os
 * arquivos JSON existentes.
 */

const API_KEY = process.env.FOOTBALL_DATA_KEY;
const API_BASE = 'https://api.football-data.org/v4';
const COMPETITION = 'BSA'; // Campeonato Brasileiro Série A

async function apiFetch(path) {
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

/**
 * Evolução acumulada de pontos por rodada (matchday), para o gráfico de
 * "corrida pelo título". Usa a rodada (matchday) retornada pela API — como
 * o Brasileirão é turno único de todos contra todos por rodada, cada time
 * joga exatamente uma vez por rodada.
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

  return {
    matchdays,
    series: Object.fromEntries(series),
  };
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

async function main() {
  if (!API_KEY) {
    console.warn(
      '[football-data] FOOTBALL_DATA_KEY não definida — pulando busca. ' +
        'O site vai usar os arquivos JSON já existentes em src/data/.'
    );
    return;
  }

  const { writeFile, mkdir } = await import('node:fs/promises');
  const { fileURLToPath } = await import('node:url');
  const path = await import('node:path');

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const outDir = path.join(__dirname, '..', 'src', 'data');
  await mkdir(outDir, { recursive: true });

  try {
    const standingsData = await apiFetch(`/competitions/${COMPETITION}/standings`);
    const totalTable = standingsData.standings?.find((s) => s.type === 'TOTAL')?.table;

    if (totalTable) {
      const payload = {
        league: 'Série A',
        season: standingsData.season?.startDate?.slice(0, 4) ?? null,
        lastUpdated: new Date().toISOString(),
        isMockData: false,
        source: 'football-data.org',
        standings: normalizeStandings(totalTable),
      };
      await writeFile(
        path.join(outDir, 'brasileirao-serie-a.json'),
        JSON.stringify(payload, null, 2) + '\n',
        'utf-8'
      );
      console.log(`[football-data] Série A: ${payload.standings.length} times gravados (tabela).`);

      const teamNames = payload.standings.map((row) => row.team);
      const matchesData = await apiFetch(`/competitions/${COMPETITION}/matches?status=FINISHED`);
      const matches = matchesData.matches ?? [];

      const stats = computeHomeAwayAndStreaks(matches, teamNames);
      const extra = finalizeHomeAwayAndStreaks(stats);
      await writeFile(
        path.join(outDir, 'brasileirao-serie-a-extra.json'),
        JSON.stringify(
          { season: payload.season, lastUpdated: payload.lastUpdated, isMockData: false, teams: extra },
          null,
          2
        ) + '\n',
        'utf-8'
      );
      console.log(`[football-data] Série A: casa/fora e sequência calculados para ${extra.length} times.`);

      const race = computePointsRace(matches, teamNames);
      await writeFile(
        path.join(outDir, 'brasileirao-serie-a-race.json'),
        JSON.stringify(
          { season: payload.season, lastUpdated: payload.lastUpdated, isMockData: false, ...race },
          null,
          2
        ) + '\n',
        'utf-8'
      );
      console.log(`[football-data] Série A: corrida pelo título com ${race.matchdays.length} rodadas.`);
    } else {
      console.warn('[football-data] Standings da Série A vieram vazios — mantendo dados existentes.');
    }
  } catch (err) {
    console.warn(`[football-data] Falha ao buscar tabela/casa-fora da Série A: ${err.message} — mantendo dados existentes.`);
  }

  try {
    const scorersData = await apiFetch(`/competitions/${COMPETITION}/scorers?limit=20`);
    const payload = {
      season: scorersData.season?.startDate?.slice(0, 4) ?? null,
      lastUpdated: new Date().toISOString(),
      isMockData: false,
      source: 'football-data.org',
      scorers: normalizeScorers(scorersData.scorers ?? []),
    };
    await writeFile(
      path.join(outDir, 'brasileirao-artilheiros.json'),
      JSON.stringify(payload, null, 2) + '\n',
      'utf-8'
    );
    console.log(`[football-data] Artilheiros: ${payload.scorers.length} jogadores gravados.`);
  } catch (err) {
    console.warn(`[football-data] Falha ao buscar artilheiros: ${err.message} — mantendo dados existentes.`);
  }
}

await main();
