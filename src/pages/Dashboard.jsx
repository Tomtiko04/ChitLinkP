import React from 'react';
import BalanceCard from '../components/BalanceCard';
import DashboardStatCard from '../components/DashboardStatCard';
import QuickLinks from '../components/QuickLinks';
import BalanceGraphCard from '../components/BalanceGraphCard';
import OngoingSavings from '../components/OngoingSavings';
import RecentTransactions from '../components/RecentTransactions';
import { Icon } from '@iconify/react';

const statCards = [
  {
    title: 'Amount Managed',
    subtitle: 'In the last 7 days',
    value: '$100m',
    // icon: <Icon icon="lucide:arrow-up" />,
    icon: '↑',
    // iconColor: 'text-amber-500',
    // bg: 'bg-white',
    // textColor: '#89785C',
  },
  {
    title: 'No. of Clients',
    subtitle: 'In the last 7 days',
    value: '2,000',
    icon: '↑',
    // icon: <Icon icon="lucide:arrow-up" />,
    // iconColor: 'text-amber-500',
    // bg: 'bg-white',
    // textColor: '#89785C',
  },
];

export default function Dashboard() {
  return (
    <div className="pb-10">
      {/* User greeting */}
      <h1 className="text-xl font-medium text-[#22180E]">Hello, marriam</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-3">
          <BalanceCard />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:col-span-2 lg:col-span-3">
          {statCards.map((card, idx) => (
            <DashboardStatCard key={idx} {...card} />
          ))}
        </div>
      </div>
      {/* In a flex Quick links and balance graph goes here*/}
      <div className="mt-4 flex w-full flex-col gap-4 lg:flex-row">
        <div className="w-full max-w-md flex-[1.5]">
          <QuickLinks />
        </div>
        <div className="w-full flex-[2]">
          <BalanceGraphCard />
        </div>
      </div>
      {/* Ongoing Savings and Recent Transactions */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="h-[400px] lg:col-span-3">
          <OngoingSavings />
        </div>
        <div className="h-[400px] lg:col-span-2">
          <RecentTransactions />
        </div>
      </div>

      {/* Ongoing Savings and Recent Transactions */}
      {/* <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <OngoingSavings />
        </div>
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
      </div> */}
    </div>
  );
}
