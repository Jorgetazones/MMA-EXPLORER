import { Link } from 'react-router-dom';
import { useFighter } from '../hooks/useFighter';
import { FighterRowSkeleton } from './Skeletons';

const RankingFighterRow = ({ id }: { id: string }) => {
  const { data, loading, error } = useFighter(id);
  if (loading) return <FighterRowSkeleton />;
  if (error) return <div>Error: {error}</div>;
  return (
    <Link
      to={`/fighter/${id}`}
      className='block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
    >
      <div className='flex items-center gap-3'>
        <img
          src={data?.imgUrl}
          alt={data?.name}
          className='w-10 h-10 rounded-full object-cover object-top'
        />
        <p className='text-gray-900 text-sm'>{data?.name}</p>
      </div>
    </Link>
  );
};

export default RankingFighterRow;
