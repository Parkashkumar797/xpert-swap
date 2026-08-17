import React from "react";
import { FaUserShield, FaUsers, FaSignOutAlt, FaCog } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdminDetails } from "../store/adminSlice";
import axios from "axios";
import { toast } from "react-toastify";
import {motion} from "framer-motion";

const AdminProfile = () => {
  const admin = useSelector((state) => state?.admin?.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutAdmin = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_USERS_BASE_URL}admin/logout`,
        { withCredentials: true }
      );

      localStorage.removeItem("AdminToken");
      toast.success("Logged out successfully" ,{ position: "top-center"},);
      dispatch(setAdminDetails(null));
      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.error || "Logout failed");
    }
  };

  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-b from-blue-700 to-white py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-10">
            <img
              src={
                admin?.image ||
                "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
              }
              alt="Admin"
              className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg hover:scale-105 duration-300 cursor-pointer"
            />
            <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl font-bold text-gray-800">XpertSwap</h2>
              <p className="text-gray-500">{admin?.email}</p>
              <p className="text-sm mt-1 text-blue-600 font-medium">
                Administrator
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Admin Actions
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 hover:bg-gray-50 p-3 rounded-md transition">
                <FaUsers className="text-blue-600" />
                <Link to="#" className="text-gray-700 font-medium">
                  Manage Users
                </Link>
              </li>
              <li className="flex items-center space-x-3 hover:bg-gray-50 p-3 rounded-md transition">
                <FaUserShield className="text-blue-600" />
                <Link to="/admin-controls" className="text-gray-700 font-medium">
                  Admin Controls
                </Link>
              </li>
              <li className="flex items-center space-x-3 hover:bg-gray-50 p-3 rounded-md transition">
                <FaUserShield className="text-blue-600" />
                <Link to="/admin-users-request" className="text-gray-700 font-medium">
                  User Request
                </Link>
              </li>
              <li className="flex items-center space-x-3 hover:bg-gray-50 p-3 rounded-md transition">
                <FaCog className="text-blue-600" />
                <Link to="#" className="text-gray-700 font-medium">
                  Settings
                </Link>
              </li>
              <li className="flex items-center space-x-3 hover:bg-red-50 p-3 rounded-md transition cursor-pointer">
                <FaSignOutAlt className="text-red-600" />
                <button
                  onClick={handleLogoutAdmin}
                  className="text-red-600 font-medium"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AdminProfile;
