---
title: "PPDA: como medir a intensidade da pressão de um time sem depender do olho nu"
description: "Conheça o PPDA (Passes por Ação Defensiva), a métrica que quantifica o quão agressivamente uma equipe pressiona a saída de bola adversária."
pubDate: 2026-06-16
author: "Redação Data10"
category: "Táticas"
tags: ["PPDA", "Pressão", "Análise Tática"]
readingTime: 5
cover: "./covers/ppda.svg"
coverAlt: "Ilustração abstrata de anéis se fechando em direção ao centro, sugerindo pressão coletiva"
---

"Time pressiona bem" é uma das frases mais repetidas na cobertura esportiva — e uma das mais difíceis de sustentar apenas com a observação visual de uma partida. O **PPDA (Passes per Defensive Action)**, ou "passes por ação defensiva", nasceu justamente para colocar um número nessa sensação.

## Como o PPDA é calculado

O cálculo é conceitualmente simples: conta-se quantos passes o time adversário conseguiu dar, no terço médio e ofensivo do campo, **antes** que a equipe analisada realizasse uma ação defensiva — desarme, interceptação, falta ou disputa de bola.

$$\text{PPDA} = \frac{\text{Passes do adversário nas zonas de pressão}}{\text{Ações defensivas da equipe nessas zonas}}$$

O resultado é intuitivo: quanto **menor** o PPDA, mais intensa foi a pressão. Um PPDA de 6, por exemplo, indica que o adversário só conseguiu dar, em média, seis passes antes de sofrer uma ação defensiva — sinal de uma marcação agressiva, que não dá tempo para o rival organizar a saída de bola. Já um PPDA de 18 sugere uma postura mais reativa, com o bloco recuado e menos disputa no campo de ataque.

## Por que essa métrica ganhou espaço

Antes do PPDA, "intensidade de marcação" era um conceito quase exclusivamente qualitativo, dependente da leitura de quem assistia ao jogo. Isso dificultava comparações objetivas entre equipes, temporadas ou até mesmo entre diferentes fases de um mesmo time sob o mesmo treinador.

Com o PPDA, department de análise conseguem, por exemplo:

- Comparar a filosofia de pressão de diferentes técnicos de forma numérica;
- Identificar se uma equipe alterou sua postura tática ao longo da temporada — um PPDA subindo de forma consistente pode indicar fadiga física ou uma mudança deliberada de estratégia;
- Cruzar a intensidade de pressão com métricas de resultado, como gols sofridos após perda de posse ou xG concedido em transições.

No nosso [dashboard de evolução de métrica](/pt/dashboards/), mostramos justamente essa aplicação: a evolução do PPDA de uma equipe ao longo das rodadas de um campeonato, permitindo visualizar tendências de intensidade de marcação partida a partida.

## As armadilhas de interpretação

O PPDA tem uma limitação importante: ele é fortemente influenciado pelo **contexto do placar**. Um time que está perdendo tende a pressionar mais (reduzindo o PPDA), enquanto um time que está vencendo tende a recuar as linhas e administrar o resultado (aumentando o PPDA). Isso significa que comparar o PPDA de duas equipes sem considerar o contexto das partidas — se estavam em vantagem, desvantagem ou empate — pode levar a conclusões equivocadas.

Outro ponto de atenção: o PPDA mede apenas as zonas de pressão mais altas do campo. Uma equipe pode ter um bloco baixo extremamente organizado e eficiente sem que isso apareça de forma favorável nessa métrica específica — porque o PPDA simplesmente não foi desenhado para capturar a qualidade defensiva dentro da própria área.

## Uma peça do quebra-cabeça, não o quadro completo

Como quase toda métrica avançada, o PPDA funciona melhor em conjunto com outras informações — xG concedido, posse de bola, zonas de recuperação — do que isoladamente. Ele não diz se a pressão foi *eficaz*, apenas o quão *intensa* ela foi em termos de volume de passes permitido ao adversário antes de uma ação defensiva.

Ainda assim, é uma das ferramentas mais acessíveis para transformar uma impressão tática ("esse time pressiona muito") em um número comparável ao longo do tempo — e é exatamente esse tipo de tradução, de observação qualitativa para dado quantitativo, que move boa parte da ciência de dados aplicada ao esporte.

Veja também o verbete completo de [PPDA no glossário](/pt/glossario/ppda/).
