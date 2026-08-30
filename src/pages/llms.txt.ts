import { getCollection } from 'astro:content';

// Índice do site em Markdown, seguindo a convenção emergente llms.txt
// (https://llmstxt.org/) — ajuda ferramentas de IA que navegam a web em
// tempo real (busca do ChatGPT, Perplexity, Google AI Overviews, Copilot
// etc.) a entender rapidamente o que o site cobre e onde encontrar cada
// conteúdo, em vez de precisar rastrear página por página.
export async function GET(context) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const site = context.site?.toString().replace(/\/$/, '') ?? '';
  const url = (path: string) => `${site}${base}${path}`;

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const terms = (await getCollection('glossario')).sort((a, b) => a.data.term.localeCompare(b.data.term, 'pt'));

  const lines: string[] = [];

  lines.push('# Data10');
  lines.push('');
  lines.push(
    '> Portal independente de ciência de dados aplicada ao futebol: artigos técnicos, glossário de métricas avançadas e dashboards com dados reais do Brasileirão e das principais ligas europeias, atualizados diariamente.'
  );
  lines.push('');
  lines.push(
    'Conteúdo em português (idioma principal e único com cobertura editorial completa). Projeto editorial independente, sem afiliação a clubes, ligas ou federações.'
  );
  lines.push('');

  lines.push('## Glossário');
  lines.push('');
  lines.push('Definições diretas de métricas e conceitos de análise de dados no futebol, uma página por termo.');
  lines.push('');
  for (const term of terms) {
    lines.push(`- [${term.data.term}](${url(`/pt/glossario/${term.id}/`)}): ${term.data.shortDefinition}`);
  }
  lines.push('');

  lines.push('## Blog');
  lines.push('');
  lines.push('Artigos sobre estatística avançada, machine learning e tecnologia aplicados ao futebol.');
  lines.push('');
  for (const post of posts) {
    lines.push(`- [${post.data.title}](${url(`/pt/blog/${post.id}/`)}): ${post.data.description}`);
  }
  lines.push('');

  lines.push('## Dashboards');
  lines.push('');
  lines.push(
    `- [Brasileirão e Ligas Internacionais](${url('/pt/dashboards/brasileirao/')}): tabela de classificação, artilheiros, casa x fora, sequência, ataque x defesa e corrida pelo título — dados reais de 7 competições (Brasileirão Série A, Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Champions League), atualizados automaticamente todo dia.`
  );
  lines.push('');

  lines.push('## Outras páginas');
  lines.push('');
  lines.push(`- [Glossário completo](${url('/pt/glossario/')})`);
  lines.push(`- [Blog completo](${url('/pt/blog/')})`);
  lines.push(`- [Sobre o Data10](${url('/pt/sobre/')})`);

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
