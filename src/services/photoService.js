import axios from 'axios';
const BASE_BACKEND_URL = 'https://jsonplaceholder.typicode.com';

const getAllPhotos = () => axios.get(`${BASE_BACKEND_URL}/photos`);
const getPhoto = (photoId) =>
  axios.get(`${BASE_BACKEND_URL}/photos/${photoId}`);
const addPhoto = (photo) => axios.post(`${BASE_BACKEND_URL}/photos`, photo);
const updatePhoto = (photo) => {
  console.log(photo);
  axios.put(`${BASE_BACKEND_URL}/photos/${photo.id}`, photo);
};
const deletePhoto = (photoId) =>
  axios.delete(`${BASE_BACKEND_URL}/photos/${photoId}`);

export const photoService = {
  getAllPhotos,
  getPhoto,
  addPhoto,
  updatePhoto,
  deletePhoto,
};
