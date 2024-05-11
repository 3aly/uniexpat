import BigLogo from "@assets/BigLogo";
import FooterLogo from "@assets/footerLogo";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation, Form } from "react-router-dom";
import { useResize } from "@hooks/useResize";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setUser } from "../../store/authSlice";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";

import RegisterSchema from "../../schemas/RegisterSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Autocomplete,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

const Register: React.FC = () => {
  interface Inputs {
    userName: string;
    email: string;
    country: string;
    phoneNumber: string;
    password: string;
  }
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isMobile } = useResize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  const redirect = location?.state?.from || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit =
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(RegisterSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    setLoading(true);

    console.log("submit", values);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        userName: values.userName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        country: values.country,
      });
      console.log("User created: ", userCredential.user);

      dispatch(
        setUser({
          uid: userCredential.user.uid,
          userName: values?.userName,
          email: values?.email,
          country: values?.country,
          phoneNumber: values?.phoneNumber,
        })
      );
      console.log("redirect", redirect);
      navigate(redirect);
    } catch (error) {
      if (error instanceof Error) {
        setFirebaseError("this email is already in use"); // Set Firebase error message
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
    // setSubmitting(false);
  };
  return (
    <>
      <div
        style={{}}
        className={` bg-no-repeat bg-cover flex items-center justify-center  ${
          isMobile ? "h-fit my-5 ms-2" : "mt-12"
        }`}
      >
        <div
          className={`  rounded-2xl  my-12 items-center text-start flex  ${
            isMobile
              ? "h-fit flex-col  gap-y-5 "
              : "p-12 shadow-lg bg-gray-100 flex-col max-w-5xl w-full gap-y-5"
          }`}
        >
          <div className=" w-full ">
            <h1 className="text-3xl	 font-bold mb-2 font-bold	">
              Let’s get started
            </h1>
            <p className="text-gray-700  text-base	font-medium	">
              Set up your account using your email address or you can use your
              preferred social network
            </p>
          </div>

          <div
            className={`flex   ${
              isMobile
                ? "flex-col w-full ms-1 justify-center"
                : "justify-between w-full flex-row"
            }`}
          >
            <div className="w-5/6">
              {isMobile ? (
                <>{/* <FooterLogo /> */}</>
              ) : (
                <>{/* <BigLogo /> */}</>
              )}
            </div>

            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full  gap-y-3 flex-col "
              >
                <TextField
                  // variant="outlined"
                  variant="outlined"
                  label="User Name"
                  id="userName"
                  type="text"
                  {...register("userName")}
                  fullWidth
                  error={Boolean(errors.email) || Boolean(firebaseError)}
                  helperText={errors.email?.message || firebaseError}
                />
                <TextField
                  // variant="outlined"
                  variant="outlined"
                  label="E-mail"
                  id="email"
                  type="email"
                  {...register("email")}
                  fullWidth
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />

                <Autocomplete
                  disablePortal
                  id="country"
                  options={["egypt", "combo"]}
                  renderInput={(params) => (
                    <TextField
                      error={Boolean(errors.country)}
                      helperText={errors.country?.message}
                      {...params}
                      {...register("country")}
                      label="Country"
                    />
                  )}
                />

                <TextField
                  variant="outlined"
                  label="Phone Number"
                  id="phoneNumber"
                  type="text"
                  {...register("phoneNumber")}
                  fullWidth
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber?.message}
                />

                <TextField
                  variant="outlined"
                  id="password"
                  label="Password"
                  sx={{ my: 1, mb: 2 }}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          //       aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />

                <LoadingButton
                  loading={loading}
                  type="submit"
                  className="w-full bg-blue-500 text-white "
                  variant="contained"
                  sx={{
                    backgroundColor: "#371373",
                    py: 2,
                    "&:hover": {
                      backgroundColor: "#774ac0", // Set the hover background color
                      borderColor: "#4C3B4D", // Optional: change the border color on hover
                      color: "#FFFFFF", // Optional: change the text color on hover
                    },
                  }}
                >
                  Create Account
                </LoadingButton>
              </form>

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
              <NavLink
                to={"/login"}
                state={{ from: location?.state?.from }}
                replace
              >
                <Button
                  fullWidth
                  sx={{
                    borderColor: "#991A8E",
                    color: "#991A8E",
                    py: 2,
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#774ac0", // Set the hover background color
                      borderColor: "#4C3B4D", // Optional: change the border color on hover
                      color: "#FFFFFF", // Optional: change the text color on hover
                    },
                  }}
                  variant="outlined"
                >
                  Log In
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
