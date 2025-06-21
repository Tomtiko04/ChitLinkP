import React from 'react';
import { Icon } from '@iconify/react';

const PersonInfoForm = ({ register, errors, onNext, watch, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword }) => {

  const handleNext = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleNext} className="space-y-4">
      <div>
        <label htmlFor="emailOrPhone" className="mb-2 block text-sm font-medium text-[#22180E]">
          Email/Phone no.
        </label>
        <input
          id="emailOrPhone"
          type="text"
          {...register('emailOrPhone')}
          placeholder="tomtiko@gmail.com"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.emailOrPhone && <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.emailOrPhone.message}</p>}
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
        {errors.password && <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-[#22180E]">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmPassword')}
            className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
          />
          <div
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-[#05243F] opacity-40 transition-opacity duration-300 hover:opacity-100 sm:right-4"
          >
            {!showConfirmPassword ? (
              <Icon icon="mdi:eye-outline" fontSize={18} />
            ) : (
              <Icon icon="mdi:eye-off-outline" fontSize={18} />
            )}
          </div>
        </div>
        {errors.confirmPassword && <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="mt-4 w-full cursor-pointer rounded-3xl bg-[#D29C3E] px-4 py-2 !text-lg font-bold text-white transition-all duration-300 hover:bg-[#FFF4DD] hover:text-[#05243F] focus:ring-2 focus:ring-[#D29C3E] focus:ring-offset-2 focus:outline-none active:scale-95 sm:mt-6"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PersonInfoForm;
