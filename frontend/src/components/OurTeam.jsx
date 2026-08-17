import React from "react";
// import ritiksir from "../assets/ritiksir.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import ritikSir from "../assets/Team/ritikSir.jpg";
import shivamImg from "../assets/Team/Shivam.jpg";
import alokImg from "../assets/Team/Alok.png";
import sumitImg from "../assets/Team/Sumit.jpg";
import nitinImg from "../assets/Team/Nitin.jpg";
import dharmeshImg from "../assets/Team/Dharmesh.jpg";
import ayushiImg from "../assets/Team/ayushi.jpg";

const OurTeam = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const teamMembers = [
    {
      name: "Shivam Maurya",
      role: "Fullstack Developer",
      description:
  "XpertSwap was built entirely from the ground up — from the initial idea to full-stack development, deployment, and ongoing maintenance. The core structure, features, and flow were thoughtfully designed to create a smooth, scalable skill-sharing platform. While the team contributed in parts, the foundation and execution reflect a single, focused vision.",
      linkedin: "https://www.linkedin.com/in/technical-shivam",
      github: "https://github.com/shivam-sd",
      "portfolio":"https://shivambca.netlify.app",
      image: shivamImg,
    },
    {
      name: "Alok Yadav",
      role: "Fullstack Developer",
      description:
        "Alok is a dedicated Fullstack Developer, contributing to the development of XpertSwap.",
        linkedin: "https://www.linkedin.com/in/alok-yadav-906920292/",
      github: "https://github.com/alokyadav9045",
      "portfolio":"https://alokyadavportfolio.netlify.app",
      image: alokImg,
    },
    {
      name: "Dharmesh Kushwaha",
      role: "Frontend Developer",
      description:
        "Dharmesh is a creative Frontend Developer, working on the visual elements of XpertSwap.",
      linkedin: "https://xpertswap.com",
      github: "",
      image: dharmeshImg,
    },
    {
      name: "Sumit Saxena",
      role: "Frontend Developer",
      description:
        "Sumit is a skilled Frontend Developer, enhancing the user experience of XpertSwap.",
      linkedin: "https://xpertswap.com",
      github: "",
      image: sumitImg,
    },
    {
      name: "Nitin Verma",
      role: "Frontend Developer",
      description:
        "Nitin is a talented Frontend Developer, focusing on the design aspects of XpertSwap.",
      linkedin: "https://xpertswap.com",
      github: "",
      image: nitinImg,
    },
    {
      name: "Ayushi Koharwal",
      role: "UI&UX Desiner",
      description:
        "Design intuitive and engaging user interfaces that enhance user experience across web and mobile platforms Collaborate with cross-functional teams to transform user needs into seamless, visually appealing digital experiences.",
        linkedin: "https://www.linkedin.com/in/ayushi-koharwal-b69a61275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        // github: "https://github.com/shivam-sd",
        // "portfolio":"https://shivambca.netlify.app",
      image: ayushiImg,
    },
    
  ];

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full min-h-screen bg-gradient-to-br from-blue-600 to-blue-200 flex flex-col items-center p-4"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-10 max-w-4xl w-full text-center mb-12">
          <div className="flex flex-col items-center mb-6">
            <img
              src={ritikSir}
              alt="Ritik Sir - Mentor"
              className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-md hover:scale-105 transition duration-200"
            />
            <h2 className="text-3xl font-bold text-blue-800 mt-4">
              Ritik Sir - Our Mentor 🙌
            </h2>
            <p className="text-gray-600 mt-2">
              Guiding light behind{" "}
              <span className="font-semibold">XpertSwap</span>
            </p>
          </div>
          <div className="text-left text-gray-700 space-y-4">
            <p>
              Under the invaluable guidance of{" "}
              <span className="font-semibold text-blue-600">Ritik Sir</span>, we
              created a platform that connects people based on skills.
            </p>
            <p>
              <span className="font-bold text-blue-700">XpertSwap</span> is a
              real-time skill exchange platform where people can
              <span className="font-semibold text-blue-600">
                {" "}
                teach and learn skills from each other
              </span>{" "}
              – all based on mutual exchange.
            </p>
            <p>
              From local mentor connections to real-time communication and skill
              sharing, XpertSwap empowers every learner and teacher to grow
              together.
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-Poppins font-bold text-white mb-8 drop-shadow">
          OUR TEAM
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-0 max-w-6xl w-full mb-12 cursor-pointer">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 object-cover mb-4"
              />
              <h2 className="text-xl text-blue-500 font-semibold mb-1 text-center">
                {member.name}
              </h2>
              <p className="text-center font-medium text-sm mb-2">{member.role}</p>
              <p className="text-sm mb-4 text-center">{member.description}</p>
              <div className="flex justify-center gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-xl"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-xl"
                  >
                    <FaGithub />
                  </a>
                )}
                 {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-xl"
                  >
                    <FaGlobeAfrica />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default OurTeam;
