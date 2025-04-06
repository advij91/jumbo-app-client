import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Use NEXT_PUBLIC_ prefix for client-side access

  timeout: 10000,
});

export default axiosInstance;