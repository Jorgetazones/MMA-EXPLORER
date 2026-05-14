import { Link } from 'react-router-dom';
import { useFighter } from '../hooks/useFighter';
import { ChampionCardSkeleton } from './Skeletons';

const ChampionCard = ({
  id,
  categoryName,
}: {
  id: string;
  categoryName: string;
}) => {
  const { data, loading, error } = useFighter(id);
  if (loading) return <ChampionCardSkeleton />;
  if (error) return <div>Error: {error}</div>;
  return (
    <Link to={`/fighter/${id}`} className='block group'>
      <div className='relative h-64 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300'>
        <img
          src={data?.imgUrl}
          alt={data?.name}
          className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/80 to-transparent' />
        <div className='absolute bottom-0 left-0 p-4'>
          <p className='text-xs text-gray-400 uppercase tracking-wider'>
            {categoryName}
          </p>
          <h3 className='text-white text-lg font-bold'>{data?.name}</h3>
          <p className='text-gray-300 text-sm'>{data?.nickname}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
