import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import authImage from "../assets/authImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

const Adminlogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [port, setPort] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleToggelPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    // Check if the admin is already logged in
    let token = localStorage.getItem("AdminToken");
    if (token) {
      navigate("/");  // If the token exists, navigate to the homepage or dashboard
    }
  }, []);


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password || !port) {
      setLoading(false);
      return toast.error("All fields are required!", { position: "top-center" });
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_USERS_BASE_URL}admin/login`,
        { email, password, port },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const data = response.data;
      localStorage.setItem("AdminToken", data.AdminToken);

      toast.success(data.message || "Admin Login successful!", {
        position: "top-center",
      });
      setLoading(false);
      navigate("/"); // Redirect to the dashboard or homepage after successful login
      window.location.reload();
    } catch (err) {
      setLoading(false);
      toast.error(err.response?.data?.error || "Invalid Credentials !", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4682b4] to-[#add8e6] p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl"
        >
          {/* Info Section */}
          <div className="hidden md:flex flex-col items-center justify-center bg-blue-100 p-10 w-1/2 text-center">
            <img src={authImage} alt="SkillSwap" className="w-72 mb-6" />
            <p className="text-gray-700 text-lg">
              Swap what you know for what you want to learn.
              <br />
              No money. Just skills. Learn locally or online.
            </p>
          </div>

          {/* Login Form */}
          <div className="flex-1 p-8 md:p-12 flex items-center justify-center relative">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">Admin - Log In</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Enter Port Number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  required
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute right-14 lg:bottom-32 bottom-[110px] cursor-pointer text-sm text-blue-700 font-bold"
                  onClick={handleToggelPassword}
                >
                  {showPassword ? "hide" : "show"}
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center ${
                    loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white text-center"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    <>Admin - Log in</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Adminlogin;
