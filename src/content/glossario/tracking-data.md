---
term: "Tracking Data"
shortDefinition: "Coordenadas de posição de todos os jogadores e da bola, capturadas várias vezes por segundo — a base dos dados posicionais no futebol."
category: "Ciência de Dados"
relatedPosts: ["visao-computacional-tracking-data", "expected-threat-xt", "redes-de-passe-visualizando-estrutura-tatica", "psxg-goleiros-alem-do-percentual-de-defesas", "acwr-carga-de-treino-prevencao-de-lesoes", "controle-de-espaco-voronoi", "tracking-data-video-de-transmissao"]
relatedTerms: ["xt", "machine-learning", "redes-de-passe", "psxg", "acwr", "controle-de-espaco", "broadcast-tracking-data"]
---

**Tracking data**, ou "dados de rastreamento posicional", são as coordenadas (x, y) de todos os 22 jogadores em campo e da bola, capturadas de forma contínua — normalmente entre 10 e 50 vezes por segundo, dependendo do sistema usado.

## Como é capturado

O método mais comum é o uso de sistemas óticos multi-câmera instalados nos estádios, que usam visão computacional para identificar e seguir cada jogador quadro a quadro. Sistemas mais avançados capturam dezenas de pontos do corpo de cada atleta (não só a posição, mas a postura), viabilizando aplicações como o impedimento semiautomático.

## Por que é diferente do dado de evento

O dado de evento tradicional (passe, chute, desarme) registra só os momentos em que algo "acontece" com a bola — cerca de 700 a 1.000 ações por partida, por equipe. O tracking data captura posição contínua de todos os jogadores, gerando centenas de milhares de pontos no mesmo período — permitindo medir coisas que o dado de evento não mostra, como compactação tática, espaço disponível antes de um passe e movimentação sem bola. É essa posição contínua de todos os 22 jogadores que viabiliza métricas como o [controle de espaço](/pt/glossario/controle-de-espaco/).

Veja a explicação completa no artigo [Visão computacional e tracking data: como a IA passou a enxergar o futebol](/pt/blog/visao-computacional-tracking-data/).
