import { useFormik } from "formik";
import * as yup from "yup";
import { MapIcon, PhoneIcon } from "lucide-react";
import { FaEnvelope} from "react-icons/fa6";
import HSInput from "../components/form/HSInputForm";
import HSTextarea from "../components/form/HSTextarea";
import ContactusImage from "../assets/contact-us.webp";

interface MyFormValues {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const initialValues: MyFormValues = {
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required!"),
  name: yup.string().required("Name is required!"),
  message: yup.string().required("Message is required!"),
  phoneNumber: yup
    .string()
    .min(10, "Phone number must contain at least 10 digits")
    .required("Phone number is required!"),
});

function ContactForm() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full mx-auto mt-8 md:mt-12 px-6 md:px-8 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between gap-20 items-start mb-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-md text-black text-left">Contact Us</h1>
          <p className="text-4xl font-light text-black text-left mt-3">
            Get in touch today.
          </p>

          <form
            className="flex flex-col gap-3 mt-6"
            data-testid="form"
            onSubmit={formik.handleSubmit}
          >
            {/* Name Field */}
            <div className="relative">
              <HSInput
                data-testid="Name"
                id="name"
                type="text"
                placeholder="Enter your name"
                {...formik.getFieldProps("name")}
                className={`border p-2 pl-5 rounded-md w-full ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {formik.touched.name && formik.errors.name ? (
                <p className="text-red text-sm">{formik.errors.name}</p>
              ) : null}
            </div>

            {/* Email Field */}
            <div className="relative">
              <HSInput
                data-testid="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
                className={`border p-2 pl-5 rounded-md w-full ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {formik.touched.email && formik.errors.email ? (
                <p className="text-red text-sm">{formik.errors.email}</p>
              ) : null}
            </div>

            {/* Phone Number Field */}
            <div className="relative">
              <HSInput
                data-testid="phoneNumber"
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                {...formik.getFieldProps("phoneNumber")}
                className={`border p-2 pl-5 rounded-md w-full ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p className="text-red text-sm">
                  {formik.errors.phoneNumber}
                </p>
              ) : null}
            </div>

            {/* Message Field */}
            <div className="relative">
              <HSTextarea
                data-testid="message"
                id="message"
                rows={4}
                placeholder="Enter your message here..."
                {...formik.getFieldProps("message")}
                className={`border p-2 pl-5 rounded-md w-full ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.message && formik.errors.message ? (
                <p className="text-red text-sm">{formik.errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              aria-label="Submit Form"
              className="w-full flex justify-center py-2 sm:py-4 bg-[#1C4A93] text-white rounded-md hover:bg-blue-[#1C4A93] cursor-pointer transition-transform transform active:scale-95 hover:scale-105 font-bold outline-none"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 p-0 bg-white shadow-md rounded-md">
          <img
            src={ContactusImage}
            className="w-full rounded-t-md h-80 object-fill object-center"
            alt="Kari Shop"
          />
          <div className="w-full p-8">
            <ul className="list-none">
              <li className="flex flex-row gap-8 font-light text-base">
                <MapIcon className="text-[#1C4A93] w-6" /> 2 KN st, Kampala -
                Uganda
              </li>
              <li className="flex flex-row gap-8 font-light text-base my-5">
                <FaEnvelope className="text-[#1C4A93] w-6" />{" "}
                info@karishop.ug
              </li>
              <li className="flex flex-row gap-8 font-light text-base">
                <PhoneIcon className="text-[#1C4A93] w-6" /> +256 700 318863
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
