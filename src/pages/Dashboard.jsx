import React from 'react'
import BalanceCard from '../components/BalanceCard';
import DashboardStatCard from '../components/DashboardStatCard';

const statCards = [
  {
    title: 'Amount Managed',
    subtitle: 'In the last 7 days',
    value: '$100m',
    icon: '↑',
    iconColor: 'text-amber-500',
    bg: 'bg-white',
    textColor: 'text-amber-900',
  },
  {
    title: 'No. of Clients',
    subtitle: 'In the last 7 days',
    value: '2,000',
    icon: '↑',
    iconColor: 'text-amber-500',
    bg: 'bg-white',
    textColor: 'text-amber-900',
  },
];

export default function Dashboard() {
  return (
    <div>
      {/* User greeting */}
      <h1 className="text-[#22180E] text-xl font-medium">Hello, marriam</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <BalanceCard />
        {statCards.map((card, idx) => (
          <DashboardStatCard key={idx} {...card} />
        ))}
      </div>
      {/* In a flex Quick links and balance graph goes here*/}
    </div>
  );
}
