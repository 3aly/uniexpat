import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";

// import { setAuthToken } from 'services';
// import { setUserData } from 'store/slices/app-slice';
// const useAuth = () => {
//   let user;
//   const dispatch = useDispatch();
//   const getUser = localStorage.getItem('user');
//   const token = localStorage.getItem('token');

//   if (getUser && token) {
//     user = JSON.parse(getUser);
//     dispatch(setUserData(user));
//   }

//   if (user) {
//     return {
//       auth: true,
//       role: user?.role,
//     };
//   }
//   return {
//     auth: false,
//     role: null,
//   };
// };

const ProtectedRoutes = () => {
  // const { auth } = useAuth();
  // (async function () {
  //   const getToken = localStorage.getItem('token');
  //   setAuthToken(getToken);
  // })();
  const { user } = useSelector((state: { user: { user: {} } }) => state?.user);

  const location = useLocation();

  return user ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default ProtectedRoutes;
