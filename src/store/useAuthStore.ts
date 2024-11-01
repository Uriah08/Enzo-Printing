import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set: (arg0: { isAuthenticated: boolean; username: string | null; }) => void) => ({
  isAuthenticated: false,
  username: null,
  login: async (username: string, password: string) => {
    try {
      const response = await fetch('/api/user');
      const user = await response.json();

      if (!user || user.name !== username || user.password !== password) {
        throw new Error('Invalid credentials');
      }

      set({ isAuthenticated: true, username });
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);

      setTimeout(() => {
        set({ isAuthenticated: false, username: null });
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
      }, 10 * 60 * 60 * 1000);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  logout: () => {
    set({ isAuthenticated: false, username: null });
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
  },
}));
