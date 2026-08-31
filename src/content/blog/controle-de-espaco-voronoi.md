---
title: "Controle de espaço: o mapa invisível que decide onde o jogo se ganha e se perde"
description: "Diagramas de Voronoi dividem o campo em zonas de domínio de cada jogador, mostrando quem controla qual pedaço do gramado a cada instante. Entenda a métrica que virou referência em preparação tática."
pubDate: 2026-08-31T11:00:00Z
author: "Redação Data10"
category: "Análise Tática"
tags: ["Controle de Espaço", "Voronoi", "Análise Tática", "Tracking Data"]
readingTime: 7
cover: "./covers/controle-de-espaco.svg"
coverAlt: "Ilustração abstrata de um campo dividido em polígonos irregulares, com uma célula em destaque representando o domínio de espaço de um jogador"
---

Futebol é, em boa medida, uma disputa por espaço — quem controla mais campo tende a ter mais opções de passe, mais tempo de decisão e mais dificuldade para o adversário pressionar. O problema é que, durante décadas, "controlar espaço" foi um conceito qualitativo, algo que um técnico via de olho mas não conseguia colocar em número. Isso mudou com uma ferramenta emprestada da geometria computacional: o **diagrama de Voronoi**.

## O que é um diagrama de Voronoi

Um diagrama de Voronoi divide um plano em regiões a partir de um conjunto de pontos: cada região corresponde à área que está **mais perto daquele ponto específico do que de qualquer outro**. Aplicado ao futebol, os "pontos" são as posições dos 22 jogadores em campo num instante determinado — e o resultado é um mosaico de polígonos, cada um representando a zona do gramado que aquele jogador alcançaria antes de qualquer colega ou adversário.

Esse mosaico é o que hoje se chama de **controle de espaço** (ou *space control*): uma representação matemática, atualizada a cada fração de segundo, de quem "dono" de cada parte do campo.

## Como isso vira um número de desempenho

O uso mais direto do controle de espaço é comparar o **antes e o depois** de uma ação: quanto de área a equipe atacante controlava antes de um passe, e quanto passou a controlar depois dele. Um passe que rompe uma linha defensiva e faz o time atacante "ganhar" uma fatia relevante do campo tem valor tático alto — mesmo que não gere xG imediato, mesmo que pareça um passe simples no placar de estatísticas tradicionais.

Isso permite quantificar coisas que, até pouco tempo, só existiam no discurso qualitativo de comissões técnicas: qual sistema tático realmente comprime mais o espaço do adversário, quais jogadores geram mais "domínio de território" mesmo sem tocar na bola com frequência, e como a distribuição de espaço muda dependendo de quem tem a posse.

## Por que isso depende de tracking data

Calcular controle de espaço com precisão exige saber a posição de **todos os 22 jogadores simultaneamente**, várias vezes por segundo — não só de quem está com a bola. É exatamente o tipo de dado que descrevemos em [Visão computacional e tracking data](/pt/blog/visao-computacional-tracking-data/): sem esse nível de granularidade posicional, um diagrama de Voronoi preciso simplesmente não existe. É por isso que essa métrica, embora estudada academicamente há mais de uma década, só se popularizou como ferramenta prática de treino conforme sistemas de rastreamento ótico se tornaram infraestrutura padrão em clubes de ponta.

## Controle de espaço x redes de passe x xT: três lentes diferentes

Vale distinguir esse conceito de outras métricas espaciais/estruturais que já cobrimos aqui, porque elas respondem perguntas complementares — não a mesma pergunta de formas diferentes:

- **[xT (Expected Threat)](/pt/blog/expected-threat-xt/)** mede quanto uma ação aumenta a probabilidade de gol, zona a zona.
- **[Redes de passe](/pt/blog/redes-de-passe-visualizando-estrutura-tatica/)** mostram a estrutura de conexões entre jogadores — quem é central na circulação de bola.
- **Controle de espaço** mede, literalmente, quantos metros quadrados do campo cada jogador (ou time) domina fisicamente a cada instante — independente de quem está com a bola.

Um time pode ter controle de espaço excelente sem gerar xT relevante (domina território, mas não converte isso em ameaça direta ao gol) — e é justamente esse tipo de descompasso que comissões técnicas de ponta usam controle de espaço para investigar.

## Onde isso aparece na prática

Departamentos de análise usam esse tipo de visualização principalmente para:

- **Avaliar compactação defensiva**: quanto menos espaço um time cede entre suas linhas, mais difícil fica para o adversário encontrar corredores de passe.
- **Medir efetividade de pressão**: cruzando com o [PPDA](/pt/glossario/ppda/), controle de espaço ajuda a visualizar não só quantos passes o adversário deu antes de perder a bola, mas literalmente quanto território ele perdeu no processo.
- **Identificar sobrecargas táticas**: times que criam superioridade numérica numa região específica do campo aparecem, no diagrama de Voronoi, como uma concentração desproporcional de células da mesma cor numa área pequena.

## Onde aprender mais

Veja também o verbete [Controle de Espaço (Voronoi)](/pt/glossario/controle-de-espaco/) no nosso glossário, e explore como esse conceito se conecta com [xT](/pt/glossario/xt/), [redes de passe](/pt/glossario/redes-de-passe/) e [tracking data](/pt/glossario/tracking-data/) para formar um vocabulário mais completo de análise espacial. Para ver dados reais de times em campo, confira nossos [dashboards](/pt/dashboards/brasileirao/).
