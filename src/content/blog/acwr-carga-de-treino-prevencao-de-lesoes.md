---
title: "ACWR: a métrica de carga de treino que ajuda a prever lesões"
description: "Sensores GPS captam mais de mil pontos de dados por segundo em cada jogador. O ACWR é a métrica que transforma esse volume de dados físicos num sinal prático de risco de lesão."
pubDate: 2026-08-30T20:45:00Z
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["ACWR", "Ciência do Esporte", "Prevenção de Lesões", "Wearables"]
readingTime: 7
cover: "./covers/acwr-carga-treino.svg"
coverAlt: "Ilustração abstrata de duas curvas de carga física — uma aguda e volátil, outra crônica e suave — cruzando uma zona de risco"
---

Já mencionamos, de passagem, que coletes com GPS viraram equipamento padrão em treinos de clubes profissionais. O que não detalhamos ainda é a métrica mais usada para transformar esse volume enorme de dados físicos em uma decisão prática: escalar ou poupar um jogador. Ela se chama **ACWR** — e é hoje uma das ferramentas mais discutidas na fronteira entre o departamento de dados e o departamento médico dos clubes.

## O problema que a ACWR resolve

Comissões técnicas sempre souberam, na intuição, que jogadores "sobrecarregados" se machucam mais. O problema é definir **sobrecarregado em relação a quê**. Um volume de treino que é perfeitamente seguro para um jogador que vem numa sequência de jogos regular pode ser perigoso para um jogador que voltou de uma lesão há duas semanas e ainda não retomou o ritmo. Carga física, sozinha, sem contexto, não diz muita coisa.

## Como o ACWR é calculado

**ACWR (Acute:Chronic Workload Ratio)**, ou "razão entre carga aguda e carga crônica", compara duas janelas de tempo diferentes:

- **Carga aguda**: o volume de trabalho físico do jogador na última semana (distância percorrida, número de sprints, acelerações e desacelerações bruscas, entre outras variáveis captadas pelo colete de GPS).
- **Carga crônica**: a média de carga física das últimas quatro semanas — uma janela mais longa, que representa o nível de condicionamento "de base" que o corpo do atleta já está acostumado a suportar.

O ACWR é simplesmente a divisão entre as duas: **carga aguda ÷ carga crônica**. Um valor próximo de 1 indica que a carga recente está em linha com o que o jogador já vem suportando — nem muito acima, nem muito abaixo. Pesquisas na área de ciência do esporte associam valores de ACWR muito acima de 1,5 a um risco elevado de lesão: o corpo recebeu, numa semana, uma carga bem maior do que estava condicionado a suportar.

## Por que isso é mais útil do que só "medir cansaço"

A força do ACWR está em comparar o jogador **com ele mesmo**, ao longo do tempo — não com uma média genérica de elenco. Isso captura duas situações de risco real que uma medição isolada de distância percorrida, por si só, não pega:

- **Pico de carga repentino**: um jogador que vinha treinando pouco (por lesão, suspensão ou pouco uso) e de repente entra numa sequência de jogos decisivos, num ritmo de treino muito acima do que o corpo dele estava condicionado a aguentar recentemente.
- **Fadiga acumulada mascarada**: um jogador que joga praticamente todas as partidas, sem descanso suficiente entre uma carga aguda alta e outra, semana após semana — o tipo de desgaste que não aparece claramente numa única medição, mas fica visível quando se olha a tendência.

## Da tela do analista para a decisão do departamento médico

Esse é, talvez, o exemplo mais concreto de como um número estatístico vira decisão de escalação. Quando o ACWR de um jogador entra na zona de risco, times com estrutura de dados madura costumam:

- Reduzir a carga de treino individual daquele atleta na semana seguinte, mesmo sem sintoma clínico aparente;
- Ajustar o volume de minutos em campo, poupando o jogador de um jogo específico considerado de menor risco competitivo;
- Cruzar o dado com outras fontes — frequência cardíaca, percepção subjetiva de esforço reportada pelo próprio atleta, histórico de lesões — antes de qualquer decisão final, já que o ACWR é um sinal de alerta, não um diagnóstico.

Isso é o que já descrevemos, em linhas gerais, no artigo sobre [visão computacional e tracking data](/pt/blog/visao-computacional-tracking-data/): a "ponte entre o departamento de dados e o departamento médico" que praticamente não existia há uma década. O ACWR é um dos pilares concretos dessa ponte — o número específico que, na prática, costuma disparar a conversa entre analista de desempenho e fisioterapeuta.

## As ressalvas que vale conhecer

O ACWR não é uma bola de cristal. Alguns pontos importantes:

- **Correlação não é o mesmo que causa isolada**: um ACWR elevado aumenta a probabilidade estatística de lesão numa população de atletas — não significa que um jogador específico vai necessariamente se machucar.
- **Depende da qualidade e consistência da coleta**: se o jogador não usa o colete de GPS em todas as sessões (folgas, treino separado, seleção nacional com equipamento diferente), a janela de carga crônica fica incompleta e o número perde precisão.
- **Não substitui avaliação clínica**: é uma ferramenta de gestão de risco populacional, usada em conjunto com avaliação médica e fisioterapêutica — não no lugar dela.

## Onde aprender mais

Veja também como esse tipo de dado físico se conecta com a infraestrutura mais ampla de rastreamento no artigo [Visão computacional e tracking data](/pt/blog/visao-computacional-tracking-data/), e como comissões técnicas usam dados de risco físico em decisões maiores de elenco em [SAF: como a nova estrutura societária está profissionalizando a gestão de dados nos clubes](/pt/blog/saf-gestao-dados-clubes/). Para dados reais de desempenho de times em campo, confira nossos [dashboards](/pt/dashboards/brasileirao/).
