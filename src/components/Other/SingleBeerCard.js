import { Link } from 'react-router-dom';

const SingleBeer = ({ tagline, name, image_url, id }) => {
  return (
    <Link
      to={`/details/${id}`}
      className='max-w-sm  text-slate-100 p-4 bg-beer rounded-lg hover:scale-105 duration-300 shadow-full-box'>
      <div className='flex flex-col justify-center  rounded-lg  md:flex-row md:max-w-md bg-gray-200 '>
        {image_url !== null ? (
          <img
            src={image_url}
            alt={name}
            className='object-contain w-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-l-lg '
          />
        ) : (
          <h3 className='text-3xl py-36 h-full text-center text-black'>
            No current photo 🍻
          </h3>
        )}
      </div>
      <div className='flex flex-col items-center  p-2 leading-normal  rounded text-center '>
        <h5 className='mb-2 text-xl font-bold tracking-tight  '>{name}</h5>
        <p className='mb-3 text-sm   '>{tagline}</p>
      </div>
    </Link>
  );
};

export default SingleBeer;
