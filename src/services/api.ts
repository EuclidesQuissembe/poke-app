import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  // baseURL: 'http://192.168.43.163:3000',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '32dcc29cdf44ae3409d154898485dbe6',
  },
});

export default api;
