---
title: "Visão computacional e tracking data: como a IA passou a enxergar o futebol"
description: "Câmeras que capturam 50 posições por segundo, chips dentro da bola e avatares 3D de jogadores: entenda o tracking data, a nova fronteira da coleta de dados no futebol."
pubDate: 2026-08-28T13:15:00Z
author: "Redação Data10"
category: "Tecnologia e Dados"
tags: ["Tracking Data", "Inteligência Artificial", "Visão Computacional", "Machine Learning"]
readingTime: 8
cover: "./covers/tracking-data.svg"
coverAlt: "Ilustração abstrata de linhas de rastreamento conectando pontos sobre um campo, representando posições capturadas por câmeras"
---

Durante quase duas décadas, a "matéria-prima" da análise de futebol foi o **dado de evento**: um passe registrado, um chute, um desarme, cada um com um resultado (certo/errado, gol/perdido) e, no máximo, uma coordenada de origem e destino. É a partir desse tipo de dado que nascem métricas como o [xG](/pt/glossario/xg/) e o [PPDA](/pt/glossario/ppda/). Só que existe uma camada inteira de informação que o dado de evento não captura: tudo o que acontece **entre** os eventos — o posicionamento, o movimento, a decisão de correr para um espaço vazio sem nunca tocar na bola. É aí que entra o tracking data.

## O que é tracking data

**Tracking data**, ou "dados de rastreamento posicional", são as coordenadas (x, y) de todos os 22 jogadores em campo e da bola, capturadas de forma contínua — normalmente entre 10 e 50 vezes por segundo, dependendo do sistema. Em vez de um punhado de eventos discretos por partida (uma equipe costuma ter algo entre 700 e 1.000 ações registradas em 90 minutos), o tracking data gera **centenas de milhares de pontos de dado** no mesmo período.

Essa mudança de escala é qualitativa, não só quantitativa: com posição contínua de todos os jogadores, é possível medir coisas que simplesmente não existem no dado de evento — linhas de pressão, compactação do bloco defensivo, espaço disponível antes de um passe ser dado, e o valor gerado por um jogador que nunca encostou na bola. Veja mais no verbete [Tracking Data](/pt/glossario/tracking-data/).

## Como a visão computacional captura esses dados

A forma mais comum de gerar tracking data hoje é através de **sistemas óticos multi-câmera** instalados nos estádios — arranjos de câmeras fixas, calibradas para cobrir o campo inteiro, que usam visão computacional para identificar e seguir cada jogador quadro a quadro.

Um exemplo concreto e recente: o sistema de rastreamento ótico usado na Copa do Mundo de 2026 combina **16 câmeras instaladas sob o teto dos estádios**, capazes de captar **29 pontos do corpo de cada jogador**, até **50 vezes por segundo**. Esse nível de detalhe (não só "onde está o jogador", mas a postura exata do corpo) é o que viabiliza tecnologias como o impedimento semiautomático — que, no mesmo torneio, passou a usar avatares 3D gerados a partir de um escaneamento corporal de cada um dos 1.248 jogadores das 48 seleções, em vez dos bonecos genéricos usados até então.

A própria bola virou fonte de dado: modelos recentes carregam um chip com sensor de movimento a 500 Hz, transmitindo posição, rotação e até o impacto da chuteira em tempo real.

## O que dá para medir com tracking data que o dado de evento não mostra

- **Velocidade e distância percorrida** — sprints, desacelerações, carga física acumulada ao longo do jogo.
- **Compactação e forma tática** — o quão junto (ou espalhado) um time se mantém coletivamente, quadro a quadro, e como essa forma muda entre fases de posse e de pressão.
- **Espaço e progressão** — quanto espaço um jogador tinha disponível no momento de receber a bola, e o quanto uma condução ou passe reduziu a distância até o gol adversário (a base de modelos como o [xT](/pt/blog/expected-threat-xt/), quando combinados com dados posicionais).
- **Movimentação sem bola** — desmarques, coberturas, bloqueios de linha de passe: ações que só aparecem em vídeo, mas que tracking data transforma em número.

## Wearables e dados biométricos

Paralelamente à visão computacional, cresce o uso de **wearables** — coletes com GPS e acelerômetro usados em treino (e, em algumas competições, também em jogo) — para monitorar carga física, frequência cardíaca e sinais de fadiga. Comissões técnicas usam esses dados para antecipar risco de lesão e embasar decisões de substituição, criando uma ponte entre o departamento de dados e o departamento médico que praticamente não existia há uma década. A métrica mais usada nessa ponte é o [ACWR](/pt/blog/acwr-carga-de-treino-prevencao-de-lesoes/), que compara a carga recente de um jogador com sua média de longo prazo para sinalizar risco elevado de lesão.

## Os limites de tudo isso

Vale um contraponto: tracking data de qualidade profissional ainda é **caro e proprietário**. A maior parte dos clubes com acesso a esse tipo de dado depende de contratos com poucos fornecedores especializados, o que concentra a vantagem competitiva em quem tem orçamento para pagar por ela. Há também questões abertas sobre privacidade e uso de dados biométricos dos atletas, e o simples volume de dados gerado exige capacidade de processamento e times de análise dedicados — não basta "ter o dado", é preciso saber extrair sinal dele.

Ainda assim, a tendência é de democratização gradual: conforme sistemas de rastreamento se tornam padrão em competições grandes (como aconteceu na Copa do Mundo de 2026) e o custo de processamento cai, esse tipo de dado deve deixar de ser exclusividade de clubes de elite. Essa democratização já tem um nome e um mecanismo concreto — veja como em [Tracking data sem câmera fixa no estádio: a barreira de custo que excluía clubes menores está caindo](/pt/blog/tracking-data-video-de-transmissao/).

## Para continuar explorando

Escrevemos sobre como esse tipo de dado alimenta modelos de valor posicional no artigo [Expected Threat (xT): a métrica que veio depois do xG](/pt/blog/expected-threat-xt/), e sobre como machine learning entra na ponta de identificação de talentos em [Machine Learning no scouting](/pt/blog/machine-learning-scouting/). Para acompanhar dados reais de campeonatos atualizados todo dia, visite nossos [dashboards](/pt/dashboards/brasileirao/).
