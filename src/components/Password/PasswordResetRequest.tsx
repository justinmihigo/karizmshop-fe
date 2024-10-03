import * as yup from 'yup';
import BeatLoader from 'react-spinners/BeatLoader';
import { Formik, Field, ErrorMessage, Form, FormikHelpers } from 'formik';
import { FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

interface MyFormValues {
  email: string;
}

const validationSchema: yup.ObjectSchema<MyFormValues> = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required!'),
});

function PasswordResetRequestForm() {
  const navigate = useNavigate();

    const handleSubmit = (
        _values: MyFormValues,
        actions: FormikHelpers<MyFormValues>
      ) => {
        actions.setSubmitting(false);
        navigate('/two-factor-auth');
      };
    
  return (
    <div className="flex justify-center items-center h-[90vh] sm:h-screen bg-white m-2">
      <div className="w-[80%] md:w-[60%] lg:w-[40%] p-5 shadow-lg border-[1px] border-gray-300 rounded-md ">

        <h1 data-testid="title" className="text-center font-bold text-3xl mb-5">
          Forgot Password
        </h1>
        <Formik
          initialValues={{
            email: ''
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

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Submit Form"
                className="w-full flex justify-center py-2 sm:py-4 bg-[#1C4A93] text-white rounded-md hover:bg-blue-[#1C4A93] cursor-pointer transition-transform transform active:scale-95 hover:scale-105"
              >
                {isSubmitting ? (
                  <BeatLoader color="#ffffff" size={8} />
                ) : (
                  'Submit'
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

          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-300 h-px"></div>
            <p className="font-light">Else</p>
            <div className="w-full bg-gray-300 h-px"></div>
          </div>

        <Link
          to="/login"
          className="text-primary font-light mt-4 block text-center"
        >
          &larr; Back to Login
        </Link>
      </div>
    </div>
  );
}
export default PasswordResetRequestForm;