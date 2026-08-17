import React from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, MessageSquare, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";

const stats = [
  { label: "Swaps Confirmed", value: 12 },
  { label: "Skills Offered", value: 8 },
  { label: "Reviews Received", value: 5 },
];

const actions = [
  { label: "Find People's", icon: Users, to: "/find-people" },
  { label: "My Requests", icon: Repeat, to: "/request" },
  { label: "Chats", icon: MessageSquare, to: "/chat" },
];

const StatCard = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/90 backdrop-blur-md p-5 rounded-xl text-center shadow-md hover:shadow-xl transition"
  >
    <p className="text-4xl font-bold text-blue-800 mb-1">{value}</p>
    <p className="text-gray-700 text-sm font-medium">{label}</p>
  </motion.div>
);

const ActionLink = ({ label, Icon, to }) => (
  <motion.div whileHover={{ scale: 1.03 }}>
    <Link
      to={to}
      className="flex items-center gap-3 px-5 py-3 bg-white/90 border border-blue-100 rounded-xl shadow hover:shadow-lg transition text-blue-800 hover:text-blue-900"
    >
      <Icon size={22} />
      <span className="text-base font-medium">{label}</span>
    </Link>
  </motion.div>
);

export default function Dashboard() {

  const user = useSelector((state) => state?.user?.user?.user);
  // console.log("Users From Dashboard" ,user )

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-b from-blue-700 to-white px-4 py-10 flex flex-col gap-10 items-center"
      >
        {/* Stat Cards Row (custom, matches image) */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-xl p-6 text-white shadow-md bg-gradient-to-br from-blue-600 to-blue-400">
            <div className="font-semibold text-base mb-1">Active Users</div>
            <div className="text-3xl font-bold mb-1">1,240</div>
            <div className="text-xs opacity-80">Daily active users</div>
          </div>
          <div className="rounded-xl p-6 text-white shadow-md bg-gradient-to-br from-teal-500 to-green-400">
            <div className="font-semibold text-base mb-1">Skill Match</div>
            <div className="text-3xl font-bold mb-1">78%</div>
            <div className="text-xs opacity-80">Exchange trends</div>
          </div>
          <div className="rounded-xl p-6 text-white shadow-md bg-gradient-to-br from-purple-600 to-blue-400">
            <div className="font-semibold text-base mb-1">Earnings</div>
            <div className="text-3xl font-bold mb-1">$3500</div>
            <div className="text-xs opacity-80">Total platform earnings</div>
          </div>
        </div>

        {/* Large White Card (matches image) */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md min-h-[220px] mb-8" style={{ minHeight: '220px' }}></div>

        {/* Welcome Message */}
        {/*
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-blue-100 mt-2 text-sm md:text-base">
            Here's a quick glance at your XpertSwap dashboard.
          </p>
        </div>
        */}

        {/* Stats */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div> */}

        {/* Actions */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {actions.map(({ label, icon: Icon, to }) => (
            <ActionLink key={label} label={label} Icon={Icon} to={to} />
          ))}
        </div> */}
      </motion.div>
      <Footer />
    </>
  );
}
