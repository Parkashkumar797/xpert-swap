import React, { useState , useEffect} from "react";
import otherProfilelogo from "../assets/otherprofilelogo.jpg"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import { Users } from "lucide-react";
import FollowBtn from "../components/followBtn";
import { GetAllFollowers } from "../hooks/useGetAllFollowers";


const OtherUserProfile = () => {

  const [user , setUser] = useState({});
  const [loading , setloading] = useState(true);
  const {id} = useParams();
  useEffect(() => {
  const fetchOtherUsersDetails = async () => {

    try{
      // fetching single user details
      const response = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}all/Users/${id}`,{
        withCredentials: true,
      });
      const users = response?.data?.user || {} ;
      console.log("Fetched User:", users); // Log the fetched user data
      setUser(users);
    }catch(err){
      toast.error("Failed to fetch users", { position: "top-center" })
    }finally{
      setloading(false);
    }
  }
    fetchOtherUsersDetails();

  } , []);

if(loading){
  return <><p className="text-4xl text-black font-bold font-Poppins text-center w-full">Loading...</p></>
}


  const fadeIn = {
    hidden: {opacity:0, y:20},
    visible: {opacity : 1, y:0 , transition: {duration:0.8}}
  }


  return (
    <div>
      <Header />
      <motion.div
      initial= "hidden"
      animate = "visible"
      variants={fadeIn}
      className="bg-[#6597c8] min-h-screen py-6">
        <div className="max-w-6xl mx-auto bg-[#2d67be] p-8 rounded-2xl shadow-lg text-gray-900">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Side */}
            <div className="md:w-1/3 bg-gradient-to-b from-[#e0eafc] to-[#cfdef3] p-6 rounded-2xl shadow-md text-center">
              <img
                src={otherProfilelogo}
                alt="User"
                referrerpolicy="no-referrer"
                className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 mb-4"
              />
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <p className="text-sm text-gray-700">UI/UX Designer</p>
              <p className="text-yellow-400 text-lg">
                &#9733; <span className="text-black">7.8 / 10</span>
              </p>
              <div className="my-4 flex flex-col gap-2">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-full py-2 px-4">
                  Follow
                </button> */}
                <FollowBtn UserId={id} isFollowing={user.isFollowing}/>
                <Link to={"/send-request"} className="bg-gray-600 hover:bg-gray-700 text-white rounded-full py-2 px-4">
                  Send Request
                </Link>
              </div>
              <div className="bg-white text-left p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">About Me</h4>
                <p className="text-sm">
                  Creative thinker with experience in user interfaces, branding,
                  and product flows. Passionate about making things that are
                  usable and beautiful.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="md:w-2/3 space-y-6">
              {/* User Info */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold mb-4">User Info</h3>
                <p>
                  <b>Full Name:</b> {user?.name}
                </p>
                <p>
                  <b>Address:</b> {user?.address}
                </p>
              </div>

              {/* Projects */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white p-6 rounded-xl shadow hover:scale-105 transition">
                  <h4 className="bg-blue-500 text-white p-2 rounded mb-3 text-center">
                    Offered Skills
                  </h4>
                  <ul className="list-none space-y-2">
                    <li className="bg-gray-100 p-2 rounded">{user?.skillyouoffre}</li>
                    <li className="bg-gray-100 p-2 rounded">
                      Figma Prototyping
                    </li>
                    <li className="bg-gray-100 p-2 rounded">Design Systems</li>
                  </ul>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow hover:scale-105 transition">
                  <h4 className="bg-blue-500 text-white p-2 rounded mb-3 text-center">
                    Wanted Skills
                  </h4>
                  <ul className="list-none space-y-2">
                    <li className="bg-gray-100 p-2 rounded">
                      {user?.skillyouwant}
                    </li>
                    <li className="bg-gray-100 p-2 rounded">API Integration</li>
                  </ul>
                </div>
              </div>

              {/* Extras */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white p-6 rounded-xl shadow hover:scale-105 transition">
                  <h4 className="bg-blue-500 text-white p-2 rounded mb-3 text-center flex items-center justify-center gap-2">
                    <i className="fas fa-exchange-alt"></i> Swap History
                  </h4>
                  <ul className="list-none space-y-2">
                    <li className="bg-gray-100 p-2 rounded">
                      UI Mockups with Shivam (Mar 2024)
                    </li>
                    <li className="bg-gray-100 p-2 rounded">
                      CSS Cleanup with Priya (Jan 2024)
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow hover:scale-105 transition">
                  <h4 className="bg-blue-500 text-white p-2 rounded mb-3 text-center flex items-center justify-center gap-2">
                    <i className="fas fa-star"></i> Reviews
                  </h4>
                  <ul className="list-none space-y-2">
                    <li className="bg-gray-100 p-2 rounded">
                      ⭐⭐⭐⭐ - "Impressive designs!" - Simran
                    </li>
                    <li className="bg-gray-100 p-2 rounded">
                      ⭐⭐⭐ - "Nice UI but needs docs." - Kunal
                    </li>
                    <li className="bg-gray-100 p-2 rounded">
                      ⭐⭐⭐⭐⭐ - "Loved collaborating with him!" - Shivam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default OtherUserProfile;
