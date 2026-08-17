import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  const userToken = localStorage.getItem("token");
  const adminToken = localStorage.getItem("AdminToken");

  // If no valid token, redirect to login
  if (!userToken && !adminToken) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default ProtectedRoute;
