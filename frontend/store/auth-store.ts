
import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (email, password) => {
    // Mock credentials
    if (
      email === "admin@example.com" &&
      password === "123456"
    ) {
      set({
        isAuthenticated: true,
        user: {
          id: "1",
          name: "Admin User",
          email,
        },
      });

      return true;
    }

    return false;
  },

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));