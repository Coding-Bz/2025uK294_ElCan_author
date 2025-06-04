import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:3030',
});

AxiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
