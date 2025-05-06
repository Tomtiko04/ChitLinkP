import React from 'react';
import { useLocation } from 'react-router-dom';

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
    <div className="flex items-center justify-between px-6 py-4">
      {title === 'Dashboard' ? (
        <div>
          <h1 className="text-2xl font-bold text-amber-900">{title}</h1>
        </div>
      ) : (
        <div>
          <p>Back</p>
          <h1 className="text-2xl font-bold text-amber-900">{title}</h1>
        </div>
      )}
      <div className="flex items-center space-x-4">
        {/* Notification bell */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
          <span role="img" aria-label="bell">
            🔔
          </span>
        </div>
        {/* Merchant profile */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
          <span role="img" aria-label="profile">
            👤
          </span>
        </div>
      </div>
    </div>
  );
}
