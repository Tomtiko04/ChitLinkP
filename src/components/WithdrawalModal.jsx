import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function WithdrawalModal({ isOpen, onClose, accounts = [] }) {
  const [amount, setAmount] = useState('000.00');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAmountChange = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');
    
    // Convert to number and format with 2 decimal places
    const formattedValue = (Number(numericValue) / 100).toFixed(2);
    
    setAmount(formattedValue);
  };

  const handleAmountClick = () => {
    if (!isEditing) {
      setIsEditing(true);
      setAmount('0.00');
    }
  };

  const handleAmountBlur = () => {
    setIsEditing(false);
    if (amount === '0.00') {
      setAmount('000.00');
    }
  };
  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleOverlayClick}
    >
      <div 
        className="w-[500px] overflow-hidden rounded-[20px] bg-[#FAF9F6]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-2 bg-[#FAF9F6] py-6">
          <Icon icon="formkit:arrowdown" className="text-2xl text-[#CE973A]" />
          <h2 className="text-2xl font-bold text-black">Withdrawal</h2>
        </div>

        {/* Content */}
        <div className="flex flex-col bg-white px-8 pb-8">
          {/* Amount Display */}
          <div 
            className="mb-8 flex cursor-text items-center justify-center py-8"
            onClick={handleAmountClick}
          >
            {isEditing ? (
              <input
                type="text"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                onBlur={handleAmountBlur}
                className="w-48 border-none bg-transparent text-center text-6xl font-light text-gray-400 focus:outline-none"
                autoFocus
              />
            ) : (
              <span className="text-6xl font-light text-gray-400">
                {amount}
              </span>
            )}
          </div>

          {/* Destinations Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#CE973A]">Select Account</h3>
            </div>

            {/* Accounts List or Empty State */}
            <div className="mt-4">
              {accounts.length > 0 ? (
                <div className="space-y-4">
                  {accounts.map(account => (
                    <button
                      key={account.id}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 transition ${
                        selectedAccount?.id === account.id 
                          ? 'border-[#CE973A] bg-[#FFF9E5]' 
                          : 'border-gray-200 hover:border-[#CE973A]/50'
                      }`}
                      onClick={() => setSelectedAccount(account)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF9E5]">
                          <Icon icon="material-symbols:account-balance" className="text-2xl text-[#CE973A]" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">{account.bankName}</p>
                          <p className="text-sm text-gray-600">{account.accountNumber}</p>
                        </div>
                      </div>
                      {selectedAccount?.id === account.id && (
                        <Icon icon="material-symbols:check-circle" className="text-xl text-[#CE973A]" />
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-xl bg-[#FFF9E5] p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[#CE973A]/10 p-3">
                      <Icon icon="material-symbols:account-balance" className="text-3xl text-[#CE973A]" />
                    </div>
                  </div>
                  <p className="mb-4 text-[#8B5800]">
                    You need to add a bank account before making a withdrawal
                  </p>
                  <Link
                    to="/bank-accounts"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#CE973A] px-6 py-3 text-white transition hover:bg-[#B07E2B]"
                    onClick={onClose}
                  >
                    <Icon icon="material-symbols:add" />
                    <span>Add Account</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          {accounts.length > 0 && (
            <button 
              className={`mt-4 w-full rounded-xl py-4 text-center text-lg font-semibold transition ${
                selectedAccount && amount !== '000.00'
                  ? 'bg-[#CE973A] text-white hover:bg-[#B07E2B]'
                  : 'cursor-not-allowed bg-gray-100 text-gray-400'
              }`}
              disabled={!selectedAccount || amount === '000.00'}
              onClick={() => {
                if (selectedAccount && amount !== '000.00') {
                  // Handle withdrawal
                  console.log('Withdrawing', amount, 'to', selectedAccount);
                }
              }}
            >
              Withdraw
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
