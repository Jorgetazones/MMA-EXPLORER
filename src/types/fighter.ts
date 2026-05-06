// src/types/fighter.ts

// ─── Fighter ──────────────────────────────────────────────────────────────────
// Refleja exactamente la respuesta de GET /fighters y GET /fighter/:fighterId
// Todos los campos llegan como string desde la API (incluso los numéricos)

export type FighterStatus = 'Active' | 'Retired' | string;

export interface Fighter {
  name: string;
  nickname: string;
  category: string;
  status: FighterStatus;
  wins: string;
  losses: string;
  draws: string;
  imgUrl: string;
  placeOfBirth: string;
  trainsAt: string;
  fightingStyle: string;
  age: string;
  height: string; // en pulgadas
  weight: string; // en libras
  reach: string; // en pulgadas
  legReach: string; // en pulgadas
  octagonDebut: string;
}

// GET /fighters devuelve un objeto donde cada key es el id del luchador
// Ejemplo: { "islam-makhachev": { ...Fighter }, "jon-jones": { ...Fighter } }
export type FightersMap = Record<string, Fighter>;

// Versión con id incluido — útil una vez que procesas FightersMap en un array
export interface FighterWithId extends Fighter {
  id: string;
}

// ─── Rankings ─────────────────────────────────────────────────────────────────
// Refleja la respuesta de GET /rankings

export interface RankingFighter {
  id: string;
  name: string;
}

export interface RankingChampion {
  id: string;
  championName: string;
}

export interface RankingCategory {
  id: string;
  categoryName: string;
  champion: RankingChampion;
  fighters: RankingFighter[];
}

// ─── Division ─────────────────────────────────────────────────────────────────
// Refleja la respuesta de GET /division/:divisionId
// Misma forma que RankingCategory según la doc

export interface Division {
  id: string;
  categoryName: string;
  champion: RankingChampion;
  fighters: RankingFighter[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
// Convierte FightersMap → FighterWithId[] para iterar fácilmente en componentes

export function mapToFighterList(map: FightersMap): FighterWithId[] {
  return Object.entries(map).map(([id, fighter]) => ({ id, ...fighter }));
}
