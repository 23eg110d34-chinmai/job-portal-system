import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Update if backend runs on a different port/URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Authorization token if available in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Assuming Bearer token is used
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
