---
term: "Controle de Espaço (Voronoi)"
shortDefinition: "Divisão do campo em zonas de domínio de cada jogador, calculada por diagramas de Voronoi — mostra quem controla qual parte do gramado a cada instante."
category: "Táticas"
relatedPosts: ["controle-de-espaco-voronoi", "visao-computacional-tracking-data"]
relatedTerms: ["tracking-data", "xt", "redes-de-passe"]
---

**Controle de espaço** (ou *space control*) é a divisão do campo em regiões de domínio de cada jogador, calculada por um **diagrama de Voronoi**: cada região representa a área do gramado que está mais perto daquele jogador específico do que de qualquer outro em campo.

## Como funciona

A partir das posições dos 22 jogadores num instante determinado, o diagrama gera um mosaico de polígonos — um por jogador. A soma das áreas controladas por uma equipe indica seu domínio territorial naquele momento. Comparar o controle de espaço antes e depois de uma ação (ex: um passe) permite medir quanto território aquela ação "conquistou" para o time.

## Por que depende de tracking data

Calcular com precisão exige saber a posição de todos os 22 jogadores simultaneamente, várias vezes por segundo — não só de quem está com a bola. Por isso essa métrica só se popularizou como ferramenta prática conforme sistemas de [tracking data](/pt/glossario/tracking-data/) se tornaram infraestrutura padrão em clubes de ponta.

Veja a explicação completa no artigo [Controle de espaço: o mapa invisível que decide onde o jogo se ganha e se perde](/pt/blog/controle-de-espaco-voronoi/).
