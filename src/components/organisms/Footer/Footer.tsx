import Logo from "@assets/logo";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const quickLinks = [
    { to: "home", label: "Home" },
    { to: "pricing", label: "Pricing" },
    { to: "about", label: "About Us" },
    { to: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com", label: "Facebook" },
    { href: "https://www.instagram.com", label: "Instagram" },
    { href: "https://www.twitter.com", label: "Twitter" },
    { href: "https://www.linkedin.com", label: "LinkedIn" },
  ];

  const policyLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ];

  return (
    <footer className="bg-grey-300 font-semibold		 text-gray-700 py-10">
      <div className="max-w-6xl  mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="w-full flex flex-1">
          <Logo />
        </div>
        <div>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to} className="my-3">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-500 transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.href} className="my-3">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {policyLinks.map((link) => (
              <li key={link.href} className="my-3">
                <a
                  href={link.href}
                  className="hover:text-gray-500 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
