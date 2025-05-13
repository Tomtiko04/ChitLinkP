import React from 'react';

const transactions = [
  {
    name: 'Arike & Friends',
    amount: '40000',
    date: '08:18 pm 28-08-2024',
    isCredit: false,
  },
  {
    name: 'Lovely Sisters',
    amount: '1000000',
    date: '08:18 pm 28-08-2024',
    isCredit: true,
  },
  {
    name: 'Lovely Sisters',
    amount: '1000000',
    date: '08:18 pm 28-08-2024',
    isCredit: true,
  },
  {
    name: 'Lovely Sisters',
    amount: '1000000',
    date: '08:18 pm 28-08-2024',
    isCredit: true,
  },
  {
    name: 'Lovely Sisters',
    amount: '1000000',
    date: '08:18 pm 28-08-2024',
    isCredit: true,
  },
];

const TransactionItem = ({ name, amount, date, isCredit }) => (
  <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-[#F4F3F0]">
    <div>
      <h3 className="text-sm font-bold text-[#563F17]">{name}</h3>
      <p className="mt-1 text-xs text-[#563F17]">{date}</p>
    </div>
    <p className={`font-bold ${isCredit ? 'text-[#563F17]' : 'text-red-600'}`}>
      {isCredit ? '+' : '-'}${Number(amount).toLocaleString()}
    </p>
  </div>
);

export default function RecentTransactions() {
  return (
    <div className="rounded-[31.32px] border border-[#EDEAE4] bg-white p-6">
      <div className=" flex items-center justify-between text-xs">
        <h2 className="text-sm font-bold text-[#89785C]">Recent Transactions</h2>
        <button className="cursor-pointer font-light text-[#AC927A] hover:underline">
          See All
        </button>
      </div>
      <div className="divide-y text-[#f4f3f0]">
        {transactions.map((transaction, idx) => (
          <TransactionItem key={idx} {...transaction} />
        ))}
      </div>
    </div>
  );
}
