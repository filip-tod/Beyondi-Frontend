import { create } from "zustand";
import { User } from "firebase/auth";

interface UserState {
  user: User | null; // Firebase User ili null
  loading: boolean;  // Dodaj loading stanje
  setUser: (user: User | null) => void;  // Omogući postavljanje null
  clearUser: () => void;
  setLoading: (loading: boolean) => void;  // Funkcija za postavljanje loading stanja
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,  // Inicijalno loading stanje je false
  setUser: (user) => set({ user }),  // Funkcija za postavljanje user-a
  clearUser: () => set({ user: null }),  // Funkcija za brisanje user-a
  setLoading: (loading) => set({ loading }),  // Funkcija za postavljanje loading stanja
}));
