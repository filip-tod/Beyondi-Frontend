import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/navBar/NavBar.tsx";
import { LandingPage } from "./pages/landingPage/LandingPage.tsx";
import { LogInPage } from "./pages/logInPage/LogInPage.tsx";
import { SignUpPage } from "./pages/signUpPage/SignUpPage.tsx";
import { ForgotPassword } from "./pages/logInPage/component/ForgotPassword.tsx";
import { CheckEmails } from "./pages/logInPage/component/CheckEmails.tsx";
import { VerifyEmail } from "./pages/signUpPage/component/VerifyEmail.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { useUserStore } from "./store/useUserStore.ts";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/Firebase";

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const setLoading = useUserStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/landing" element={
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        } />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmails />} />
      </Routes>
    </Router>
  );
}

export default App;
