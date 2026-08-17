import React, { useEffect, useState } from "react";
import { FaEnvelope, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// import avatar1 from "../assets/otherprofilelogo.jpg";
// import avatar2 from "../assets/profilelogo.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {motion, useScroll} from "framer-motion";
import {toast} from "react-toastify";
import axios from "axios";

// const users = [
//   { name: "Rahul Verma", avatar: avatar1, status: "active" },
//   { name: "Arjun Mehta", avatar: avatar2, status: "inactive" },
//   { name: "Sneha Gupta", avatar: avatar1, status: "inactive" },
//   { name: "Rohit Verma", avatar: avatar2, status: "active" },
//   { name: "Ankita Joshi", avatar: avatar1, status: "active" },
//   { name: "Vikas Rathi", avatar: avatar2, status: "inactive" },
//   { name: "Ayesha Khan", avatar: avatar1, status: "active" },
//   { name: "Manish Jain", avatar: avatar2, status: "inactive" },
//   { name: "Nikita Patel", avatar: avatar1, status: "active" },
//   { name: "Rajat Kumar", avatar: avatar2, status: "inactive" },
//   { name: "Simran Kaur", avatar: avatar1, status: "active" },
//   { name: "Aman Tiwari", avatar: avatar2, status: "inactive" },
//   { name: "Neha Saini", avatar: avatar1, status: "active" },
//   { name: "Deepak Rao", avatar: avatar2, status: "inactive" },
//   { name: "Kavita Yadav", avatar: avatar1, status: "active" },
// ];

const statusColors = {
  active: "bg-green-500 text-white",
  pending: "bg-yellow-400 text-gray-800",
  inactive: "bg-red-500 text-white",
};


const fadeIn = {
  hidden: {opacity:0, y:20},
  visible: {opacity : 1, y:0 , transition: {duration:0.8}}
}

const UserList = () => {

  const [allUsers , setAllUsers] = useState(null);

  const fetchAllUsers = async () => {
    try{
      const response = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}all/users`);
      // console.log("all users" , response);
      const allUsers = response?.data?.allUsers;
      setAllUsers(allUsers);
      toast.success("All Learners" , {position:"top-center" , autoClose:1000});
    }catch(err){
      toast.error(err.error, {position:"top-center"});
    }
  }
  
  useEffect(() => {
    fetchAllUsers();
  } , []);


  return (
    <>
      <Header />
      <motion.div 
      initial = "hidden"
      animate = "visible"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-r from-purple-700 to-blue-500 p-6">
        <Link
          to="/"
          className="inline-block mb-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-md hover:bg-blue-600 hover:text-white transition"
        >
          ← Back to Profile
        </Link>

        <h2 className="text-white text-3xl text-center font-semibold mb-6">
          All Users
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white bg-opacity-95 rounded-xl shadow-xl animate-fadeIn">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-center">Profile</th>
                <th className="p-4 text-center">Full Name</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="cursor-pointer">
              {allUsers?.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition transform hover:scale-[1.01] even:bg-gray-100"
                >
                  <td className="p-4 text-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full shadow-md mx-auto"
                    />
                  </td>
                  <td className="p-4 text-center font-medium text-gray-700">
                    {user.name}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold uppercase ${
                        statusColors[user.status]
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-center space-x-4">
                    <Link to={"/send-request"}>
                    <FaEnvelope
                      className="inline text-blue-600 hover:text-purple-600 transition-transform hover:scale-125 cursor-pointer"
                      title="Send Email"
                    />
                    </Link>
                    <Link to={`/other-user-profile/${user._id}`} title="View Profile">
                      <FaEye className="inline text-blue-600 hover:text-purple-600 transition-transform hover:scale-125 cursor-pointer" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default UserList;
