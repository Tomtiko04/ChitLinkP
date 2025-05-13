import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import './components.css'

export default function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="balance-card-gradient flex min-h-[200px] w-full max-w-sm flex-col justify-between rounded-[20px] px-6 py-4 text-white">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <span className="text-sm font-bold">Balance:</span>
        </div>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="cursor-pointer transition-opacity hover:opacity-80 focus:outline-none"
        >
          <span role="img" aria-label="eye">
            {showBalance ? (
              <Icon icon="iconoir:eye" fontSize={24} />
            ) : (
              <Icon icon="codicon:eye-closed" fontSize={24} />
            )}
          </span>
        </button>
      </div>
      <div className="mb-1">
        <span className="text-3xl font-extrabold tracking-tight">
          {showBalance ? '$7,000,000,000' : '••••••••'}
        </span>
      </div>
      <div className="mb-4">
        <span className="text-sm font-medium">
          {showBalance ? 'Awaiting balance: $78,234.00' : 'Awaiting balance: ••••••••'}
        </span>
      </div>
      <button className="flex cursor-pointer items-center justify-center rounded-xl bg-white py-2 font-semibold shadow transition hover:bg-gray-50 active:bg-gray-100">
        <span className="gradient-text flex items-center text-base font-bold">
          <Icon icon="formkit:arrowdown" className="mr-2" fontSize={24} color="#CE973A" />
          Withdraw
        </span>
      </button>
    </div>
  );
}
