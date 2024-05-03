import Logo from "@assets/logo";
import React from "react";
import { Link } from "react-scroll";

const Navbar = ({ className = {} }) => {
  const links = [
    { to: "home", label: "Home", mx: "mx-5" },
    { to: "services", label: "Services", mx: "mx-5" },
    { to: "about", label: "About", mx: "mx-5" },
    { to: "contact", label: "Contact", mx: "mx-5" },
  ];

  return (
    <div
      className={` text-purple-100 pt-1 text-sm font-semibold		 sticky top-0 ${className}`}
    >
      <div className="w-3/4 ">
        <div className="flex justify-between items-center  ">
          <Logo />
          <div className="bg-red-200 ">
            {links.map((link) => (
              <Link
                key={link.to} // Unique key for each child
                to={link.to}
                className={`${link.mx} hover:transparent cursor-pointer transition duration-300`}
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
