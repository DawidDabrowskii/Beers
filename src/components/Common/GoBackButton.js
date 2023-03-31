import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';

const GoBackButton = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='flex justify-end pt-4 items-end italic mt-4 text-2xl'>
      <Link to='/'>
        <motion.button
          variants={fadeIn('right', 'spring', 0.25, 2.25)}
          className='bg-[#DCCA87] p-4 rounded hover:scale-105 duration-300 text-black'>
          Go Back
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default GoBackButton;
