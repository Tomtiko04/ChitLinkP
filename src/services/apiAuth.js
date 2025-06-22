import apiClient from "./api";

const loginUser = async (credentials) => {
  const { data } = await apiClient.post('/api/login?user_type=merchant', credentials);
  return data;
};

const signupUser = async (credentials) => {
  const formData = new FormData();
  Object.keys(credentials).forEach(key => {
    if (key === 'cac_certificate') {
      formData.append('cac_certificate', credentials[key]);
    } else {
      formData.append(key, credentials[key]);
    }
  });

  const { data } = await apiClient.post('/api/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
}

const verifyAccount = async (details) =>{
const {data} = await apiClient.post("/api/verify/user", details);

return data;
}

const resendCode = async (details) => {
  const { data } = await apiClient.post('/api/verify/email/resend', details);

  return data;
}

export { loginUser, signupUser, verifyAccount, resendCode };