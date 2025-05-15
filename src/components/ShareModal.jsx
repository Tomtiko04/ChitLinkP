import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import ShareProfileImage from "../assets/images/share-image.png"

const socialIcons = [
  { platform: 'WhatsApp', icon: 'logos:whatsapp-icon'},
  { platform: 'Twitter', icon: 'devicon:twitter' },
  { platform: 'LinkedIn', icon: 'devicon:linkedin' },
  { platform: 'Instagram', icon: 'skill-icons:instagram' },
  { platform: 'TikTok', icon: 'logos:tiktok-icon' },
  { platform: 'Telegram', icon: 'logos:telegram' },
];

export default function ShareModal({ isOpen, onClose, type = 'savings' }) {
  const [copied, setCopied] = useState(false);
  const shareLink = 'wr3789luytrvbnm.i75dfghjk';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleOverlayClick}
    >
      <div className="w-[400px] rounded-[31.32px] bg-white" onClick={e => e.stopPropagation()}>
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center justify-center gap-1 rounded-t-[31.32px] bg-[#EDEAE4] px-6 pt-6 pb-3">
            <Icon icon="flowbite:link-outline" fontSize={24} color="C59139" />
            <div>
              <h2 className="text-lg font-extrabold text-[#22180E]">Share link</h2>
            </div>
          </div>
          <div className="my-4 h-25 w-25 overflow-hidden rounded-full">
            <img
              src={ShareProfileImage}
              alt="Profile Image"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mb-2 text-xl font-extrabold text-[#22180E]">Ajaleks package</h3>
          <div className="mb-8 flex items-center gap-4 text-sm text-[#22180E]">
            <span className="flex items-center">
              <Icon icon="fluent-mdl2:money" fontSize={20} className="mr-2 text-[#000000]/25" />
              $1.2m+ managed
            </span>
            <span className="flex items-center">
              <Icon icon="tdesign:member-filled" fontSize={16} className="mr-2 text-[#000000]/25" />
              1,256 members
            </span>
          </div>

          <div className="w-full rounded-b-[31.32px] bg-[#EDEAE4] px-6 py-4">
            <div className="mt-2 mb-6 flex flex-wrap justify-center gap-2">
              {socialIcons.map((social) => (
                <button
                  key={social.platform}
                  tooltip={social.platform}
                  className="cursor-pointer rounded-full bg-gray-100 p-4 text-gray-600 hover:bg-gray-200"
                >
                  <Icon icon={social.icon} fontSize={20} />
                </button>
              ))}
            </div>

            <div className="mb-4 w-full rounded-[10px] bg-white p-3.5">
              <div className="flex items-center justify-between font-bold">
                <span className="text-sm text-[#22180E]">{shareLink}</span>
                <button
                  onClick={handleCopyLink}
                  className="cursor-pointer border-l-2 border-l-[#EDEAE4] pl-3 !text-sm text-[#C59139] hover:text-[#B07E2B]"
                >
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            </div>

            <button
              className="w-full rounded-[10px] bg-[#C59139] py-3 text-center !text-base !font-bold cursor-pointer text-white hover:bg-[#B07E2B]"
              onClick={onClose}
            >
              Share Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
