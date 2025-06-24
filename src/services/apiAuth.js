import apiClient from "./api";

const loginUser = async (credentials) => {
  const { data } = await apiClient.post('/login?user_type=merchant', credentials);
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

  const { data } = await apiClient.post('/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
}

const verifyAccount = async (details) =>{
const {data} = await apiClient.post("/verify/user", details);

return data;
}

const resendCode = async (details) => {
  const { data } = await apiClient.post('/verify/email/resend', details);

  return data;
}

export { loginUser, signupUser, verifyAccount, resendCode };