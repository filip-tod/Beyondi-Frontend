import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  User,
  UserCredential
} from "firebase/auth";
import { auth, googleProvider } from "./Firebase";
import { create } from "zustand";

interface UserStoreState {
  user: User | null;  // Firebase User tip ili null
  loading: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  loading: false,
  setUser: (user: User | null) => set({ user }),
  clearUser: () => set({ user: null }),
  setLoading: (loading: boolean) => set({ loading }),
}));

export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Email za resetiranje lozinke poslan.");
  } catch (error) {
    console.error("Greška pri slanju emaila za resetiranje lozinke:", error);
    throw error;
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;
    useUserStore.getState().setUser(user);
    console.log("Korisnik kreiran:", user);
  } catch (error) {
    console.error("Greška pri registraciji:", error);
    throw error;
  }
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string,
  navigate: any
): Promise<void> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;
    useUserStore.getState().setUser(user);
    console.log("Korisnik prijavljen:", user);
    navigate('/landing');
  } catch (error) {
    console.error("Greška pri prijavi:", error);
    throw error;
  }
};

export const signInWithGoogle = async (): Promise<void> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user: User = result.user;
    useUserStore.getState().setUser(user);
    console.log("Prijavljen preko Google-a:", user);

  } catch (error) {
    console.error("Greška pri prijavi s Google-om:", error);
    throw error;
  }
};

export const logOut = async (): Promise<void> => {
  try {
    await auth.signOut();
    useUserStore.getState().clearUser();
    console.log("Korisnik odjavljen");
  } catch (error) {
    console.error("Greška pri odjavi:", error);
    throw error;
  }
};
