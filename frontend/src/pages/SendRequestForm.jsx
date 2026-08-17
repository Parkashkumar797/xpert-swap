import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const SendRequestForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(now.toISOString().split("T")[0]);
    setTime(now.toTimeString().slice(0, 5));
  }, []);

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-100 px-6"
      >
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-2xl rounded-2xl shadow-2xl p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl text-center text-[#0a0f3c] font-bold mb-2">
            Send Request
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-800 mb-8">
            Have a skill to share or one to learn? Let’s connect!
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-800 font-semibold text-lg mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="username"
                required
                className="w-full p-4 text-base rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="skillKnow"
                className="block text-gray-800 font-semibold text-lg mb-2"
              >
                Skill You Know *
              </label>
              <input
                type="text"
                id="skillKnow"
                required
                className="w-full p-4 text-base rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="skillNeed"
                className="block text-gray-800 font-semibold text-lg mb-2"
              >
                Skill You Want to Learn *
              </label>
              <input
                type="text"
                id="skillNeed"
                required
                className="w-full p-4 text-base rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-gray-800 font-semibold text-lg mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                disabled
                className="w-full p-4 text-base rounded-xl bg-gray-200 text-gray-600 shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-gray-800 font-semibold text-lg mb-2"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                value={time}
                disabled
                className="w-full p-4 text-base rounded-xl bg-gray-200 text-gray-600 shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-xl font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transform transition hover:-translate-y-1"
            >
              Send Request
            </button>
          </form>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default SendRequestForm;
