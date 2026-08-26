// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site hospedado como GitHub Project Page: https://diegovaloismr.github.io/data10/
// Ajuste `site` e `base` aqui caso o repositório mude de nome ou vire uma User Page
// (usuario.github.io), caso em que `base` deve virar '/'.
const base = '/data10';

export default defineConfig({
  site: 'https://diegovaloismr.github.io',
  base,
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // A raiz "/" redireciona para "/pt/". Astro NÃO prefixa `base`
  // automaticamente nos destinos de `redirects`, então incluímos aqui.
  redirects: {
    '/': `${base}/pt/`,
  },

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Deixa o build enxuto e previsível em máquinas com pouca RAM/CPU.
    inlineStylesheets: 'auto',
  },
});
