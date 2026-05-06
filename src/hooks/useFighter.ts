import { useState, useEffect } from 'react';
import { fighterService } from '../services/fighterService';
import type { Fighter } from '../types/fighter';

export function useFighter(id: string) {
  const [data, setData] = useState<Fighter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fighterService.getFighter(id);
        setData(response);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return { data, loading, error };
}
