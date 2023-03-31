import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

const Navbar = () => {
  return (
    <motion.header
      className=' shadow-md  flex text-[#DCCA87] w-full justify-around shadow-[#DCCA87]'
      variants={navVariants}
      initial='hidden'
      whileInView='show'>
      <motion.ul
        className='flex pb-8 pt-4 text-lg sm:text-2xl gap-12  md:gap-24 lg:text-3xl '
        variants={navVariants}
        initial='hidden'
        whileInView='show'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#DCCA87]'
              : 'hover:scale-105 duration-300'
          }>
          Home
        </NavLink>
        <NavLink
          to='/random'
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#DCCA87] whitespace-nowrap'
              : 'hover:scale-105 duration-300 whitespace-nowrap'
          }>
          Random beer
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#DCCA87] whitespace-nowrap'
              : 'hover:scale-105 duration-300 whitespace-nowrap'
          }>
          About us
        </NavLink>
      </motion.ul>
    </motion.header>
  );
};

export default Navbar;
