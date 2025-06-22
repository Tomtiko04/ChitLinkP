import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend-chitlink.ademuyiwaadewoye.com',
});

export default apiClient;
