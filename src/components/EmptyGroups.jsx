import React from 'react'
import { Icon } from '@iconify/react';

export default function EmptyGroups() {
  return (
    <div className="mx-auto max-w-sm rounded-2xl border-4 border-[#C7964A] bg-white p-8 text-center shadow-2xl">
      <p className="mb-6 text-xl text-gray-600">You have no contacts added yet</p>
      <button className="hover:bg-opacity-90 mx-auto flex items-center space-x-2 rounded-xl bg-[#D4A056] px-6 py-3 font-bold text-white shadow-md transition-colors">
        <Icon icon="solar:user-plus-bold" className="h-6 w-6" />
        <span>Add Contact</span>
      </button>
    </div>
  );
}
