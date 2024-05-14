import React, { useState } from "react";
import Logo from "@assets/logo";
import SmallLogo from "@assets/smallLogo";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { Close, Menu } from "@mui/icons-material"; // Using MUI icons as an example
import { useResize } from "@hooks/useResize";
import { useSelector } from "react-redux";
import { RootState } from "@store/authSlice";

const Navbar = ({ className = "", isScrolled = false }) => {
  const { isMobile } = useResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const inHome = location.pathname === "/";
  const { user } = useSelector((state: { user: { user: {} } }) => state?.user);

  const links = inHome
    ? [
        { to: "home", label: "Home", mx: "mx-2 md:mx-5" },
        {
          to: "services",
          label: "Services",
          mx: "mx-2 md:mx-5",
        },
        { to: "about", label: "About", mx: "mx-2 md:mx-5" },
        { to: "contact", label: "Contact", mx: "mx-2 md:mx-5" },
      ]
    : [
        { to: "/", label: "Home", mx: "mx-2 md:mx-5" },
        {
          to: "/services",
          label: "Services",
          mx: "mx-2 md:mx-5",
        },
        { to: "/programs", label: "Programs", mx: "mx-2 md:mx-5" },
        { to: "/blogs", label: "Blogs", mx: "mx-2 md:mx-5" },
      ];

  return (
    <div
      className={` text-purple-100 py-2 text-sm font-semibold w-full  top-0 z-50  ${className}  ${
        isScrolled ? "bg-white shadow-m  " : "bg-transparent "
      }   ${location.pathname === "/" ? "fixed" : "sticky bg-white shadow-m"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/">{isMobile ? <SmallLogo /> : <Logo />}</NavLink>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <Close className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>

          <div
            className={` ${
              isScrolled || isMenuOpen ? "bg-white" : "transparent"
            } ${
              isMobile
                ? "absolute flex flex-col top-full left-0 w-full  transition-max-height duration-500 ease-in-out"
                : "flex flex-row"
            }  ${
              isMenuOpen ? "max-h-screen" : "max-h-0"
            } overflow-hidden md:static md:max-h-full md:flex md:w-auto`}
          >
            {links.map((link) => {
              return (
                <>
                  {inHome ? (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`${link.mx} my-1 hover:text-purple-300 cursor-pointer transition duration-300`}
                      smooth={true}
                      duration={500}
                      activeClass="border-b-2 border-purple-100"
                      spy={true}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NavLink
                      className={`${link.mx} my-1 hover:text-purple-300 cursor-pointer transition duration-300`}
                      to={`${link.to}`}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
