import React from 'react';
import { Icon } from '@iconify/react';
import useContactSelectionStore from '../store/contactSelectionStore';

// Dummy data for thrift groups, replace with real data as needed
const getGroupColor = (index) => {
  const colors = ['bg-yellow-500', 'bg-blue-400', 'bg-pink-500', 'bg-indigo-500'];
  return colors[index % colors.length];
};

const ContactItem = ({ contact }) => {
  const { selectedContactIds, toggleContact } = useContactSelectionStore();
  const isSelected = selectedContactIds.includes(contact.id);

  return (
    <tr className={`border-b border-gray-700 text-sm text-gray-300 hover:bg-gray-800 ${
      isSelected ? 'bg-gray-900' : ''
    }`}>
      {/* Name Cell with Checkbox and Avatar */}
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleContact(contact.id)}
            className="h-4 w-4 rounded border-gray-600 bg-gray-900 text-amber-600 focus:ring-amber-500 cursor-pointer"
          />
          <img className="h-8 w-8 rounded-full" src={contact.avatar || `https://i.pravatar.cc/40?u=${contact.id}`} alt="Avatar" />
          <span className="font-medium text-amber-500">{contact.name}</span>
        </div>
      </td>

      {/* Other Cells */}
      <td className="px-6 py-3 whitespace-nowrap">{contact.email}</td>
      <td className="px-6 py-3 whitespace-nowrap">{contact.phone}</td>
      <td className="px-6 py-3 whitespace-nowrap">{contact.occupation}</td>

      {/* Thrift Groups Cell */}
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center -space-x-2">
          {contact.thriftGroups?.slice(0, 4).map((group, index) => (
            <div
              key={group.id || index}
              className={`h-6 w-6 rounded-full border-2 border-gray-800 ${getGroupColor(index)}`}
              title={group.name}
            ></div>
          ))}
        </div>
      </td>

      {/* Actions Cell */}
      <td className="px-6 py-3 whitespace-nowrap text-right">
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <Icon icon="solar:trash-bin-trash-bold" className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
