import React from 'react';
import ProfileImage from '../assets/images/Profile-image.png';

const SavingsCard = ({ name, nextCollector, currentSlot, totalSlots }) => (
  <div className="rounded-[20px] border border-[#F4F3F0] bg-white p-4">
    <div className="flex items-center justify-end">
      <img src={ProfileImage} alt={name} className="h-10 w-10 rounded-full object-cover" />
    </div>

    <div>
      <h3 className="text-sm text-[#89785C]">Savings Name</h3>
      <p className="mt-1 text-[15px] font-bold text-[#4C3308]">{name}</p>
    </div>

    <div className="mt-4 rounded-[7px] bg-[#F4F3F0]">
      <h3 className="text-sm text-[#89785C]">Collecting Next</h3>
      <p className="mt-1 text-[15px] font-bold text-[#4C3308]">{nextCollector}</p>
    </div>

    <div className="mt-4">
      <h3 className="text-sm text-[#89785C]">Slot No.</h3>
      <div className="relative mt-1 h-2 w-full rounded-full bg-[#F5F5F5]">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-[#E9B86C]"
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
    <div className="h-full rounded-[31.32px] border border-[#EDEAE4] bg-white p-6 flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-bold text-[#89785C]">Ongoing Savings</h2>
        <button className="cursor-pointer text-xs font-light text-[#AC927A] hover:underline">
          See All
        </button>
      </div>
      <div className="mt-4 grid flex-1 gap-4 sm:grid-cols-2 overflow-y-auto">
        {savingsData.map((savings, idx) => (
          <SavingsCard key={idx} {...savings} />
        ))}
      </div>
    </div>

    // <div className="rounded-[31.32px] border border-[#EDEAE4] bg-white p-6">
    //   <div className="mb-4 flex items-center justify-between text-xs">
    //     <h2 className="text-sm font-bold text-[#89785C]">Ongoing Savings</h2>
    //     <button className=" font-light text-[#AC927A] cursor-pointer hover:underline">See All</button>
    //   </div>
    //   <div className="mt-4 grid sm:grid-cols-2 gap-4">
    //     {savingsData.map((savings, idx) => (
    //       <SavingsCard key={idx} {...savings} />
    //     ))}
    //   </div>
    // </div>
  );
}
