import KeyImage from '../../../assets/signIn/keyIcon.svg';
import ArrowLeft from '../../../assets/signIn/arrow-left.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {resetPassword} from "../../../services/firebaseFunctions.ts";


export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setError(null);
    setLoading(true);
    try {
      await resetPassword(email);
      navigate('/check-email');
    } catch (error) {
      console.log(error);
      setError('Failed to send password reset email. Please try again.'); // Prikaz greške
    } finally {
      setLoading(false);

    }
  };

  return (
    <div className="flex px-4 justify-center items-center bg-white h-screen w-screen z-20">
      <div className="md:max-w-4xl md:max-h-4xl">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={KeyImage} alt="Key Icon" />
            <h2 className="text-gray-900 text-3xl font-semibold">Forgot password?</h2>
            <p className="text-gray-500 text-base font-normal">
              No worries, we’ll send you reset instructions.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700 font-medium">Email</label>
              <input
                className="border"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Prikaz greške */}

            <button onClick={handleResetPassword} disabled={loading}>
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </div>

          <div onClick={() => navigate('/')} className="flex gap-1 cursor-pointer">
            <img src={ArrowLeft} alt="Back Arrow" />
            <p className="text-gray-500">Back to log in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
