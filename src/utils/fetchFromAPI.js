import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const rapidapiKety = 'abdcde19b6msh4b4a7e49b17da88p1712ccjsn86be0475e9d4'

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': rapidapiKety,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
