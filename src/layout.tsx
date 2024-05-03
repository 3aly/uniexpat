import { NavBar } from "@components/organisms";
import React, { useEffect, useState } from "react";

const LayoutWithNavbar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 0) {
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
    <div className="flex flex-col  bg-transparent h-screen">
      <nav>
        <NavBar />
      </nav>
      <main className="flex-1 overflow-y-auto ">{children}</main>
    </div>
  );
};

export default LayoutWithNavbar;
