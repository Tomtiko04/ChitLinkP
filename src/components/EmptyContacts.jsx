import { Icon } from "@iconify/react";

const EmptyContacts = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-[#C7964A] text-center max-w-sm mx-auto">
      <p className="text-gray-600 text-xl mb-6">You have no contacts added yet</p>
      <button className="bg-[#D4A056] text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-opacity-90 transition-colors flex items-center space-x-2 mx-auto">
        <Icon icon="solar:user-plus-bold" className="w-6 h-6" />
        <span>Add Contact</span>
      </button>
    </div>
  );
};

export default EmptyContacts;
