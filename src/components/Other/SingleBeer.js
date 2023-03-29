import { Link } from 'react-router-dom';

const SingleBeer = ({ tagline, name, image_url }) => {
  console.log(image_url === null ? 'ehh' : '');
  return (
    <li className='max-w-sm border border-gray-200 rounded-lg  shadow-xl '>
      <Link
        to='/'
        className='flex flex-col justify-center  rounded-lg  md:flex-row md:max-w-md hover:bg-gray-100 '>
        {image_url !== null ? (
          <img
            src={image_url}
            alt={name}
            className='object-contain w-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-l-lg'
          />
        ) : (
          <h3 className='text-3xl py-36 h-full text-center text-white'>
            No current photo 🍻
          </h3>
        )}
      </Link>
      <div className='flex flex-col items-center  p-2 leading-normal  rounded text-center'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
          {name}
        </h5>
        <p className='mb-3 text-sm  text-gray-700'>{tagline}</p>
      </div>
    </li>
  );
};

export default SingleBeer;
