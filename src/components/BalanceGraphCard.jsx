import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', profit: 1000, expense: 500 },
  { month: 'Feb', profit: 2000, expense: 1000 },
  { month: 'Mar', profit: 1500, expense: 700 },
  { month: 'Apr', profit: 2500, expense: 1200 },
  { month: 'May', profit: 3000, expense: 1500 },
  { month: 'Jun', profit: 4000, expense: 2000 },
  { month: 'Jul', profit: 3500, expense: 1800 },
  { month: 'Aug', profit: 4200, expense: 2100 },
  { month: 'Sep', profit: 3900, expense: 1700 },
  { month: 'Oct', profit: 4500, expense: 2200 },
  { month: 'Nov', profit: 5000, expense: 2500 },
  { month: 'Dec', profit: 4700, expense: 2300 },
];

export default function BalanceGraphCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow flex flex-col w-full max-w-2xl min-h-[340px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-amber-900">Balance:</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center text-xs text-amber-700 font-semibold"><span className="w-3 h-3 rounded-sm bg-amber-400 inline-block mr-1"></span>Profit</span>
          <span className="flex items-center text-xs text-rose-300 font-semibold"><span className="w-3 h-3 rounded-sm bg-rose-200 inline-block mr-1"></span>Expense</span>
        </div>
      </div>
      <div className="mb-1">
        <span className="text-3xl font-bold tracking-tight text-amber-900">$7,000,000,000</span>
      </div>
      <div className="mb-4">
        <span className="text-sm text-amber-500">Awaiting balance: $78,234.00</span>
      </div>
      {/* Real Graph with Recharts */}
      <div className="flex-1 flex flex-col justify-end min-h-[180px]">
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <XAxis dataKey="month" tick={{ fill: '#bfa76a', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Legend verticalAlign="top" height={36} iconType="plainline"/>
            <Line type="monotone" dataKey="profit" stroke="#FDE68A" strokeWidth={3} dot={false} name="Profit" />
            <Line type="monotone" dataKey="expense" stroke="#FCA5A5" strokeWidth={3} dot={false} name="Expense" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 