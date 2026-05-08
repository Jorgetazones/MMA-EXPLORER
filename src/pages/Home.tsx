import ChampionCard from '../components/ChampionCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useRankings } from '../hooks/useRankings';

const Home = () => {
  const { data, loading, error } = useRankings();
  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 pt-16'>
        {data.map((category) => (
          <ChampionCard
            key={category.id}
            id={category.champion.id}
            categoryName={category.categoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
