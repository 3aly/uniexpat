import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  AboutOne,
  AboutTwo,
  BlogsBrief,
  ContactUs,
  FreeServices,
  Home,
  Programs,
  Services,
} from "./pages";
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

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar isScrolled={isScrolled} />
        {/* Adjust padding to account for fixed navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col gap-y-6">
                <Home />
                <section className="flex flex-col gap-y-5" id="services">
                  <FreeServices />
                  <Services />
                </section>
                <section className="flex flex-col mb-8" id="about">
                  <AboutOne />
                  <AboutTwo />
                </section>
                <BlogsBrief />
                <ContactUs />
              </div>
            }
          />
          <Route path="/programs" element={<Programs />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route
              path="/about"
              element={
                <>
                  <AboutOne />
                  <AboutTwo />
                </>
              }
            />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<BlogsBrief />} /> */}
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
