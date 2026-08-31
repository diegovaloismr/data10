---
term: "xT (Expected Threat)"
shortDefinition: "Valor de ameaça ofensiva gerado por qualquer ação com a bola — passe, condução ou drible — não só por finalizações."
category: "Estatística"
relatedPosts: ["expected-threat-xt", "alem-do-xg-metricas-avancadas", "visao-computacional-tracking-data", "packing-jogadores-ultrapassados", "redes-de-passe-visualizando-estrutura-tatica", "controle-de-espaco-voronoi"]
relatedTerms: ["xg", "xa", "tracking-data", "packing", "redes-de-passe", "controle-de-espaco"]
---

**xT (Expected Threat)**, ou "ameaça esperada", é uma métrica que atribui um valor a qualquer ação com a bola — um passe, uma condução, um drible — com base em quanto ela aumenta a probabilidade de o time marcar um gol nas próximas jogadas.

## Como funciona

O campo é dividido em uma grade de zonas, cada uma com um valor de ameaça calculado a partir do histórico de milhares de partidas. O xT de uma ação é a diferença entre o valor de ameaça da zona de destino e o valor de ameaça da zona de origem. Uma condução que leva a bola do meio-campo até a entrada da área, por exemplo, gera xT positivo mesmo sem terminar em finalização.

## Por que é diferente do xG e do xA

O [xG](/pt/glossario/xg/) avalia só o momento do chute; o [xA](/pt/glossario/xa/) avalia o passe imediatamente anterior ao chute. O xT avalia **qualquer ação em qualquer parte do campo**, o que permite reconhecer o valor ofensivo de jogadores que raramente finalizam ou dão o passe final — como volantes de construção e zagueiros que iniciam jogadas.

Veja a explicação completa no artigo [Expected Threat (xT): a métrica que veio depois do xG](/pt/blog/expected-threat-xt/).
