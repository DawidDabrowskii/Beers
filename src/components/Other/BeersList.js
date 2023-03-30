import { getBeersPage } from '../../api/beersApi';
import { useEffect, useState } from 'react';
import SingleBeerCard from './SingleBeerCard';
import { Spinner } from '../../constants';

const BeersList = () => {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeersPage(page).then(data => setBeers(data));
  }, [page]);

  const prevPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  if (beers.length < 1) return <Spinner />;

  return (
    <div className='mt-12 flex flex-col justify-center gap-4 text-black items-center max-w-[80%] mx-auto'>
      <div className=''>
        <h1 class='mb-4  font-extrabold text-gray-900  text-4xl md:text-5xl lg:text-6xl text-center'>
          <p
            to='/'
            class='text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-amber-800'>
            Beers
          </p>
        </h1>
      </div>
      <div className='flex gap-4 justify-center my-8 text-xl '>
        <div>
          {page === 1 ? (
            ''
          ) : (
            <button disabled={page === 1} onClick={prevPage}>
              &lt;
            </button>
          )}
        </div>
        <p className='cursor-pointer hover:text-yellow-600'>{page}</p>
        <div>
          {page === 28 ? (
            ''
          ) : (
            <button disabled={page === 29} onClick={nextPage}>
              &gt;
            </button>
          )}
        </div>
      </div>
      <div>
        <ul className='grid  lg:grid-cols-2 xl:grid-cols-3 gap-24 '>
          {beers.map(({ id, name, tagline, image_url }) => (
            <SingleBeerCard
              key={id}
              name={name}
              tagline={tagline}
              image_url={image_url}
              id={id}
            />
          ))}
        </ul>
      </div>
      <div className='flex gap-4 justify-center my-8 text-xl '>
        <div>{page === 1 ? '' : <button onClick={prevPage}>&lt;</button>}</div>
        <p className='cursor-pointer hover:text-yellow-600'>{page}</p>
        <div>
          <button disabled={page === 29} onClick={nextPage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeersList;
