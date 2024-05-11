import BigLogo from "@assets/BigLogo";
import FooterLogo from "@assets/footerLogo";
import Logo from "@assets/logo";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useResize } from "@hooks/useResize";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { doc, getDoc } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

const Login: React.FC = () => {
  interface IFormInput {
    email: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const { isMobile } = useResize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const location = useLocation();
  const redirect = location.state?.from || "/";

  useEffect(() => {
    console.log("location,", location);
  }, [location]);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const docRef = doc(db, "users", userCredential.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        dispatch(
          setUser({
            accessToken: docSnap.data().accessToken,
            phoneNumber: docSnap.data().phoneNumber,
            uid: docSnap.data().uid,
            userName: docSnap.data().userName,
            country: docSnap.data().country,
            // include other user details as needed
          })
        );
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      console.log("User created: ", userCredential.user);
      navigate(redirect); // Redirect user to the intended page or default path

      // Further actions here, e.g., redirect or update UI
    } catch (error: any) {
      console.error("Error signing in: ", error.message);
      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/invalid-credential"
      ) {
        setError((prev) => ({ ...prev, email: "Invalid email address." }));
      } else if (error.code === "auth/wrong-password") {
        setError((prev) => ({ ...prev, password: "Incorrect password." }));
      } else {
        setError((prev) => ({
          ...prev,
          email: "Authentication failed.",
          password: "Authentication failed.",
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-in User: ", user);
      // Dispatch user data to Redux store
      dispatch(
        setUser({
          email: user.email,
          uid: user.uid,
          userName: user.displayName,
          phoneNumber: user.phoneNumber,
          // include other user details as needed
        })
      );
      navigate(redirect); // Redirect user to the intended page or default path
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <>
      <div
        className={`  flex items-center justify-center  ${
          isMobile ? "h-fit my-12" : "p-4 h-screen"
        }`}
      >
        <div
          className={`  rounded-xl items-center flex  ${
            isMobile
              ? "h-fit flex-col w-3/4"
              : " shadow-lg bg-gray-100 flex-row-reverse max-w-6xl p-6 w-full"
          }`}
        >
          <div>
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

          <div
            className={` flex flex-col  ${isMobile ? "" : "w-1/2 p-8 gap-4"}`}
          >
            <h1 className="text-3xl	 font-bold mb-2 font-bold	">
              Let’s get started
            </h1>
            <p className="text-gray-700 mb-4 text-base	font-medium	">
              Set up your account using your email address or you can use your
              preferred social network
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                // variant="outlined"
                variant="outlined"
                label="E-mail"
                id="email"
                sx={{ my: 1 }}
                type="email"
                {...register("email")}
                fullWidth
                error={!!error.email}
                helperText={error.email || "Enter your email"}
              />
              <TextField
                variant="outlined"
                id="password"
                label="Password"
                sx={{ my: 1, mb: 2 }}
                error={!!error.password}
                helperText={error.password || "Enter your password"}
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
                Sign In
              </LoadingButton>
            </form>
            <Button
              sx={{
                backgroundColor: "#EF4444",
                py: 2,
                "&:hover": {
                  backgroundColor: "#ff5454", // Set the hover background color
                },
              }}
              variant="contained"
              fullWidth
              onClick={handleGoogleSignIn}
            >
              Sign in with Gmail
            </Button>
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
              to={"/register"}
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
                Create new account
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
