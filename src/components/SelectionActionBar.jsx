import React from 'react';
import { Icon } from '@iconify/react';
import useContactSelectionStore from '../store/contactSelectionStore';

const SelectionActionBar = () => {
  const { selectedContactIds, deselectAll } = useContactSelectionStore();
  const selectedCount = selectedContactIds.length;

  if (selectedCount === 0) {
    return null;
  }

  const handleAddToGroup = () => {
    console.log(`Adding ${selectedCount} contacts to a group...`);
    // You can trigger a modal here to select a group
  };

  const handleDelete = () => {
    console.log(`Deleting ${selectedCount} contacts...`);
    // You can trigger a confirmation modal here
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button 
              onClick={deselectAll}
              className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all"
              aria-label="Deselect all"
            >
              <Icon icon="heroicons-outline:x" className="h-6 w-6" />
            </button>
            <p className="font-medium text-white">{selectedCount} selected</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={handleAddToGroup}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-all"
            >
              <Icon icon="heroicons-outline:plus-sm" className="h-5 w-5" />
              <span className="hidden sm:inline">Add to Group</span>
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-all"
            >
              <Icon icon="solar:trash-bin-trash-bold" className="h-5 w-5" />
              <span className="hidden sm:inline">Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionActionBar;
