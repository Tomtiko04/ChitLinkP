import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AuthLogo from '../assets/images/AuthLogo.png';
import { useLogin } from '../components/features/authetication/useAuth';

const loginSchema = yup.object().shape({
  email: yup.string().required('Email or Phone is required'),
  password: yup.string().required('Password is required'),
});


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLogin, isLoggingIn, isErrorLogIn } = useLogin();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });


  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setValue('email', rememberedEmail);
      setValue('rememberMe', true);
    }
  }, [setValue]);

  const onLoginSubmit = (data) => {
    console.log(data);
    isLogin(data, {
      onSuccess: ()=>{
        if (getValues('rememberMe')) {
          localStorage.setItem('rememberedEmail', getValues('email'));
        } else {
          localStorage.removeItem('rememberedEmail');
        }
      }, 
      onSettled: () =>{
        setValue("email", "");
        setValue("password", "");
        setValue("rememberMe", false);
      }
    })
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#000000CF]/80 px-4 py-8 sm:py-0">
      <div className="flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-white p-6 shadow-lg sm:p-10 md:flex-row md:gap-12">
        <div className="flex justify-center md:w-1/6 md:items-start">
          <img src={AuthLogo} alt="ChitLink" className="h-10 object-contain md:h-12" />
        </div>

        <div className="mt-0 flex-1 sm:mt-8">
          <div className="mb-6 flex flex-row items-center justify-between gap-2">
            <h2 className="text-xl font-bold text-[#22180E]">Login</h2>
            <div className="text-sm text-[#697B8C]">
              <span className="opacity-80">Don't have an account?</span>
              <Link
                to="/auth/signup"
                className="ml-1 text-[#C59139] transition-colors duration-300 hover:text-[#9A2D41B0]"
              >
                Signup
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#22180E]">
                Email/Phone no.
              </label>
              <input
                id="email"
                type="text"
                {...register('email')}
                placeholder="tomtiko@gmail.com"
                className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
              />
              {errors.email && (
                <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#22180E]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-[#05243F] opacity-40 transition-opacity duration-300 hover:opacity-100 sm:right-4"
                >
                  {!showPassword ? (
                    <Icon icon="mdi:eye-outline" fontSize={18} />
                  ) : (
                    <Icon icon="mdi:eye-off-outline" fontSize={18} />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="animate-shake mt-1 text-xs text-[#A73957]">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  {...register('rememberMe')}
                  className="h-4 w-4 rounded border-gray-300 text-[#C59139] focus:ring-[#C59139]"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#C59139] hover:text-[#9A2D41B0]">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoggingIn}
                className="mt-4 w-full cursor-pointer rounded-3xl bg-[#D29C3E] px-4 py-2 !text-lg font-bold text-white transition-all duration-300 hover:bg-[#FFF4DD] hover:text-[#05243F] focus:ring-2 focus:ring-[#D29C3E] focus:ring-offset-2 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-6"
              >
                {isLoggingIn ? 'Logging in...' : 'Login'}
              </button>
            </div>
            {isErrorLogIn && (
              <p className="animate-shake mt-2 text-center text-sm text-[#A73957]">
                {isErrorLogIn?.response?.data?.message || 'An unexpected error occurred.'}
              </p>
            )}
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#F2F2F2]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-[#D9D9D9]">or</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-center text-sm font-medium text-[#22180E66] opacity-70">
                Login with socials
              </span>
              <div className="mt-2 flex justify-center gap-3 sm:mt-0">
                <button className="h-10 w-10 cursor-pointer rounded-full bg-[#F4F5FC] transition duration-300 hover:bg-[#FFF4DD] active:scale-95 sm:h-12 sm:w-12">
                  <Icon icon="flat-color-icons:google" fontSize={24} className="mx-auto" />
                </button>
                <button className="h-10 w-10 cursor-pointer rounded-full bg-[#F4F5FC] transition duration-300 hover:bg-[#FFF4DD] active:scale-95 sm:h-12 sm:w-12">
                  <Icon icon="logos:facebook" fontSize={24} className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/4"></div>
      </div>
    </div>
  );
};

export default Login;
