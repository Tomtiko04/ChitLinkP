import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      email: null,
      login: (userData, token) => set({ isAuthenticated: true, user: userData, token }),
      signup: (userData, token, email) => set({ isAuthenticated: true, user: userData, token, email }),
      logout: () => set({ isAuthenticated: false, user: null, token: null, email: null }),
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
    }
  )
);

export default useAuthStore;
