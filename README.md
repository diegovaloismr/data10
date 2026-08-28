# Data10

Portal de ciência de dados aplicada ao esporte (foco inicial em futebol), construído com [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), hospedado gratuitamente no GitHub Pages.

## Stack

- **Astro** (site estático, sem framework de JS pesado)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Content Collections** do Astro (Markdown) para blog e glossário
- **Chart.js** para os gráficos interativos da seção de Dashboards (carregado apenas nas páginas que usam gráficos)
- **i18n nativo do Astro**: `pt` (idioma padrão e único com conteúdo completo por enquanto), `en` e `es` (estrutura pronta, conteúdo com aviso de "tradução em breve")

## Rodando localmente

Pré-requisitos: Node.js 22+ e npm.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321/data10/pt/` (o `base` do projeto é `/data10`, ver `astro.config.mjs`).

Outros comandos úteis:

```bash
npm run build     # gera o site estático em dist/
npm run preview   # serve o build de produção localmente
```

## Estrutura do projeto

```
src/
  content/
    blog/          # posts do blog em Markdown (.md)
    glossario/      # termos do glossário em Markdown (.md)
  content.config.ts # schema das collections (blog e glossario)
  components/       # componentes reutilizáveis (Header, Footer, AdSlot, PostCard, ...)
    charts/          # componentes de gráfico (Chart.js) usados nos Dashboards
  layouts/          # BaseLayout (head, header, footer) e ArticleLayout (posts)
  i18n/             # pt.json, en.json, es.json (textos de interface) + utils.ts
  pages/
    pt/              # rotas em português (idioma padrão)
    en/              # rotas em inglês (placeholder "tradução em breve")
    es/              # rotas em espanhol (placeholder "tradução em breve")
    404.astro        # página 404 customizada (global, qualquer idioma)
    rss.xml.js       # feed RSS do blog em PT
```

A raiz `/` redireciona automaticamente para `/pt/` (configurado em `astro.config.mjs`, na chave `redirects`).

## Como adicionar um novo post no blog

1. Crie um arquivo `.md` em `src/content/blog/`, por exemplo `src/content/blog/meu-novo-post.md`. O nome do arquivo vira a URL do post (`/pt/blog/meu-novo-post/`).
2. Preencha o frontmatter seguindo o schema definido em `src/content.config.ts`:

```markdown
---
title: "Título do post"
description: "Resumo curto usado em listagens e meta description."
pubDate: 2026-08-01
author: "Seu nome"
category: "Estatística"
tags: ["xG", "Futebol"]
readingTime: 6
---

Conteúdo do post em Markdown...
```

3. O post aparece automaticamente na home e em `/pt/blog/`, ordenado por data de publicação (mais recente primeiro).
4. Para relacionar o post a termos do glossário, adicione o `id` do arquivo do post (nome do arquivo sem `.md`) no campo `relatedPosts` do termo correspondente em `src/content/glossario/`.

## Como adicionar um novo termo no glossário

1. Crie um arquivo `.md` em `src/content/glossario/`, por exemplo `src/content/glossario/novo-termo.md`.
2. Preencha o frontmatter:

```markdown
---
term: "Nome do termo"
shortDefinition: "Definição curta, usada na listagem do glossário."
category: "Estatística"
relatedPosts: ["slug-do-post-relacionado"]
relatedTerms: ["outro-termo-relacionado"]
---

Explicação completa do termo, com exemplos práticos...
```

3. O termo aparece automaticamente, em ordem alfabética, em `/pt/glossario/` (com busca client-side por nome/definição) e em sua própria página `/pt/glossario/novo-termo/`.

## Traduções (EN / ES)

Os textos de **interface** (menus, botões, rodapé) já estão traduzidos em `src/i18n/en.json` e `src/i18n/es.json`. O **conteúdo editorial** (posts do blog, termos do glossário, páginas institucionais) ainda existe apenas em português — as páginas em `/en/` e `/es/` mostram um aviso de "tradução em breve" nesses casos.

Para publicar conteúdo real em outro idioma no futuro, o caminho recomendado é:

- Traduzir os arquivos de `src/content/blog/` e `src/content/glossario/`, versionando por idioma (ex: content collections separadas ou um campo `lang` no frontmatter — a estrutura atual já isola tudo o que precisa mudar).
- Atualizar as páginas em `src/pages/en/` e `src/pages/es/` para consumir esse conteúdo, substituindo o componente `<TranslationPending />` pela listagem real.

## Deploy no GitHub Pages

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`): a cada push na branch `main`, o site é buildado e publicado no GitHub Pages.

### Passo a passo para conectar ao GitHub

1. Crie um repositório no GitHub chamado `data10` (ou ajuste `site`/`base` em `astro.config.mjs` caso use outro nome — veja a nota abaixo).
2. Conecte este projeto local ao repositório remoto e envie o código:

   ```bash
   git remote add origin https://github.com/SEU_USUARIO/data10.git
   git branch -M main
   git push -u origin main
   ```

3. No GitHub, vá em **Settings → Pages** do repositório e, em **Build and deployment → Source**, selecione **GitHub Actions**.
4. O workflow `deploy.yml` vai rodar automaticamente. Acompanhe em **Actions** — quando concluído, o site estará em `https://SEU_USUARIO.github.io/data10/`.

### Se o repositório tiver outro nome (ou for uma User/Organization Page)

Em `astro.config.mjs`, ajuste:

- `site`: sempre `https://SEU_USUARIO.github.io`
- `base`: `/NOME_DO_REPOSITORIO` (ex: `/data10`) para Project Pages, ou `/` se o repositório for `SEU_USUARIO.github.io` (User Page).

Depois de alterar, rode `npm run build` novamente para confirmar que tudo continua funcionando.

## Monetização (preparação, ainda não ativa)

Nenhum script de anúncio real está ativo. A estrutura já está pronta para quando isso for ativado:

- **`src/components/AdSlot.astro`**: componente reutilizável com placements `sidebar`, `in-article` e `footer`. Hoje ele renderiza vazio em produção (sem ocupar espaço no layout) e mostra um placeholder discreto apenas em modo dev (`npm run dev`). É usado no rodapé (`Footer.astro`), nas páginas de blog/dashboards (`in-article`) e pode ser adicionado em mais lugares livremente. Quando a conta do AdSense (ou outra rede) for aprovada, insira o script/tag real dentro deste componente.
- **`src/pages/pt/privacidade.astro`** (e as versões `en`/`es`): Política de Privacidade com texto placeholder, já mencionando cookies, dados de navegação, futura publicidade (AdSense), LGPD e GDPR. **Revise este texto com atenção antes de publicar o site oficialmente** — idealmente com apoio jurídico.
- **`src/pages/pt/termos.astro`** (e as versões `en`/`es`): Termos de Uso com texto placeholder, mesma recomendação de revisão acima.
- **`src/components/CookieConsent.astro`**: banner de consentimento de cookies em JS vanilla (sem biblioteca externa), que salva a preferência em `localStorage`. Aparece automaticamente em toda página até que o visitante aceite ou recuse.

## Tabela do Brasileirão e Ligas Internacionais (dados reais)

A página `/pt/dashboards/brasileirao/` mostra dados reais de 7 competições — **Brasileirão Série A, Premier League, La Liga, Serie A (Itália), Bundesliga, Ligue 1 e Champions League** — como abas de uma única página (tabela de classificação, artilheiros, casa x fora, sequência/invencibilidade, ataque x defesa e corrida pelo título, todos calculados a partir dos resultados de partidas). Fonte: **[football-data.org](https://www.football-data.org/)** (`scripts/fetch-football-data.mjs`, secret `FOOTBALL_DATA_KEY`), plano gratuito (confirmado via API: `plan: TIER_ONE` em todas as 7).

- `src/data/leagues-config.json`: lista as 7 competições (código da API, slug, nome, tab label, zonas de classificação/rebaixamento). Adicionar uma nova competição é só adicionar uma entrada aqui + rodar o fetch — a aba e os dados em `src/data/leagues/` são gerados automaticamente a partir dessa config.
- A Champions League tem zonas diferentes das ligas nacionais (sem rebaixamento — usa "classificação direta às oitavas" nos 8 primeiros e "eliminado na fase de liga" nos 12 últimos, refletindo o formato atual de liga única de 36 times); isso é configurável por competição via `topZoneCount`/`bottomZoneCount`/`topZoneLabel`/`bottomZoneLabel` no `leagues-config.json`.
- A **Copa Libertadores** não está incluída: confirmamos via API que ela está em `plan: TIER_FOUR` (pago) na football-data.org — precisaria de um plano pago (ou outra fonte) para entrar.
- A **Série B** também não está incluída: avaliamos duas fontes gratuitas (API-FOOTBALL dá acesso à Série B, mas seu plano gratuito não cobre a temporada atual; football-data.org cobre a temporada atual, mas só a primeira divisão) e nenhuma cobre a Série B com dados atuais de graça.
- Os gráficos (Chart.js) só são inicializados quando a aba correspondente é aberta pela primeira vez (evita canvas com tamanho zero em abas escondidas e evita construir 7x os gráficos à toa).

Como funciona:

- O script roda como um passo do workflow (`.github/workflows/deploy.yml`), **antes** do `astro build` — como o site é estático, os dados já saem "assados" no HTML publicado.
- O workflow tem um gatilho `schedule` (cron diário, 11:00 UTC ≈ 08:00 em Brasília) além do `push` normal, então os dados se atualizam sozinhos todo dia, mesmo sem nenhum commit novo.
- A chave fica no secret do repositório `FOOTBALL_DATA_KEY` (Settings → Secrets and variables → Actions). Sem essa variável definida, o script não falha o build — só mantém os dados já existentes em `src/data/leagues/` (inclusive localmente, para quem for rodar `npm run build` sem a chave).
- Os arquivos JSON em `src/data/leagues/` começam com dados de exemplo zerados (`isMockData: true`); a página mostra um aviso disso até a primeira busca real de cada competição acontecer.
- `scripts/fetch-football-data.mjs` busca as 7 competições com espaçamento de ~6,5s entre chamadas para respeitar o limite de 10 requisições/minuto do plano gratuito — o passo de fetch no workflow leva um pouco mais de tempo por causa disso (normal, é só custo de build, não afeta o site publicado).
- Quando a API retorna uma temporada já encerrada como "atual" (ex: a Champions League 2026/27 ainda não existia na base da football-data.org quando testamos, então ela retorna a 2025/26 já finalizada), a página mostra um aviso avisando que aquela é a temporada mais recente disponível — sem código adicional, o aviso some sozinho assim que a fonte publicar a temporada nova.

Para trocar o horário do cron, edite a linha `cron:` em `.github/workflows/deploy.yml` (formato padrão do cron, sempre em UTC).

## Performance

O projeto foi montado priorizando build leve (poucas integrações, sem framework de UI pesado, Chart.js carregado apenas nas páginas de Dashboards). Última medição: build completo em **~4s** (32 páginas) e output final de **~812 KB**. Esses números tendem a variar pouco conforme o projeto cresce — rode `npm run build` para ver os valores atualizados no seu ambiente.
