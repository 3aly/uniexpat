import React, { useEffect, useState } from "react";
import { Home, Services } from "./pages";
import LayoutWithNavbar from "./layout";
import { NavBar } from "@components/organisms";

function App() {
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
  console.log("itsScrolled", isScrolled);
  return (
    <div>
      {/* <LayoutWithNavbar> */}
      <NavBar
        className={` ${
          isScrolled ? "bg-white" : "bg-red-100"
        } transition-all duration-300 ease-in-out text-gray-800 absolute  w-full z-20`}
      />
      <Home />
      <Services />
      <section
        id="about"
        className="h-screen bg-green-500 flex items-center justify-center text-white"
      >
        <h2>About Section</h2>
      </section>
      <section
        id="contact"
        className="h-screen bg-purple-500 flex items-center justify-center text-white"
      >
        <h2>Contact Section</h2>
      </section>
      {/* </LayoutWithNavbar> */}
    </div>
  );
}

export default App;
