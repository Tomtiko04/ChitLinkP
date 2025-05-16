import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import AddAccountModal from './AddAccountModal';

const mockAccounts = [
  {
    id: 1,
    bankName: 'Access Bank',
    accountNumber: '0123456789',
    accountName: 'John Doe',
  },
  {
    id: 2,
    bankName: 'GTBank',
    accountNumber: '9876543210',
    accountName: 'John Doe',
  },
];

export default function WithdrawalModal({ isOpen, onClose, hasAccounts = false }) {
  const [amount, setAmount] = useState('000.00');
  const [isEditing, setIsEditing] = useState(false);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [accounts, setAccounts] = useState(mockAccounts);

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

  const handleAddAccount = (accountData) => {
    const newAccount = {
      id: accounts.length + 1,
      bankName: accountData.bank,
      accountNumber: accountData.accountNo,
      accountName: accountData.accountName,
    };
    setAccounts([...accounts, newAccount]);
  };

  if (!isOpen) return null;

  return (
    <>
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
                <h3 className="text-xl font-bold text-[#CE973A]">Destinations</h3>
                <button 
                  className="flex items-center gap-2 rounded-xl bg-[#CE973A] px-4 py-2 text-white transition hover:bg-[#B07E2B]"
                  onClick={() => setShowAddAccount(true)}
                >
                  <Icon icon="material-symbols:add" />
                  <span>Add Account</span>
                </button>
              </div>

              {/* Accounts List or Empty State */}
              <div className="mt-4">
                {accounts.length > 0 ? (
                  <div className="space-y-4">
                    {accounts.map(account => (
                      <div 
                        key={account.id}
                        className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-gray-200" />
                          <div>
                            <p className="font-semibold">{account.bankName}</p>
                            <p className="text-sm text-gray-600">{account.accountNumber}</p>
                          </div>
                        </div>
                        <button 
                          className="rounded-full p-2 hover:bg-gray-100"
                          onClick={() => {
                            setAccounts(accounts.filter(a => a.id !== account.id));
                          }}
                        >
                          <Icon icon="material-symbols:close" className="text-gray-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 rounded-xl bg-[#FFF9E5] p-4 text-center text-[#8B5800]">
                    You do not have any account added to the destination kindly add an account.
                  </div>
                )}
              </div>
            </div>

            {/* Add Account Button (Bottom) */}
            <button 
              className="mt-4 w-full rounded-xl bg-[#CE973A] py-4 text-center text-lg font-semibold text-white transition hover:bg-[#B07E2B]"
              onClick={() => setShowAddAccount(true)}
            >
              + Add Account
            </button>
          </div>
        </div>
      </div>

      <AddAccountModal
        isOpen={showAddAccount}
        onClose={() => setShowAddAccount(false)}
        onAddAccount={handleAddAccount}
      />
    </>
  );
}
