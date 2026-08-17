import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HomeInfo from "../components/HomeInfo";
// import AboutHero from "../components/AboutHero";
import { motion } from "framer-motion";
import SkillExchangeCards from "../components/SkillExhangeCard";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {

  const fadeIn = {
    hidden: {opacity:0 , y:20},
    visible :{opacity:1 , y:0 , transition:{duration:0.8}}
  }

  return (
    <div>
    <Header />
    <motion.div
    initial = "hidden"
    animate = "visible"
    variants={fadeIn}
    className="bg-transparent">
      <HeroSection />
      <HomeInfo />
      <SkillExchangeCards />
      <TestimonialSection />
      {/* <AboutHero /> */}
    </motion.div>
      <Footer />
      </div>
  );
};

export default Home;
