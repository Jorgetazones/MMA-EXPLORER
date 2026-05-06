import type { RankingCategory, Fighter, Division } from '../types/fighter';

const BASE_URL = 'https://api.octagon-api.com';

async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}

export const octagonApi = {
  getRankings: () => fetchApi<RankingCategory[]>('/rankings'),
  getFighters: () => fetchApi<Record<string, Fighter>>('/fighters'),
  getFighter: (id: string) => fetchApi<Fighter>(`/fighter/${id}`),
  getDivision: (id: string) => fetchApi<Division>(`/division/${id}`),
};
