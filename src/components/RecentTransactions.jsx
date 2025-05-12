import React from 'react';

const TransactionItem = ({ name, amount, date, isCredit }) => (
  <div className="flex items-center justify-between py-3">
    <div>
      <h3 className="font-medium text-[#22180E]">{name}</h3>
      <p className="text-sm text-[#9F9F9F]">{date}</p>
    </div>
    <p className={`font-medium ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
      {isCredit ? '+' : '-'}${Number(amount).toLocaleString()}
    </p>
  </div>
);

export default function RecentTransactions() {
  const transactions = [
    {
      name: "Arike & Friends",
      amount: "40000",
      date: "08:18 pm 28-08-2024",
      isCredit: false
    },
    {
      name: "Lovely Sisters",
      amount: "1000000",
      date: "08:18 pm 28-08-2024",
      isCredit: true
    },
    {
      name: "Lovely Sisters",
      amount: "1000000",
      date: "08:18 pm 28-08-2024",
      isCredit: true
    },
    {
      name: "Lovely Sisters",
      amount: "1000000",
      date: "08:18 pm 28-08-2024",
      isCredit: true
    },
    {
      name: "Lovely Sisters",
      amount: "1000000",
      date: "08:18 pm 28-08-2024",
      isCredit: true
    }
  ];

  return (
    <div className="rounded-lg bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-[#22180E]">Recent Transactions</h2>
        <button className="text-sm text-[#9F9F9F]">See All</button>
      </div>
      <div className="mt-4 divide-y">
        {transactions.map((transaction, idx) => (
          <TransactionItem key={idx} {...transaction} />
        ))}
      </div>
    </div>
  );
}
