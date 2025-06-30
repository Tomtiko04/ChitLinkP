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
      className="h-4 w-4 rounded border-gray-600 bg-gray-900 text-amber-600 focus:ring-amber-500 cursor-pointer"
    />
  );

  const sharedAvatarAndName = (
    <div className="flex items-center gap-3">
      <img className="h-8 w-8 rounded-full" src={contact.avatar || `https://i.pravatar.cc/40?u=${contact.id}`} alt="Avatar" />
      <span className="font-medium text-amber-500 whitespace-nowrap">{contact.name}</span>
    </div>
  );

  const sharedThriftGroups = (
    <div className="flex items-center -space-x-2">
      {contact.thriftGroups?.slice(0, 4).map((group, index) => (
        <div
          key={group.id || index}
          className={`h-6 w-6 rounded-full border-2 border-gray-800 ${getGroupColor(index)}`}
          title={group.name}
        ></div>
      ))}
    </div>
  );

  const sharedDeleteButton = (
    <button className="text-gray-400 hover:text-red-500 transition-colors">
      <Icon icon="solar:trash-bin-trash-bold" className="w-5 h-5" />
    </button>
  );

  if (view === 'card') {
    return (
      <div className={`p-4 rounded-lg border border-gray-700 bg-gray-800 text-sm text-gray-300 ${isSelected ? 'bg-gray-900 ring-2 ring-amber-500' : ''}`}>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            {sharedCheckbox}
            {sharedAvatarAndName}
          </div>
          {sharedDeleteButton}
        </div>
        <div className="space-y-2 pl-8">
          <p><span className="font-semibold text-gray-400">Email:</span> {contact.email}</p>
          <p><span className="font-semibold text-gray-400">Phone:</span> {contact.phone}</p>
          <p><span className="font-semibold text-gray-400">Occupation:</span> {contact.occupation}</p>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-400">Groups:</span>
            {sharedThriftGroups}
          </div>
        </div>
      </div>
    );
  }

  // Default to table view
  return (
    <tr className={`border-b border-gray-700 text-sm text-gray-300 hover:bg-gray-800 ${isSelected ? 'bg-gray-900' : ''}`}>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center gap-4">
          {sharedCheckbox}
          {sharedAvatarAndName}
        </div>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">{contact.email}</td>
      <td className="px-6 py-3 whitespace-nowrap">{contact.phone}</td>
      <td className="px-6 py-3 whitespace-nowrap">{contact.occupation}</td>
      <td className="px-6 py-3 whitespace-nowrap">{sharedThriftGroups}</td>
      <td className="px-6 py-3 whitespace-nowrap text-right">{sharedDeleteButton}</td>
    </tr>
  );
};

export default ContactItem;
