import apiClient from "./api";

const loginUser = async (credentials) => {
  const { data } = await apiClient.post('/api/login?user_type=merchant', credentials);
  return data;
};

export {loginUser}