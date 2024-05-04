import React, { useState } from "react";
import Logo from "@assets/logo";
import { Link } from "react-scroll";
// import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Make sure to install heroicons or use any other icon set
import { Menu } from "@mui/icons-material";

const Navbar = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { to: "home", label: "Home", mx: "mx-2 md:mx-5" },
    { to: "services", label: "Services", mx: "mx-2 md:mx-5" },
    { to: "about", label: "About", mx: "mx-2 md:mx-5" },
    { to: "contact", label: "Contact", mx: "mx-2 md:mx-5" },
  ];

  return (
    <div
      className={`text-purple-100 py-1 text-sm font-semibold w-full fixed top-0 z-50 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <Menu className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`flex-col md:flex-row flex ${
              isMenuOpen ? "flex" : "hidden"
            } md:flex`}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${link.mx} hover:text-purple-300 cursor-pointer transition duration-300`}
                smooth={true}
                duration={500}
                activeClass="border-b-2 border-purple-100"
                spy={true}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
