import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
    <div className="w-full rounded-[20px] border border-[#EDEAE4] bg-white p-6">
      <div className="mb-6 flex-col items-center justify-between">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-1 text-sm font-bold text-[#89785C]">Balance</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center text-xs font-medium text-[#B19A85]">
              <span className="mr-2 inline-block h-2 w-2 bg-[#CE973A]"></span>
              Profit
            </span>
            <span className="flex items-center text-xs font-medium text-[#B19A85]">
              <span className="mr-2 inline-block h-2 w-2 bg-[#E06E65]"></span>
              Expense
            </span>
          </div>
        </div>

        <div className="mt-3 text-2xl font-extrabold text-[#4C3308]">$7,000,000,000</div>
        <div className="text-xs font-medium text-[#2E1B07]/50">Awaiting balance: $78,234.00</div>
      </div>
      <div className="h-[160px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#89785C', fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#CE973A"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#CE973A' }}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#FCA5A5"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#FCA5A5' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
