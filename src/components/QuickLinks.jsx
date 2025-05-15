import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import ShareModal from './ShareModal';

const links = [
  { label: 'Create savings', icon: 'material-symbols-light:add-box-outline-rounded' },
  { label: 'Share savings link', icon: 'uit:upload-alt' },
  { label: 'Share profile link', icon: 'fluent:share-20-regular' },
  { label: 'Create Contact', icon: 'proicons:person-add-2' },
];


export default function QuickLinks() {
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareType, setShareType] = useState('');

  const handleShare = (label) => {
    if (label === 'Share savings link') {
      setShareType('savings');
      setShowShareModal(true);
    } else if (label === 'Share profile link') {
      setShareType('profile');
      setShowShareModal(true);
    }
  };

  return (
    <>
      <div className="w-full rounded-[31.32px] border border-[#EDEAE4] bg-white p-6">
        <h2 className="mb-4 text-sm font-bold text-[#89785C]">Quick Links</h2>
        <div className="grid grid-cols-2 gap-2">
          {links.map((link, idx) => (
            <button
              key={idx}
              className="flex cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#F4F3F0] p-6 transition hover:bg-[#F5EFE8] focus:outline-none"
              onClick={() => handleShare(link.label)}
            >
              <span className="mb-2 rounded-full bg-[#CE973A] p-2 text-white">
                <Icon icon={link.icon} className="text-2xl" />
              </span>
              <span className="text-xs font-bold text-[#62340A]">{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        type={shareType}
      />
    </>
  );
}