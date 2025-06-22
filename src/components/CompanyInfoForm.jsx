import React from 'react';

const CompanyInfoForm = ({ register, errors, prevStep, handleSubmit, isSigningUp }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-[#22180E]">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          {...register('companyName')}
          placeholder="TikoLab"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.companyName && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.companyName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="mb-2 block text-sm font-medium text-[#22180E]">
          Address
        </label>
        <input
          id="address"
          type="text"
          {...register('address')}
          placeholder="Oblende"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.address && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="regNumber" className="mb-2 block text-sm font-medium text-[#22180E]">
          Reg Number
        </label>
        <input
          id="regNumber"
          type="text"
          {...register('regNumber')}
          placeholder="1234567"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.regNumber && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.regNumber.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="cacCertificate" className="mb-2 block text-sm font-medium text-[#22180E]">
          Cac Certificate
        </label>
        <input
          id="cacCertificate"
          type="file"
          {...register('cacCertificate', { required: true })}
          className="w-full cursor-pointer rounded-lg border border-[EEEBE7] bg-transparent px-6 py-5 text-center text-base font-normal text-[#62340A] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-8"
        />
        {errors.cacCertificate && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">
            {errors.cacCertificate.message}
          </p>
        )}
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          disabled={isSigningUp}
          className="mt-4 w-full cursor-pointer rounded-3xl bg-gray-300 px-4 py-2 !text-lg font-bold text-gray-700 transition-all duration-300 hover:bg-gray-400 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:scale-95 sm:mt-6"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSigningUp}
          className="mt-4 w-full cursor-pointer rounded-3xl bg-[#D29C3E] px-4 py-2 !text-lg font-bold text-white transition-all duration-300 hover:bg-[#FFF4DD] hover:text-[#05243F] focus:ring-2 focus:ring-[#D29C3E] focus:ring-offset-2 focus:outline-none active:scale-95 sm:mt-6"
        >
          {isSigningUp ? 'Signing up...' : 'Sign up'}
        </button>
      </div>
    </form>
  );
};

export default CompanyInfoForm;
