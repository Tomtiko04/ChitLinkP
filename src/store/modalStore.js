import { create } from 'zustand';

const useModalStore = create((set) => ({
  isOpen: false,
  onConfirm: null,
  showModal: (onConfirm) => set({ isOpen: true, onConfirm }),
  hideModal: () => set({ isOpen: false, onConfirm: null }),
}));

export default useModalStore;
