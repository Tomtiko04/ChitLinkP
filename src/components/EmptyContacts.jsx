import { Icon } from "@iconify/react";

const EmptyContacts = () => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-md sm:p-10">
      <p className="mb-6 text-base text-[#6C4119] sm:text-lg">You have no contacts added yet</p>
      <button className="mx-auto flex cursor-pointer items-center space-x-2 rounded-lg bg-[#CE973A] px-5 py-3 font-bold text-white">
        <Icon icon="solar:user-plus-bold" className="h-6 w-6 sm:h-7 sm:w-7" />
        <span>Add Contact</span>
      </button>
    </div>
  );
};

export default EmptyContacts;