import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import hero6 from "../assets/hero6.png";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Gyaan Ka Perfect Exchange - XpertSwap.",
    description:
      "Logon se connect ho, skills ka real-time swap karo, aur apna growth network banao.",
    image: hero3,
    bgColor: "bg-[linear-gradient(180deg,_#FFF_12.98%,_rgba(184,199,243,0.44)_52.73%,_rgba(29,78,216,0.43)_100%)]",
  },
  {
    title: "Swap Skills - Build Dreames.",
    description:
      "XpertSwap per app seekh bhi sakte hain aur shikha bhi - khowledge ke badle knowledge.",
    image: hero1,
    bgColor: "bg-[linear-gradient(180deg,_#FFF_12.98%,_rgba(184,199,243,0.44)_52.73%,_rgba(29,78,216,0.43)_100%)]",
  },
  {
    title: "Apni Skill Do, Nayi - Skill Lo!",
    description:
      "Skill Exchange ka pehla smart platform - jahan learining aur earning dono possible hai.",
    image: hero4,
    bgColor: "bg-[linear-gradient(180deg,_#FFF_12.98%,_rgba(184,199,243,0.44)_52.73%,_rgba(29,78,216,0.43)_100%)]",
  },
  {
    title : "Apne Passion Ko Power banao - Learn, Tech & Earn!",
    description : "Har skill ka exchange possible hai - coding se development tak, sab kuchh seekho aur shikhao!",
    image: hero5,
    bgColor: "bg-[linear-gradient(180deg,_#FFF_12.98%,_rgba(184,199,243,0.44)_52.73%,_rgba(29,78,216,0.43)_100%)]",
  },
  {
    title : "Verified Mentors. Real Skills. Zero Barriers.",
    description : "Har skill ka exchange possible hai - coding se development tak, sab kuchh seekho aur shikhao!",
    image: hero6,
    bgColor: "bg-[linear-gradient(180deg,_#FFF_12.98%,_rgba(184,199,243,0.44)_52.73%,_rgba(29,78,216,0.43)_100%)]",
  },
  {
    title : "Skill Sharing Ka Naya Tareeka - Smart, Safe aur Skillfull!",
    description : "Apni knowledge se dusro ko empower karo aur unse naye skills seekho - one community, endless growth.",
    image: hero2,
    bgColor: "bg-[linear-gradient(180deg,_#FFF_12.98%,_rgba(184,199,243,0.44)_52.73%,_rgba(29,78,216,0.43)_100%)]",
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, image, bgColor } = slides[current];

  return (
    <section
      className={`w-full overflow-hidden transition-colors duration-1000 ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center gap-8 lg:h-[32rem] md:h-[32rem]">
        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={title}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-robotoMono text-gray-900 mb-4 leading-tight">
              {title.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-1">
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-gray-700 mb-6 text-base sm:text-lg font-Poppins font-semibold">
              {description}
            </p>
            <Link
              to="/fresh-graduates"
              className="bg-indigo-900 text-white px-6 py-3 rounded-md text-sm hover:bg-indigo-800 transition"
            >
              Get Started
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
        <motion.div
  key={image}
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -50, opacity: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full lg:w-1/2 flex justify-center items-center"
>
  <div className="w-full max-w-[650px] h-auto aspect-square sm:aspect-video rounded-md">
    <img
      src={image}
      alt="Hero Slide"
      className="w-full h-full object-contain rounded-md shadow-md"
    />
  </div>
</motion.div>

        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
