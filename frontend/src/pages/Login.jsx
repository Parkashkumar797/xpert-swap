import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImage from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import Context from "../context/Context";
import GoogleAuthBtn from "../components/GoogleAuthBtn";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggelPassword = () => {
    setShowPassword((prev) => !prev);
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { fetchUsersDetails } = useContext(Context); // Destructure directly

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      return toast.error("All fields are required!", { position: "top-center" });
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_USERS_BASE_URL}users/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const data = response.data;
      localStorage.setItem("token", data.token);

      toast.success(data.message || "Login successful!", {
        position: "top-center",
      });
      setLoading(false);
      fetchUsersDetails(); // Fetch user info after login
      navigate("/");

    } catch (err) {
      // console.error("Login Error:", err);
      setLoading(false);
      toast.error(err.response?.data?.error || "Invalid Credentials !", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4682b4] to-[#add8e6] ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl"
        >
          {/* Info Section */}
          <div className="hidden md:flex flex-col items-center justify-center bg-blue-100 w-1/2 text-center">
            <img src={loginImage} alt="SkillSwap" className="w-80" />
            {/* <p className="text-gray-700  text-lg">
              Swap what you know for what you want to learn.
              <br />
              No money. Just skills. Learn locally or online.
            </p> */}
          </div>

          {/* Login Form */}
          <div className="flex-1  md:p-8 flex items-center justify-center relative">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold font-robotoMono text-left mb-6">
                Welcome Back
                <p className="text-base font-normal">Sign in to continue your journey</p>
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-lg font-roboto" htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 font-roboto border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-lg font-roboto" htmlFor="">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Yor Password"
                    className="w-full font-roboto px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required

                  />
                  <svg className="relative -top-8 left-[480px] md:left-[340px] sm:left-[300px]" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M8 0.166656C4.36364 0.166656 1.25818 2.42847 0 5.6212C1.25818 8.81393 4.36364 11.0757 8 11.0757C11.6364 11.0757 14.7418 8.81393 16 5.6212C14.7418 2.42847 11.6364 0.166656 8 0.166656ZM8 9.25757C5.99273 9.25757 4.36364 7.62847 4.36364 5.6212C4.36364 3.61393 5.99273 1.98484 8 1.98484C10.0073 1.98484 11.6364 3.61393 11.6364 5.6212C11.6364 7.62847 10.0073 9.25757 8 9.25757ZM8 3.43938C6.79273 3.43938 5.81818 4.41393 5.81818 5.6212C5.81818 6.82847 6.79273 7.80302 8 7.80302C9.20727 7.80302 10.1818 6.82847 10.1818 5.6212C10.1818 4.41393 9.20727 3.43938 8 3.43938Z" fill="#4D4D4D" />
                  </svg>
                </div>
                {/* <div className="text-sm text-center ">Login  as <Link to={"/admin-login"} className="text-blue-500 font-bold font-Poppins text-sm hover:underline">admin</Link></div> */}
                {/* <span className="absolute right-14 lg:bottom-[200px] bottom-[185px] cursor-pointer text-sm text-blue-700 font-bold" onClick={handleToggelPassword}>{showPassword ? "hide" : "show"}</span> */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#1D4ED8] hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                  >
                    {loading ? (
                      <>
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
                      </>
                    ) : (
                      <>Log in</>
                    )}
                  </button>
                </div>
                <GoogleAuthBtn login={true} />
              </form>
              <p className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="text-blue-600 text-md font-bold">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
