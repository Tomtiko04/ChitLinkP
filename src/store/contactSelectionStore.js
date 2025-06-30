import { create } from 'zustand';

const useContactSelectionStore = create((set) => ({
  selectedContactIds: [],
  toggleContact: (id) =>
    set((state) => {
      const isSelected = state.selectedContactIds.includes(id);
      if (isSelected) {
        return { selectedContactIds: state.selectedContactIds.filter((contactId) => contactId !== id) };
      } else {
        return { selectedContactIds: [...state.selectedContactIds, id] };
      }
    }),
  selectAll: (ids) => set({ selectedContactIds: ids }),
  deselectAll: () => set({ selectedContactIds: [] }),
}));

export default useContactSelectionStore;
