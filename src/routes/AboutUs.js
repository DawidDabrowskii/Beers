import { HeroTitle } from '../components/Common/HeroTitle';
import { useState } from 'react';
import { Spinner } from '../constants';
import image from '../assets/image.png';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <main className='text-white w-full h-full pb-16 pt-6 overflow-x-hidden'>
      <HeroTitle title='About us' />
      {!isLoaded && <Spinner title='Loading image...' />}
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col lg:flex-row max-w-7xl mx-auto '>
        <motion.div
          variants={fadeIn('right', 'spring', 0.75, 1.75)}
          className='lg:text-right flex flex-col  items-center px-4 xl:px-8 justify-center mt-12 lg:mt-0 pb-8 lg:pb-0 '>
          <h3 className='text-4xl font-bold italic text-[#DCCA87] pb-4 whitespace-nowrap '>
            What we believe in
          </h3>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            numquam iure, tempore nesciunt in eaque cum consequuntur molestias
            dicta omnis?
          </p>
          <div className='flex justify-end pt-4 items-end '>
            <button className='bg-[#DCCA87] p-2 rounded italic hover:scale-105 duration-300 text-black'>
              Know more
            </button>
          </div>
        </motion.div>
        <motion.div
          className='flex justify-center max-w-[80%] xl:min-w-[40%] mx-auto'
          variants={zoomIn(0.4, 1)}>
          <img src={image} alt='chef' onLoad={handleImageLoaded} />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'spring', 0.75, 1.75)}
          className='lg:text-left flex flex-col  items-center px-4 xl:px-8 justify-center mt-12 lg:mt-0 pb-8 lg:pb-0 '>
          <h3 className='text-4xl font-bold italic text-[#DCCA87] pb-4 whitespace-nowrap '>
            Our History
          </h3>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            numquam iure, tempore nesciunt in eaque cum consequuntur molestias
            dicta omnis?
          </p>
          <div className='flex justify-end pt-4 items-end '>
            <button className='bg-[#DCCA87] p-2 rounded italic hover:scale-105 duration-300 text-black'>
              Know more
            </button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default AboutUs;
