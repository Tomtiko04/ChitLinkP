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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="w-[400px] rounded-[20px] bg-white p-6">
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center justify-center gap-x-2 bg-[#EDEAE4]">
            <Icon icon="flowbite:link-outline" fontSize={20} color="C59139" />
            <div>
              <h2 className="mb-4 text-lg font-bold text-[#22180E]">Share link</h2>
            </div>
          </div>
          <div className="mb-4 h-25 w-25 overflow-hidden rounded-full">
            <img
              src={ShareProfileImage}
              alt="Profile Image"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mb-2 text-xl font-extrabold text-[#22180E]">Ajaleks package</h3>
          <div className="mb-4 flex items-center gap-4 text-sm text-[#22180E]">
            <span className="flex items-center">
              <Icon icon="fluent-mdl2:money" fontSize={20} className="mr-2 text-[#000000]/25" />
              $1.2m+ managed
            </span>
            <span className="flex items-center">
              <Icon icon="tdesign:member-filled" fontSize={16} className="mr-2 text-[#000000]/25" />
              1,256 members
            </span>
          </div>

          <div className="bg-[#EDEAE4]">
            <div className="mb-6 flex flex-wrap justify-center gap-4">
              {socialIcons.map((social) => (
                <button
                  key={social.platform}
                  tooltip={social.platform}
                  className="cursor-pointer rounded-full bg-gray-100 p-3 text-xl text-gray-600 hover:bg-gray-200"
                >
                  <Icon icon={social.icon} />
                </button>
              ))}
            </div>

            <div className="mb-4 w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-between font-bold">
                <span className="text-sm text-[#22180E]">{shareLink}</span>
                <button
                  onClick={handleCopyLink}
                  className="cursor-pointer text-[#C59139] hover:text-[#B07E2B]"
                >
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            </div>

            <button
              className="w-full rounded-[10px] bg-[#CE973A] py-3 text-center text-lg font-bold text-white hover:bg-[#B07E2B]"
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
