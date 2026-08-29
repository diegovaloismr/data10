---
title: "Redes de passe: como analistas visualizam a estrutura tática de um time"
description: "Redes de passe transformam milhares de passes em um grafo simples de nós e conexões — revelando quem estrutura o jogo de um time e como treinadores diferentes constroem seu estilo."
pubDate: 2026-08-29T21:15:00Z
author: "Redação Data10"
category: "Análise Tática"
tags: ["Redes de Passe", "Análise Tática", "Estatística", "Visualização de Dados"]
readingTime: 8
cover: "./covers/redes-de-passe.svg"
coverAlt: "Ilustração abstrata de um grafo com nós conectados por linhas, representando jogadores e passes entre eles"
---

Uma súmula de partida mostra que um time deu 480 passes com 87% de acerto. É um número honesto, mas praticamente mudo: não diz nada sobre **quem** trocou passe com quem, **onde** no campo isso aconteceu, ou se a circulação de bola passava por um único jogador ou estava bem distribuída entre o time. As **redes de passe** (passing networks) existem justamente para responder a essas perguntas — transformando uma partida inteira em uma imagem única e legível.

## O que é uma rede de passe

Uma rede de passe é um **grafo**: uma estrutura matemática feita de **nós** (os jogadores) e **arestas** (as conexões entre eles — nesse caso, passes trocados). Cada jogador é representado por um ponto, geralmente posicionado na sua posição média em campo durante a partida. Uma linha conecta dois jogadores sempre que houve passe entre eles, e a espessura dessa linha costuma representar o volume de passes trocados naquele par específico.

O resultado é um mapa visual da circulação de bola do time: de relance, dá para ver quais jogadores concentram mais conexões, que trios formam os principais canais de progressão e se a estrutura do time é mais centralizada em poucos jogadores ou mais distribuída.

## A matemática por trás do desenho: centralidade

A parte mais poderosa das redes de passe não é só o desenho — é a matemática de **teoria dos grafos** por trás dele, emprestada de outras áreas como redes sociais e biologia. As métricas mais usadas em análise tática incluem:

- **Grau (degree)**: quantas conexões diferentes um jogador tem — com quantos companheiros distintos ele trocou passes.
- **Centralidade de intermediação (betweenness centrality)**: mede o quanto um jogador funciona como "ponte" entre outras partes do time. Um volante que conecta a defesa ao ataque, mesmo sem ser o jogador com mais passes, pode ter centralidade de intermediação altíssima — ele é estruturalmente insubstituível na circulação de bola.
- **Densidade da rede**: o quão interconectado o time é como um todo. Redes mais densas sugerem um estilo de posse mais coletivo; redes menos densas, com poucos nós concentrando conexões, sugerem dependência de jogadores específicos.

Essas métricas permitem uma pergunta que interessa demais para comissões técnicas: o que acontece com a estrutura do time se um jogador específico for removido (por lesão, suspensão ou substituição)? Um jogador com alta centralidade de intermediação, mesmo sem estatísticas ofensivas chamativas, pode ser mais decisivo para o funcionamento do time do que um artilheiro.

## "Assinaturas" de treinadores

Um dos usos mais estudados das redes de passe é identificar **estilos de construção de jogo característicos de cada treinador** — o que pesquisadores já chamaram de "assinatura tática". Comparações entre equipes de Pep Guardiola, Jürgen Klopp e Mauricio Pochettino, por exemplo, mostram diferenças estruturais consistentes nas redes de seus times: graus distintos de centralização, distância média entre os nós e densidade de conexões — impressões digitais estatísticas de uma filosofia de jogo, visíveis mesmo sem assistir a um único minuto da partida.

## De onde vêm os dados

Redes de passe simples podem ser construídas a partir de **dados de evento** (o registro de cada passe: quem deu, quem recebeu, onde no campo). Versões mais sofisticadas incorporam [tracking data](/pt/glossario/tracking-data/) — posição contínua de todos os jogadores, não só no momento do passe — permitindo calcular a posição média real de cada jogador ao longo de diferentes fases do jogo (com posse, sem posse, em transição), em vez de uma posição fixa simplificada.

Esse tipo de análise se conecta diretamente com outras métricas que já cobrimos aqui: uma rede de passe mostra **quem** está no centro da circulação, enquanto o [xT (Expected Threat)](/pt/blog/expected-threat-xt/) mede **quanto valor ofensivo** cada ação individual gera, e o [packing](/pt/blog/packing-jogadores-ultrapassados/) mede **quantos defensores** cada passe elimina. Usadas em conjunto, essas três lentes respondem perguntas complementares sobre a mesma sequência de jogadas: estrutura, valor e progressão.

## Limitações que vale conhecer

Redes de passe descrevem **o que aconteceu**, não necessariamente **o que era a intenção tática**. Um time pode ter uma rede densa e bem distribuída simplesmente porque estava perdendo e precisou trocar mais passes para tentar reverter o placar — não porque aquele é seu estilo natural de jogo. Por isso, analistas raramente olham para a rede de uma única partida isolada: o valor real aparece ao comparar redes ao longo de várias partidas, identificando padrões consistentes em vez de reagir a uma amostra pequena.

## Onde aprender mais

Veja também o verbete [Redes de Passe](/pt/glossario/redes-de-passe/) no nosso glossário, e explore como esse tipo de visualização se conecta com [xT](/pt/glossario/xt/), [packing](/pt/glossario/packing/) e [tracking data](/pt/glossario/tracking-data/) para formar um vocabulário mais completo de análise tática. Para ver dados reais de times em campo, confira nossos [dashboards](/pt/dashboards/brasileirao/).
