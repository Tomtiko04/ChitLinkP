import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend-chitlink.ademuyiwaadewoye.com/api',
});

apiClient.interceptors.request.use(
  (config) => {
    const noAuthEndpoints = [
      '/login?user_type=merchant',
      '/register',
      '/verify/user',
      '/verify/email/resend',
    ];

    const requiresAuth = !noAuthEndpoints.some(endpoint => config.url.startsWith(endpoint));

    if (requiresAuth) {
      const authStorage = localStorage.getItem('auth-storage');
      if (authStorage) {
        const { state } = JSON.parse(authStorage);
        const token = state.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
