---
term: "Scouting orientado por dados"
shortDefinition: "Abordagem de identificação de talentos que usa métricas estatísticas e modelos preditivos para priorizar quais jogadores merecem observação humana mais próxima."
category: "Scouting"
relatedPosts: ["machine-learning-scouting", "categorias-de-base-gestao-de-dados"]
relatedTerms: ["machine-learning", "overfitting", "bio-banding"]
---

**Scouting orientado por dados** (ou *data-driven scouting*) é a abordagem de identificação de talentos que combina análise estatística e modelos de machine learning com a avaliação tradicional de olheiros, em vez de depender exclusivamente da observação presencial de jogos.

## Como funciona na prática

Em vez de assistir manualmente a milhares de jogadores ao redor do mundo, departamentos de scouting orientados por dados usam modelos estatísticos para **reduzir o universo de busca**, apontando os jogadores cujo perfil de métricas mais se aproxima do que o clube procura — seja um estilo de jogo específico, seja a semelhança com um jogador de referência já conhecido.

Esse processo tipicamente segue algumas etapas:

1. Definição das métricas relevantes para a posição e o perfil buscado (ex: passes progressivos, xA, duelos vencidos, para um meio-campista criativo);
2. Normalização dessas métricas para permitir comparação entre jogadores de ligas com níveis de competitividade diferentes;
3. Cálculo de similaridade estatística ou de modelos preditivos de potencial;
4. Geração de uma lista curta de candidatos, que passam então a ser observados de perto por olheiros humanos, em jogos ao vivo ou vídeo.

## O papel complementar — não substituto — da análise humana

Dados capturam comportamento em campo, mas não capturam personalidade, adaptabilidade cultural, histórico de lesões ou ambição — fatores decisivos em qualquer contratação. Por isso, o scouting orientado por dados é tratado, pelos clubes mais maduros nesse processo, como uma ferramenta de **triagem e priorização de atenção**, e não como um substituto do julgamento humano.

## Riscos a considerar

Um risco relevante desse tipo de abordagem é o [overfitting](/pt/glossario/overfitting/) do modelo ao histórico de contratações já realizadas: se os dados de treino vierem majoritariamente de determinado perfil de jogador ou liga, o modelo tende a reconhecer melhor talentos parecidos com esse padrão, potencialmente deixando escapar jogadores talentosos fora dele.

Leia mais no artigo [Machine Learning no scouting: como clubes usam dados para encontrar jogadores](/pt/blog/machine-learning-scouting/).
