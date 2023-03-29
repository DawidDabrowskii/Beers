import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='border-b shadow-lg shadow-amber-900 flex'>
      <div className='ml-12 '>
        <h1 class='mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl'>
          <Link
            to='/'
            class='text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-amber-800'>
            Beer
          </Link>
        </h1>
      </div>
      <div className='w-[70%] flex justify-center pt-4 text-2xl gap-8'>
        <h2>Random beer</h2>
        <h2>Strongest</h2>
      </div>
    </header>
  );
};

export default Navbar;
