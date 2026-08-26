---
term: "Overfitting"
shortDefinition: "Quando um modelo estatístico se ajusta tão bem aos dados de treino que perde a capacidade de generalizar para casos novos."
category: "Ciência de Dados"
relatedPosts: ["machine-learning-scouting"]
relatedTerms: ["machine-learning"]
---

**Overfitting** (sobreajuste) acontece quando um modelo estatístico ou de machine learning se ajusta tão precisamente aos dados usados no seu treinamento que passa a "decorar" particularidades e ruídos daquele conjunto específico, em vez de aprender padrões que realmente se generalizam para casos novos.

## Uma analogia simples

Imagine um aluno que, para se preparar para uma prova, decora as respostas exatas de todos os exercícios de um caderno específico — em vez de entender os conceitos por trás deles. Esse aluno pode ir muito bem se a prova repetir exatamente aquelas questões, mas terá dificuldade diante de qualquer pergunta ligeiramente diferente. Um modelo com overfitting se comporta de forma parecida: performance excelente nos dados que já viu, performance ruim em dados novos.

## Como isso aparece no esporte

No contexto de scouting orientado por dados, um modelo de similaridade ou de previsão de potencial pode sofrer overfitting se for treinado com uma base de jogadores pouco diversa. Por exemplo: um modelo treinado majoritariamente com atacantes europeus de determinado biotipo físico pode "aprender" padrões específicos demais daquele grupo, e falhar ao avaliar jogadores de outros contextos — mesmo que estatisticamente talentosos — simplesmente porque o padrão deles não se parece com o que o modelo memorizou.

O mesmo risco existe em modelos preditivos de resultado de partidas: um modelo pode se ajustar tão bem aos resultados de uma temporada específica que perde precisão ao prever temporadas futuras, cujo contexto (elencos, treinadores, forma física) mudou.

## Como se evita

Cientistas de dados usam diversas técnicas para reduzir o risco de overfitting, como dividir os dados em conjuntos de treino e teste separados, usar validação cruzada, e simplificar modelos quando o ganho de complexidade não se traduz em ganho real de capacidade preditiva em dados novos.

Entenda a aplicação prática desse conceito no artigo [Machine Learning no scouting: como clubes usam dados para encontrar jogadores](/pt/blog/machine-learning-scouting/).
