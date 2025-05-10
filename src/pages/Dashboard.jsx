import React from 'react'
import BalanceCard from '../components/BalanceCard';
import DashboardStatCard from '../components/DashboardStatCard';
import QuickLinks from '../components/QuickLinks';
import BalanceGraphCard from '../components/BalanceGraphCard';

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
      <div className="flex flex-col lg:flex-row gap-4 mt-8 w-full">
        <div className="flex-1 max-w-md w-full">
          <QuickLinks />
        </div>
        <div className="flex-[2] w-full">
          <BalanceGraphCard />
        </div>
      </div>
    </div>
  );
}
