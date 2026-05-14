import { useFighter } from '../hooks/useFighter';
import LoadingSpinner from './LoadingSpinner';

const RankingFighterRow = ({ id }: { id: string }) => {
  const { data, loading, error } = useFighter(id);
  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='flex items-center gap-3'>
      <img
        src={data?.imgUrl}
        alt={data?.name}
        className='w-10 h-10 rounded-full object-cover object-top'
      />
      <p className='text-white text-sm'>{data?.name}</p>
    </div>
  );
};

export default RankingFighterRow;
