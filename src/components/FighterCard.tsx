import { Link } from 'react-router-dom';
import { useFighter } from '../hooks/useFighter';
import LoadingSpinner from './LoadingSpinner';

const FighterCard = ({
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
    <Link to={`/fighter/${id}`}>
      <div className='rounded-lg overflow-hidden border border-neutral-700 hover:border-red-500 transition-colors cursor-pointer'>
        <img
          src={data?.imgUrl}
          alt={data?.name}
          className='w-full h-48 object-cover object-top'
        />
        <div className='p-3 bg-neutral-900'>
          <p className='text-xs text-gray-400 uppercase tracking-wider'>
            {categoryName}
          </p>
          <h3 className='text-white font-bold truncate'>{data?.name}</h3>
          <p className='text-gray-400 text-sm truncate'>{data?.nickname}</p>
        </div>
      </div>
    </Link>
  );
};

export default FighterCard;
