import { Link } from 'react-router-dom';
import { useFighter } from '../hooks/useFighter';
import { FighterCardSkeleton } from './Skeletons';

const FighterCard = ({
  id,
  categoryName,
}: {
  id: string;
  categoryName: string;
}) => {
  const { data, loading, error } = useFighter(id);
  if (loading) return <FighterCardSkeleton />;
  if (error) return <div>Error: {error}</div>;
  return (
    <Link to={`/fighter/${id}`} className='block group'>
      <div className='rounded-lg overflow-hidden border border-gray-200 group-hover:border-red-500 transition-colors duration-200 cursor-pointer shadow-sm group-hover:shadow-md'>
        <img
          src={data?.imgUrl}
          alt={data?.name}
          className='w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500'
        />
        <div className='p-3 bg-gray-50'>
          <p className='text-xs text-gray-500 uppercase tracking-wider'>
            {categoryName}
          </p>
          <h3 className='text-gray-900 font-bold truncate'>{data?.name}</h3>
          <p className='text-gray-500 text-sm truncate'>{data?.nickname}</p>
        </div>
      </div>
    </Link>
  );
};

export default FighterCard;
