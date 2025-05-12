import React from 'react';

const SavingsCard = ({ name, nextCollector, currentSlot, totalSlots }) => (
  <div className="rounded-lg bg-white p-4">
    <div className="flex items-center gap-3">
      <img 
        src="/avatar-placeholder.jpg" 
        alt={name} 
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <h3 className="text-sm font-medium text-[#22180E]">Savings Name</h3>
        <p className="text-[#22180E]">{name}</p>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-sm text-[#9F9F9F]">Collecting Next</p>
      <p className="text-[#22180E]">{nextCollector}</p>
    </div>
    <div className="mt-4">
      <p className="text-sm text-[#9F9F9F]">Slot No.</p>
      <div className="relative mt-1 h-2 w-full rounded-full bg-[#F5F5F5]">
        <div 
          className="absolute left-0 top-0 h-full rounded-full bg-[#E9B86C]" 
          style={{ width: `${(currentSlot / totalSlots) * 100}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between text-xs text-[#9F9F9F]">
        <span>{currentSlot}</span>
        <span>{totalSlots}</span>
      </div>
    </div>
  </div>
);

export default function OngoingSavings() {
  const savingsData = [
    {
      name: "Lovely Sisters",
      nextCollector: "Ajanlekoko Mariam",
      currentSlot: 6,
      totalSlots: 10
    },
    {
      name: "Lovely Sisters",
      nextCollector: "Ajanlekoko Mariam",
      currentSlot: 6,
      totalSlots: 10
    }
  ];

  return (
    <div className="rounded-lg bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-[#22180E]">Ongoing Savings</h2>
        <button className="text-sm text-[#9F9F9F]">See All</button>
      </div>
      <div className="mt-4 grid gap-4">
        {savingsData.map((savings, idx) => (
          <SavingsCard key={idx} {...savings} />
        ))}
      </div>
    </div>
  );
}
