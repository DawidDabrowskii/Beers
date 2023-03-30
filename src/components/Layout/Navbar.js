import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='border-b shadow-lg  flex text-[#DCCA87] w-full justify-around '>
      <ul className='flex pb-8 pt-4 md:text-xl gap-12  md:gap-24 lg:text-3xl '>
        <NavLink to='/' className='hover:scale-105 duration-300'>
          Home
        </NavLink>
        <NavLink
          to='/random'
          className='whitespace-nowrap hover:scale-105 duration-300'>
          Random beer
        </NavLink>
        <NavLink className='hover:scale-105 duration-300'>Strongest</NavLink>
        <NavLink
          to='/about'
          className='whitespace-nowrap hover:scale-105 duration-300'>
          About us
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
