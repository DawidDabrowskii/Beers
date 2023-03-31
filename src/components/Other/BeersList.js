import { getBeersPage } from '../../api/beersApi';
import { useEffect, useState } from 'react';
import SingleBeerCard from './SingleBeerCard';
import { Spinner } from '../../constants';
import { HeroTitle } from '../Common/HeroTitle';
import { Pagination } from '../Common/Pagination';

const BeersList = () => {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeersPage(page).then(data => setBeers(data));
  }, [page]);

  if (beers.length < 1) return <Spinner />;

  return (
    <div className=' flex flex-col justify-center gap-4 text-white items-center max-w-[80%] mx-auto pt-6'>
      <HeroTitle title='Beers' />
      <Pagination page={page} setPage={setPage} />
      <ul className='grid  lg:grid-cols-2 xl:grid-cols-3 gap-24 '>
        {beers.map(beer => (
          <SingleBeerCard key={beer.id} {...beer} />
        ))}
      </ul>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default BeersList;
