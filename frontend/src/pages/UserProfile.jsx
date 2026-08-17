import React from "react";
import profilelogo from "../assets/profilelogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import { FaStar, FaPlus } from "react-icons/fa";

const UserProfile = () => {
  const user = useSelector((state) => state?.user?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = async () => {
    try {
      await axios.get(
        `${import.meta.env.VITE_USERS_BASE_URL}users/logout`,
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
      dispatch(setUserDetails(null));
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.error || "Logout failed");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen flex items-center justify-center py-8 px-2"
      >
        <div className="w-full max-w-6xl font-inter bg-white rounded-2xl border border-blue-100 shadow-lg p-2 sm:p-6 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Profile Card and Buttons as a vertical stack */}
            <div className="flex flex-col items-center lg:w-1/3">
              <div className="w-full border border-blue-200 rounded-xl p-5 flex flex-col items-center bg-white shadow-sm">
                {/* Top Row: Image + Name/Subtitle + Edit Button */}
                <div className="flex w-full items-center gap-4 mb-2">
                  <img
                    src={user?.profilePic || profilelogo}
                    alt="User Img"
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-blue-400 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-lg font-bold text-black font-robotoMono whitespace-nowrap">{user?.name || "User"}</h2>
                    </div>
                    <div className="text-gray-700 text-sm font-normal leading-tight">Full Stack Developer</div>
                    <div className="flex items-center text-yellow-500 text-base font-medium mt-1">
                      <FaStar className="mr-1 text-sm" /> 8.5 <span className="text-gray-400 font-normal ml-1 text-sm">/ 10</span>
                    </div>
                  </div>
                </div>
                {/* Address and About */}
                <div className="w-full text-left mt-2 mb-2">
                  <p className="text-sm text-gray-800 mb-1"><span className="font-bold">Address:</span> {user?.address || "Not provided"}</p>
                </div>
                <div className="w-full bg-gray-50 p-3 font-inter rounded-lg border border-gray-100 mb-3">
                  <h4 className="font-bold text-sm mb-1 text-gray-800">About me:</h4>
                  <p className="text-sm text-gray-700">
                    {!user?.bio || user?.bio?.trim("") === "" ? (
                      <>
                        I'm skilled in Web Design, Website Markup, and building sleek One Page websites. I focus on clean, responsive designs that are both visually appealing and easy to use.
                      </>
                    ) : (
                      user?.bio
                    )}
                  </p>
                </div>
                {/* Edit Profile button below About me */}
                <Link
                  to={`/edit-profile/${user?._id}`}
                  className="w-full mb-3 py-2 rounded-md border border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 text-center transition text-base"
                >
                  Edit Profile
                </Link>
              </div>
              {/* Buttons below profile card */}
              <div className="w-full flex flex-col items-center gap-3 mt-4">
                <Link
                  to="/find-people"
                  className="w-full py-2 rounded-md border border-green-500 text-green-700 font-semibold hover:bg-green-50 text-center transition text-base"
                >
                  View Others Profile
                </Link>
                <button
                  onClick={handleLogoutUser}
                  className="w-full py-2 rounded-md border border-red-500 text-red-600 font-semibold hover:bg-red-50 text-center transition text-base"
                >
                  Logout
                </button>
              </div>
            </div>
            {/* Info Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Offered Skills */}
              <div className="border-2 border-blue-200 rounded-xl p-4 bg-white flex flex-col min-h-[110px] relative shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold font-robotoMono text-base tracking-wide text-black">Offered Skills</span>
                  <FaPlus className="text-black text-xs absolute top-3 right-3" />
                </div>
                <div className="flex-1 flex items-center">
                  <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 text-sm">
                    {user?.skillyouoffre || "Not specified"}
                  </span>
                </div>
              </div>
              {/* Wanted Skills */}
              <div className="border-2 border-blue-200 rounded-xl p-4 bg-white flex flex-col min-h-[110px] relative shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold font-robotoMono text-base tracking-wide text-black">Wanted Skills</span>
                  <FaPlus className="text-black text-xs absolute top-3 right-3" />
                </div>
                <div className="flex-1 flex items-center">
                  <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 text-sm">
                    {user?.skillyouwant || "Not specified"}
                  </span>
                </div>
              </div>
              {/* Swap History */}
              <div className="border-2 border-blue-200  rounded-xl p-4 bg-white flex flex-col min-h-[110px] shadow-sm">
                <span className="font-bold text-base tracking-wide text-black mb-2">Swap History</span>
                <ul className="space-y-2">
                  <li className="bg-gray-50 shadow-lg px-3 py-2 rounded-md text-xs text-gray-700 border border-gray-100">Frontend Swap with Rohit (Apr 2024)</li>
                  <li className="bg-gray-50  shadow-lg px-3 py-2 rounded-md text-xs text-gray-700 border border-gray-100">Database Access with Simran (Feb 2024)</li>
                  <li className="bg-gray-50 shadow-lg px-3 py-2 rounded-md text-xs text-gray-700 border border-gray-100">Landing Page Project with Aman (Jan 2024)</li>
                </ul>
              </div>
              {/* Reviews */}
              <div className="border-2 border-blue-200  rounded-xl p-4 bg-white flex flex-col min-h-[110px] shadow-sm">
                <span className="font-bold font-robotoMono text-base tracking-wide text-gray-800 mb-2">Reviews</span>
                <ul className="space-y-2">
                  <li className="bg-gray-50 shadow-lg px-3 py-2 rounded-md text-xs border border-gray-100 flex flex-col">
                    <span className="font-semibold text-gray-800 flex items-center">Aditi <span className="text-yellow-500 ml-1 text-xs flex">{[...Array(5)].map((_,i)=>(<FaStar key={i} className="inline-block"/>))}</span></span>
                    <span className="text-black mt-1">"Very cooperative and skilled!"</span>
                  </li>
                  <li className="bg-gray-50 shadow-lg px-3 py-2 rounded-md text-xs border border-gray-100 flex flex-col">
                    <span className="font-semibold text-gray-800 flex items-center">Rahul <span className="text-yellow-500 ml-1 text-xs flex">{[...Array(3)].map((_,i)=>(<FaStar key={i} className="inline-block"/>))}</span></span>
                    <span className="text-black mt-1">"Response time could improve."</span>
                  </li>
                  <li className="bg-gray-50 shadow-lg px-3 py-2 rounded-md text-xs border border-gray-100 flex flex-col">
                    <span className="font-semibold text-gray-800 flex items-center">Meena <span className="text-yellow-500 ml-1 text-xs flex">{[...Array(5)].map((_,i)=>(<FaStar key={i} className="inline-block"/>))}</span></span>
                    <span className="text-black mt-1">"Perfect trade, great guy!"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default UserProfile;
