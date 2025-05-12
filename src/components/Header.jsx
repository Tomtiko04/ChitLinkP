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
    <header className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2">
        {title !== 'Dashboard' && <Icon icon="weui:back-filled" className="text-xl" />}
        <h1
          className={`font-bold ${title === 'Dashboard' ? 'text-[32px] text-[#1A1A1A]' : 'text-2xl text-amber-900'}`}
        >
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#CE973A] transition-colors duration-200 hover:bg-[#CE973A]/80">
          <Icon icon="garden:notification-fill-12" fontSize={16} color="#ffffff" />
        </button>
        {/* Merchant profile */}
        <div className="flex items-center justify-center gap-3">
          <img
            src={ProfileImage}
            alt="Merchant image"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#241505]">Merchant's Name</span>
            <span className="text-[10px] font-semibold text-[#241505]/50">
              Merchant's@email.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
