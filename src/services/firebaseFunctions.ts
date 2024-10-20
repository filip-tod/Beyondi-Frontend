// firebaseFunctions.ts

import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import {useUserStore} from "../store/useUserStore.ts";
import {auth, googleProvider} from "./Firebase.ts";

// Funkcija za resetiranje lozinke
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Email za resetiranje lozinke poslan.");
  } catch (error) {
    console.error("Greška pri slanju emaila za resetiranje lozinke:", error);
    throw error;
  }
};

// Funkcija za registraciju korisnika
export const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    useUserStore.getState().setUser(user); // Postavljanje korisnika u Zustand store
    console.log("Korisnik kreiran:", user);
  } catch (error) {
    console.error("Greška pri registraciji:", error);
  }
};

// Funkcija za prijavu korisnika
export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    useUserStore.getState().setUser(user); // Postavljanje korisnika u Zustand store
    console.log("Korisnik prijavljen:", user);
  } catch (error) {
    console.error("Greška pri prijavi:", error);
  }
};

// Funkcija za prijavu putem Google-a
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    useUserStore.getState().setUser(user); // Postavljanje korisnika u Zustand store
    console.log("Prijavljen preko Google-a:", user);
  } catch (error) {
    console.error("Greška pri prijavi s Google-om:", error);
  }
};

// Funkcija za odjavu korisnika
export const logOut = async () => {
  try {
    await auth.signOut();
    useUserStore.getState().clearUser(); // Očisti korisnika iz Zustand store-a
    console.log("Korisnik odjavljen");
  } catch (error) {
    console.error("Greška pri odjavi:", error);
  }
};


