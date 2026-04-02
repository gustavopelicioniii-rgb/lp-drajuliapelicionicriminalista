/**
 * Estratégia Avançada de Palavras-Chave por Região
 * Otimizada para Atibaia e adjacências com intento de busca
 */

export interface KeywordData {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  intent: "commercial" | "informational" | "navigational";
  region: string[];
  priority: "high" | "medium" | "low";
  relatedKeywords: string[];
}

export const keywordsStrategy: KeywordData[] = [
  // ===== NÍVEL 1: KEYWORDS CORE (Principal) =====
  {
    keyword: "advogada criminalista Atibaia",
    searchVolume: 320,
    difficulty: 35,
    intent: "commercial",
    region: ["Atibaia"],
    priority: "high",
    relatedKeywords: [
      "advogado criminal Atibaia SP",
      "advogada criminal 24h Atibaia",
      "advogada criminalista Atibaia SP",
    ],
  },
  {
    keyword: "advogado criminal Atibaia",
    searchVolume: 280,
    difficulty: 32,
    intent: "commercial",
    region: ["Atibaia"],
    priority: "high",
    relatedKeywords: [
      "advogada criminalista Atibaia",
      "defesa criminal Atibaia",
      "advocacia criminal Atibaia",
    ],
  },
  {
    keyword: "defesa penal Atibaia",
    searchVolume: 180,
    difficulty: 28,
    intent: "commercial",
    region: ["Atibaia"],
    priority: "high",
    relatedKeywords: [
      "defesa criminal Atibaia",
      "advogado defesa penal Atibaia",
      "advocacia penal Atibaia SP",
    ],
  },
  {
    keyword: "habeas corpus Atibaia",
    searchVolume: 210,
    difficulty: 25,
    intent: "commercial",
    region: ["Atibaia"],
    priority: "high",
    relatedKeywords: [
      "habeas corpus urgente Atibaia",
      "HC Atibaia SP",
      "habeas corpus criminal Atibaia",
    ],
  },

  // ===== NÍVEL 2: CIDADES VIZINHAS =====
  {
    keyword: "advogada criminalista Bragança Paulista",
    searchVolume: 240,
    difficulty: 32,
    intent: "commercial",
    region: ["Bragança Paulista", "Atibaia"],
    priority: "high",
    relatedKeywords: [
      "advogado criminal Bragança Paulista",
      "defesa penal Bragança Paulista SP",
    ],
  },
  {
    keyword: "advogado criminal Itatiba",
    searchVolume: 160,
    difficulty: 28,
    intent: "commercial",
    region: ["Itatiba", "Atibaia"],
    priority: "high",
    relatedKeywords: [
      "advogada criminalista Itatiba SP",
      "defesa penal Itatiba",
    ],
  },
  {
    keyword: "advogada criminalista Jundiaí",
    searchVolume: 350,
    difficulty: 40,
    intent: "commercial",
    region: ["Jundiaí", "Atibaia"],
    priority: "high",
    relatedKeywords: [
      "advogado criminal Jundiaí SP",
      "defesa criminal Jundiaí",
    ],
  },
  {
    keyword: "habeas corpus Bragança Paulista",
    searchVolume: 120,
    difficulty: 20,
    intent: "commercial",
    region: ["Bragança Paulista", "Atibaia"],
    priority: "medium",
    relatedKeywords: ["HC urgente Bragança Paulista", "habeas corpus criminal SP"],
  },

  // ===== NÍVEL 3: LONG-TAIL ALTO INTENTO =====
  {
    keyword: "preso em flagrante o que fazer",
    searchVolume: 890,
    difficulty: 25,
    intent: "informational",
    region: ["Atibaia", "SP"],
    priority: "high",
    relatedKeywords: [
      "como agir quando preso em flagrante",
      "direitos preso flagrante",
      "preso o que fazer primeiro",
      "flagrante delito direitos",
    ],
  },
  {
    keyword: "audiência de custódia Atibaia",
    searchVolume: 140,
    difficulty: 18,
    intent: "informational",
    region: ["Atibaia"],
    priority: "high",
    relatedKeywords: [
      "o que é audiência de custódia",
      "audiência de custódia como funciona",
      "dever de apresentação juiz 24h",
    ],
  },
  {
    keyword: "prisão preventiva vs temporária",
    searchVolume: 560,
    difficulty: 22,
    intent: "informational",
    region: ["SP"],
    priority: "high",
    relatedKeywords: [
      "diferença prisão preventiva temporária",
      "quanto tempo prisão temporária",
      "revisão prisão preventiva",
    ],
  },
  {
    keyword: "direito ao silêncio delegacia",
    searchVolume: 420,
    difficulty: 20,
    intent: "informational",
    region: ["SP"],
    priority: "high",
    relatedKeywords: [
      "tenho direito de não falar na polícia",
      "posso negar depoimento delegacia",
      "presença advogado na delegacia",
    ],
  },
  {
    keyword: "habeas corpus urgente",
    searchVolume: 780,
    difficulty: 28,
    intent: "commercial",
    region: ["SP"],
    priority: "high",
    relatedKeywords: [
      "HC madrugada",
      "habeas corpus 24h",
      "advocacia habeas corpus emergencial",
    ],
  },

  // ===== NÍVEL 4: ESPECIALIDADES (Búsca secundária) =====
  {
    keyword: "defesa em tribunal de júri SP",
    searchVolume: 310,
    difficulty: 35,
    intent: "commercial",
    region: ["SP"],
    priority: "medium",
    relatedKeywords: [
      "advogado tribunal júri Atibaia",
      "defesa julgamento por júri",
      "avocacia criminal superior",
    ],
  },
  {
    keyword: "defesa em inquérito policial",
    searchVolume: 285,
    difficulty: 30,
    intent: "informational",
    region: ["SP"],
    priority: "medium",
    relatedKeywords: [
      "investigação policial defesa",
      "como se defender em inquérito",
      "advogado para inquérito",
    ],
  },
  {
    keyword: "recurso criminal SP",
    searchVolume: 240,
    difficulty: 32,
    intent: "informational",
    region: ["SP"],
    priority: "medium",
    relatedKeywords: [
      "apelação criminal",
      "recursos tribunal superior",
      "embargos infringentes",
    ],
  },
  {
    keyword: "direito penal Atibaia",
    searchVolume: 95,
    difficulty: 28,
    intent: "informational",
    region: ["Atibaia"],
    priority: "medium",
    relatedKeywords: [
      "crimes penais Brasil",
      "código penal brasileiro",
      "classificação crimes",
    ],
  },

  // ===== NÍVEL 5: VOICE SEARCH & FEATURED SNIPPETS =====
  {
    keyword: "como lidar com acusação penal",
    searchVolume: 150,
    difficulty: 18,
    intent: "informational",
    region: ["SP"],
    priority: "medium",
    relatedKeywords: ["como se defender acusação", "passos processos penal"],
  },
  {
    keyword: "Dra Julia Pelicioni advogada",
    searchVolume: 80,
    difficulty: 5,
    intent: "navigational",
    region: ["Atibaia"],
    priority: "medium",
    relatedKeywords: ["Julia Pelicioni Atibaia", "Dra Pelicioni criminalista"],
  },

  // ===== NÍVEL 6: GEO-LOCAL SPECIFIC =====
  {
    keyword: "advogada criminal próximo a mim",
    searchVolume: 420,
    difficulty: 15,
    intent: "commercial",
    region: ["Atibaia"],
    priority: "medium",
    relatedKeywords: [
      "advogada criminal perto de mim",
      "advogado criminal locais",
    ],
  },
  {
    keyword: "advocacia criminal Piracaia",
    searchVolume: 45,
    difficulty: 15,
    intent: "commercial",
    region: ["Piracaia", "Atibaia"],
    priority: "low",
    relatedKeywords: ["advogada criminal Piracaia SP"],
  },
];

/**
 * Função para agrupar keywords por intent de busca
 */
export const getKeywordsByIntent = (intent: "commercial" | "informational" | "navigational") => {
  return keywordsStrategy.filter(k => k.intent === intent);
};

/**
 * Função para agrupar keywords por prioridade
 */
export const getKeywordsByPriority = (priority: "high" | "medium" | "low") => {
  return keywordsStrategy.filter(k => k.priority === priority);
};

/**
 * Função para obter keywords por região
 */
export const getKeywordsByRegion = (region: string) => {
  return keywordsStrategy.filter(k => k.region.includes(region));
};

/**
 * Top 20 keywords para priorizar
 */
export const topPriorityKeywords = keywordsStrategy
  .filter(k => k.priority === "high")
  .sort((a, b) => (b.searchVolume / b.difficulty) - (a.searchVolume / a.difficulty))
  .slice(0, 20)
  .map(k => k.keyword);
