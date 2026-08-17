import { Link } from 'react-router-dom';
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Card from '../UI/Card';
import heroImg from '../assets/hero1.jpg';
import heroinfo1 from '../assets/heroinfo1.png';
import heroinfo2 from '../assets/heroinfo2.png';
import heroinfo3 from '../assets/heroinfo3.png';
import Team1 from '../assets/Team/Alok.png';
import Team2 from '../assets/Team/ayushi.jpg';
import Team3 from '../assets/Team/Nitin.jpg';
import Team4 from '../assets/Team/Sumit.jpg';
import institutionImg from '../assets/institution.png';

const whyPartner = [
  {
    img: heroinfo1,
    title: 'Real-World Exposure',
    desc: 'Students connect directly with real users and experts to learn practical, job-ready skills.'
  },
  {
    img: heroinfo2,
    title: 'Skill-to-Skill Exchange',
    desc: 'Students both teach and learn from peers, building confidence and competence in a collaborative way.'
  },
  {
    img: heroinfo3,
    title: 'Flexible Learning',
    desc: 'Options for live sessions, 1-on-1 swaps, and self-paced learning — perfect for academic schedules.'
  },
  {
    img: Team1,
    title: 'Personal & Professional Growth',
    desc: 'Improves presentation, problem-solving, and communication skills through peer engagement.'
  },
  {
    img: Team2,
    title: 'Post-Learning Real-World Projects',
    desc: 'Students gain access to industry-inspired projects to build real portfolios.'
  },
  {
    img: Team3,
    title: 'Institution Dashboard (Coming Soon)',
    desc: 'Track student activity, progress, and engagement in one centralized dashboard.'
  },
  {
    img: Team4,
    title: 'Social Recognition & Showcases',
    desc: 'Top performers and projects are featured on our social platforms.'
  },
];

const whoCanJoin = [
  { img: heroinfo1, title: 'Schools, Colleges & Universities' },
  { img: heroinfo2, title: 'Coaching Institutes & Training Academies' },
  { img: heroinfo3, title: 'NGOs and Skill Development Missions' },
  { img: Team1, title: 'Innovation Hubs & Research Labs' },
  { img: Team2, title: 'Online Learning Platforms' },
];

const whatMakesDifferent = [
  {
    img: heroinfo1,
    title: 'Peer-to-peer video calls',
    desc: 'with built-in chat and screen sharing',
  },
  {
    img: heroinfo2,
    title: 'Structured skill exchange',
    desc: 'with review cycles',
  },
  {
    img: heroinfo3,
    title: '1-day learning gap system',
    desc: 'for deeper retention',
  },
  {
    img: Team1,
    title: 'Practice on real-world projects',
    desc: 'after completion',
  },
  {
    img: Team2,
    title: 'Resume & portfolio building',
    desc: 'opportunities for students',
  },
];

const CollaborationWithUniversities = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      {/* Hero Section (full width) */}
      <section className="py-12 bg-white">
        <div className="w-full rounded-none bg-gradient-to-b from-white to-blue-100 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Left: Text Content */}
          <div className="flex-1 z-10 flex flex-col items-start justify-center px-2 md:px-12">
            <h1 className="text-2xl md:text-4xl font-bold text-black mb-2 leading-tight">Join as an Institution</h1>
            <p className="text-base md:text-lg text-gray-800 font-semibold mb-2">Empower Your Students with Real-World Learning That Sets Them Apart</p>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base max-w-xl">At XpertSwap, we believe learning should extend beyond classrooms and theory. Our platform enables institutions to help students gain hands-on experience, sharpen communication, and apply their knowledge in a peer-to-peer, skill-sharing ecosystem.</p>
            <Link to="/Institution-Join-Form">
              <button className="bg-blue-600 text-white rounded-full px-8 py-3 text-base md:text-lg font-semibold shadow hover:bg-blue-700 transition-transform hover:-translate-y-1 mt-2">Get Started</button>
            </Link>
          </div>
          {/* Right: Faded Image */}
          <div className="flex-1 flex items-end justify-end relative w-full h-full mt-8 md:mt-0 md:ml-8 pr-2 md:pr-12">
            <img src={institutionImg} alt="Institution" className="w-[220px] md:w-[320px] lg:w-[360px] h-auto object-contain opacity-70 md:opacity-80 select-none pointer-events-none" style={{filter: 'blur(0.5px)'}} />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">Why Partner with XpertSwap?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: 'Real-World Exposure',
              desc: 'Students connect directly with real users and experts to learn practical, job-ready skills.'
            },
            {
              title: 'Skill-to-Skill Exchange Model',
              desc: 'Students both teach and learn from peers, building confidence and competence in a collaborative way.'
            },
            {
              title: 'Flexible Learning Environment',
              desc: 'Options for live sessions, 1-on-1 swaps, and self-paced learning — perfect for academic schedules.'
            },
            {
              title: 'Personal & Professional Growth',
              desc: 'Improves presentation, problem-solving, and communication skills through peer engagement.'
            },
            {
              title: 'Post-Learning Real-World Projects',
              desc: 'Students gain access to industry-inspired projects to build real portfolios.'
            },
            {
              title: 'Institution Dashboard (Coming Soon)',
              desc: 'Track student activity, progress, and engagement in one centralized dashboard.'
            },
          ].map((item, idx) => (
            <div key={idx} className="relative bg-white border-2 border-blue-400 rounded-xl pt-8 pb-6 px-4 flex flex-col items-center text-center min-h-[220px] shadow-sm">
              {/* Number badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-b border-[#1D4ED8] rounded-[50%] flex items-center justify-center text-blue-600 text-2xl font-bold z-10">
                {idx + 1}
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 mt-2">{item.title}</h3>
              <p className="text-gray-700 text-base font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes XpertSwap Different Section (left-aligned, no border) */}
      <section className="py-12 bg-white flex justify-center">
        <div className="w-full max-w-5xl rounded-xl p-0 md:p-2">
          <h2 className="text-xl md:text-2xl font-bold text-left py-4 px-4 bg-white rounded-t-xl border-b-0">What Makes XpertSwap Different?</h2>
          <div className="flex flex-col gap-4 p-4 md:p-8">
            {[
              'Peer-to-peer video calls with built-in chat and screen sharing',
              'Structured skill exchange with review cycles',
              '1-day learning gap system for deeper retention',
              'Opportunity to practice skills on real-world projects after completion',
              'Resume and portfolio building opportunities for students',
            ].map((point, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow text-left py-4 px-6 text-base md:text-lg font-medium text-gray-900"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Who Can Join Section */}
      <section className="py-12 bg-white flex justify-center">
        <div className="w-full max-w-5xl p-0 md:p-2">
          <h2 className="text-xl md:text-2xl font-bold text-left py-4 px-4 bg-white rounded-t-xl border-b-0">What Makes XpertSwap Different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8">
            <div className="col-span-1 md:col-span-1 flex items-center justify-center">
              <div className="w-full h-full border border-blue-400 rounded-xl flex items-center justify-center p-6 text-center font-bold text-black text-base md:text-lg">Schools, Colleges & Universities</div>
            </div>
            <div className="col-span-1 md:col-span-1 flex items-center justify-center">
              <div className="w-full h-full border border-blue-400 rounded-xl flex items-center justify-center p-6 text-center font-bold text-black text-base md:text-lg">Coaching Institutes & Training Academies</div>
            </div>
            <div className="col-span-1 md:col-span-1 flex items-center justify-center">
              <div className="w-full h-full border border-blue-400 rounded-xl flex items-center justify-center p-6 text-center font-bold text-black text-base md:text-lg">NGOs and Skill Development Missions</div>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center justify-center">
              <div className="w-full h-full border border-blue-400 rounded-xl flex items-center justify-center p-6 text-center font-bold text-black text-base md:text-lg">Innovation Hubs & Research Labs</div>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center justify-center">
              <div className="w-full h-full border border-blue-400 rounded-xl flex items-center justify-center p-6 text-center font-bold text-black text-base md:text-lg">Online Learning Platforms</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 bg-white flex justify-center">
        <div className="w-full max-w-5xl rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 p-6 md:p-10 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 text-black">Ready to Join?</h3>
              <p className="text-gray-800 text-base mb-2">Fill out the form below and our team will reach out with your onboarding kit and support materials.</p>
            </div>
            <Link to="/Institution-Join-Form" className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-blue-700 text-white rounded-md px-8 py-3 text-base md:text-lg font-semibold shadow hover:bg-blue-800 transition">Fill the Join Form</button>
            </Link>
          </div>
          <hr className="my-2 border-gray-400" />
          <div className="text-base text-black text-center md:text-left">
            Need help? Contact us at <a href="mailto:contact.xpertswap@gmail.com" className="text-blue-600 underline">contact.xpertswap@gmail.com</a> or connect via our social handles.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CollaborationWithUniversities;