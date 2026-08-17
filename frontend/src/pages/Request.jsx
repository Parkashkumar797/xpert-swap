import React from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Request = () => {
  // Sample data for skill requests
  const skillRequests = [
    {
      name: "Anna Smith",
      offerSkill: "Photography",
      wantToLearn: "Editing",
      avatar:
        "https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg",
    },
    {
      name: "John Doe",
      offerSkill: "Animation",
      wantToLearn: "React",
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      name: "Emily Johnson",
      offerSkill: "UI/UX Design",
      wantToLearn: "Video Editing",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Michael Brown",
      offerSkill: "Digital Marketing",
      wantToLearn: "Public Speaking",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    },
  ];

  // skills
  const skills = [
    "Select Skill",
    "Web Development",
    "Graphic Design",
    "Video Editing",
    "Digital Marketing",
    "Content Writing",
    "Public Speaking",
    "Photography",
    "UI/UX Design",
    "Mobile App Development",
    "Data Analysis",
    "Copywriting",
    "Social Media Management",
    "SEO Optimization",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "Blockchain Development",
    "Cloud Computing",
    "Game Development",
    "Illustration",
    "Motion Graphics",
    "Animation",
    "Voice Over",
    "Music Production",
    "Foreign Language",
    "Project Management",
    "Leadership",
    "Negotiation",
    "Sales",
    "Finance",
    "Accounting",
    "Excel",
    "Python",
    "JavaScript",
    "C++",
    "Java",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
    "Writing Resumes",
    "Interview Preparation",
    "Technical Support",
    "Customer Service",
    "HR & Recruiting",
    "Entrepreneurship",
    "Freelancing",
    "Teaching/Tutoring",
    "Time Management",
    "Problem Solving",
    "Critical Thinking",
    "Creative Writing",
    "Podcasting",
    "Blogging",
    "E-commerce",
    "Dropshipping",
    "Amazon FBA",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-4xl"
        >
          <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Your Skill */}
              <div>
                <label
                  htmlFor="your-skill"
                  className="block text-md font-bold text-gray-800 mb-2"
                >
                  Your Skill
                </label>
                <div className="relative">
                  <select
                    id="your-skill"
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {skills.map((skill, idx) => (
                      <option key={idx} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Skill You Want to Learn */}
              <div>
                <label
                  htmlFor="want-skill"
                  className="block text-md font-bold text-gray-800 mb-2"
                >
                  Skill You Want to Learn
                </label>
                <div className="relative">
                  <select
                    id="want-skill"
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {skills.map((skill, idx) => (
                      <option key={idx} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FaSearch />
                  Find Your Perfect Match
                </button>
              </div>
            </form>
          </div>

          {/* Available Skill Exchanges Section */}
          <div className="mt-12">
            <div className="rounded-t-xl border border-blue-400 bg-gradient-to-r from-[#2352D9] to-[#DBE3F9] px-6 py-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-white mb-1">Available Skill Exchanges</h3>
              <span className="text-xs sm:text-sm text-white font-mono">5 new matches today</span>
            </div>
            <div className="w-full bg-white border border-blue-400 border-t-0 rounded-b-xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillRequests.map((request, idx) => (
                <div key={idx} className="flex flex-col border border-blue-400 rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition duration-300" style={{minHeight:'300px'}}>
                  <div className="flex items-center w-full mb-3">
                    <img
                      src={request.avatar}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-2 border-white shadow mr-4"
                    />
                    <div className="flex flex-col items-start flex-1">
                      <span className="font-robotoMono text-nowrap font-bold text-lg text-gray-900 mb-1">{request.name}</span>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold rounded px-2 py-0.5 mb-1">Online now</span>
                      <div className="flex items-center text-yellow-500 text-base font-medium mb-1">
                        <svg className="inline-block w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                        <span className="ml-2 text-yellow-500 font-semibold text-base">8.5 <span className="text-gray-400 font-normal">/ 10</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2 mt-2 mb-4">
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-black font-inter">Wants to learn</span>
                      <span className="font-bold text-md text-gray-900">{request.wantToLearn}</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-black font-inter">Can teach</span>
                      <span className="font-bold text-md text-gray-900">{request.offerSkill}</span>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 mt-auto">
                    <button className="flex-1 bg-[#1FA301] rounded-md px-4 py-2 font-bold text-white hover:bg-green-600 transition-colors text-sm">Connect</button>
                    <button className="flex-1 border border-blue-500 rounded-md px-4 py-2 font-bold text-blue-600 bg-white hover:bg-blue-50 transition-colors text-sm">Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requests Section */}
          {/* <div className="mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Your Request
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillRequests.map((request, idx) => (
                <div
                  key={idx}
                  className="flex duration-300 items-center gap-3 w-full border bg-white p-3 shadow-lg rounded-lg hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={request.avatar}
                    alt="Profile"
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div className="flex-grow">
                    <p className="font-bold text-lg text-gray-900">{request.name}</p>
                    <p className="text-sm text-gray-600">
                      Wants:{" "}
                      <span className="font-semibold text-gray-800">
                        {request.wantToLearn}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Offers:{" "}
                      <span className="font-semibold text-gray-800">
                        {request.offerSkill}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-blue-500 rounded-md px-4 py-2 font-bold text-white hover:bg-blue-600 transition-colors text-sm">
                      Accept
                    </button>
                    <button className="bg-gray-200 rounded-md px-4 py-2 font-bold text-gray-800 hover:bg-gray-300 transition-colors text-sm">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Request;
