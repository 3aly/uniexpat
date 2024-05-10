import BigLogo from "@assets/BigLogo";
import FooterLogo from "@assets/footerLogo";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation, Form } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useResize } from "@hooks/useResize";
import { IMAGES } from "@assets/images";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser } from "../../store/authSlice";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { ErrorMessage, Field, Formik } from "formik";
import RegisterSchema from "../../schemas/RegisterSchema";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showRePassword, setShowRePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  const { isMobile } = useResize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const db = getFirestore(); // Initialize Firestore instance

  useEffect(() => {
    console.log("location,", location);
  }, [location]);

  const redirect = location.state?.from || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("User created: ", userCredential.user);

      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        country: values.country,
      });

      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          ...values,
        })
      );

      navigate(redirect);
    } catch (error: any) {
      console.error("Error signing up or storing data: ", error.message);
      setSubmissionError(error.message);
    }
    setSubmitting(false);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `${isMobile ? "" : `url(${IMAGES.contactBg})`} `,
        }}
        className={` bg-no-repeat bg-cover flex items-center justify-center  ${
          isMobile ? "h-fit my-5" : "p-4 h-fit"
        }`}
      >
        <div
          className={`  rounded-xl  my-5 items-center flex  ${
            isMobile
              ? "h-fit flex-col w-3/4"
              : " shadow-lg bg-gray-100 flex-col max-w-4xl w-full"
          }`}
        >
          <h1 className="text-3xl	 font-bold mb-2 font-bold	">
            Let’s get started
          </h1>
          <p className="text-gray-700  text-base	font-medium	">
            Set up your account using your email address or you can use your
            preferred social network
          </p>

          <div className={` flex flex-row  ${isMobile ? "" : ""}`}>
            <div className="w-2/5">
              {isMobile ? (
                <>
                  <FooterLogo />
                </>
              ) : (
                <>
                  <BigLogo />
                </>
              )}
            </div>

            <div className="w-full">
              <Formik
                initialValues={{
                  userName: "",
                  phoneNumber: "",
                  country: "",
                  email: "",
                  password: "",
                  rePassword: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, setFieldValue }) => (
                  <Form className="flex w-full flex-col space-y-4">
                    <Field
                      name="userName"
                      type="text"
                      className="w-full p-3  border"
                      placeholder="User Name"
                    />
                    {/* <ErrorMessage name="firstName" component="div" /> */}

                    <Field
                      className="w-full p-3  border"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                    />
                    {/* <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error"
                  /> */}

                    <Field
                      as="select"
                      name="country"
                      className="w-full p-3  border"
                    >
                      <option value="">Select Country</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      {/* Add other countries as needed */}
                    </Field>
                    {/* <ErrorMessage
                    name="country"
                    component="div"
                    className="error"
                  /> */}

                    <Field
                      name="email"
                      type="email"
                      className="w-full p-3  border"
                      placeholder="Email address"
                    />
                    {/* <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  /> */}

                    <div className="relative">
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full p-3  border"
                      />
                      {/* <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    /> */}
                    </div>

                    <div className="relative">
                      <Field
                        name="rePassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-3  border"
                      />
                      <ErrorMessage
                        name="rePassword"
                        component="div"
                        className="error"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-purple-200 text-white w-full py-2"
                    >
                      Sign up with email
                    </button>
                  </Form>
                )}
              </Formik>
              <button className="text-lg	font-medium	 bg-blue-600 text-white w-full py-2  mb-2">
                Sign up with Facebook
              </button>
              <div className="relative my-4">
                <Divider
                  className={"text-base	font-medium	"}
                  sx={{
                    "&::before, &::after": {
                      borderColor: "#ddac61",
                      borderWidth: "1px",
                    },
                  }}
                >
                  or
                </Divider>
              </div>
              <button className="text-lg	font-semibold	 border-2 border-purple-500 text-purple-500 w-full py-2 ">
                <NavLink
                  to={"/login"}
                  state={{ from: location.state.from }}
                  replace
                >
                  Sign In
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
