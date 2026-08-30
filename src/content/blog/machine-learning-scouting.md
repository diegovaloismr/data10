---
title: "Machine Learning no scouting: como clubes usam dados para encontrar jogadores"
description: "Do rastreamento de perfis estatísticos a modelos que preveem potencial de desenvolvimento — como o aprendizado de máquina mudou a forma de encontrar talentos no futebol."
pubDate: 2026-07-01
author: "Redação Data10"
category: "Scouting"
tags: ["Machine Learning", "Scouting", "Data Science"]
readingTime: 7
cover: "./covers/scouting.svg"
coverAlt: "Ilustração abstrata de uma rede de pontos conectados, representando um mapa de talentos"
---

Durante décadas, encontrar um jogador foi trabalho quase exclusivo de olheiros: pessoas que viajavam o mundo assistindo partidas ao vivo, anotando impressões em cadernos e confiando na própria experiência para identificar talento. Esse processo continua essencial — mas hoje ele é complementado, cada vez mais, por modelos de **machine learning** que ajudam a filtrar, comparar e priorizar milhares de jogadores antes mesmo que um olheiro humano entre em campo.

## O problema que o ML resolve

Um clube de futebol de porte médio pode ter acesso a dados de dezenas de milhares de jogadores ativos ao redor do mundo. É fisicamente impossível que uma equipe de scouting assista, em detalhes, a todos eles. O papel do machine learning nesse cenário não é substituir o olho humano, mas **reduzir o universo de busca** — apontando, entre milhares de nomes, os poucos dezenas que realmente merecem atenção qualificada.

Isso é feito, tipicamente, de duas formas complementares:

1. **Modelos de similaridade estatística**: algoritmos que comparam o perfil de métricas de um jogador (passes progressivos, duelos vencidos, xG por 90 minutos, interceptações, entre dezenas de outras variáveis) com jogadores já conhecidos, encontrando "sósias estatísticos" em ligas menos badaladas.
2. **Modelos preditivos de desenvolvimento**: algoritmos treinados para estimar a probabilidade de um jogador jovem evoluir para determinado patamar de desempenho, com base em como jogadores com trajetórias estatísticas parecidas se desenvolveram no passado.

## Um exemplo simplificado

Imagine que um clube europeu quer encontrar um lateral-esquerdo com perfil ofensivo, semelhante a um jogador já consagrado no elenco, mas por um custo menor. Um modelo de similaridade pode:

- Definir um vetor de métricas relevantes para a posição (cruzamentos certos, passes progressivos pela lateral, duelos defensivos vencidos, xA por 90 minutos);
- Normalizar esses valores para permitir comparação justa entre ligas de níveis distintos;
- Calcular a distância estatística entre o jogador de referência e milhares de outros laterais ao redor do mundo;
- Retornar uma lista curta de jogadores com o perfil estatístico mais próximo — que então passam a ser observados de perto por olheiros humanos.

O modelo não decide contratações. Ele **direciona atenção**, algo especialmente valioso quando o orçamento de scouting presencial é limitado.

## Os limites — e por que o olho humano continua indispensável

Dados capturam comportamento em campo, mas não capturam tudo o que importa em uma contratação. Personalidade, capacidade de adaptação a uma nova cultura, histórico de lesões, ambição, relação com o vestiário — nada disso aparece diretamente em uma tabela de métricas.

Além disso, todo modelo estatístico carrega o viés dos dados com que foi treinado. Se o histórico de contratações bem-sucedidas usado para treinar um modelo vier majoritariamente de determinadas ligas ou perfis físicos, o modelo tende a replicar esse viés, potencialmente ignorando talentos fora do padrão que ele "aprendeu" a reconhecer — um risco real de **overfitting** ao histórico existente. Falamos mais sobre esse fenômeno no verbete de [Overfitting](/pt/glossario/overfitting/) do nosso glossário. Esse mesmo tipo de viés, curiosamente, também acontece sem nenhum modelo estatístico envolvido: na base, olheiros humanos historicamente favorecem atletas de maturação física precoce — um problema que métodos como o [bio-banding](/pt/glossario/bio-banding/) tentam corrigir. Veja mais em [Categorias de base: por que a gestão de dados ainda é o ponto cego dos clubes brasileiros](/pt/blog/categorias-de-base-gestao-de-dados/).

Por isso, os departamentos de scouting mais maduros tratam o machine learning como uma ferramenta de **triagem e priorização**, nunca como decisor final. A combinação entre a escala de análise de dados e o julgamento contextual de um olheiro experiente tende a produzir resultados mais robustos do que qualquer uma das duas abordagens isoladamente.

## O futuro do scouting orientado por dados

A tendência é que esses modelos incorporem cada vez mais fontes de dados — rastreamento posicional (*tracking data*), vídeo processado por visão computacional, e até dados físicos de preparação física — tornando as avaliações mais completas. Mas o princípio permanece o mesmo: dados bem trabalhados não eliminam a necessidade de julgamento humano, eles **ampliam o alcance** desse julgamento.

Para entender melhor os fundamentos estatísticos por trás dessas comparações, veja o verbete [Scouting orientado por dados](/pt/glossario/scouting-orientado-por-dados/) no nosso glossário.
