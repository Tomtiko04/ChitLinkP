import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function AddAccountModal({ isOpen, onClose, onAddAccount }) {
  const [formData, setFormData] = useState({
    accountNo: '',
    bank: '',
    accountName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAccount(formData);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80"
      onClick={handleOverlayClick}
    >
      <div 
        className="w-[400px] overflow-hidden rounded-[20px] bg-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-2 bg-[#FAF9F6] py-6">
          <Icon icon="material-symbols:account-balance" className="text-2xl text-[#CE973A]" />
          <h2 className="text-2xl font-bold text-black">Add Account</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Account No.
            </label>
            <input
              type="text"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              placeholder="10 digits Nuban no"
              className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[#CE973A] focus:outline-none"
              maxLength="10"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Bank
            </label>
            <select
              name="bank"
              value={formData.bank}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[#CE973A] focus:outline-none"
              required
            >
              <option value="">Select Bank</option>
              <option value="access">Access Bank</option>
              <option value="gtb">GTBank</option>
              <option value="zenith">Zenith Bank</option>
              <option value="first">First Bank</option>
              {/* Add more banks as needed */}
            </select>
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Account Name
            </label>
            <input
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              placeholder="Awoniyi Clodius Ganiu"
              className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[#CE973A] focus:outline-none"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full rounded-xl bg-[#CE973A] py-4 text-center text-lg font-semibold text-white transition hover:bg-[#B07E2B]"
          >
            + Add Account
          </button>
        </form>
      </div>
    </div>
  );
}
