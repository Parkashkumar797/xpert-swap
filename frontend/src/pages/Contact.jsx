import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactImg from "../assets/contact.png"
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleContect = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "27f5c6b8-90c2-4103-a90d-e23e9b926d07");
    setResult("...Sending Your Problem");
    const response = await axios.post(
      "https://api.web3forms.com/submit",
      formData
    );
    const data = response.data;
    // console.log("Form Data", data);

    if (data.success) {
      setResult("Your Problem Successfully Send");
      toast.success("We Will Be Contact Soon", {
        position: "top-center",
      });
      e.target.reset();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Header />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-8 px-2 w-full bg-white min-h-screen"
      >
        <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white min-h-[80vh] flex flex-col">
          <div className="mb-8">
            <div className="text-2xl md:text-3xl font-robotoMono font-semibold text-center md:text-left md:pl-20">Contact XpertSwap</div>
            <div className="text-[#3A3A3A] text-base md:text-[20px] text-center md:text-left md:pl-20">Have questions or facing issues? Let us know. We're here to help!</div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 mb-1 justify-around items-center flex-1">
            {/* img */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-6 md:mb-0">
              <img className="w-48 h-48 md:w-96 md:h-96 object-contain" src={contactImg} alt="" />
            </div>
            {/*content*/}
            <div className="w-full md:w-[500px] flex justify-center">
              <form className="w-full max-w-md shadow-xl/30 px-4 py-6 md:px-10 md:py-8 space-y-4 shadow-lg bg-white rounded-xl" onSubmit={handleContect}>
                <div className="text-xl md:text-2xl font-inter font-semibold text-center">Send us a Message</div>
                <p className="text-center text-[#6E6E6E] text-sm md:text-base">We'll get back to you within 24 hours</p>
                <div>
                  <label className="block font-Poppins text-base md:text-lg mb-1" htmlFor="">Name</label>
                  <input className="w-full focus:outline-none rounded-lg bg-gray-100 p-2" type="text" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block font-Poppins text-base md:text-lg mb-1" htmlFor="">Email</label>
                  <input className="w-full focus:outline-none rounded-lg bg-gray-100 p-2" type="email" placeholder="Brief description of your Inquiry" required />
                </div>
                <div>
                  <label className="block font-Poppins text-base md:text-lg mb-1" htmlFor="">Subject</label>
                  <input className="w-full focus:outline-none rounded-lg bg-gray-100 p-2" type="text" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block font-Poppins text-base md:text-lg mb-1" htmlFor="">Message</label>
                  <textarea className="bg-gray-100 focus:outline-none w-full resize-none" rows="5" name="" id=""></textarea>
                </div>
                <div className="text-center">
                  <button className="bg-[#1D4ED8] px-8 rounded-3xl font-semibold text-white p-2">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Contact;
