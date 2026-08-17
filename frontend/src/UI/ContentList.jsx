import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContentList = () => {
  const content = [
    // Students
    {
      id: "STD001",
      title: "Top Skill Development Courses for Students",
      category: "Students",
    },
    {
      id: "STD002",
      title: "How to Build a Portfolio as a College Student",
      category: "Students",
    },
    {
      id: "STD003",
      title: "Time Management Tips for Studying and Freelancing",
      category: "Students",
    },
    {
      id: "STD004",
      title: "Best Online Resources for Learning to Code",
      category: "Students",
    },
    {
      id: "STD005",
      title: "Internship Platforms Every Student Should Know",
      category: "Students",
    },
    {
      id: "STD006",
      title: "How to Prepare for Your First Interview",
      category: "Students",
    },
    {
      id: "STD007",
      title: "Personal Branding for College Students",
      category: "Students",
    },
    {
      id: "STD008",
      title: "Balancing College Life and Freelancing",
      category: "Students",
    },
    {
      id: "STD009",
      title: "Building a Resume with No Experience",
      category: "Students",
    },
    {
      id: "STD010",
      title: "Top Scholarships and Grants for Tech Students",
      category: "Students",
    },
    // Professionals
    {
      id: "PRO001",
      title: "Best Side Hustles for Working Professionals",
      category: "Working Professionals",
    },
    {
      id: "PRO002",
      title: "Balancing Full-time Work with Freelancing",
      category: "Working Professionals",
    },
    {
      id: "PRO003",
      title: "Remote Collaboration Tools for Teams",
      category: "Working Professionals",
    },
    {
      id: "PRO004",
      title: "Financial Planning for Dual Incomes",
      category: "Working Professionals",
    },
    {
      id: "PRO005",
      title: "Upskilling with Short-Term Certifications",
      category: "Working Professionals",
    },
    {
      id: "PRO006",
      title: "Effective Remote Team Management Tips",
      category: "Working Professionals",
    },
    {
      id: "PRO007",
      title: "Mental Wellness for Hustlers",
      category: "Working Professionals",
    },
    {
      id: "PRO008",
      title: "Creating a Professional Online Presence",
      category: "Working Professionals",
    },
    {
      id: "PRO009",
      title: "Time Tracking Tools You Should Use",
      category: "Working Professionals",
    },
    {
      id: "PRO010",
      title: "Career Switching Strategies that Work",
      category: "Working Professionals",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-700 to-white py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Content Management
          </h2>
          <table className="w-full table-auto text-left">
            <thead className="bg-blue-100 text-blue-700 uppercase text-sm rounded-md">
              <tr>
                <th className="px-6 py-3">Content ID</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {content.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-blue-50 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium">{item.id}</td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4 text-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 transition">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentList;
