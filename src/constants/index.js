export const Spinner = ({ title = 'Loading...' }) => (
  <div className='flex gap-6 justify-center items-center mt-8 ml-24 z-10'>
    <div className='relative flex justify-center items-center '>
      <div className='absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 mr-5  border-yellow-800' />
      <img
        src='https://www.svgrepo.com/show/484991/beer.svg'
        className='rounded-full h-28 w-28 '
        alt='loading beer'
      />
    </div>
    <h3 className='text-3xl text-[#DCCA87]'>{title}</h3>
  </div>
);
