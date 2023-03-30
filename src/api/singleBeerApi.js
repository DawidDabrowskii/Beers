import axios from 'axios';

export const getSingleBeer = async id => {
  const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
  return response.data;
};
