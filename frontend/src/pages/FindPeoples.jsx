import React, { useEffect, useState } from "react";
import { FaSearch, FaCheck } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import findPeopleImage from "../assets/findpeople.png"; // Using the image as requested

const FindPeoples = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_USERS_BASE_URL}all/users`
        );
        setAllUsers(response?.data?.allUsers || []);
      } catch (err) {
        toast.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      setFilteredUsers([]);
      return;
    }

    const result = allUsers.filter((user) => {
      const nameMatch = user?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const skillOfferMatch = user?.skillyouoffre
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const skillWantMatch = user?.skillyouwant
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      return nameMatch || skillOfferMatch || skillWantMatch;
    });

    setFilteredUsers(result);
  }, [searchTerm, allUsers]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          {/* Top section: Globe Connect + Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="w-full md:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold font-robotoMono text-gray-900">
                Globe Connect
              </h2>
              <p className="text-black mt-1">
                Connect with people in your area to exchange skills
              </p>
              <button className="hidden sm:block text-sm font-semibold px-8 py-2 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition">
                Filter
              </button>
            </div>
            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden w-full md:w-auto md:max-w-sm">
              <input
                type="text"
                placeholder="Search People's"
                className="outline-none w-full text-md p-3 border-r-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 p-[13px] text-white hover:bg-blue-700">
                <FaSearch />
              </button>
            </div>
            <button className="block sm:hidden w-full text-sm font-semibold px-5 py-2 bg-blue-600 text-white rounded-lg mt-2 hover:bg-blue-700 transition">
              Filter
            </button>
          </div>

          {/* Conditional Content */}
          {searchTerm.trim() === "" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
              <div>
                <img
                  src={findPeopleImage}
                  alt="Exchange Skills"
                  className="w-full max-w-md mx-auto h-auto rounded-lg"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
                  Exchange Skills,
                  <br />
                  Unlock Potential
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg">
                  Learn what you want. Teach what you know. Join the community
                  where skills flow both ways
                </p>
                <ul className="space-y-4 text-gray-700 font-medium">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3 text-xl" />
                    <span>Learn from real people, not just courses</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3 text-xl" />
                    <span>Exchange skills, not money</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3 text-xl" />
                    <span>Collaborate, Connect and Grow</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : filteredUsers.length > 0 ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
              {filteredUsers.map((user, index) => (
                <div
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition border"
                  key={index}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://www.nimble-made.com/cdn/shop/articles/business-formal-men_30509580-8eff-4a45-bbae-3e6122c8f52a.jpg?v=1743535951"
                      alt={user?.name}
                      className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover mb-4"
                    />
                    <h4 className="text-lg font-bold font-Poppins">
                      {user?.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 my-4 justify-center">
                    {user?.skillyouoffre && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        {user.skillyouoffre}
                      </span>
                    )}
                    {user?.skillyouwant && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                        {user.skillyouwant}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() =>
                        navigate(`/other-user-profile/${user._id}`)
                      }
                      className="bg-blue-600 text-white font-semibold font-Poppins px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md w-full"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-black text-center text-2xl font-semibold mt-10 h-48 flex items-center justify-center">
              <p>😕 No users found.</p>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default FindPeoples;
