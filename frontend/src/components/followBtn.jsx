import React from 'react'
import axios from "axios";
import { toast } from "react-toastify";

// UserId - user id of the user to be followed
export default function FollowBtn({UserId , isFollowing = false}) {
    const [following, setFollowing] = React.useState(isFollowing);
    const [loading, setLoading] = React.useState(false);
    async function handleFollow() {
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_USERS_BASE_URL}users/follow`,
                { id: UserId },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            const data = response.data;
            toast.success(data.message || "Following user", {
                position: "top-center",
            });
            setFollowing(e=>!e); // Toggle following state
     
            
        } catch (err) {
            console.error("Login Error:", err);
     
            toast.error(err.response?.data?.error || "Invalid Credentials !", {
                position: "top-center",
            });
        }
        setLoading(false);
    }
    async function handleUnfollow() {
        setLoading(true)
         try {
            const response = await axios.delete(
                `${import.meta.env.VITE_USERS_BASE_URL}users/follow`,
                {
                    data: { id: UserId },
                    headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    withCredentials: true,
                }
            );

            const data = response.data;
            toast.success(data.message || "Unfollowing user", {
                position: "top-center",
            });
            setFollowing(e=>!e); // Toggle following state
            
           
        } catch (err) {
            console.log("Login Error:", err);
            toast.error(err.response?.data?.error || "Invalid Credentials !", {
                position: "top-center",
            });
        }
        setLoading(false)
    }
  const handleClick = () => {
        if (isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    };

  return (
    <>
        <button disabled={loading} onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white rounded-full py-2 px-4">
            {following ?  "Unfollow" : "Follow" }
            { loading && <span className="ml-2 spinner-border spinner-border-sm"></span> }
        </button> 
    </>
  )
}
