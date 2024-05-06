import { useState, useEffect } from "react";

// Define Tailwind breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useResize = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: width < breakpoints.md,
    isTablet: width > breakpoints.md && width < breakpoints.lg,
    isDesktop: width > breakpoints.lg,
  };
};
