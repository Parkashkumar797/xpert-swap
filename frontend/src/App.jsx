import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import OtherUserProfile from "./pages/OtherUserProfile";
import Chat from "./pages/Chat";
import Request from "./pages/Request";
import FindPeoples from "./pages/FindPeoples";
import SkillMarket from "./pages/SkillMarketPlace";
import FreshGraduates from "./pages/FreshGraduates";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import OurTeam from "./components/OurTeam";
import EditUserProfile from "./pages/EditUserProfile";
import Context from "./context/Context";
import PrivacyPolicy from "./pages/PrivacyProlicy";
import SendRequestForm from "./pages/SendRequestForm";
import { setUserDetails } from "./store/userSlice";
import { setAdminDetails } from "./store/adminSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import VideoCall from "./pages/VideoCall";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import CollaborationWithUniversities from "./components/CollaborationWithUniversities";
import InstitutionJoinPage from "./components/InstitutionJoinPage";
import Adminlogin from "./pages/Adminlogin";
import  AnalyticsDashboard from "./pages/AnalyticsDashboard";
import ContentList from "./UI/ContentList";
import AdminUserRequestList from "./UI/UserRequestList";

import "./App.css";
import AdminProfile from "./pages/AdminProfile";
import FollowerPage from "./pages/follwers";

import ChatPage from "./pages/ChatPage";
import { useSocketInitializer } from "./chat/hook";



function App() {
  const [user, setUser] = useState(null);
  const [admin , setAdmin] = useState(null);
  const dispatch = useDispatch();

  const fetchUsersDetails = async () => { 
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const response = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data.user;
      // console.log("User Data:", userData);

      setUser(userData);
      dispatch(setUserDetails({ user: userData }));

    } catch (err) {
      console.error("Error fetching user details:", err);
      localStorage.removeItem("token");
      toast.error(err.response?.data?.errors || "login again", {
        position: "top-center",
      });
    }
  };

// for Admin Details

const fetchAdminDetails = async () => {
  try {
    const AdminToken = localStorage.getItem("AdminToken");

    if (!AdminToken) return;

    const response = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}admin/profile`, {
      headers: {
        Authorization: `Bearer ${AdminToken}`,
      },
    });

    // console.log("Admin Data" , response);
    const AdminData = response.data.Admin;

    setAdmin(AdminData);
    dispatch(setAdminDetails(AdminData)); // ✅ Corrected line

  } catch (err) {
    console.error("Error fetching admin details:", err);
    toast.error(err.response?.data?.errors || "Admin login again", {
      position: "top-center",
    });
  }
};



  useEffect(() => {
    fetchUsersDetails();
    fetchAdminDetails();
  }, []);


  // inlize socket connection if user is logged in
  useSocketInitializer(user)

  return (
    <Context.Provider value={{ user, fetchUsersDetails, admin , fetchAdminDetails }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/user-profile" element={<ProtectedRoutes Component={UserProfile} />} /> */}
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/user-profile/followers" element={<ProtectedRoutes Component={FollowerPage} />} />
        <Route path="/edit-profile/:id" element={<ProtectedRoutes Component={EditUserProfile} />} />
        <Route path="/other-user-profile/:id" element={<ProtectedRoutes Component={OtherUserProfile} />} />
        <Route path="/send-request" element={<ProtectedRoutes Component={SendRequestForm} />} />
        <Route path="/chat" element={<ProtectedRoutes Component={ChatPage} />} />
        {/* <Route path="/request" element={<ProtectedRoutes Component={Request} />} /> */}
        <Route path="/request" element={<Request />} />
        <Route path="/find-people" element={<FindPeoples />} />
        {/* <Route path="/find-people" element={<ProtectedRoutes Component={FindPeoples} />} /> */}
        {/* <Route path="/skill-marketplace" element={<ProtectedRoutes Component={SkillMarket} />} /> */}
        <Route path="/skill-marketplace" element={<SkillMarket />} />
        <Route path="/fresh-graduates" element={<FreshGraduates />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/dashboard" element={<ProtectedRoutes Component={Dashboard} />} /> */}
        <Route path="/dashboard" element={< Dashboard />} />
        {/* <Route path="/user-list" element={<ProtectedRoutes Component={UserList} />} /> */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/call/:id" element={<ProtectedRoutes Component={VideoCall} />} />
        <Route path="universitis-collaboration" element={<CollaborationWithUniversities />} />
        <Route path="/Institution-Join-Form" element={<InstitutionJoinPage />} />
        <Route path="/admin-login" element={<Adminlogin />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
        <Route path="/admin-controls" element={<ContentList />} />
        <Route path="/admin-users-request" element={<AdminUserRequestList />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
