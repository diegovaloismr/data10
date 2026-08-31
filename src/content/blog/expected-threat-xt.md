---
title: "Expected Threat (xT): a métrica que veio depois do xG"
description: "Entenda o xT (Expected Threat), a métrica que mede o valor ofensivo de cada ação com a bola em campo — e por que ela é o passo natural depois do xG e do xA."
pubDate: 2026-08-28T13:00:00Z
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["xT", "Expected Threat", "Análise Tática", "Estatística"]
readingTime: 8
cover: "./covers/xt.svg"
coverAlt: "Ilustração abstrata de um campo de futebol dividido em zonas de calor, representando o valor ofensivo de cada região"
---

O xG revolucionou a forma como avaliamos finalizações. O xA fez o mesmo pelo passe que originou o gol. Mas e o lance anterior a esses dois — o domínio de bola no meio-campo, a condução que rompe uma linha de pressão, o passe lateral que muda o ângulo de ataque? Nenhuma dessas ações aparece nas estatísticas tradicionais, e a maioria delas também não gera xG nem xA diretamente. É exatamente essa lacuna que o **xT (Expected Threat)** foi criado para preencher.

## O que é o xT

**Expected Threat**, ou "ameaça esperada", é uma métrica que atribui um valor a **qualquer ação com a bola** — um passe, uma condução, um drible — com base em quanto essa ação aumenta a probabilidade de o time marcar um gol nas próximas jogadas. Diferente do xG, que avalia só o momento do chute, o xT avalia o **campo inteiro**, jogada a jogada.

A ideia foi popularizada em 2018 pelo analista Karun Singh, num modelo hoje amplamente adotado (com variações) por clubes e provedores de dados. O princípio é simples de explicar, mesmo que o cálculo por trás seja mais sofisticado: divida o campo em uma grade de zonas e calcule, para cada zona, qual a probabilidade de a posse de bola terminar em gol nos próximos lances, considerando o histórico de milhares de partidas.

## Como o cálculo funciona, na prática

Cada zona do campo recebe um valor de ameaça — zonas próximas à grande área adversária, obviamente, têm valor mais alto do que zonas perto do próprio gol. O modelo então calcula, para cada zona, a probabilidade de a bola ser movida (por passe ou condução) para outra zona, ou de haver uma finalização a partir dali.

O **xT de uma ação** é simplesmente a diferença entre o valor de ameaça da zona de destino e o valor de ameaça da zona de origem. Se um jogador conduz a bola do meio-campo até a entrada da área, ele está "comprando" uma posição de ameaça muito maior do que tinha antes — e esse ganho vira o xT daquela condução especificamente, mesmo que nenhum chute tenha acontecido na sequência.

Some o xT de todas as ações de um jogador ou de uma equipe ao longo de uma partida, e você tem uma métrica de quanto perigo ofensivo aquele jogador ou time gerou — não só nos finalizadores, mas em toda a construção que tornou aquilo possível.

## xT, xG e xA: o que cada um mede

| Métrica | O que avalia | Quando entra em ação |
|---|---|---|
| **xG** | Qualidade da finalização | No momento do chute |
| **xA** | Qualidade do passe para a finalização | No passe imediatamente anterior ao chute |
| **xT** | Valor de qualquer ação com a bola | Em cada passe, condução ou drible do campo |

Não são métricas concorrentes — são camadas complementares. Um volante que sai jogando limpo sob pressão, avança linhas com a bola no pé e troca o campo para o lado livre pode ter zero xG e zero xA numa partida inteira, e ainda assim ter contribuído de forma decisiva para o ataque do time. É esse tipo de contribuição "invisível" nas estatísticas tradicionais que o xT torna visível. Veja mais no verbete [xT (Expected Threat)](/pt/glossario/xt/) e reveja também os conceitos de [xA](/pt/glossario/xa/) e [xG](/pt/glossario/xg/).

## Por que isso importa para avaliar jogadores

O uso mais valioso do xT talvez seja justamente identificar jogadores sub-reconhecidos: zagueiros que iniciam jogadas com precisão, volantes de construção, laterais que progridem a bola pelo corredor. Métricas de finalização não captam esse tipo de valor — mas o xT, sim.

Departamentos de análise de clubes usam o xT (normalmente em conjunto com dados de rastreamento posicional, quando disponíveis) para comparar jogadores de uma mesma função por um critério mais justo do que "quantos gols ou assistências ele teve". Um exemplo real: na Copa do Mundo de 2026, o prêmio de melhor jogador do torneio (Bola de Ouro) foi para Rodri, volante da seleção espanhola — reconhecimento que reflete exatamente esse tipo de valor construído fora da área adversária, difícil de capturar em estatísticas de gols e assistências.

## As limitações do modelo

O xT não é perfeito. Alguns pontos valem menção:

- **Depende da granularidade da grade.** Uma grade muito grosseira (poucas zonas) perde nuance; uma grade muito fina exige volume enorme de dados históricos para gerar estimativas confiáveis por zona.
- **Não considera o contexto do lance diretamente.** O modelo clássico de xT olha só a posição da bola — não leva em conta pressão defensiva, número de adversários próximos ou o placar do jogo no momento da ação (fatores que modelos mais avançados de "valor de posse", construídos sobre dados de rastreamento, começam a incorporar).
- **Funciona melhor com dados de eventos completos.** Times e ligas com cobertura de dados mais pobre têm modelos de xT menos confiáveis.

Ainda assim, mesmo com essas ressalvas, o xT é hoje uma das ferramentas mais usadas por analistas para ir além do resultado final e entender **onde**, no campo, um time realmente constrói perigo. Uma alternativa mais simples e direta, usada com sucesso na Bundesliga, é o [packing](/pt/blog/packing-jogadores-ultrapassados/) — em vez de um modelo probabilístico, ele conta literalmente quantos adversários cada ação deixa para trás.

## Como isso aparece visualizado

Enquanto o xT atribui um valor numérico a cada ação, as [redes de passe](/pt/blog/redes-de-passe-visualizando-estrutura-tatica/) atacam o mesmo problema por outro ângulo: em vez de medir o valor de cada ação isoladamente, elas desenham a estrutura de circulação de bola do time inteiro como um grafo — revelando quem são os jogadores mais centrais na construção, mesmo os que raramente aparecem nas estatísticas de finalização. Já o [controle de espaço](/pt/blog/controle-de-espaco-voronoi/) ataca de um terceiro ângulo: em vez de valor ou estrutura, mede literalmente quantos metros quadrados do campo cada jogador domina a cada instante.

## Onde ver isso na prática

Você pode observar uma aproximação visual desse tipo de análise nos nossos [dashboards com dados reais](/pt/dashboards/brasileirao/), comparando ataque e defesa de times do Brasileirão e das principais ligas europeias. Para entender o conjunto completo de métricas que compõem esse vocabulário, vale revisitar nosso artigo [Além do xG: outras métricas avançadas](/pt/blog/alem-do-xg-metricas-avancadas/) e conferir o [glossário completo](/pt/glossario/).
