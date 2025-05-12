import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileImage from "../assets/images/Profile-image.png";
import { Icon } from '@iconify/react';

const routeTitles = {
  '/': 'Dashboard',
  '/savings': 'Savings',
  '/contacts': 'Contacts',
  '/finance': 'Finance',
  '/profile': 'Profile',
};

export default function Header() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Dashboard';

  return (
    <div className="flex items-center justify-between px-2 lg:px-4">
      <div className="flex items-center gap-3">
        {title !== 'Dashboard' && (
          <Icon icon="weui:back-filled" fontSize={20} color="#CE973A" className="cursor-pointer" />
        )}
        <h1 className="truncate text-xl font-extrabold text-[#22180E] lg:text-[24px]">{title}</h1>
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        {/* Notification bell */}
        <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#CE973A] transition-colors duration-200 hover:bg-[#CE973A]/80">
          <Icon icon="garden:notification-fill-12" fontSize={16} color="#ffffff" />
        </button>
        {/* Merchant profile */}
        <div className="flex items-center gap-2 lg:gap-3">
          <img
            src={ProfileImage}
            alt="Merchant image"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="hidden flex-col sm:flex">
            <span className="text-xs font-bold text-[#241505]">Merchant's Name</span>
            <span className="text-[10px] font-semibold text-[#241505]/50">Merchant's@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
