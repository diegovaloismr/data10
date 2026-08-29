---
term: "xG (Expected Goals)"
shortDefinition: "Probabilidade estimada de que uma finalização resulte em gol, com base em características do lance."
category: "Estatística"
relatedPosts: ["o-que-e-xg", "alem-do-xg-metricas-avancadas", "analise-desempenho-por-linha", "modelos-preditivos-win-probability", "expected-threat-xt", "psxg-goleiros-alem-do-percentual-de-defesas"]
relatedTerms: ["xa", "xt", "machine-learning", "psxg"]
---

**xG (Expected Goals)**, ou "gols esperados", é uma métrica que atribui a cada finalização um valor entre 0 e 1, representando a probabilidade estimada de que aquele chute específico resulte em gol.

## Como é calculado

O valor de xG de uma finalização é gerado por um modelo estatístico treinado com milhares (ou milhões) de chutes históricos, considerando variáveis como:

- Distância até o gol;
- Ângulo em relação à baliza;
- Parte do corpo usada na finalização;
- Se houve um passe decisivo (assistência) imediatamente antes;
- Posicionamento do goleiro e de defensores no momento do chute.

Somando o xG de todas as finalizações de uma equipe (ou de um jogador) em uma partida ou período, obtém-se o **xG total** — uma estimativa de quantos gols aquela equipe "deveria" ter marcado, com base na qualidade das chances criadas.

## Exemplo prático

Um pênalti tem, historicamente, xG em torno de **0,76** — cerca de 76% de probabilidade de conversão. Já um chute de longa distância, em ângulo fechado e sob pressão de um defensor, pode ter xG de apenas **0,03**.

Se um time finaliza 15 vezes em uma partida somando 1,8 de xG total e marca 3 gols, isso sugere uma eficiência acima do esperado — pode indicar boa finalização, ou simplesmente sorte naquele dia específico.

## A extensão para depois do chute: PSxG

O xG tradicional para no momento da finalização — ele não considera o que acontece com a bola depois de batida. O [PSxG (Post-Shot Expected Goals)](/pt/glossario/psxg/) resolve essa lacuna usando a trajetória real da bola após o chute, e é hoje a base para avaliar goleiros com mais rigor do que o simples percentual de defesas.

## Onde ver na prática

Explore nosso [dashboard de xG por partida](/pt/dashboards/), que compara xG e gols reais ao longo de uma sequência de dez jogos, e o artigo [O que é xG e por que essa métrica mudou a forma de assistir futebol](/pt/blog/o-que-e-xg/) para uma explicação mais completa.
