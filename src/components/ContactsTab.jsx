import { Icon } from '@iconify/react';
import { useState } from 'react';

const ContactsTab = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Groups', 'Frequent Members'];

  return (
    <div className="pt-16.5">
      <div className="flex flex-col items-center justify-between bg-[#FDFBF7] sm:flex-row px-4 lg:px-8">
        {/* Left Section: Tabs and Add Button */}
        <div className="mb-4 flex items-center space-x-4 sm:mb-0">
          <div className="flex space-x-4 text-gray-500">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 transition-colors duration-300 ${
                  activeTab === tab
                    ? 'border-b-2 border-[#D4A056] font-bold text-[#D4A056]'
                    : 'hover:text-gray-700'
                }`}
              >
                {tab === 'All' ? 'All (453)' : tab}
              </button>
            ))}
          </div>
          <button className="rounded-lg bg-white p-2 shadow-sm">
            <Icon icon="ic:round-plus" className="text-[#D4A056]" />
          </button>
        </div>

        {/* Right Section: Search and Filter */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg bg-white p-2 pr-8 shadow-sm focus:outline-none"
            />
            <Icon
              icon="ic:round-search"
              className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400"
            />
          </div>
          <button className="rounded-lg bg-[#D4A056] p-2 shadow-sm">
            <Icon icon="solar:user-plus-bold" className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactsTab;
