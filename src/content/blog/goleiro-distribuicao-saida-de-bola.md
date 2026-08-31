---
title: "Goleiro, o novo articulador: como a saída de bola mudou entre as Copas de 2022 e 2026"
description: "Apenas 52% dos tiros de meta na Copa do Mundo de 2026 foram cobrados pelo goleiro, contra 91% em 2022. Entenda essa virada tática e a métrica GV+, criada para medir a contribuição de um goleiro na construção de jogadas."
pubDate: 2026-08-31T11:15:00Z
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["Goleiro", "Distribuição", "GV+", "Copa do Mundo 2026"]
readingTime: 7
cover: "./covers/goleiro-distribuicao.svg"
coverAlt: "Ilustração abstrata de um goleiro distribuindo a bola em três trajetórias diferentes — curta, média e longa"
---

Já falamos aqui sobre como o [PSxG](/pt/blog/psxg-goleiros-alem-do-percentual-de-defesas/) mudou a forma de avaliar a capacidade de um goleiro de evitar gols. Mas defender é só metade do trabalho de um goleiro moderno — a outra metade acontece com a bola nos pés, e um número da Copa do Mundo de 2026 resume bem essa mudança: apenas **52% dos tiros de meta** do torneio foram cobrados pelo próprio goleiro, contra **91% na Copa de 2022**. Em quatro anos, o goleiro deixou de ser o executor padrão da saída de bola em quase metade dos casos.

## O que mudou na prática

A queda não significa que os goleiros pararam de participar da construção de jogadas — pelo contrário. O que mudou é **quem inicia** a saída: cada vez mais times optam por deixar os zagueiros cobrarem o tiro de meta, dando ao goleiro mais tempo para observar como o adversário está se posicionando para pressionar, antes de decidir se entra diretamente na jogada.

Essa pequena mudança tática tem um efeito concreto: zagueiros cobrando o tiro de meta permitem à equipe criar sobrecarga numérica e atrair a pressão adversária para um lado do campo, com o goleiro entrando depois — já com mais informação sobre onde jogar a bola curta, no meio ou por cima da marcação. É uma versão mais sofisticada da mesma lógica de leitura de jogo que comissões técnicas de ponta vêm refinando ao longo da última década.

## Como se mede a contribuição de um goleiro na construção

Esse tipo de participação mais ativa do goleiro no jogo criou demanda por métricas específicas — porque avaliar um goleiro só pelo número de defesas nunca captou essa dimensão do trabalho. Uma das mais discutidas atualmente é o **GV+ (Goalplayer Value Added)**, que avalia a contribuição de passe de um goleiro para a construção de jogadas e a organização defensiva do time, indo além do simples "defendeu ou não defendeu".

O GV+ considera, entre outros fatores:

- **Distância do passe**: curto, médio ou longo, avaliados separadamente (as exigências técnicas e o risco de cada tipo de distribuição são muito diferentes entre si);
- **Precisão por tipo de distância**: um goleiro pode ter excelente precisão em passes curtos e ser impreciso em lançamentos longos, ou vice-versa — o GV+ não mistura essas duas habilidades num único número;
- **Contexto espacial**: para qual terço do campo (ou "meio-espaço") a bola foi distribuída, já que o mesmo passe tem valor tático diferente dependendo de onde ele acontece;
- **Risco x recompensa**: um passe curto e seguro dentro da própria área carrega pouco risco, mas também gera pouco avanço; um lançamento longo arriscado pode gerar perda de posse, mas também pode romper uma linha de pressão inteira de uma vez.

Métricas complementares também entraram no vocabulário de quem analisa goleiros: o **Launch %** mede a proporção de distribuições que são lançamentos longos (mais de 50 metros) — um indicador direto do estilo de jogo do goleiro (mais direto x mais construído por baixo) — e a **contribuição de xT via distribuição** aplica a mesma lógica de [Expected Threat](/pt/blog/expected-threat-xt/) já conhecida para passes de linha, agora à saída de bola do próprio goleiro.

## Por que isso é mais do que uma curiosidade estatística

Historicamente, a evolução de "quanto vale" cada função em campo tende a seguir o mesmo caminho: primeiro a mudança tática acontece na prática (times passam a jogar de um jeito novo), depois a métrica aparece para explicar e quantificar essa mudança. Foi assim com o xG explicando o valor de uma finalização, com o [xT](/pt/glossario/xt/) explicando o valor de qualquer ação com a bola, e agora é assim com o GV+ tentando capturar uma função do goleiro que, há uma década, praticamente não existia no nível em que existe hoje.

Isso também conecta com um tema que já exploramos: a [visão computacional e o tracking data](/pt/blog/visao-computacional-tracking-data/) são o que tornam esse tipo de métrica possível na prática — para calcular contribuição espacial de um passe (inclusive do goleiro), é preciso saber a posição de todos os outros 21 jogadores no momento exato da distribuição, não só o ponto de origem e destino da bola.

## Onde aprender mais

Para entender o outro lado do trabalho do goleiro — evitar gols, não só distribuir a bola —, veja nosso artigo sobre [PSxG](/pt/blog/psxg-goleiros-alem-do-percentual-de-defesas/). E para relembrar outros números que marcaram o torneio, veja [O que os dados nos ensinaram sobre a Copa do Mundo 2026](/pt/blog/copa-do-mundo-2026-dados/). Para dados reais de times em campo, confira nossos [dashboards](/pt/dashboards/brasileirao/).

**Fontes:** [FIFA Training Centre — Group-stage review: Counter-pressing and goalkeeper distribution](https://www.fifatrainingcentre.com/en/fifa-world-cup-2026/group-stage-review.php), [Marc Lamberts — Goalplayer Value Added (GV+): measuring passing contribution in the build-up for goalkeepers](https://marclamberts.medium.com/goalplayer-value-added-gv-measuring-passing-contribution-in-the-build-up-for-goalkeepers-9b3d3f0c2b77).
