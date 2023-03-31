import { motion } from 'framer-motion';
import {
  textContainer,
  textVariant2,
  staggerContainer,
} from '../../utils/motion';

export const HeroTitle = ({ title }) => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='my-4 flex flex-col justify-center gap-4 text-black items-center max-w-[80%] mx-auto'>
      <h1 className='mb-4  font-extrabold text-gray-900  text-4xl md:text-5xl lg:text-6xl text-center'>
        <motion.p
          variants={textContainer}
          to='/'
          className='text-transparent bg-clip-text bg-gradient-to-r to-yellow-800   from-[#DCCA87]'>
          {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === '' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
      </h1>
    </motion.div>
  );
};
