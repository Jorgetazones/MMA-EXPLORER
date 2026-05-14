import LoadingSpinner from '../components/LoadingSpinner';
import RankingFighterRow from '../components/RankingFighterRow';
import { useRankings } from '../hooks/useRankings';

const Rankings = () => {
  const { data, loading, error } = useRankings();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='max-w-7xl mx-auto px-4 pt-24 pb-12'>
      <h1 className='text-3xl font-extrabold text-white mb-8'>Rankings</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((category) => (
          <div
            key={category.id}
            className='bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden'
          >
            <div className='px-5 py-4 border-b border-neutral-800'>
              <h2 className='text-white font-bold uppercase tracking-wider text-sm'>
                {category.categoryName}
              </h2>
            </div>

            <div className='px-5 py-4 flex items-center gap-3 bg-yellow-500/10 border-b border-yellow-500/20'>
              <span className='text-yellow-400 text-lg'>👑</span>
              <div>
                <p className='text-yellow-400 text-xs uppercase tracking-wider'>
                  Champion
                </p>
                <h3 className='text-white font-bold'>
                  {category.champion.championName}
                </h3>
              </div>
            </div>

            <div className='divide-y divide-neutral-800'>
              {category.fighters
                .filter((f) => f.id !== category.champion.id)
                .map((fighter, index) => (
                  <div
                    key={fighter.id}
                    className='px-5 py-3 flex items-center gap-4 hover:bg-neutral-800 transition-colors cursor-pointer'
                  >
                    <span className='text-neutral-500 text-sm w-5 text-right'>
                      #{index + 1}
                    </span>
                    <RankingFighterRow id={fighter.id} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rankings;
