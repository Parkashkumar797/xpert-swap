import React from "react";
import welcomefreshImg from "../assets/welcomefresh.png"
import freshgraduateImg from "../assets/freshgraduate.png"
import {
  FaUserEdit,
  FaEye,
  FaBuilding,
  FaTrophy,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Image from "../assets/freshGraduate.png";

const bgImage = Image;

const FreshGraduates = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const Loggedin = localStorage.getItem("token");

  return (
    <>
      <Header />
      <motion.section
        className="w-full bg-gray-50 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* 🔷 Background Image */}
        <div className="flex p-8 md:p-14 md:justify-center items-center md:flex-row sm:flex-col-reverse sm:p-12 shadow-lg space-y-3 justify-center gap-8">
          <div className="space-y-5">
            <div className="content text-3xl text-wrap font-semibold font-robotoMono">Transform Your Knowledge Into Career Success</div>
            <div className="text-lg font-inter">
              <div className="text-base mb-4">Join India's largest skill exchange platform where fresh graduates <br /> learn, teach, and grow together. No fees, just real-world experience.</div>
              <div className="mb-2">✓ Learn in-demand skills from real peers</div>
              <div className="mb-2">✓ Teach what you know, build confidence</div>
              <div className="mb-2">✓ Gain Project experience for your portfolio</div>
              <div className="mb-2">✓ Connect with verified mentors</div>
              <div className="mb-2">✓ Flexible learning, on your own time</div>
              <div className="mb-2">✓ Boost your resume with real feedback</div>
              <div className="mb-2">✓ No fees, just value-based exchange</div>
              <div className="mb-2">✓ Build your network across India</div>
              <div className="mb-2">✓ Learn in-demand skills from real peers</div>
            </div>
          </div>
          <div>
            <img
              className="w-64 h-96 md:h-96 md:w-96 bg-cover bg-center object-fill"
              src={freshgraduateImg} alt="fresh graduates"
            />
          </div>
        </div>
        {/* 🔷 Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 text-3xl font-semibold font-robotoMono">Welcome Fresh Graduates!</div>
        <div className="max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-10">
          {/*  */}
          <img className="md:w-50 sm:w-64" src={welcomefreshImg} alt="" />
          <div className="space-y-6 text-lg font-inter">
            <div>College se nikalte hi confusion hoti hai – ab kya karein? XpertSwap ke sath apni skills ko polish karo aur naye skills seekho real logon se, real duniya ke examples ke sath.</div>
            <div>
              Yahan aap kisi aur ki skill seekh kar apni skill de sakte hain. Zero pressure, sirf growth – chahe aap beginner ho ya intermediate ya industry expert.</div>
            <div>Aapke paas jo knowledge hai, usse dusron ko sikhaiye. Aur unse sikhaiye jinke paas practical experience hai. Mutual growth hi XpertSwap ka core hai.</div>
            <div>India ke naye talent ka hub – XpertSwap pe active rahiye, top learners/mentors list me aayein aur apna impact banaiye.</div>
          </div>
          {/* </motion.div> */}
        </div>
      </motion.section >

      {/* Who Can Apply Section */}
      < motion.section
        className="w-full overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <section className="bg-cyan-100 py-12 px-2 text-center flex flex-col items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            Who Can Apply
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: "1",
                text: "College ya job ke baad bhi asaani se seekh sakte ho – apne time ke according.",
              },
              {
                id: "2",
                text: "Har skill exchange ke baad feedback milega jo aapki credibility banayega.",
              },
              {
                id: "3",
                text: "Students who are about to take or have just taken the course-end examinations",
              },
              {
                id: "4",
                text: "India ke har kone se log jud rahe hain – naye connections aur career opportunities ke liye best chance.",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                className="font-bold tracking-wider text-black rounded-md py-6 px-4 border border-[#1D4ED8] "
                variants={fadeIn}
              >
                <h3 className="text-2xl h-14 w-14 relative -top-14 left-[36%] bg-cyan-100 text-center border-b border-[#1D4ED8] rounded-[50%] text-[#1D4ED8] font-bold mb-2">{item.id}</h3>
                <p className="text-lg font-normal font-inter">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* {!Loggedin && (
            <Link
              to="/register"
              className="mt-10 bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition text-sm font-medium"
            >
              Register Now
            </Link>
          )} */}
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-12 px-4">
          <motion.div
            className="max-w-7xl px-4 sm:px-6 lg:px-12 py-12 mx-auto bg-[#9ba9e0] text-white rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            variants={fadeIn}
          >
            <div>
              <h3 className="text-xl text-black font-robotoMono sm:text-2xl font-semibold mb-1">
                Ready to Transform Your Career?              </h3>
              <p className="text-lg text-wrap text-[#3A3A3A]">
                Join thousands of graduates who are already building their futures through skill exchange. Your journey to success starts today.
              </p>
            </div>
            {!Loggedin && (
              <Link
                to="/register"
                className="bg-[#0038FF] text-white px-5 py-3 rounded-md text-sm font-semibold "
              >
                Register Now- It’s FREE
              </Link>


            )}
            <Link
              to="/register"
              className="bg-white text-[#1D4ED8] px-5 py-3 rounded-md text-sm font-semibold "
            >
              Watch  Video
            </Link>
          </motion.div>
        </section>
        <Footer />
      </motion.section >
    </>
  );
};

// 🔄 Feature Box Component
const Feature = ({ icon, text }) => (
  <div className="flex items-start space-x-3 text-gray-800 border-b border-gray-200 pb-2">
    <div className="text-indigo-900 text-lg">{icon}</div>
    <p className="text-sm sm:text-base font-Poppins font-bold">{text}</p>
  </div>
);

export default FreshGraduates;
