---
term: "Machine Learning aplicado ao esporte"
shortDefinition: "Conjunto de técnicas estatísticas que permitem a um sistema identificar padrões em dados esportivos e fazer previsões sem regras explicitamente programadas."
category: "Ciência de Dados"
relatedPosts: ["machine-learning-scouting", "modelos-preditivos-win-probability", "visao-computacional-tracking-data"]
relatedTerms: ["overfitting", "scouting-orientado-por-dados", "tracking-data"]
---

**Machine learning** (aprendizado de máquina) é um conjunto de técnicas estatísticas que permite a um sistema identificar padrões em grandes volumes de dados e fazer previsões ou classificações, sem que cada regra precise ser programada manualmente.

## Aplicações no esporte

No contexto esportivo, machine learning é usado, entre outras coisas, para:

- **Scouting**: identificar jogadores com perfil estatístico semelhante a determinado padrão de busca, ou prever potencial de desenvolvimento de jovens atletas;
- **Modelos de resultado**: estimar a probabilidade de vitória, empate ou derrota antes e durante uma partida;
- **Cálculo de métricas avançadas**: o próprio xG é, em sua essência, a saída de um modelo de machine learning treinado com milhares de finalizações históricas;
- **Prevenção de lesões**: identificar padrões de carga de treino associados a maior risco de lesão em atletas.

## Como funciona, de forma simplificada

Um modelo de machine learning é "treinado" a partir de um grande volume de exemplos históricos com resultado conhecido. No caso do xG, por exemplo, o modelo aprende, a partir de milhares de finalizações passadas (com suas características e o resultado — gol ou não gol), a associar determinadas combinações de variáveis a uma maior ou menor probabilidade de gol. Depois de treinado, esse modelo pode estimar a probabilidade de gol de uma finalização nova, ainda não observada.

## O ponto de atenção mais importante

Todo modelo de machine learning reflete os dados com que foi treinado — incluindo os vieses presentes nesses dados. Um modelo de scouting treinado majoritariamente com jogadores de determinadas ligas, por exemplo, tende a reconhecer melhor talentos com perfil semelhante àqueles, podendo subestimar jogadores fora desse padrão. Esse tipo de risco está relacionado ao conceito de [overfitting](/pt/glossario/overfitting/).

Para uma aplicação prática e aprofundada, veja o artigo [Machine Learning no scouting: como clubes usam dados para encontrar jogadores](/pt/blog/machine-learning-scouting/).
