import React from 'react';
import { Icon } from '@iconify/react';

export default function PersonInfoForm({
  formData,
  setFormData,
  nextStep,
  errors,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) {
  const isLoggingIn = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#22180E]">
          Email/Phone no.
        </label>
        <input
          id="email"
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          placeholder="tomtiko@gmail.com"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.email && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#22180E]">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
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
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.password}</p>
        )}
      </div>

      {/* Confirm password */}
      <div>
        <label htmlFor="comfirmpassword" className="mb-2 block text-sm font-medium text-[#22180E]">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="comfirmpassword"
            name="comfirmpassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
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
        {errors.confirmPassword && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isLoggingIn}
          className={`mt-4 w-full cursor-pointer rounded-3xl bg-[#D29C3E] px-4 py-2 !text-lg font-bold text-white transition-all duration-300 hover:bg-[#FFF4DD] hover:text-[#05243F] focus:ring-2 focus:ring-[#D29C3E] focus:ring-offset-2 focus:outline-none active:scale-95 sm:mt-6 ${
            isLoggingIn ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Next
        </button>
      </div>
    </form>
  );
}
