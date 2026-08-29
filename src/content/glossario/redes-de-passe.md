---
term: "Redes de Passe"
shortDefinition: "Representação em grafo (nós e conexões) da circulação de bola de um time — revela quem estrutura o jogo e como treinadores diferentes constroem seu estilo."
category: "Táticas"
relatedPosts: ["redes-de-passe-visualizando-estrutura-tatica", "expected-threat-xt", "packing-jogadores-ultrapassados"]
relatedTerms: ["xt", "packing", "tracking-data"]
---

**Redes de passe** (passing networks) representam a circulação de bola de um time como um grafo: cada jogador é um **nó**, posicionado na sua posição média em campo, e cada linha entre dois jogadores é uma **aresta**, que aparece sempre que houve passe entre eles — geralmente com espessura proporcional ao volume de passes trocados.

## Métricas de centralidade

A teoria dos grafos por trás do desenho permite calcular métricas como:

- **Grau**: quantos companheiros distintos um jogador trocou passes;
- **Centralidade de intermediação**: o quanto um jogador funciona como ponte entre outras partes do time — um indicador de quão estruturalmente insubstituível ele é na circulação de bola, mesmo sem estatísticas ofensivas chamativas;
- **Densidade**: o quão interconectado o time é como um todo, sugerindo um estilo de posse mais coletivo (densidade alta) ou mais dependente de poucos jogadores (densidade baixa).

## De onde vêm os dados

Redes simples usam dados de evento (registro de cada passe); versões mais sofisticadas incorporam [tracking data](/pt/glossario/tracking-data/) para calcular a posição real dos jogadores em diferentes fases do jogo.

Veja a explicação completa no artigo [Redes de passe: como analistas visualizam a estrutura tática de um time](/pt/blog/redes-de-passe-visualizando-estrutura-tatica/).
