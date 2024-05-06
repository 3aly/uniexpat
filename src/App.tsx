import React, { useEffect, useState } from "react";
import { AboutOne, FreeServices, Home, Services } from "./pages";
import { Footer, NavBar } from "@components/organisms";

function App() {
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
  console.log("itsScrolled", isScrolled);
  return (
    <div className="flex flex-col ">
      <NavBar
        className={`${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      />
      <Home />
      <section className="flex flex-col" id="services">
        <FreeServices />
        <Services />
      </section>
      <section className="flex flex-col" id="about">
        <AboutOne />
      </section>
      <section className="h-screen bg-purple-500 flex items-center justify-center text-white">
        <h2>Contact Section</h2>
      </section>
      <Footer />
    </div>
  );
}

export default App;
