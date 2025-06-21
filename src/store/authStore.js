import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: (userData, token) => set({ isAuthenticated: true, user: userData, token }),
  logout: () => set({ isAuthenticated: false, user: null, token: null }),
}));

export default useAuthStore;
