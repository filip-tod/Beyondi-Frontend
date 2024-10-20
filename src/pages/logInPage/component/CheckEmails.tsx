import KeyImage from '../../../assets/signIn/keyIcon.svg';
import ArrowLeft from '../../../assets/signIn/arrow-left.png';
import {useNavigate} from "react-router-dom";

export const CheckEmails = () => {
  const navigate = useNavigate();
  return (
    <div className={'flex px-4 justify-center items-center bg-white h-screen w-screen z-20'}>

      <div className={'md:max-w-4xl md:max-h-4xl'}>
        <div className={'flex flex-col gap-8 justify-center items-center'}>
          <div className={'flex flex-col gap-2 justify-center items-center'}>
            <img
              src={KeyImage}
            />
            <h2 className={'text-gray-900 text text-3xl font-semibold'}>Check your email</h2>
            <p className={'text-gray-500 text-base font-normal'}>We sent a password reset link to your email</p>
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