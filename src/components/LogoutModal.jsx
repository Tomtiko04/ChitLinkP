import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

export default function LogoutModal({ open, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/81">
      <div
        className="relative flex w-full max-w-sm flex-col items-center rounded-[20px] bg-[#BD882D] px-8 py-16 justify-center"
      >
        <span className="mt-4 mb-8 flex items-center justify-center">
          <Icon icon="simple-line-icons:logout" className="h-10 w-10 rotate-180 text-white" />
        </span>
        <div className="mb-10 text-center text-2xl font-medium text-white">
          <div>Oh no! You're leaving....</div>
          <div>Are you sure?</div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <button
            className="w-full rounded-xl bg-white py-3 text-xl font-semibold text-[#B88743] transition-colors hover:bg-gray-100"
            onClick={onClose}
          >
            No
          </button>
          <button
            className="w-full rounded-xl border-2 border-white py-3 text-xl font-semibold text-white transition-colors hover:bg-[#a97a2e]"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
} 