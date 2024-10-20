import Mail from '../../../assets/signIn/email.svg';
import ArrowLeft from '../../../assets/signIn/arrow-left.png';
import {useNavigate} from "react-router-dom";
import Verification from '../../../assets/signIn/Verification.png'


export const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <div className={'flex px-4 justify-center items-center bg-white h-screen w-screen z-20'}>

      <div className={'md:max-w-4xl md:max-h-4xl'}>
        <div className={'flex flex-col gap-4 md:gap-8 justify-center items-center'}>
          <div className={'flex flex-col gap-2 justify-center items-center'}>
            <img
              src={Mail}
            />
            <h2 className={'text-gray-900 text text-3xl font-semibold'}>Check your email</h2>
            <p className={'text-gray-500 text-base font-normal'}>We sent a verification link to your email</p>
            <img
              src={Verification}
            />
          </div>

          <div className={'w-full flex flex-col gap-4'}>
            <button
              onClick={() => window.location.href = 'mailto:'}
              className="text-white px-4 py-2 rounded"
            >
              Open email app
            </button>
          </div>

          <div className={'flex items-center justify-center py-5'}>
            <p className={'text-gray-500 text-sm font-normal no-underline'}>
              Didn’t receive the email?{' '}
              <a onClick={() => navigate('/')}
                 className={'cursor-pointer text-primary-700 text-sm no-underline'}>
                Click to resend
              </a>
            </p>
          </div>

          <div
            onClick={() => navigate('/')}
            className={'flex gap-1 cursor-pointer'}>
            <img
              src={ArrowLeft}
            />
            <p className={'text-gray-500'}>Back to log in</p>
          </div>

        </div>
      </div>
    </div>
  );
}