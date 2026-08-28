// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site hospedado no domínio próprio https://data10.app.br, via GitHub Pages
// (CNAME em public/CNAME). Como o domínio serve a raiz diretamente, `base`
// fica em '/' — se o site voltar a ser servido a partir de um subcaminho
// (ex: usuario.github.io/data10/), ajuste `base` de volta para '/data10'.
const base = '/';
// Concatenar `${base}/pt/` com base = '/' geraria "//pt/" (barra dupla);
// normalizamos para '' nesse caso só para montar os destinos abaixo.
const baseForPaths = base === '/' ? '' : base;

export default defineConfig({
  site: 'https://data10.app.br',
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
    '/': `${baseForPaths}/pt/`,
  },

  integrations: [mdx(), sitemap()],

  image: {
    // As capas dos posts são SVG autorais (não vêm de usuários/fontes
    // externas), então é seguro rasterizá-las — usado para gerar versões
    // PNG das capas para og:image/twitter:image (X/Twitter não aceita SVG
    // em preview de link).
    dangerouslyProcessSVG: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Deixa o build enxuto e previsível em máquinas com pouca RAM/CPU.
    inlineStylesheets: 'auto',
  },
});
