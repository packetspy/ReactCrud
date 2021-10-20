import axios from 'axios';
const BASE_BACKEND_URL = 'https://jsonplaceholder.typicode.com';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllPhotos: () => axios.get(`${BASE_BACKEND_URL}/photos`),
};
