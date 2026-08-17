
import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`p-4 bg-gradient-to-t from-blue-600 to-white shadow-md rounded ${className}`}>
      {children}
    </div>
  );
};


export default Card;