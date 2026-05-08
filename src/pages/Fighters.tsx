import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { useFighterSearch } from '../hooks/useFighterSearch';
import FighterCard from '../components/FighterCard';

const Fighters = () => {
  const [query, setQuery] = useState('');
  const [division, setDivision] = useState('');
  const { results, loading, error } = useFighterSearch(query, division);
  const divisions = [...new Set(results.map((f) => f.category))];

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='max-w-xl mx-auto px-4  pb-8'>
      <h1 className='text-3xl font-bold text-black mb-8 justify-center'>
        Fighters
      </h1>

      <div className='flex gap-4 mb-8'>
        <input
          className='flex-1 bg-neutral-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-500'
          placeholder='Buscar fighter...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className='bg-neutral-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-500'
          value={division}
          onChange={(e) => setDivision(e.target.value)}
        >
          <option value=''>Todas las divisiones</option>
          {divisions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {results.map((fighter) => (
          <FighterCard
            key={fighter.id}
            id={fighter.id}
            categoryName={fighter.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Fighters;
