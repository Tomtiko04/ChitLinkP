import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: (userData, token) => set({ isAuthenticated: true, user: userData, token }),
  signup: (userData, token, email) => set({isAuthenticated: true, user: userData, token, email}),
  logout: () => set({ isAuthenticated: false, user: null, token: null }),
}));

export default useAuthStore;
