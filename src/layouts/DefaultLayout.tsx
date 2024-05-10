import { Footer, NavBar } from "@components/organisms";
import { PropsWithChildren, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar
        className={`${
          isScrolled
            ? "bg-white shadow-md fixed w-full top-0 z-50"
            : "bg-transparent fixed w-full top-0 z-50"
        }`}
      />
      <Outlet />

      <Footer />
    </div>
  );
};

export default DefaultLayout;
