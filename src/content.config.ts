import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Coleção de posts do blog. Por enquanto só existe conteúdo em PT
// (src/content/blog/*.md); quando as traduções EN/ES ficarem prontas,
// basta adicionar arquivos com o sufixo de idioma, ex: `xg-explicado.en.md`.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Redação Data10'),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      readingTime: z.number().optional(),
      draft: z.boolean().default(false),
    }),
});

// Coleção do glossário: cada termo é uma entrada tipo "verbete de dicionário".
const glossario = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossario' }),
  schema: z.object({
    term: z.string(),
    shortDefinition: z.string(),
    category: z.string().default('Geral'),
    relatedPosts: z.array(z.string()).default([]),
    relatedTerms: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, glossario };
