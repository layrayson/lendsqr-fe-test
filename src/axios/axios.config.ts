import axios, { AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,

  headers: {
    'Content-Type': 'application/json',
  },
});
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default axiosClient;
