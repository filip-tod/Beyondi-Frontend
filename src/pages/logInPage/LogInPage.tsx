import React, { useState } from 'react';
import Icon from '../../assets/icons/LogomarkMutna.svg';
import Google from '../../assets/signIn/googleIcon.svg';
import Section from '../../assets/signIn/Section.png';
import { useNavigate } from 'react-router-dom';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../services/firebaseFunctions.ts';

export const LogInPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      await logInWithEmailAndPassword(email, password, navigate);
      navigate('/landing');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Greška pri prijavi:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/landing');
    } catch (error) {
      setError('Google sign-in failed. Please try again.');
      console.error('Greška pri prijavi s Google-om:', error);
    }
  };

  return (
    <div className={'flex items-center justify-between md:mx-auto'}>
      <div className={'md:w-full flex flex-col justify-start md:justify-between md:pt-20 h-screen items-center'}>
        <div></div>
        <div className={'flex flex-col w-screen md:w-full px-4 md:px-20'}>
          <div className={'flex flex-col gap-2 pb-10 pt-5'}>
            <div className={'flex md:gap-2  md:mb-14'}>
              <img src={Icon} alt="Logo" />
              <span className={'hidden md:flex font-bold text-xl items-center justify-center'}>Untitled UI</span>
            </div>
            <h1 className={'font-semibold md:text-4xl text-2xl text-gray-900'}>Log in</h1>
            <p className={'text-gray-500 font-normal text-base'}>
              Welcome back! Please enter your details.
            </p>
          </div>

          <div className={'flex flex-col gap-4'}>
            <div className={'flex flex-col gap-2'}>
              <label className={'text-sm font-semibold text-gray-900'}>Email</label>
              <input
                className={'border rounded-t-lg'}
                type="email"
                name="email"
                value={email}
                placeholder={'Enter your email'}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </div>

            <div className={'flex flex-col gap-2'}>
              <label className={'text-sm font-semibold text-gray-900'}>Password</label>
              <input
                className={'border rounded-t-lg'}
                type="password"
                name="password"
                placeholder={'*******'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />

              {/* Prikaz greške odmah ispod password polja */}
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <div className={'flex justify-between gap-2 py-5'}>
              <div className={'flex gap-2'}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                       className={'w-4 h-4'} />
                <p className={'text-gray-700 font-medium text-sm'}>Remember for 30 days</p>
              </div>
              <a
                onClick={() => navigate('/forgot-password')}
                className={'cursor-pointer no-underline text-primary-700 font-medium text-sm'}>Forgot Password</a>
            </div>

            <div className={'flex flex-col gap-4'}>
              <button
                onClick={handleSignIn}
                disabled={loading}

              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

              <button
                className={
                  'flex font-medium text-base text-gray-700 bg-white border border-gray-200 items-center justify-center gap-4'
                }
                onClick={handleGoogleSignIn}
              >
                <img src={Google} alt="Google icon" />
                Sign in With Google
              </button>
            </div>

            <div className={'flex items-center justify-center py-5'}>
              <p className={'text-gray-700 text-sm no-underline'}>
                Don’t have an account?{' '}
                <a onClick={() => navigate('/sign-up')} className={'cursor-pointer text-primary-700 text-sm no-underline'}>
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={'hidden md:flex w-full px-10 text-gray-500 font-normal text-sm pb-4'}>
          © Untitled UI 2077
        </div>
      </div>

      <div className={'hidden md:flex md:w-full md:h-screen'}>
        <img className={'w-full h-full object-cover'} src={Section} alt="Section" />
      </div>
    </div>
  );
};
