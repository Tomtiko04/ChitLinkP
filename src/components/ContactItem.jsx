import React from 'react';
import { Icon } from '@iconify/react';
import useContactSelectionStore from '../store/contactSelectionStore';

const getGroupColor = (index) => {
  const colors = ['bg-yellow-500', 'bg-blue-400', 'bg-pink-500', 'bg-indigo-500'];
  return colors[index % colors.length];
};

const ContactItem = ({ contact, view = 'table' }) => {
  const { selectedContactIds, toggleContact } = useContactSelectionStore();
  const isSelected = selectedContactIds.includes(contact.id);

  const sharedCheckbox = (
    <input
      type="checkbox"
      checked={isSelected}
      onChange={() => toggleContact(contact.id)}
      className="h-4 w-4 rounded border-[#00000040] cursor-pointer"
    />
  );

  const sharedAvatarAndName = (
    <div className="flex items-center gap-3">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src={contact.profile_image || `https://i.pravatar.cc/40?u=${contact.id}`}
        alt="Avatar Image"
      />
      <span className="font-semibold whitespace-nowrap text-[#241505]">{contact.name}</span>
    </div>
  );

  const sharedThriftGroups = (
    <div className="flex items-center -space-x-2">
      {contact.groups?.slice(0, 4).map((group, index) => (
        <div
          key={group.id || index}
          className={`h-6 w-6 rounded-full border-2 border-gray-800 ${getGroupColor(index)}`}
          title={group.name}
        ></div>
      ))}
    </div>
  );

  const sharedDeleteButton = contact.deletable ? (
    <button className="cursor-pointer text-[#C35549] transition-colors hover:text-red-500">
      <Icon icon="mingcute:delete-2-fill" className="h-5 w-5" />
    </button>
  ) : null;

  if (view === 'card') {
    return (
      <div
        className={`rounded-lg bg-[#f5f4f0] p-4 text-sm text-[#62340A] ${isSelected ? 'bg-[#f5f4f0] ring-2 ring-[#cf983a]' : ''}`}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {sharedCheckbox}
            {sharedAvatarAndName}
          </div>
          {sharedDeleteButton}
        </div>
        <div className="space-y-2 pl-8">
          <p>
            <span className="font-semibold text-[#241505]">Email:</span> {contact.email}
          </p>
          <p>
            <span className="font-semibold text-[#241505]">Phone:</span> {contact.phone_number}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#241505]">Groups:</span>
            {sharedThriftGroups}
          </div>
        </div>
      </div>
    );
  }

  // Default to table view
  return (
    <tr className={`text-xs text-[#62340A] font-normal hover:cursor-pointer hover:bg-[#FFFAF1] ${isSelected ? 'bg-[#FFFAF1]' : ''}`}>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center gap-4">
          {sharedCheckbox}
          {sharedAvatarAndName}
        </div>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">{contact.email}</td>
      <td className="px-6 py-3 whitespace-nowrap">{contact.phone_number}</td>
      <td className="px-6 py-3 whitespace-nowrap">{sharedThriftGroups}</td>
      <td className="px-6 py-3 text-right whitespace-nowrap">{sharedDeleteButton}</td>
    </tr>
  );
};

export default ContactItem;
