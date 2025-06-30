import { Icon } from '@iconify/react';
import { useState } from 'react';

const ContactsTab = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Groups', 'Frequent Members'];

  return (
    <div className="pt-16">
      <div className="flex flex-col items-center justify-between bg-[#EBEAE7] px-4 sm:flex-row lg:px-8">
        {/* Left Section: Tabs and Add Button */}
        <div className="mb-4 flex items-center space-x-4 sm:mb-0">
          <div className="flex gap-9 text-[#2415054A]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer pb-8 transition-colors duration-300 ${
                  activeTab === tab
                    ? 'border-b-4 border-[#CE973A] font-extrabold text-[#CE973A]'
                    : 'font-semibold text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'All' ? 'All (453)' : tab}
              </button>
            ))}
          </div>
          <button className="rounded-lg bg-[#F5F4F1] p-3 shadow-sm">
            <Icon icon="ic:round-plus" className="text-[#C59139]" />
          </button>
        </div>

        {/* Right Section: Search and Filter */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg bg-white p-2 pr-8 text-[#6C4119] shadow-sm placeholder:text-[#62340A4D] focus:outline-none"
            />
            <Icon
              icon="iconamoon:search"
              fontSize={20}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-[#CE973A]"
            />
          </div>
          {/* For bulk import */}
          <button className="rounded-lg bg-[#CE973A] p-2 shadow-sm">
            <Icon icon="solar:user-plus-bold" className="text-white" />
          </button>
          <button className="rounded-lg bg-[#CE973A] p-2 shadow-sm">
            <Icon icon="solar:user-plus-bold" className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactsTab;
