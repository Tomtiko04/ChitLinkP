import React from 'react';
import { Icon } from '@iconify/react';
import useTabStore from '../store/useTabStore';
import { useNavigate, Link } from 'react-router-dom';

const ContactsTab = () => {
  const navigate = useNavigate();
  const { activeTab, setActiveTab } = useTabStore();
  const tabs = [
    { id: 'allContacts', label: 'All' },
    { id: 'allGroups', label: 'Groups' },
  ];

  return (
    <div className="h-full flex flex-col pt-16">
      <div className="bg-[#EBEAE7] px-4 sm:py-2 py-0 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-end sm:justify-between">
          {/* Left Section: Tabs and Add Button */}
          <div className="flex items-end space-x-4">
            <div className="flex space-x-4 sm:space-x-8 text-[#2415054A]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap cursor-pointer border-b-4 py-2 transition-colors duration-300 focus:outline-none ${
                    activeTab === tab.id
                      ? 'border-[#CE973A] font-extrabold text-[#CE973A]'
                      : 'border-transparent font-semibold text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <button className="rounded-lg bg-[#F5F4F1] p-3 shadow-sm cursor-pointer">
              <Icon icon="ic:round-plus" className="text-[#C59139]" />
            </button>
          </div>

          {/* Right Section: Search and Filter */}
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <div className="relative flex-grow sm:flex-grow-0">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg bg-white p-2 pr-8 text-[#6C4119] shadow-sm placeholder:text-[#62340A4D] focus:outline-none"
              />
              <Icon
                icon="iconamoon:search"
                fontSize={20}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-[#CE973A]"
              />
            </div>
            <Link to="import-contacts" className="flex-shrink-0 flex items-center gap-2 px-4 py-2 text-white bg-[#CE973A] rounded-lg hover:bg-[#CE973A] shadow-sm">
              <Icon icon="mdi:import" />
              <span>Import Contacts</span>
            </Link>
            <Link to="/add-contact" className="flex-shrink-0 cursor-pointer rounded-lg bg-[#CE973A] p-2 shadow-sm">
              <Icon icon="solar:user-plus-bold" className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsTab;
