import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import AddAccountModal from '../components/AddAccountModal';

export default function BankAccounts() {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const handleAddAccount = (accountData) => {
    const newAccount = {
      id: accounts.length + 1,
      bankName: accountData.bank,
      accountNumber: accountData.accountNo,
      accountName: accountData.accountName,
    };
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bank Accounts</h1>
          <p className="mt-1 text-gray-600">Manage your linked bank accounts for withdrawals</p>
        </div>
        <button 
          className="flex items-center gap-2 rounded-xl bg-[#CE973A] px-6 py-3 text-white transition hover:bg-[#B07E2B]"
          onClick={() => setShowAddAccount(true)}
        >
          <Icon icon="material-symbols:add" />
          <span>Add Account</span>
        </button>
      </div>

      {/* Accounts List */}
      <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
        {accounts.length > 0 ? (
          <>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Your Accounts</h2>
            <div className="divide-y divide-gray-100">
              {accounts.map(account => (
                <div 
                  key={account.id}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF9E5]">
                      <Icon icon="material-symbols:account-balance" className="text-2xl text-[#CE973A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{account.bankName}</p>
                      <p className="text-sm text-gray-600">{account.accountNumber}</p>
                      <p className="text-sm text-gray-500">{account.accountName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-500"
                      onClick={() => {
                        setAccounts(accounts.filter(a => a.id !== account.id));
                      }}
                    >
                      <Icon icon="material-symbols:delete-outline" className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 rounded-full bg-[#FFF9E5] p-4">
              <Icon icon="material-symbols:account-balance" className="text-4xl text-[#CE973A]" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">No accounts added yet</h3>
            <p className="mb-6 text-gray-600">Add your first bank account to start making withdrawals</p>
            <button 
              className="flex items-center gap-2 rounded-xl bg-[#CE973A] px-6 py-3 text-white transition hover:bg-[#B07E2B]"
              onClick={() => setShowAddAccount(true)}
            >
              <Icon icon="material-symbols:add" />
              <span>Add Account</span>
            </button>
          </div>
        )}
      </div>

      <AddAccountModal
        isOpen={showAddAccount}
        onClose={() => setShowAddAccount(false)}
        onAddAccount={handleAddAccount}
      />
    </div>
  );
}
