import axios from 'axios';

export const getRandomBeer = async () => {
  const response = await axios.get(`https://api.punkapi.com/v2/beers/random`);
  return response.data;
};
