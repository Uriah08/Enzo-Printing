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
  login: (username: string, password: string) => {
    if (username === process.env.NEXT_PUBLIC_USERNAME && password === process.env.NEXT_PUBLIC_PASSWORD) {
      set({ isAuthenticated: true, username });
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('username', username);

      setTimeout(() => {
        set({ isAuthenticated: false, username: null });
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
      }, 10 * 60 * 60 * 1000);
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({ isAuthenticated: false, username: null });
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
  },
}));
