import React from 'react';

export default function CompanyInfoForm({ formData, setFormData, prevStep, handleSubmit, errors }) {
    const isLoggingIn = false;
     const handleChange = (e) => {
       if (e.target.name === 'cacCertificate') {
         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
       } else {
         setFormData({ ...formData, [e.target.name]: e.target.value });
       }
     };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Company name */}
      <div>
        <label htmlFor="companyname" className="mb-2 block text-sm font-medium text-[#22180E]">
          Company Name
        </label>
        <input
          id="text"
          name="companyname"
          type="text"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="TikoLab"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.companyName && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.companyName}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="mb-2 block text-sm font-medium text-[#22180E]">
          Address
        </label>
        <input
          id="text"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="Oblende"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.address && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.address}</p>
        )}
      </div>

      {/* Registration number */}
      <div>
        <label htmlFor="registrationNo" className="mb-2 block text-sm font-medium text-[#22180E]">
          Reg Number
        </label>
        <input
          id="number"
          name="registrationNo"
          type="number"
          value={formData.regNumber}
          onChange={handleChange}
          placeholder="1234567"
          className="w-full rounded-xl bg-[#F8F8F8] px-6 py-3 text-base font-normal text-[#22180E99] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-3"
        />
        {errors.regNumber && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.regNumber}</p>
        )}
      </div>

      {/* CAC Certificate upload */}
      <div>
        <label htmlFor="certificate" className="mb-2 block text-sm font-medium text-[#22180E]">
          Cac Certificate
        </label>
        <input
          id="file"
          name="certificate"
          type="file"
          value={formData.email}
          onChange={handleChange}
          placeholder="TikoLab"
          className="w-full cursor-pointer rounded-lg border border-[EEEBE7] bg-transparent px-6 py-5 text-center text-base font-normal text-[#62340A] transition-colors duration-300 placeholder:text-[#22180E99]/60 hover:bg-[#FFF4DD]/50 focus:bg-[#FFF4DD] focus:outline-none sm:px-6 sm:py-8"
        />
        {errors.email && (
          <p className="animate-shake mt-1 text-xs text-[#A73957]">{errors.email}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className={`mt-4 w-full cursor-pointer rounded-3xl bg-[#D29C3E] px-4 py-2 !text-lg font-bold text-white transition-all duration-300 hover:bg-[#FFF4DD] hover:text-[#05243F] focus:ring-2 focus:ring-[#D29C3E] focus:ring-offset-2 focus:outline-none active:scale-95 sm:mt-6 ${
            isLoggingIn ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Back
        </button>
        <button
          type="submit"
          className={`mt-4 w-full cursor-pointer rounded-3xl bg-[#D29C3E] px-4 py-2 !text-lg font-bold text-white transition-all duration-300 hover:bg-[#FFF4DD] hover:text-[#05243F] focus:ring-2 focus:ring-[#D29C3E] focus:ring-offset-2 focus:outline-none active:scale-95 sm:mt-6 ${
            isLoggingIn ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Signup
        </button>
      </div>
    </form>
  );
}
