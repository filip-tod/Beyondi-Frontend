import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/navBar/NavBar.tsx";
import { LandingPage } from "./pages/landingPage/LandingPage.tsx";
import { LogInPage } from "./pages/logInPage/LogInPage.tsx";
import { SignUpPage } from "./pages/signUpPage/SignUpPage.tsx";
import {ForgotPassword} from "./pages/logInPage/component/ForgotPassword.tsx";
import {CheckEmails} from "./pages/logInPage/component/CheckEmails.tsx";
import {VerifyEmail} from "./pages/signUpPage/component/VerifyEmail.tsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmails />} />

      </Routes>
    </Router>
  );
}

export default App;
