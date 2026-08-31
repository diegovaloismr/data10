---
title: "PSxG: a métrica que está mudando como avaliamos goleiros"
description: "Percentual de defesas sempre foi uma estatística enganosa para goleiros. Entenda o Post-Shot Expected Goals (PSxG), que compara cada finalização à sua real dificuldade de defesa."
pubDate: 2026-08-29T21:00:00Z
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["PSxG", "Goleiros", "xG", "Estatística"]
readingTime: 7
cover: "./covers/psxg.svg"
coverAlt: "Ilustração abstrata de uma baliza dividida em uma grade de probabilidade, com a trajetória de um chute e a mão de um goleiro tentando alcançá-lo"
---

Percentual de defesas é, provavelmente, a estatística mais enganosa que ainda sobrevive no vocabulário comum do futebol. Um goleiro que enfrenta uma sequência de chutes fracos, de longe, direto em seu corpo, pode fechar a temporada com um percentual de defesas impecável — sem que isso diga muito sobre sua qualidade real. Do outro lado, um goleiro que evita gols quase certos, no ângulo, sob pressão, pode ter um número pior no papel só por ter enfrentado chances mais difíceis. O **PSxG (Post-Shot Expected Goals)** nasceu para corrigir exatamente essa distorção.

## O problema que o PSxG resolve

Quando uma finalização é bem defendida, a análise tradicional só registra "defesa" — sem diferenciar se aquele chute tinha 5% ou 80% de chance de virar gol. É como avaliar um goleiro pela quantidade de vezes que ele tocou na bola, sem considerar o quão perigosa era cada bola que chegou até ele.

Já conhecemos essa limitação de outro ângulo: no nosso artigo sobre [xG](/pt/blog/o-que-e-xg/), explicamos como o **Expected Goals** avalia a qualidade de uma chance **antes** do chute ser batido — distância, ângulo, pressão defensiva. O problema é que o xG tradicional para exatamente no momento da finalização. Ele não sabe se a bola foi no ângulo, em cima do goleiro, ou para fora — porque isso, por definição, acontece **depois** do chute.

## Como o PSxG funciona

O **Post-Shot Expected Goals** pega o xG e vai um passo além: em vez de parar no momento do chute, ele usa a trajetória real da bola após ser batida — direção, velocidade, altura, ponto exato onde cruzaria a linha do gol — para recalcular a probabilidade de gol daquela finalização específica.

Isso muda tudo na prática. Um chute cruzado, com pouca força, direto nas mãos do goleiro, pode ter tido um xG pré-chute razoável (a posição era boa), mas o PSxG despenca porque, uma vez batido, ficou claro que era uma finalização fácil de defender. Já um chute no ângulo, na gaveta, quase indefensável, tem um PSxG que se aproxima de 1 — mesmo que o xG pré-chute daquela posição específica fosse mais modesto.

Uma regra prática ajuda a fixar o conceito: **todo chute fora do alvo tem PSxG igual a zero**. Só faz sentido calcular a "dificuldade de defender" de um chute que, de fato, exigiria uma defesa.

## PSxG-SS: o número que goleiros mais avançados acompanham

A aplicação mais usada do PSxG na avaliação de goleiros é o **PSxG-SS** (PSxG menos gols sofridos, do inglês *shots saved*): soma-se o PSxG de todos os chutes no alvo que um goleiro enfrentou e subtrai-se o número de gols realmente sofridos.

- Um valor **positivo** indica que o goleiro sofreu menos gols do que o esperado, dado o nível de dificuldade das finalizações que enfrentou — ele está "salvando" gols acima da expectativa.
- Um valor **negativo** sugere o oposto: o goleiro sofreu mais gols do que seria razoável esperar, considerando a qualidade das chances contra ele.

Isso transforma a conversa sobre "quem é o melhor goleiro" de uma discussão sobre volume de defesas para uma sobre eficiência relativa à dificuldade — o mesmo tipo de virada de perspectiva que o xG trouxe para avaliar atacantes.

## Por que isso complementa (e não substitui) outras métricas de goleiro

O PSxG-SS é poderoso, mas não é a palavra final sobre um goleiro. Ele mede especificamente a capacidade de **evitar gols em finalizações no alvo** — não captura [distribuição de jogo](/pt/blog/goleiro-distribuicao-saida-de-bola/), saídas de gol, jogo aéreo ou liderança da defesa. Comissões técnicas avançadas combinam PSxG-SS com outras camadas de dados, incluindo [tracking data](/pt/glossario/tracking-data/) para avaliar posicionamento e reação antes mesmo do chute ser batido — tema que já exploramos em [Visão computacional e tracking data](/pt/blog/visao-computacional-tracking-data/).

Vale lembrar também que, como qualquer métrica derivada de um modelo estatístico, o PSxG carrega as mesmas ressalvas que discutimos no artigo sobre [xG](/pt/blog/o-que-e-xg/): diferentes provedores calculam de formas ligeiramente distintas, e amostras pequenas (poucos jogos) tornam o número mais suscetível a variância. PSxG-SS acumulado ao longo de uma temporada inteira é muito mais confiável do que o mesmo número após três ou quatro partidas.

## Onde aprender mais

Veja também o verbete [PSxG](/pt/glossario/psxg/) no nosso glossário, e explore como essa métrica se conecta com o [xG](/pt/glossario/xg/) que já discutimos em profundidade. Para acompanhar dados reais de goleiros e times em campo, confira nossos [dashboards](/pt/dashboards/brasileirao/).
