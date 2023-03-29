import { getBeersPage } from '../../api/beersApi';
import { useEffect, useState } from 'react';
import SingleBeer from './SingleBeer';

const BeersList = () => {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeersPage(page).then(data => setBeers(data));
  }, [page]);

  console.log(beers);

  const prevPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  if (!beers) return <h1>'WHAT IS THIS'</h1>;

  console.log(beers.filter(beer => beer.abv > 5.5));

  return (
    <div className='mt-12 flex flex-col justify-center gap-4'>
      <div className='flex gap-4 justify-center my-8 text-xl text-white'>
        <div>
          <button disabled={page === 1} onClick={prevPage}>
            &lt;
          </button>
        </div>
        <p className='cursor-pointer hover:text-yellow-600'>{page}</p>
        <div>
          <button disabled={page === 29} onClick={nextPage}>
            &gt;
          </button>
        </div>
      </div>
      <div>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 '>
          {beers.map(({ id, name, tagline, image_url }) => (
            <SingleBeer
              key={id}
              name={name}
              tagline={tagline}
              image_url={image_url}
            />
          ))}
        </ul>
      </div>
      <div className='flex gap-4 justify-center my-8 text-xl text-white'>
        <div>
          <button disabled={page === 1} onClick={prevPage}>
            &lt;
          </button>
        </div>
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
