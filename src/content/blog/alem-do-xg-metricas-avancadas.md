---
title: "Além do xG: outras métricas avançadas que estão mudando a análise tática"
description: "xA, PPDA, campo de valor de posse — um panorama de métricas menos populares que o xG, mas igualmente relevantes para entender o futebol moderno."
pubDate: 2026-07-20
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["xA", "PPDA", "Análise Tática", "Machine Learning"]
readingTime: 6
cover: "./covers/metricas-avancadas.svg"
coverAlt: "Ilustração abstrata de dois perfis radar sobrepostos, representando comparação de métricas"
---

O xG se tornou tão popular que, para boa parte do público, virou sinônimo de "análise de dados no futebol". Mas o campo é bem mais amplo. Reunimos aqui um panorama de outras métricas que já fazem parte do vocabulário de analistas e departamentos de dados de clubes — e que ajudam a contar partes da história que o xG, sozinho, não conta.

## xA (Expected Assists): a origem da chance

Se o xG mede a qualidade de uma finalização, o **xA (Expected Assists)** mede a qualidade do passe que originou aquela finalização — estimando a probabilidade de que um determinado passe resulte em gol, com base no xG da finalização subsequente.

Um jogador pode ter poucas assistências reais em uma temporada, mas um xA elevado — sinal de que ele tem criado boas chances de forma consistente, mesmo que os companheiros não estejam convertendo. É uma métrica particularmente útil para avaliar meias criativos e pontas, cuja contribuição ofensiva vai além do próprio chute. Veja mais no verbete [xA](/pt/glossario/xa/).

## PPDA: a intensidade da marcação em números

Já exploramos essa métrica [em profundidade em outro artigo](/pt/blog/ppda-intensidade-pressao/), mas ela merece menção aqui como parte desse conjunto de ferramentas: o **PPDA (Passes por Ação Defensiva)** quantifica o quão agressivamente uma equipe pressiona a saída de bola adversária, permitindo comparar filosofias táticas de forma objetiva.

## Redes de passe e valor posicional

Uma fronteira mais recente da análise esportiva é o uso de **dados posicionais (tracking data)** — coordenadas de cada jogador em campo, capturadas várias vezes por segundo — para construir modelos de "valor de posse de bola". Em vez de avaliar apenas eventos discretos (um passe, um chute, um desarme), esses modelos avaliam o valor de **cada momento** da posse, considerando a posição de todos os 22 jogadores em campo.

Isso permite responder perguntas mais sofisticadas: quanto valor um jogador adiciona ao simplesmente se movimentar para abrir espaço, mesmo sem tocar na bola? Qual a probabilidade de gol aumentar ou diminuir a cada segundo de posse, dado o posicionamento coletivo da equipe?

Esse tipo de análise ainda é predominantemente usado internamente por clubes com acesso a dados de rastreamento (que são caros e não amplamente públicos), mas tende a se popularizar nos próximos anos, à medida que mais provedores de dados abrem esse tipo de informação. Detalhamos esse modelo de valor posicional — e batizamos ele pelo nome que a comunidade de análise usa, **xT (Expected Threat)** — no artigo [Expected Threat (xT): a métrica que veio depois do xG](/pt/blog/expected-threat-xt/).

## Modelos de machine learning para previsão de resultado

Outra aplicação cada vez mais comum é o uso de modelos preditivos — muitas vezes baseados em técnicas de machine learning como florestas aleatórias ou redes neurais simples — para estimar a probabilidade de vitória, empate ou derrota antes e durante uma partida, atualizando essas probabilidades em tempo real conforme o jogo evolui (os chamados modelos de *win probability*).

Esses modelos combinam, tipicamente, força histórica das equipes, xG acumulado na partida, tempo restante e contexto do placar. São a base, por exemplo, dos gráficos de "probabilidade de vitória ao longo do jogo" que já aparecem em algumas transmissões esportivas mais analíticas.

## O denominador comum

Todas essas métricas compartilham um objetivo: **reduzir a ambiguidade** na avaliação de desempenho esportivo, substituindo impressões subjetivas por números comparáveis e replicáveis. Nenhuma delas, isoladamente, conta a história completa de uma partida ou de um jogador — mas, em conjunto, formam um vocabulário cada vez mais rico para quem quer entender futebol além do placar.

Se você está começando agora nesse universo, recomendamos passar pelo nosso [glossário completo](/pt/glossario/) — reunimos ali, em linguagem acessível, os principais termos citados neste artigo e em outros do blog.
