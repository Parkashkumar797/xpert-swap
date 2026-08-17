import React, { useState, useEffect } from 'react';
import { FaUsers, FaChartLine, FaDollarSign } from 'react-icons/fa';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../UI/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const AnalyticsDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      activeUsers: 1240,
      skillMatch: 78,
      earnings: 3500,
      growthData: [
        { date: 'Jan', users: 200, earnings: 1500 },
        { date: 'Feb', users: 300, earnings: 1600 },
        { date: 'Mar', users: 350, earnings: 1800 },
        { date: 'Apr', users: 450, earnings: 2200 },
      ],
    });
  }, []);

  if (!data) return <p className="text-center text-gray-500">Loading Analytics...</p>;

  return (
    <>
    <Header />
    <div className="p-4 md:p-8 bg-gradient-to-b from-blue-600 to-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-blue-600 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Active Users</h2>
              <p className="text-sm text-blue-100">Daily active users</p>
            </div>
            <FaUsers className="text-4xl" />
          </div>
          <div className="text-3xl font-bold mt-4">{data.activeUsers}</div>
        </Card>

        <Card className="bg-purple-600 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Skill Match</h2>
              <p className="text-sm text-purple-100">Exchange trends</p>
            </div>
            <FaChartLine className="text-4xl" />
          </div>
          <div className="text-3xl font-bold mt-4">{data.skillMatch}%</div>
        </Card>

        <Card className="bg-green-600 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Earnings</h2>
              <p className="text-sm text-green-100">Total platform earnings</p>
            </div>
            <FaDollarSign className="text-4xl" />
          </div>
          <div className="text-3xl font-bold mt-4">${data.earnings}</div>
        </Card>
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Growth Overview</h2>
        <ResponsiveContainer width="100%" height={300} className="bg-blue-300 cursor-pointer">
          <LineChart data={data.growthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={5} />
            <Line type="monotone" dataKey="earnings" stroke="#16a34a" strokeWidth={5} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AnalyticsDashboard;
