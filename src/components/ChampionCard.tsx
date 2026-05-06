import { useFighter } from '../hooks/useFighter';
import LoadingSpinner from './LoadingSpinner';

const ChampionCard = ({
  id,
  categoryName,
}: {
  id: string;
  categoryName: string;
}) => {
  const { data, loading, error } = useFighter(id);
  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='relative h-64 rounded-lg overflow-hidden'>
      <img
        src={data?.imgUrl}
        alt={data?.name}
        className='w-full h-full object-cover object-top'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
      <div className='absolute bottom-0 left-0 p-4'>
        <p className='text-xs text-gray-400 uppercase tracking-wider'>
          {categoryName}
        </p>
        <h3 className='text-white text-lg font-bold'>{data?.name}</h3>
        <p className='text-gray-300 text-sm'>{data?.nickname}</p>
      </div>
    </div>
  );
};

export default ChampionCard;
