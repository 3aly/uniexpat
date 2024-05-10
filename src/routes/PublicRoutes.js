import DefaultLayout from "../layouts/DefaultLayout";
import { Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   let user;

//   const getUser = localStorage.getItem("user");
//   const token = localStorage.getItem("token");

//   if (getUser && token) {
//     user = JSON.parse(getUser);
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

const PublicRoutes = () => {
  // const auth = useAuth();
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default PublicRoutes;
