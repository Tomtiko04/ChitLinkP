import React, { useEffect, useState } from 'react';
import AuthLogo from '../assets/images/AuthLogo.png';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PersonInfoForm from '../components/PersonInfoForm';
import CompanyInfoForm from '../components/CompanyInfoForm';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    address: '',
    regNumber: '',
    cacCertificate: null,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  function handleFinalSubmit(e) {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#000000CF]/80 px-4 py-8 sm:py-10">
      <div className="flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-white p-6 shadow-lg sm:p-10 md:flex-row md:gap-12">
        {/* Logo */}
        <div className="flex justify-center md:w-1/6 md:items-start">
          <img src={AuthLogo} alt="ChitLink" className="h-10 object-contain md:h-12" />
        </div>

        {/* Form */}
        <div className="mt-0 flex-1 sm:mt-8">
          <div className="mb-4 flex flex-row items-center justify-between gap-2">
            <h2 className="text-xl font-bold text-[#22180E]">Signup</h2>
            <div className="text-sm text-[#697B8C]">
              <span className="opacity-80">Have an account?</span>
              <Link
                to="/auth/login"
                className="ml-1 text-[#C59139] transition-colors duration-300 hover:text-[#9A2D41B0]"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Progress bar: Personal Info, Company Info */}
          <div className="mb-6 flex">
            <div className="w-1/2 text-left text-xs sm:text-sm">
              <button
                onClick={() => setStep(1)}
                className={`font-bold ${step === 1 ? 'text-[#6C4119]' : 'text-[#6C4119]'}`}
              >
                Personal info
              </button>
              <div
                className={`mt-1 h-1 rounded-full ${step === 1 ? 'bg-[#C59139]' : 'bg-[#C59139]'}`}
              ></div>
            </div>
            <div className="ml-2 w-1/2 text-left text-xs sm:text-sm">
              <button
                onClick={() => setStep(2)}
                className={`font-bold ${step === 2 ? 'text-[#6C4119]' : 'text-[#6C4119]'}`}
              >
                Company info
              </button>
              <div
                className={`mt-1 h-1 rounded-full ${step === 2 ? 'bg-[#C59139]' : 'bg-[#F8F8F8]'}`}
              ></div>
            </div>
          </div>

          {/* Form */}
          {step === 1 && (
            <PersonInfoForm
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              showPassword={showPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              setShowPassword={setShowPassword}
              errors={errors}
            />
          )}
          {step === 2 && (
            <CompanyInfoForm
              formData={formData}
              errors={errors}
              setFormData={setFormData}
              prevStep={prevStep}
              handleSubmit={handleFinalSubmit}
            />
          )}

          <div className="mt-4">
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#F2F2F2]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-[#D9D9D9]">or</span>
              </div>
            </div>

            {/* Social login */}
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
}
