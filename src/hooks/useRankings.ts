import { useEffect, useState } from 'react';
import type { RankingCategory } from '../types/fighter';
import { fighterService } from '../services/fighterService';

export function useRankings() {
  const [data, setData] = useState<RankingCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fighterService.getRankings();
        setData(response);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, loading, error };
}
