#!/usr/bin/env node
/**
 * Script temporário de verificação: lista todas as competições que a
 * football-data.org conhece e em qual "plano" (tier) cada uma está, para
 * confirmar se a Copa Libertadores está disponível no plano gratuito.
 * Apagar depois de usar.
 */
const API_KEY = process.env.FOOTBALL_DATA_KEY;
const res = await fetch('https://api.football-data.org/v4/competitions', {
  headers: { 'X-Auth-Token': API_KEY },
});
const data = await res.json();

if (!res.ok) {
  console.log('[debug] Erro:', JSON.stringify(data));
} else {
  const relevant = (data.competitions ?? []).filter((c) =>
    /libertadores|sudamericana|conmebol|premier league|la liga|primera division|serie a|bundesliga|ligue 1|champions league/i.test(
      `${c.name} ${c.area?.name ?? ''}`
    )
  );
  for (const c of relevant) {
    console.log(`[debug] ${c.name} (${c.area?.name}) — code=${c.code} plan=${c.plan}`);
  }
  console.log(`[debug] Total de competições retornadas: ${data.competitions?.length ?? 0}`);
}
