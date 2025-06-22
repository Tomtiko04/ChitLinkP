import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useVerifyAccount } from '../components/features/authetication/useAuth';
import useAuthStore from '../store/authStore';

export default function VerifyAccount() {
  const email = useAuthStore((state) => state.email) || 'ritixej144@forcrack.com';
  
  const { isVerifyingAccount, isVerifyAccount } = useVerifyAccount();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(600);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    if (paste.length === 6 && /^\d+$/.test(paste)) {
      const newCode = paste.split('');
      setCode(newCode);
      handleVerify(paste);
      inputRefs.current[5]?.focus();
    }
  };

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    const fullCode = newCode.join('');
    if (fullCode.length === 6) {
      handleVerify(fullCode);
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    // TODO: Implement resend logic
  };

  const handleVerify = async (fullCode) => {
    if (fullCode.length !== 6) {
      toast.error('The code must be 6 characters long.');
      return;
    }
    isVerifyAccount({email, code: fullCode});
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black/80 px-4 py-8">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-6 shadow-lg sm:p-10">
        <div className="mx-auto flex flex-col items-center">
          <h4 className="text-center text-xl font-semibold text-[#22180E]">Verify Account</h4>
          <p className="mt-1 text-center text-sm text-[#22180E]/60 sm:text-base">
            Check your mail/sms for the verification code sent to {email}
          </p>

          <div className="mt-6 w-full max-w-sm sm:mt-8">
            <label className="mb-3 block text-sm font-medium text-[#22180E] sm:mb-4">
              Input Code
            </label>
            <div className="flex justify-center">
              <div className="flex gap-2 sm:gap-3">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`h-10 w-10 rounded-lg text-center text-sm font-medium transition-colors duration-300 focus:outline-none sm:h-12 sm:w-12 sm:text-base md:h-14 md:w-14 ${
                      digit ? 'bg-[#FFF4DD]' : 'bg-[#F8F8F8]'
                    } text-[#D29C3E]/60`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between sm:mt-5">
              <p className="text-sm text-[#22180E]/60 sm:text-base">
                Code is valid for <span className="text-[#D29C3E]">{formatTime(timeLeft)}</span>
              </p>
              <button
                onClick={handleResend}
                disabled={timeLeft > 0}
                className="text-sm text-[#D29C3E] transition-colors duration-300 hover:text-[#A73957] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
              >
                Resend
              </button>
            </div>
          </div>

          {isVerifyingAccount && (
            <p className="mt-4 text-sm text-gray-500">Verifying...</p>
          )}

          <div className="pt-10 text-center text-sm">
            <p className="text-[#22180E]/60">Didn't get a code?</p>
            <p className="text-[#D29C3E]">Change Email or Phone Number</p>
          </div>
        </div>
      </div>
    </div>
  );
}
