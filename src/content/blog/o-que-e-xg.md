---
title: "O que é xG e por que essa métrica mudou a forma de assistir futebol"
description: "Entenda o Expected Goals (xG), a métrica que se tornou onipresente nas transmissões e nas redações de esporte — e o que ela realmente mede."
pubDate: 2026-06-02
author: "Redação Data10"
category: "Estatística"
tags: ["xG", "Análise de Jogo", "Futebol"]
readingTime: 6
cover: "./covers/xg.svg"
coverAlt: "Ilustração abstrata de um gráfico de barras com uma barra em destaque e um arco marcando o gol esperado"
---

Há dez anos, "xG" era um termo restrito a departamentos de análise de clubes e a um punhado de blogs especializados. Hoje aparece no placar da transmissão, nas manchetes do dia seguinte e nas discussões de bar. Mas o que essa sigla realmente significa — e por que ela conquistou tanto espaço?

## A ideia por trás do xG

**Expected Goals (xG)**, ou "gols esperados", é uma estimativa da probabilidade de uma finalização terminar em gol, dado um conjunto de características do lance: distância até o gol, ângulo em relação à baliza, parte do corpo usada, se o goleiro estava fora de posição, se houve um passe decisivo antes da finalização, entre outras variáveis.

Cada chute recebe um valor entre 0 e 1. Um pênalti, por exemplo, costuma ter xG em torno de 0,76 — ou seja, historicamente, penalidades são convertidas em cerca de 76% dos casos. Já um chute de fora da área, em ângulo fechado, sob pressão, pode valer 0,03: uma finalização com baixíssima probabilidade de virar gol, mesmo que tecnicamente bem executada.

Somando o xG de todas as finalizações de uma equipe em uma partida, chegamos ao **xG total do jogo** — uma espécie de "placar de qualidade de chances", independente do resultado real.

## Por que isso importa

O gol é um evento raro no futebol. Em uma partida com poucos gols, o resultado pode ser fortemente influenciado por lances isolados — uma bola na trave, uma defesa espetacular, um erro de arbitragem. Isso torna o placar, sozinho, um indicador ruidoso da qualidade do desempenho de uma equipe.

O xG ajuda a filtrar esse ruído. Um time que perde por 1 a 0 mas produziu 2,4 de xG contra 0,6 do adversário, muito provavelmente, jogou melhor — só não teve eficiência ou teve azar nesse dia específico. Analistas costumam chamar isso de diferença entre **desempenho** e **resultado**: o xG tenta capturar o primeiro.

Times profissionais usam essa lógica para avaliar:

- Se a queda de rendimento de um atacante é um problema técnico ou apenas uma fase de azar (chutes de qualidade sem conversão);
- Se um sistema tático está de fato criando chances melhores, mesmo que o placar ainda não reflita isso;
- Se um resultado positivo é sustentável ao longo da temporada ou fruto de uma sequência de eficiência acima do esperado.

## As limitações que vale conhecer

O xG não é uma verdade absoluta — é um modelo estatístico, e todo modelo carrega simplificações.

Diferentes provedores de dados calculam xG de formas ligeiramente diferentes, então comparar números de fontes distintas pode ser enganoso. Além disso, o modelo tradicionalmente ignora fatores como a qualidade do goleiro adversário, o clima ou a fadiga do jogador no momento do chute — embora versões mais recentes já incorporem parte dessas variáveis.

Também é importante lembrar: xG mede a **qualidade da chance**, não a qualidade da finalização em si. Um chute violento no ângulo, tecnicamente exímio, pode ter xG baixo simplesmente porque, geometricamente, aquele tipo de chance costuma resultar em gol raramente.

## Como consumir o xG com espírito crítico

A recomendação de quem trabalha com esses dados no dia a dia é simples: use o xG como uma lente adicional, não como veredito final. Ele é especialmente útil quando observado ao longo de várias partidas — uma amostra maior reduz o efeito da variância e aproxima o número da real capacidade de criação de chances de uma equipe ou de finalização de um jogador.

No nosso [dashboard de xG por partida](/pt/dashboards/), você pode visualizar essa comparação entre chances criadas e gols efetivamente marcados ao longo de uma sequência de dez jogos — um bom exercício para entender, na prática, quando o resultado e o desempenho andam juntos e quando eles se distanciam.

Para se aprofundar nos conceitos técnicos por trás dessa métrica, veja também o verbete [xG no nosso glossário](/pt/glossario/xg/). E se você quer entender uma extensão direta do conceito — o que acontece quando se avalia a trajetória da bola depois do chute, e não só antes —, veja nosso artigo sobre [PSxG e a avaliação de goleiros](/pt/blog/psxg-goleiros-alem-do-percentual-de-defesas/).
