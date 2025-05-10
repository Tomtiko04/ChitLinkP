import React from 'react';

const links = [
  { label: 'Create savings', icon: '🪙' },
  { label: 'Share savings link', icon: '📤' },
  { label: 'Share profile link', icon: '🔗' },
  { label: 'Create Contact', icon: '👥' },
];

export default function QuickLinks() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow flex flex-col w-full max-w-md min-h-[340px]">
      <h2 className="text-amber-900 text-lg font-semibold mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 gap-4">
        {links.map((link, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center justify-center bg-amber-50 rounded-xl py-6 transition hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label={link.label}
          >
            <span className="bg-amber-200 text-amber-700 rounded-full p-3 mb-2 text-2xl">{link.icon}</span>
            <span className="text-amber-900 font-medium text-sm">{link.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 