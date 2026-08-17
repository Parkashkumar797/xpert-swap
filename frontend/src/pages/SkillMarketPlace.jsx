import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const SkillMarketPlace = () => {
  const [skills, setSkills] = useState("");
  const [addSkills, setAddSkills] = useState([]);

  const handleSumitSkills = (e) => {
    e.preventDefault();
    if (skills.trim() !== "") {
      setAddSkills((prevSkills) => [...prevSkills, skills]);
      setSkills("");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-start bg-gradient-to-b from-blue-300 to-gray-100 p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-8 mt-12"
        >
          {/* Title + Subtitle */}
          <div className="mb-6">
            <h2 className="text-3xl font-robotoMono font-bold text-gray-800">Your Skill</h2>
            <p className="text-md text-black font-inter mt-1">
              Connect with skilled people
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSumitSkills}>
            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Select a skill u can teach"
                name="skill"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full px-5 py-3 text-gray-700 font-medium focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 p-4 text-white hover:bg-blue-700"
              >
                <FaSearch className="text-lg" />
              </button>
            </div>
          </form>

          {/* Skill Tags */}
          {addSkills.length > 0 && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {addSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-full font-medium transition-all cursor-pointer text-center shadow-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default SkillMarketPlace;
