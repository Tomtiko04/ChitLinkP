import { create } from 'zustand';

const useTabStore = create((set) => ({
  activeTab: 'allContacts',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useTabStore;
