import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state?.user?.user?.user);

  const navLinks = [
    { name: "Fresh Graduates", path: "/fresh-graduates" },
    ...(user ? [
      { name: "Find People's", path: "/find-people" },
      { name: "Skill MarketPlace", path: "/skill-marketplace" },
    ] : []),
    { name: "Privacy Policy", path: "/our-privacy-policy" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-700 to-gray-500 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Logo + Copyright */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              Xpert<span className="text-white">Swap</span>
            </Link>
            <p className="text-sm mt-1 text-gray-300">
              <Link to="/admin-login">©</Link> {new Date().getFullYear()} XpertSwap. All Rights Reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-gray-200">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-white transition duration-150"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 border-gray-500" />

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 text-gray-300 text-lg">
          <a
            href="https://www.facebook.com/share/18aaamPvow/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/XpertSwap?t=C4jBSs94EK8LOwPpzala7g&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/xpertswap/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/xpertswap?igsh=Z3ZrNXpyYTBkeTY0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@xpertswap?si=UD2G-GNkWiBwBYUt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <IoLogoYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
