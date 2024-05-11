import { Suspense, lazy } from "react";

import { createBrowserRouter, useParams } from "react-router-dom";

import { Box, CircularProgress } from "@mui/material";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./PrivateRoutes";

const LoginPage = lazy(() => import("../pages/Login/Login"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"));
const ProgramsPage = lazy(() => import("../pages/Programs/Programs"));

const fallBackSpinner = (
  <Box
    as="section"
    px={{ base: "24px", md: "40px" }}
    pt={{ base: "36px", md: "24px" }}
    pb={6}
    className="flex justify-center items-center h-screen bg-gray-100" // Added Tailwind classes
  >
    <CircularProgress sx={{ color: "#371373" }} />
  </Box>
);

const customRoutes = [
  {
    path: "/",
    element: <PublicRoutes />,
    children: [
      {
        index: true,
        path: "/login",
        element: (
          <Suspense fallback={fallBackSpinner}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        index: true,
        path: "/register",
        element: (
          <Suspense fallback={fallBackSpinner}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={fallBackSpinner}>
            <LandingPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        path: "/programs",
        element: (
          <Suspense fallback={fallBackSpinner}>
            <ProgramsPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const AppRoutes = createBrowserRouter(customRoutes);
