import BigLogo from "@assets/BigLogo";
import FooterLogo from "@assets/footerLogo";
import Logo from "@assets/logo";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useResize } from "@hooks/useResize";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created: ", userCredential.user);
      navigate(redirect); // Redirect user to the intended page or default path

      // Further actions here, e.g., redirect or update UI
    } catch (error: any) {
      console.error("Error signing up: ", error.message);
      // Handle errors here, such as displaying a notification
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
          displayName: user.displayName,
          photoURL: user.photoURL,
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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full p-3 mb-4 border "
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full p-3 mb-4 border"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                </span>
              </div>
              <button
                type="submit"
                className="text-lg	font-medium	 bg-purple-200 text-white w-full py-2  mb-2"
              >
                Sign in with email
              </button>
            </form>
            <button
              className="text-lg	font-medium	 bg-blue-600 text-white w-full py-2  mb-2"
              onClick={handleGoogleSignIn}
            >
              Sign in with Gmail
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
                to={"/register"}
                state={{ from: location?.state?.from }}
                replace
              >
                Create new account
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
