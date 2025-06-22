import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function VerificationSuccess() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black/80 px-4 py-8">
      <div className="w-full max-w-96 rounded-3xl bg-white p-6 shadow-lg sm:p-10">
        <div className="mx-auto flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#BD882D] sm:h-30 sm:w-30">
            <Icon icon="charm:tick" className="text-[20px] sm:text-[55px]" color="#FAF7ED" />
          </div>
          <h2 className="mt-4 text-center text-base font-medium text-[#BD882D] sm:text-xl">
            Verification successful
          </h2>
          <div className="w-full rounded-full bg-[#C59139] py-2 text-center sm:text-base text-sm font-bold text-white mt-20 cursor-pointer">
           <Link to="/auth/login">Go to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
