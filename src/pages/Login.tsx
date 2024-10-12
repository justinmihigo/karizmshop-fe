import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, Form, FormikHelpers } from 'formik';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import BeatLoader from 'react-spinners/BeatLoader';

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (
    _values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    actions.setSubmitting(false);
    navigate('/dashboard');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="flex justify-center items-center h-[90vh] sm:h-screen bg-white m-2">
      <div className="w-[80%] md:w-[60%] lg:w-[40%] p-5 shadow-lg border-[1px] border-gray-300 rounded-md ">
        <h1 className="text-center font-bold text-3xl mb-4">Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col relative">
                <label htmlFor="email" className="flex flex-col">
                  Enter your email
                  <div className="flex items-center border border-gray-400 p-2 rounded-md">
                    <FaEnvelope className="mr-2 text-gray-400" />
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red text-xs mt-1 p-1 rounded-md"
                />
              </div>

              <div className="flex flex-col relative">
                <label htmlFor="password" className="flex flex-col">
                  Enter your password
                  <div className="flex items-center border border-gray-400 p-2 rounded-md relative">
                    <FaLock className="mr-2 text-gray-400" />
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      className="w-full focus:outline-none"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 cursor-pointer text-gray-500"
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                  </div>
                </label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red text-xs mt-1 p-1 rounded-md"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <label htmlFor="rememberMe" className="flex items-center">
                  <Field
                    id="rememberMe"
                    type="checkbox"
                    name="rememberMe"
                    className="mr-2"
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-blue-600 text-[#1C4A93] font-bold">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Submit Form"
                className="w-full flex justify-center py-2 sm:py-4 bg-[#1C4A93] text-white rounded-md hover:bg-blue-[#1C4A93] cursor-pointer transition-transform transform active:scale-95 hover:scale-105"
              >
                {isSubmitting ? (
                  <BeatLoader color="#ffffff" size={8} />
                ) : (
                  'Login'
                )}
              </button>

              <div>
                <p className="text-center text-gray-600 text-xs sm:text-sm">
                  Don’t have an account?{' '}
                  <Link to="/signup" className="text-[#1C4A93] font-bold">
                    Sign up
                  </Link>
                </p>
              </div>
              <div className="flex flex-col items-center text-xs sm:text-sm md:text-lg">
                <p className="font-light">OR</p>
                <div className="flex items-center justify-center">
                  <Link
                    to="#"
                    className="bg-[#1C4A93] w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer transition-transform transform active:scale-95 hover:scale-105"
                  >
                    <p className="text-white font-bold">G</p>
                  </Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
