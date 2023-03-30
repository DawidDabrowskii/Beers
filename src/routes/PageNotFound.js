import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className='flex justify-center'>
      <div className='flex flex-col items-center mt-24 gap-8'>
        <Link to='/' className='text-xl hover:scale-105 duration-300'>
          &lt; Go back{' '}
        </Link>
        <h2 className='text-3xl '>Oooopsie! Page not found! Error 404</h2>
      </div>
    </main>
  );
};

export default PageNotFound;
