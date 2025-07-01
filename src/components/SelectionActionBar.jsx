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
    <div className="animate-in slide-in-from-bottom fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white shadow-lg duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={deselectAll}
              className="rounded-full p-2 cursor-pointer text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-800 focus:ring-2 focus:ring-[#cf983a] focus:ring-offset-2 focus:outline-none"
              aria-label="Deselect all"
            >
              <Icon icon="heroicons-outline:x" className="h-6 w-6" />
            </button>
            <p className="font-medium text-[#241505]">{selectedCount} selected</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={handleAddToGroup}
              className="flex cursor-pointer items-center gap-2 rounded-md  bg-[#cf983a] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#cf983a]/90 sm:px-4"
            >
              <Icon icon="heroicons-outline:plus-sm" className="h-5 w-5" />
              <span className="hidden sm:inline">Add to Thrift Group</span>
            </button>
            <button
              onClick={handleDelete}
              className="flex cursor-pointer items-center gap-2 rounded-md bg-[#C35549] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#C35549]/90 sm:px-4"
            >
              <Icon icon="solar:trash-bin-trash-bold" className="h-5 w-5" />
              <span className="hidden sm:inline">Delete Contacts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionActionBar;
