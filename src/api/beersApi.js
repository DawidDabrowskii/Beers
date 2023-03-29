import axios from 'axios';

export const fetchData = axios.create({
  baseURL: `https://api.punkapi.com/v2/beers`,
});

//https://api.punkapi.com/v2/beers?page=2&per_page=80

export const getBeersPage = async (pageParam = 1, beersPerPage = 12) => {
  const response = await fetchData.get(
    `/?page=${pageParam}&per_page=${beersPerPage}`
  );
  return response.data;
};
