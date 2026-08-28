---
title: "Packing: a métrica que mede quantos adversários um passe elimina"
description: "Conheça o packing, métrica criada na Bundesliga que conta quantos defensores adversários um passe ou drible deixa para trás — e por que ela virou referência na análise tática moderna."
pubDate: 2026-08-28T22:30:00Z
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["Packing", "Análise Tática", "Bundesliga", "Estatística"]
readingTime: 7
cover: "./covers/packing.svg"
coverAlt: "Ilustração abstrata de uma linha de passe atravessando duas fileiras de pontos, representando adversários ultrapassados"
---

Estatísticas de passe tradicionais contam o que aconteceu (passes certos, passes errados, percentual de acerto), mas não dizem nada sobre o quão **perigoso** foi cada passe. Um lateral pode ter 95% de acerto em passes para trás e para os lados — um número ótimo que não diz nada sobre criação de perigo. O **packing** nasceu justamente para resolver esse problema: em vez de contar passes, ele conta **adversários eliminados da jogada**.

## O que é packing

**Packing** mede quantos jogadores adversários um passe, condução ou drible deixa para trás — ou seja, quantos defensores que estavam entre a bola e o gol adversário deixam de estar em posição de impedir a jogada depois daquela ação. Quanto mais defensores um único passe "elimina" de uma vez, maior o valor de packing daquela ação.

O cálculo, na essência, é simples: conta-se quantos adversários estão posicionados entre a bola e a baliza **antes** da ação e quantos estão nessa mesma posição **depois** dela. A diferença é o valor de packing. Um passe vertical que atravessa duas linhas de marcação de uma só vez, por exemplo, "empacota" (daí o nome) os defensores dessas duas linhas — mesmo que o passe pareça simples no placar de estatísticas tradicionais.

## De onde veio essa métrica

O packing foi criado por **Stefan Reinartz**, ex-jogador da seleção alemã e do Bayer Leverkusen, ao lado do ex-companheiro **Jens Hegeler**. Depois que lesões forçaram sua aposentadoria em 2016, Reinartz — que sempre sentiu que as estatísticas tradicionais não refletiam o impacto real que tinha em campo — fundou a empresa **Impect** com Hegeler para colocar essa ideia em prática.

O método pegou força justamente onde os dois jogaram: hoje, mais da metade dos 18 clubes da Bundesliga usa as ferramentas da Impect para escalar, treinar e analisar desempenho. O interesse do mercado no método é recente e concreto — em outubro de 2025, a Impect foi adquirida pela **Catapult**, empresa australiana de tecnologia esportiva, consolidando o packing como uma das métricas de referência fora do universo do xG.

## Por que packing complementa (e não substitui) o xT

Se você já leu nosso artigo sobre [Expected Threat (xT)](/pt/blog/expected-threat-xt/), vai notar uma semelhança de propósito: os dois tentam capturar o valor de ações com a bola que não terminam em gol nem em assistência. A diferença está no método:

- **xT** é probabilístico: usa um modelo estatístico treinado com milhares de partidas para estimar quanto uma ação aumenta a *probabilidade* de gol, com base na zona do campo.
- **Packing** é discreto e direto: conta literalmente quantos adversários uma ação deixou para trás, sem depender de um modelo probabilístico por trás.

Isso torna o packing mais fácil de explicar (é só contar defensores) e mais intuitivo para comissões técnicas — um dos motivos do sucesso comercial da Impect na Bundesliga. Em compensação, o xT capta nuances que uma simples contagem não pega, como a posição exata no campo e o risco embutido no passe. Times avançados de análise costumam usar as duas abordagens lado a lado, não uma no lugar da outra.

## Como isso aparece na prática

Um zagueiro que sai jogando com um passe vertical de 30 metros, atravessando o meio-campo e a linha de marcação adversária para encontrar o atacante de costas para o gol, gera um valor de packing alto — mesmo sem nenhuma finalização na sequência. Já um volante que troca passes curtos e seguros no campo de defesa, sem nunca romper uma linha adversária, terá packing baixíssimo, por mais que o percentual de acerto dos seus passes seja excelente.

Essa é a virada de perspectiva que o packing trouxe: dois jogadores podem ter estatísticas de passe parecidas no papel e contribuições completamente diferentes para o ataque do time — e o packing é uma das formas mais diretas de expor essa diferença. Isso é especialmente valioso para reconhecer zagueiros e volantes com bom passe de progressão, tema que já exploramos em [Machine Learning no scouting](/pt/blog/machine-learning-scouting/) e em [Visão computacional e tracking data](/pt/blog/visao-computacional-tracking-data/) (o packing costuma ser calculado justamente a partir de dados de rastreamento posicional, para saber a posição exata de todos os defensores no momento da ação).

## Onde aprender mais

Veja também o verbete [Packing](/pt/glossario/packing/) no nosso glossário, e explore como métricas como essa se conectam com [xG](/pt/glossario/xg/), [xA](/pt/glossario/xa/) e [xT](/pt/glossario/xt/) para formar um vocabulário mais completo de análise tática. Para ver dados reais de times em campo, confira nossos [dashboards](/pt/dashboards/brasileirao/).
