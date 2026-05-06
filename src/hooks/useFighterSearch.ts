import { useState, useEffect, useMemo } from 'react';
import { fighterService } from '../services/fighterService';
import { mapToFighterList, type FighterWithId } from '../types/fighter';

export function useFighterSearch(query: string, division: string = '') {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fighters, setFighters] = useState<FighterWithId[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fighterService.getFighters();
        setFighters(mapToFighterList(response));
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const results = useMemo(() => {
    return fighters.filter((fighter) => {
      const matchesQuery =
        fighter.name.toLowerCase().includes(query.toLowerCase()) ||
        fighter.nickname.toLowerCase().includes(query.toLowerCase());
      const matchesDivision = division === '' || division === fighter.category;
      return matchesQuery && matchesDivision;
    });
  }, [fighters, query, division]);

  return { loading, error, results };
}
