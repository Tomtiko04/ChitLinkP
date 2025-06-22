import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  loginUser as loginUserApi,
  signupUser as signupUserApi,
  verifyAccount as verifyAccountApi,
} from '../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStore from '../../../store/authStore';

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const storeLogin = useAuthStore((state) => state.login);

  const {
    mutate: isLogin,
    isPending: isLoggingIn,
    error: isErrorLogIn,
  } = useMutation({
    mutationFn: ({ email, password }) => loginUserApi({ email, password }),
    onSuccess: (data) => {
      storeLogin(data.user, data.token);
      toast.success('Login successful!');
      queryClient.setQueryData(['user'], data.user);
      navigate('/dashboard', { replace: true });
    },

    onError: (err) => {
      toast.error(err.response?.data?.message || 'An unexpected error occurred.');
    },
  });

  return { isLogin, isLoggingIn, isErrorLogIn };
};

const useSignup = () => {
  const navigate = useNavigate();
  const storeSignup = useAuthStore((state) => state.signup);
  const {
    mutate: isSignup,
    isPending: isSigningUp,
    error: isErrorSignUP,
  } = useMutation({
    mutationFn: signupUserApi,
    onSuccess: (data) => {
      storeSignup(data.user, null, data.user.email);
      toast.success(data.message || 'Account Created! Please check your email to verify your account.');
      navigate('/auth/verify');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'An unexpected error occurred.');
    },
  });

  return { isSigningUp, isSignup, isErrorSignUP };
};

const useVerifyAccount = () =>{
  const {
    mutate: isVerifyAccount,
    isPending: isVerifingAccount,
    error: isErrorVerifyAccount,
  } = useMutation({
    mutationFn: verifyAccountApi,
    onSuccess: (data)=>{
      console.log("Verify data", data);
      toast.success(data?.message || "Account verified successfully")
    }, 
    onError: (err)=>{
      toast.error(err.response?.data?.message || 'An unexpected error occurred.');
    }
  });

  return {isErrorVerifyAccount, isVerifingAccount, isVerifyAccount}
}

export { useLogin, useSignup, useVerifyAccount };
