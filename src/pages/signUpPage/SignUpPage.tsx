import Icon from '../../assets/icons/LogomarkMutna.svg';
import Google from '../../assets/signIn/googleIcon.svg';
import Section from '../../assets/signIn/Section.png';
import Mail from '../../assets/signIn/mail.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerWithEmailAndPassword, signInWithGoogle } from '../../services/firebaseFunctions.ts';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const navigate = useNavigate();


  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {

        await registerWithEmailAndPassword(values.name, values.email, values.password);
        navigate('/verify-email');
      } catch (error) {
        console.error('Error during registration:', error);
      }
    },
  });

  return (
    <>
      <div className={'flex items-center justify-between md:mx-auto'}>
        <div className={'md:w-full flex flex-col justify-start md:justify-between md:pt-20 h-screen items-center'}>
          <div></div>
          <div className={'flex flex-col w-screen md:w-full px-4 md:px-20'}>
            <div className={'flex flex-col gap-2 pb-10 pt-5'}>
              <div className={'md:hidden'}>
                <img src={Icon} />
              </div>
              <h1 className={'font-semibold  md:text-4xl text-2xl text-gray-900'}>Sign up</h1>
              <p className={'text-gray-500 font-normal text-base'}>Start your 30-day free trial.</p>
            </div>

            {/* Formik form */}
            <form onSubmit={formik.handleSubmit} className={'flex flex-col gap-4'}>
              {/* Name Input */}
              <div className={'flex flex-col gap-2'}>
                <label className={'text-sm font-semibold text-gray-900'}>Name *</label>
                <input
                  className={'border rounded-t-lg'}
                  type="text"
                  id="name"
                  {...formik.getFieldProps('name')}
                  placeholder="Enter your name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                ) : null}
              </div>

              {/* Email Input */}
              <div className={'flex flex-col gap-2'}>
                <label className={'text-sm font-semibold text-gray-900'}>Email *</label>
                <input
                  className={'border rounded-t-lg'}
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  placeholder="Enter your email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Password Input */}
              <div className={'flex flex-col gap-2'}>
                <label className={'text-sm font-semibold text-gray-900'}>Password *</label>
                <input
                  className={'border rounded-t-lg'}
                  type="password"
                  id="password"
                  {...formik.getFieldProps('password')}
                  placeholder="Create a Password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className={'flex justify-between gap-2 pb-5'}>
                <p className={'text-gray-500'}>Must be at least 8 characters.</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"

              >
                Get Started
              </button>

              {/* Google Sign Up Button */}
              <button
                type="button"
                onClick={signInWithGoogle}
                className={
                  'flex font-medium text-base text-gray-700 bg-white border border-gray-200 items-center justify-center gap-4'
                }
              >
                <img src={Google} />
                Sign up with Google
              </button>
            </form>

            <div className={'flex items-center justify-center py-5'}>
              <p className={'text-gray-700 text-sm no-underline'}>
                Already have an account?{' '}
                <a
                  onClick={() => navigate('/')}

                  className={' cursor-pointer text-primary-700 text-sm no-underline'}>Log In</a>
              </p>
            </div>
          </div>

          <div className={'hidden md:flex w-full px-10 pb-4 justify-between'}>
          <span className={'text-gray-500 font-normal text-sm '}>
             © Untitled UI 2077
          </span>


            <div className={'flex cursor-pointer items-center justify-center gap-2'}>
              <img
              src={Mail}
              />
              <span  className={'text-gray-500 font-normal text-sm '}>
              help@untitledui.com
              </span>
            </div>


          </div>
        </div>

        <div className={'hidden md:flex md:w-full md:h-screen'}>
          <img className={'w-full h-full object-cover'} src={Section} alt="Section" />
        </div>
      </div>
    </>
  );
};
