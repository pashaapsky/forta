import axios from 'axios';

export const API = () =>
  axios.create({
    baseURL: process.env.REACT_APP_API,
    responseType: 'json',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('AT'),
    },
  });
