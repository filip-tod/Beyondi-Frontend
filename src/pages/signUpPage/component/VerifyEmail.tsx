import Mail from '../../../assets/signIn/email.svg';
import ArrowLeft from '../../../assets/signIn/arrow-left.png';
import Verification from '../../../assets/signIn/Verification.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SpinnerOverlay: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: '#344054B2' }}>
    <div className="flex flex-col items-center justify-center">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 rounded-full animate-spin" style={{ borderColor: '#C0ACEC', borderTopColor: 'transparent' }}></div>
      {/* Loading text */}
      <p className="mt-4 text-white">Loading...</p>
    </div>
  </div>
);
export const VerifyEmail: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleResendClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex px-4 justify-center items-center bg-white h-screen w-screen z-20">
      <div className="md:max-w-4xl md:max-h-4xl">
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={Mail} alt="Mail icon" />
            <h2 className="text-gray-900 text-3xl font-semibold">Check your email</h2>
            <p className="text-gray-500 text-base font-normal">We sent a verification link to your email</p>
            <img src={Verification} alt="Verification icon" />
          </div>

          <div className="w-full flex flex-col gap-4">
            <button
              onClick={() => window.location.href = 'mailto:'}
              className="text-white px-4 py-2 rounded "
            >
              Open email app
            </button>
          </div>

          <div className="flex items-center justify-center py-5">
            <p className="text-gray-500 text-sm font-normal">
              Didn’t receive the email?{' '}
              <a
                onClick={handleResendClick}
                className="cursor-pointer text-primary-700 text-sm no-underline"
              >
                Click to resend
              </a>
            </p>
          </div>

          <div
            onClick={() => navigate('/')}
            className="flex gap-1 cursor-pointer"
          >
            <img src={ArrowLeft} alt="Back arrow" />
            <p className="text-gray-500">Back to log in</p>
          </div>
        </div>
      </div>

      {/* Spinner i overlay se prikazuju kada je loading true */}
      {loading && <SpinnerOverlay />}
    </div>
  );
};
