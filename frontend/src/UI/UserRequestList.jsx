import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {motion} from "framer-motion";

const UserRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data
  const mockRequests = [
    { id: 'REQ001', requester: 'Alice Johnson', skill: 'Web Development', status: 'Pending' },
    { id: 'REQ002', requester: 'Bob Smith', skill: 'Graphic Design', status: 'Approved' },
    { id: 'REQ003', requester: 'Charlie Brown', skill: 'SEO Optimization', status: 'Denied' },
    { id: 'REQ004', requester: 'Diana Miller', skill: 'Data Analysis', status: 'Pending' },
    { id: 'REQ005', requester: 'Ethan Moore', skill: 'UI/UX Design', status: 'Approved' },
    { id: 'REQ006', requester: 'Fiona Davis', skill: 'Machine Learning', status: 'Pending' },
    { id: 'REQ007', requester: 'George Wilson', skill: 'Social Media Marketing', status: 'Denied' },
    { id: 'REQ008', requester: 'Hannah White', skill: 'Cybersecurity Basics', status: 'Pending' },
    { id: 'REQ009', requester: 'Isaac Hall', skill: 'DevOps', status: 'Approved' },
    { id: 'REQ010', requester: 'Jasmine Lee', skill: 'Content Writing', status: 'Pending' },
    { id: 'REQ011', requester: 'Kevin Harris', skill: 'Blockchain Development', status: 'Pending' },
    { id: 'REQ012', requester: 'Lena Walker', skill: 'Product Management', status: 'Approved' },
    { id: 'REQ013', requester: 'Mike Robinson', skill: 'Python Programming', status: 'Denied' },
    { id: 'REQ014', requester: 'Nora Young', skill: 'Cloud Computing', status: 'Pending' },
    { id: 'REQ015', requester: 'Owen King', skill: 'Mobile App Development', status: 'Approved' },
    { id: 'REQ016', requester: 'Paula Scott', skill: 'Video Editing', status: 'Pending' },
    { id: 'REQ017', requester: 'Quentin Adams', skill: 'Digital Marketing', status: 'Pending' },
    { id: 'REQ018', requester: 'Rachel Baker', skill: 'Project Management', status: 'Denied' },
    { id: 'REQ019', requester: 'Samuel Turner', skill: 'Game Development', status: 'Pending' },
    { id: 'REQ020', requester: 'Tina Collins', skill: 'Technical Writing', status: 'Approved' },
  ];
  

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRequests(mockRequests);
      setLoading(false);
    }, 1000);
  }, []);

  const updateRequestStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status } : req))
    );
  };

  const flagRequest = (id) => {
    alert(`Request ${id} has been flagged for review.`);
  };

  if (loading) {
    return <p className="text-center py-4 text-gray-600">Loading...</p>;
  }

  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
    <Header />
    <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">User Skill Requests</h2>
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 uppercase">
          <tr>
            <th className="px-6 py-3">Request ID</th>
            <th className="px-6 py-3">Requester</th>
            <th className="px-6 py-3">Skill Requested</th>
            <th className="px-6 py-3 text-center">Status</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-200">
          {requests.map((request) => (
            <tr key={request.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="px-6 py-4 font-medium">{request.id}</td>
              <td className="px-6 py-4">{request.requester}</td>
              <td className="px-6 py-4">{request.skill}</td>
              <td className="px-6 py-4 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    request.status === 'Pending'
                    ? 'bg-yellow-400 text-white'
                    : request.status === 'Approved'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                    }`}
                    >
                  {request.status}
                </span>
              </td>
              <td className="px-6 py-4 text-center space-x-2">
                <button
                  className="text-green-600 hover:text-green-800 transition"
                  onClick={() => updateRequestStatus(request.id, 'Approved')}
                  >
                  <FaCheck />
                </button>
                <button
                  className="text-red-600 hover:text-red-800 transition"
                  onClick={() => updateRequestStatus(request.id, 'Denied')}
                  >
                  <FaTimes />
                </button>
                <button
                  className="text-yellow-500 hover:text-yellow-600 transition"
                  onClick={() => flagRequest(request.id)}
                  >
                  <FaExclamationTriangle />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
    <Footer />
          </>
  );
};

export default UserRequestList;
