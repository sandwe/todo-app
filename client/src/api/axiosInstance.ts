import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URL as string;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
