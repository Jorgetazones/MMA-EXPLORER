import { useParams } from 'react-router-dom';
import { useFighter } from '../hooks/useFighter';
import LoadingSpinner from '../components/LoadingSpinner';
import Page404 from './Page404';

const Fighter = () => {
  const { fighterId } = useParams();
  const { data, loading, error } = useFighter(fighterId ?? '');
  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <Page404 />;
  return (
    <div className='max-w-7xl mx-auto px-4 pt-24 flex flex-col md:flex-row gap-8'>
      <div className='md:w-1/3 md:sticky md:top-24 self-start'>
        {' '}
        <img
          className='w-full rounded-xl object-cover object-top h-125 md:h-150'
          src={data.imgUrl}
          alt={data.name}
        />
      </div>
      <div className='md:w-2/3 flex flex-col gap-6 py-4'>
        {/* Header */}
        <div>
          <p className='text-red-500 text-sm uppercase tracking-widest mb-1'>
            {data.category}
          </p>
          <h1 className='text-4xl font-extrabold text-white'>{data.name}</h1>
          {data.nickname && (
            <p className='text-gray-400 text-lg italic mt-1'>
              "{data.nickname}"
            </p>
          )}
        </div>

        {/* Record */}
        <div className='flex gap-6'>
          <div className='text-center'>
            <p className='text-3xl font-bold text-green-400'>{data.wins}</p>
            <p className='text-xs text-gray-400 uppercase tracking-wider'>
              Wins
            </p>
          </div>
          <div className='text-center'>
            <p className='text-3xl font-bold text-red-400'>{data.losses}</p>
            <p className='text-xs text-gray-400 uppercase tracking-wider'>
              Losses
            </p>
          </div>
          <div className='text-center'>
            <p className='text-3xl font-bold text-gray-400'>{data.draws}</p>
            <p className='text-xs text-gray-400 uppercase tracking-wider'>
              Draws
            </p>
          </div>
        </div>

        {/* Info */}
        <div className='grid grid-cols-2 gap-4'>
          {[
            { label: 'Fighting Style', value: data.fightingStyle },
            { label: 'Trains at', value: data.trainsAt },
            { label: 'Place of Birth', value: data.placeOfBirth },
            { label: 'Octagon Debut', value: data.octagonDebut },
          ].map(({ label, value }) => (
            <div
              key={label}
              className='bg-neutral-900 rounded-lg p-4 border border-neutral-800'
            >
              <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>
                {label}
              </p>
              <p className='text-white font-medium'>{value || '—'}</p>
            </div>
          ))}
        </div>

        {/* Physical stats */}
        <div>
          <h2 className='text-white font-bold mb-3 uppercase tracking-wider text-sm'>
            Physical Stats
          </h2>
          <div className='grid grid-cols-2 gap-4'>
            {[
              { label: 'Height', value: `${data.height}"` },
              { label: 'Weight', value: `${data.weight} lbs` },
              { label: 'Reach', value: `${data.reach}"` },
              { label: 'Leg Reach', value: `${data.legReach}"` },
            ].map(({ label, value }) => (
              <div
                key={label}
                className='bg-neutral-900 rounded-lg p-4 border border-neutral-800'
              >
                <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>
                  {label}
                </p>
                <p className='text-white font-medium'>{value || '—'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fighter;
