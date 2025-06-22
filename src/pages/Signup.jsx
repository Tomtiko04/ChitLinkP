import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AuthLogo from '../assets/images/AuthLogo.png';
import PersonInfoForm from '../components/PersonInfoForm';
import CompanyInfoForm from '../components/CompanyInfoForm';
import { useSignup } from '../components/features/authetication/useAuth';

const validationSchema = yup.object().shape({
  emailOrPhone: yup.string().required('Email or Phone is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
  
  companyName: yup.string().when('$step', ([step], schema) => {
    return step === 2 ? schema.required('Company Name is required') : schema.notRequired();
  }),
  address: yup.string().when('$step', ([step], schema) => {
    return step === 2 ? schema.required('Address is required') : schema.notRequired();
  }),
  regNumber: yup.string().when('$step', ([step], schema) => {
    return step === 2 ? schema.required('Registration Number is required') : schema.notRequired();
  }),
  cacCertificate: yup.mixed().when('$step', ([step], schema) => {
    return step === 2 ? schema.test('required', 'CAC Certificate is required', (value) => value && value.length > 0) : schema.notRequired();
  }),
});

const Signup = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isSigningUp, isSignup, isErrorSignUP } = useSignup();

  const { register, handleSubmit, trigger, formState: { errors }, watch } = useForm({
    resolver: yupResolver(validationSchema),
    context: { step },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const nextStep = async () => {
    const fieldsToValidate = ['emailOrPhone', 'password', 'confirmPassword'];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const onFinalSubmit = (data) => {
    const finalData = {
      user_type: 'merchant',
      business_name: data.companyName,
      email: data.emailOrPhone,
      phone_number: '08023620892',
      reg_number: data.regNumber,
      address: data.address,
      cac_certificate: data.cacCertificate[0],
      password: data.password.trim(),
      password_confirmation: data.confirmPassword.trim(),
    };
    isSignup(finalData);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#000000CF]/80 px-4 py-8 sm:py-0">
      <div className="flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-white p-6 shadow-lg sm:p-10 md:flex-row md:gap-12">
        <div className="flex justify-center md:w-1/6 md:items-start">
          <img src={AuthLogo} alt="ChitLink" className="h-10 object-contain md:h-12" />
        </div>

        <div className="mt-0 flex-1 sm:mt-8">
          <div className="mb-6 flex flex-row items-center justify-between gap-2">
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

          <div className="mb-6 flex">
            <div className="w-1/2 text-left text-xs sm:text-sm">
              <div className="font-bold text-[#6C4119]">Personal info</div>
              <div className="mt-1 h-1 rounded-full bg-[#C59139]"></div>
            </div>
            <div className="ml-2 w-1/2 text-left text-xs sm:text-sm">
              <div className="font-bold text-[#6C4119]">Company info</div>
              <div className={`mt-1 h-1 rounded-full ${step === 2 ? 'bg-[#C59139]' : 'bg-[#F8F8F8]'}`}></div>
            </div>
          </div>

          {step === 1 && (
            <PersonInfoForm
              register={register}
              errors={errors}
              onNext={nextStep}
              watch={watch}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
            />
          )}
          {step === 2 && (
            <CompanyInfoForm
              register={register}
              errors={errors}
              prevStep={prevStep}
              isSigningUp={isSigningUp}
              handleSubmit={handleSubmit(onFinalSubmit)}
            />
          )}

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

export default Signup;
