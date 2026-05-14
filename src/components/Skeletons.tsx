export const ChampionCardSkeleton = () => (
  <div className='relative h-64 rounded-lg overflow-hidden animate-pulse bg-gray-200'>
    <div className='absolute bottom-0 left-0 p-4 w-full'>
      <div className='h-3 bg-gray-300 rounded w-1/3 mb-2' />
      <div className='h-5 bg-gray-300 rounded w-2/3 mb-1' />
      <div className='h-4 bg-gray-300 rounded w-1/2' />
    </div>
  </div>
);

export const FighterCardSkeleton = () => (
  <div className='rounded-lg overflow-hidden border border-gray-200 animate-pulse'>
    <div className='w-full h-48 bg-gray-200' />
    <div className='p-3 bg-gray-50'>
      <div className='h-3 bg-gray-300 rounded w-1/2 mb-2' />
      <div className='h-4 bg-gray-300 rounded w-3/4 mb-1' />
      <div className='h-3 bg-gray-300 rounded w-2/3' />
    </div>
  </div>
);

export const FighterRowSkeleton = () => (
  <div className='flex items-center gap-3 animate-pulse'>
    <div className='w-10 h-10 rounded-full bg-gray-200 shrink-0' />
    <div className='h-4 bg-gray-200 rounded w-32' />
  </div>
);
