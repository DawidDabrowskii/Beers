import { getRandomBeer } from '../../api/randomBeerApi';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { useEffect, useState } from 'react';
import { Spinner } from '../../constants';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState();
  const [number, setNumber] = useState(1);

  useEffect(() => {
    getRandomBeer().then(data => setRandomBeer(...data));
  }, [number]);

  const handleNumber = () => {
    setNumber(number + 1);
  };
  if (!randomBeer) return <Spinner />;

  const { hops, malt, yeast } = randomBeer.ingredients;

  return (
    <main className='flex flex-col justify-center items-center w-full gap-8'>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mt-8 text-3xl'>
        <motion.button
          variants={fadeIn('tween', 0.25, 1)}
          onClick={handleNumber}
          className='bg-[#DCCA87]  rounded italic hover:scale-105 duration-300 text-black p-4'>
          Next random beer
        </motion.button>
      </motion.div>
      <div className=' text-slate-100 p-4 bg-beer rounded-lg flex flex-col lg:flex-row w-full shadow-top z-10'>
        <div className='flex flex-col justify-center items-center rounded-lg  md:flex-row  bg-gray-200 '>
          {randomBeer.image_url !== null ? (
            <img
              src={randomBeer.image_url}
              alt={randomBeer.name}
              className='object-contain min-w-[300px] w-48 rounded-t-lg h-[640px] md:rounded-none md:rounded-l-lg'
            />
          ) : (
            <h3 className='text-3xl py-36 h-full text-center  text-black min-w-[300px]'>
              No current photo 🍻
            </h3>
          )}
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex flex-col items-center  p-2 leading-normal  rounded text-center '>
            <h5 className='mb-2 text-3xl font-bold tracking-tight  '>
              {randomBeer.name}
            </h5>
            <p className='mb-3 text-xl   '>{randomBeer.tagline}</p>
          </div>
          <div className='flex flex-col items-center  p-2 leading-normal  rounded text-center text-md lg:text-lg'>
            <p className='mb-3 '>{randomBeer.description}</p>
            <p className='mb-3 font-bold'>Abv: {randomBeer.abv}%</p>
            <p className='mb-3  font-bold'>Ibu: {randomBeer.ibu}</p>
          </div>
          <h5 className='text-center font-extrabold text-2xl my-4 border-b'>
            Ingredients:
          </h5>
          <div className='flex flex-col sm:flex-row gap-8 justify-center pl-4'>
            <ul className='w-[300px]'>
              <p className='text-2xl font-bold pb-4'>Hops:</p>
              {hops.map((hop, index) => (
                <li key={index + 1} className='pr-4'>
                  <p>{hop.name}</p>
                  <div className='flex gap-6'>
                    <p className='font-bold'>
                      Value:
                      <span className='sm:font-normal mx-2'>
                        {hop.amount?.value}
                      </span>
                    </p>
                    <p className='font-bold'>
                      Unit:
                      <span className='font-normal mx-2'>
                        {hop.amount?.unit}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              <p className='text-2xl font-bold pb-4'>Malt:</p>
              {malt.map((malt, index) => (
                <li key={index - 1} className='pr-4'>
                  <p className='text-lg font-bold'>{malt.name}</p>
                  <div className='flex gap-6'>
                    <p className='font-bold'>
                      Value:
                      <span className='font-normal mx-2'>
                        {malt.amount?.value}
                      </span>
                    </p>
                    <p className='font-bold'>
                      Unit:
                      <span className='font-normal mx-2'>
                        {malt.amount?.unit}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <p className='text-2xl font-bold pb-8 sm:pb-4'>Yeast</p>
              <p>{yeast}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RandomBeer;
