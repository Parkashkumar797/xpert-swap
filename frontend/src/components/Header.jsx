import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import logo from "../assets/logo.jpg";
import { FaUserCircle } from "react-icons/fa";
import { CiChat2 } from "react-icons/ci";
import NotificationButton from "./NotificationButton";
import { MessageSquareCodeIcon, MessageSquareIcon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const user = useSelector((state) => state?.user?.user?.user);
  // console.log("userHEader" , user)
  const admin = useSelector((state) => state?.admin?.admin);

  const {unread} = useSelector(state=>state.chat)
  const isAdmin = !!admin?.email;

  const renderAdminLinks = () => (
    <>
      <Link
        to="/analytics-dashboard"
        className="hover:text-blue-700 text-base font-bold transition"
      >
        Analytics Dashboard
      </Link>
      <Link
        to="/user-list"
        className="hover:text-blue-700 text-base font-bold transition"
      >
        User List
      </Link>
      <Link
        to="/our-team"
        className="hover:text-blue-700 text-base font-bold transition"
      >
        Team
      </Link>
      <Link
        to="/our-privacy-policy"
        className="hover:text-blue-700 text-base font-bold transition"
      >
        Privacy Policy
      </Link>
      <Link to={"/admin-profile"}>
        <FaUserCircle className="text-3xl text-blue-700" />
      </Link>
    </>
  );

  const renderUserLinks = () => (
    <>
      {/* Desktop Menu */}
      <div className="relative group">
        <div className="group flex items-center space-x-1 cursor-pointer hover:text-blue-700 text-base font-bold duration-300">
          About &nbsp; <FaChevronDown size={12} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-44 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-50 duration-200"
        >
          {user && (
            <>
              <Link
                to="/find-people"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Find People's
              </Link>
              <Link
                to="/skill-marketplace"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Skill Marketplace
              </Link>
              <Link to="/request" className="block px-4 py-2 hover:bg-gray-100">
                Skill Request
              </Link>
            </>
          )}
          <Link to="/our-team" className="block px-4 py-2 hover:bg-gray-100">
            Team
          </Link>
          <Link
            to="/our-privacy-policy"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Privacy Policy
          </Link>
        </motion.div>
      </div>

      {user && (
        <Link
          to="/find-people"
          className="hover:text-blue-700 text-base font-bold transition"
        >
          Find People's
        </Link>
      )}
      <Link
        to="/fresh-graduates"
        className="hover:text-blue-700 text-base font-bold transition"
      >
        Fresh Graduates
      </Link>
      {user && (
        <Link to="/chat" className="relative flex items-center space-x-2">
          <div className="relative">
            <MessageSquareIcon className="text-blue-600 text-3xl" />
            
            {(unread ?? 0) > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                {unread<10 ? unread : "10+"}
              </span>
            )}
          </div>
        </Link>

      )}
      { user &&  <NotificationButton />}
      <Link
        to="/contact"
        className="hover:text-blue-700 text-base font-bold transition"
      >
        Contact
      </Link>
      {/* <NotificationButton/> */}
    </>
  );

  return (
    <nav className="bg-white w-full z-50 shadow-lg">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-lg font-bold text-blue-800 leading-tight"
          >
            <img src={logo} alt="Logo" className="w-14" />
          </Link>
          <div className="border-l border-gray-300 h-8 mx-2" />
          <div className="font-semibold text-xl">Skill Exchange</div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 relative">
          {isAdmin ? renderAdminLinks() : renderUserLinks()}

          {user?.name ? (
            <Link to="/user-profile">
              <img src={user?.profilePic ? user?.profilePic : <FaRegUserCircle className="text-3xl text-blue-700 font-Poppins duration-300 hover:scale-110 cursor-pointer" /> } alt="" className="w-8 h-8 object-cover rounded-full" />
            </Link>
          ) : (
            !isAdmin && (
              <div className="flex space-x-3">
                <Link
                  to="/register"
                  className="bg-blue-700 text-white hover:bg-indigo-800 px-4 py-2 text-base rounded-md transition flex items-center space-x-1"
                >
                  <span>Register</span>
                  <FaChevronDown size={12} />
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-700 text-white hover:bg-indigo-800 px-4 py-2 text-base rounded-md transition flex items-center space-x-1"
                >
                  <span>Login</span>
                  <FaChevronDown size={12} />
                </Link>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu (Visible on Mobile) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 text-sm font-medium text-gray-700 space-y-3"
          >
            {isAdmin ? (
              <>
                <Link to={"/analytics-dashboard"} className="block hover:text-blue-700">
                  Analytics Dashboard
                </Link>
                <Link to={"/user-list"} className="block hover:text-blue-700">
                  User List
                </Link>
                {/* <Link to="/dashboard" className="block hover:text-blue-700">
                  Dashboard
                </Link> */}
                <Link to="/our-team" className="block hover:text-blue-700">
                  Team
                </Link>
                <Link
                  to="/our-privacy-policy"
                  className="block hover:text-blue-700"
                >
                  Privacy Policy
                </Link>
                <div className="flex items-center gap-3 w-full justify-center">
                  <Link
                    to={"/admin-profile"}
                    className="flex items-center text-2xl font-medium  hover:text-blue-600 transition duration-300 ease-in-out text-blue-500"
                  >
                    <FaUserCircle className="text-2xl mr-2 text-gray-700 hover:text-blue-600" />
                    <span className="text-xl text-blue-500 font-Poppins font-bold">Profile</span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Mobile User Menu Same as Before */}
                <div>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="flex items-center justify-between w-full hover:text-blue-700"
                  >
                    <span>About</span>
                    <FaChevronDown
                      className={`transition-transform ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-1 space-y-2"
                      >
                        {user && (
                          <>
                            <Link
                              to="/find-people"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Find People's
                            </Link>
                            <Link
                              to="/skill-marketplace"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Skill Marketplace
                            </Link>
                            <Link
                              to="/request"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Skill Request
                            </Link>
                          </>
                        )}
                        <Link
                          to="/our-team"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Team
                        </Link>
                        <Link
                          to="/our-privacy-policy"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Privacy Policy
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {user && (
                  <>
                    <Link
                      to="/find-people"
                      className="block hover:text-blue-700"
                    >
                      Find People's
                    </Link>
                    <Link to="/chat" className="block hover:text-blue-700">
                      Chat
                    </Link>
                    
                  </>
                )}
                <Link
                  to="/fresh-graduates"
                  className="block hover:text-blue-700"
                >
                  Fresh Graduates
                </Link>
  
                <Link to="/contact" className="block hover:text-blue-700">
                  Contact
                </Link>
                
              
                {user?.name ? (<>
                  <Link
                    to="/user-profile"
                    className="flex items-center text-blue-700 justify-center"
                  >
                    <img src={user?.profilePic ? user?.profilePic : <FaRegUserCircle className="text-3xl mr-2" />} alt="" className="w-10 h-10 rounded-full object-cover" />
                    <span className="ml-5">Profile</span>
                  </Link>
                </>) : (
                  <div className="flex flex-col space-y-2 pt-2">
                    <Link
                      to="/register"
                      className="bg-indigo-700 text-white px-4 py-2 rounded-md text-center"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="border border-indigo-700 text-blue-700 px-4 py-2 rounded-md text-center"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
