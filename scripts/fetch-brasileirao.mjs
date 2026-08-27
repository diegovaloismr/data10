#!/usr/bin/env node
/**
 * Busca a tabela de classificação do Brasileirão (Série A e Série B) na
 * API-FOOTBALL e grava o resultado em src/data/brasileirao-serie-{a,b}.json.
 *
 * Roda como um passo do workflow de deploy, ANTES do `astro build`, para que
 * o site (100% estático) já publique o HTML com a tabela atualizada.
 *
 * Se a variável de ambiente API_FOOTBALL_KEY não estiver definida (ex: build
 * local de um contribuidor, ou PR de fora), o script não falha o build — só
 * avisa e mantém os arquivos JSON existentes (dados de exemplo ou da última
 * atualização real).
 */

const API_KEY = process.env.API_FOOTBALL_KEY;
const API_BASE = 'https://v3.football.api-sports.io';

// `knownId` é só um fallback de última instância, caso a busca dinâmica por
// nome/país (resolveLeagueId) falhe por algum motivo — não é garantido que
// esses números estejam corretos, por isso a resolução por nome vem primeiro.
const LEAGUES = [
  { name: 'Série A', slug: 'serie-a', apiName: 'Serie A', knownId: 71 },
  { name: 'Série B', slug: 'serie-b', apiName: 'Serie B', knownId: 72 },
];

async function apiFetch(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'x-apisports-key': API_KEY },
  });
  if (!res.ok) {
    throw new Error(`API-FOOTBALL respondeu ${res.status} em ${path}`);
  }
  const json = await res.json();
  if (json.errors && Object.keys(json.errors).length > 0) {
    throw new Error(`API-FOOTBALL retornou erro: ${JSON.stringify(json.errors)}`);
  }
  return json;
}

/** Resolve o ID da liga por nome/país, com fallback para o ID conhecido. */
async function resolveLeagueId(league) {
  try {
    const data = await apiFetch(`/leagues?country=Brazil&name=${encodeURIComponent(league.apiName)}`);
    const match = data.response?.find((entry) => entry.league?.name === league.apiName);
    if (match?.league?.id) return match.league.id;
  } catch (err) {
    console.warn(`[brasileirao] Não consegui resolver o ID de ${league.name} dinamicamente: ${err.message}`);
  }
  console.warn(`[brasileirao] Usando ID conhecido (${league.knownId}) para ${league.name}.`);
  return league.knownId;
}

/** Busca a temporada mais recente com standings disponíveis (ano atual, com fallback para o anterior). */
async function fetchStandings(leagueId) {
  const currentYear = new Date().getFullYear();
  for (const year of [currentYear, currentYear - 1]) {
    const data = await apiFetch(`/standings?league=${leagueId}&season=${year}`);
    const standings = data.response?.[0]?.league?.standings?.[0];
    if (standings && standings.length > 0) {
      return { season: year, standings };
    }
  }
  return null;
}

function normalizeStandings(rawStandings) {
  return rawStandings.map((row) => ({
    position: row.rank,
    team: row.team?.name ?? 'Time',
    crest: row.team?.logo ?? null,
    points: row.points,
    played: row.all?.played ?? 0,
    win: row.all?.win ?? 0,
    draw: row.all?.draw ?? 0,
    lose: row.all?.lose ?? 0,
    goalsFor: row.all?.goals?.for ?? 0,
    goalsAgainst: row.all?.goals?.against ?? 0,
    goalDiff: row.goalsDiff ?? 0,
    form: row.form ?? '',
  }));
}

async function main() {
  if (!API_KEY) {
    console.warn(
      '[brasileirao] API_FOOTBALL_KEY não definida — pulando busca de dados. ' +
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

  for (const league of LEAGUES) {
    try {
      const leagueId = await resolveLeagueId(league);
      const result = await fetchStandings(leagueId);

      if (!result) {
        console.warn(`[brasileirao] Nenhum standings disponível para ${league.name} — mantendo dados existentes.`);
        continue;
      }

      const payload = {
        league: league.name,
        season: result.season,
        lastUpdated: new Date().toISOString(),
        isMockData: false,
        standings: normalizeStandings(result.standings),
      };

      const outPath = path.join(outDir, `brasileirao-${league.slug}.json`);
      await writeFile(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf-8');
      console.log(`[brasileirao] ${league.name}: ${payload.standings.length} times gravados em ${outPath}`);
    } catch (err) {
      console.warn(`[brasileirao] Falha ao buscar ${league.name}: ${err.message} — mantendo dados existentes.`);
    }
  }
}

await main();
