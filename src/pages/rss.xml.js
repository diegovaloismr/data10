import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Feed RSS do blog em PT (idioma com conteúdo completo publicado por enquanto).
export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: 'Data10 — Ciência de dados aplicada ao esporte',
    description: 'Artigos sobre estatística, machine learning e análise de dados no futebol.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: post.data.author,
      categories: [post.data.category, ...post.data.tags],
      link: `${base}/pt/blog/${post.id}/`,
    })),
    customData: `<language>pt-BR</language>`,
  });
}
