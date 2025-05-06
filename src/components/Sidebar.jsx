import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/Logo.png";

const navItems = [
  { label: 'Dashboard', path: '/', icon: '⌂' },
  { label: 'Savings', path: '/savings', icon: 'I' },
  { label: 'Contacts', path: '/contacts', icon: '⚇' },
  { label: 'Finance', path: '/finance', icon: '⚿' },
  { label: 'Profile', path: '/profile', icon: '⚪' },
];

const bottomItems = [
  { label: 'Support', path: '/support', icon: '⌾' },
  { label: 'Logout', path: '/logout', icon: '⇥' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed top-0 left-0 flex h-screen w-64 flex-col bg-white shadow-md transition-transform duration-500 z-40 
        ${!isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}`}
    >
      {/* Logo section */}
      <div className="p-8 flex items-center justify-between">
        <img src={logo} alt="chitLink" className="h-8" />
        <button
          onClick={onClose}
          className="p-2 -mr-2 text-gray-600 hover:text-gray-900 lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Main navigation */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) onClose(); // Close sidebar on mobile after clicking a link
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-8 py-2 text-[15px] transition-colors duration-200 relative ${
                    isActive
                      ? 'bg-amber-200 font-medium text-amber-800 border-r-4 border-amber-500'
                      : 'text-gray-600 hover:text-gray-800'
                  }`
                }
                end={item.path === '/'}
              >
                <span className="w-5 text-center">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section with divider */}
      <div className="px-4 pb-6">
        <div className="mb-4 h-px bg-gray-200"></div>
        <ul className="space-y-3">
          {bottomItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) onClose(); // Close sidebar on mobile after clicking a link
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 text-[15px] transition-colors duration-200 ${item.label === 'Logout'
                    ? 'text-red-500 hover:text-red-600'
                    : isActive
                      ? 'font-medium text-amber-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`
                }
              >
                <span className="w-5 text-center">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
