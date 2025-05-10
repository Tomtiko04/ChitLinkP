import React from 'react'

export default function BalanceCard() {
  return (
    <div className="bg-gradient-to-br from-amber-700 to-amber-400 rounded-2xl p-6 text-white w-full max-w-sm shadow-lg flex flex-col justify-between min-h-[220px]">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-medium">Balance:</span>
        </div>
        <button className="focus:outline-none">
          <span role="img" aria-label="eye" className="text-xl">👁️</span>
        </button>
      </div>
      <div className="mb-1">
        <span className="text-4xl font-bold tracking-tight">$7,000,000,000</span>
      </div>
      <div className="mb-4">
        <span className="text-sm text-amber-100">Awaiting balance: $78,234.00</span>
      </div>
      <button className="flex items-center justify-center bg-white text-amber-700 font-semibold py-2 rounded-xl shadow transition hover:bg-amber-100">
        <span className="mr-2 text-lg">⬇️</span> Withdraw
      </button>
    </div>
  )
}
