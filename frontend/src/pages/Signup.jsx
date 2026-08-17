import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import authImage from "../assets/authImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import GoogleAuthBtn from "../components/GoogleAuthBtn";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeTOTerms] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    skillyouoffre: "",
    skillyouwant: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      address,
      password,
      confirmPassword,
      skillyouoffre,
      skillyouwant,
    } = formData;

    if (!name || !email || !phone || !address || !password || !confirmPassword || !skillyouoffre || !skillyouwant) {
      return toast.error("All fields are required!", { position: "top-center" });
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match", { position: "top-center" });
    }

    if (!agreeToTerms) {
      return toast.warning("Please agree to the Terms & Conditions.", { position: "top-center" });
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_USERS_BASE_URL}users/register`,
        formData,
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      toast.success(response.data.message || "Registration successful!", {
        position: "top-center",
      });
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.error || "you allready exist.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4682b4] to-[#add8e6] p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full max-w-5xl overflow-hidden"
        >
          {/* Left Image/Info */}
          <div className="hidden md:flex flex-col justify-center items-center bg-blue-100 w-1/2 p-10 text-center">
            <img src={authImage} alt="Signup illustration" className="w-72 h-72 object-contain mb-6 rounded-lg" />
            <p className="text-gray-700">
              Swap what you know for what you want to learn.
              <br /> No money. Just skills.
            </p>
          </div>

          {/* Signup Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { name: "name", placeholder: "Full Name", type: "text" },
                { name: "email", placeholder: "Email", type: "email" },
                { name: "phone", placeholder: "Contact Number", type: "tel" },
                { name: "skillyouoffre", placeholder: "Skill You Offer", type: "text" },
                { name: "skillyouwant", placeholder: "Skill You Want", type: "text" },
                { name: "address", placeholder: "Your Address", type: "text" },
                { name: "password", placeholder: "Password", type: showPassword ? "text" : "password" },
                { name: "confirmPassword", placeholder: "Confirm Password", type: "password" },
              ].map((input) => (
                <input
                  key={input.name}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData[input.name]}
                  onChange={handleChange}
                  required
                />
              ))}

              <div className="text-sm text-right text-blue-600 cursor-pointer" onClick={togglePassword}>
                {showPassword ? "Hide Password" : "Show Password"}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={() => setAgreeTOTerms(!agreeToTerms)}
                  className="cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <Link to="/our-privacy-policy" className="text-blue-500 font-bold underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-medium text-white transition duration-200 ${
                  loading || !agreeToTerms
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="white"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : (
                  "Sign Up"
                )}
              </button>
              <GoogleAuthBtn login={false}/>
            </form>
                
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-bold">
                Log In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
