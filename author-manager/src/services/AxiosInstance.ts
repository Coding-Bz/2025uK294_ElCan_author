import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'http://localhost:3030',
});

baseInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default baseInstance;
