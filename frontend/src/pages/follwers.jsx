import React, { useEffect, useState } from 'react';
import { ArrowBigLeft, User } from 'lucide-react';
import { GetAllFollowers } from '../hooks/useGetAllFollowers';
import { useNavigate } from 'react-router-dom';
import { nav } from 'framer-motion/client';

const FollowerCard = ({ name, profileImage, id }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  const navigate = useNavigate();
  const handleVisitProfile = () => {
    // Handle visit profile action
    navigate(`/other-user-profile/${id}`);

  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 w-full hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          {profileImage && !imageError ? (
            <img
              src={profileImage}
              alt={`${name}'s profile`}
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full object-cover border-3 border-blue-500 ring-2 ring-blue-100"
              onError={handleImageError}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-3 border-blue-500 ring-2 ring-blue-100">
              <User className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <div className="text-center mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 truncate" title={name}>
          {name}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm truncate">
          @{name || name.toLowerCase().replace(' ', '')}
        </p>
      </div>

      {/* Visit Profile Button */}
      <div className="text-center">
        <button
          onClick={()=>handleVisitProfile()}
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors duration-200 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Visit Profile
        </button>
      </div>
    </div>
  );
};

// Demo component with sample followers
const FollowerPage = () => {
  const navigate = useNavigate();
  const  {followers,loading} = GetAllFollowers()
  const sampleFollowers = [
    {
      name: "Sarah Johnson",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      userId: "sarahj"
    },
    {
      name: "Mike Chen",
      profileImage: "", // This will show default avatar
      userId: "mikechen"
    },
    {
      name: "Emma Wilson",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      userId: "emmaw"
    },
    {
      name: "Alex Rodriguez",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      userId: "alexr"
    },
    {
      name: "Lisa Park",
      profileImage: "", // This will show default avatar
      userId: "lisap"
    },
    {
      name: "James Miller",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      userId: "jamesm"
    },
    {
      name: "Maria Garcia",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      userId: "mariag"
    },
    {
      name: "David Kim",
      profileImage: "", // This will show default avatar
      userId: "davidk"
    }
  ];
  useEffect(()=>{
    const token = localStorage.getItem("token");
  },[])
  console.log(followers);
  // const {followers,loading} = GetAllFollowers({ userId: token }); 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <ArrowBigLeft
        className="w-8 h-8 text-gray-600 cursor-pointer mb-4"
        onClick={() => navigate(-1)} // Navigate back to the previous page
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Followers</h1>
          <p className="text-gray-600">Connect with your community</p>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5 
                        2xl:grid-cols-6">
          {followers.map((follower, index) => (
            <FollowerCard
              key={index}
              name={follower.name}
              profileImage={follower.profilePic || ""}
              id={follower.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowerPage;