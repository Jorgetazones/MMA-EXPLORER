import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <div className='min-h-screen grid place-items-center text-center px-8'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          aria-hidden='true'
          className='w-20 h-20 mx-auto text-red-600'
        >
          <path
            fillRule='evenodd'
            d='M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z'
            clipRule='evenodd'
          />
        </svg>
        <h1 className='text-4xl font-extrabold text-gray-900 mt-10'>
          Error 404
          <br />
          <span className='text-3xl font-semibold text-gray-500'>
            It looks like something went wrong.
          </span>
        </h1>
        <p className='text-gray-500 text-lg mt-6 mb-10 max-w-sm mx-auto'>
          Don't worry, our team is already on it. Please try refreshing the page
          or come back later.
        </p>
        <Link
          to='/'
          className='inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-sm py-3 px-6 rounded-lg transition-colors'
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

export default Page404;
