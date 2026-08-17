import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserSocketManager } from "./SocketClient";
import { addChatAction, incrementUnreadForUser } from "../store/chatSlice";
import { useDispatch } from "react-redux";

axios.defaults.withCredentials = true; // Ensure cookies are sent with requests
axios.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem("token")}`; // Set default authorization header
axios.defaults.headers.common["Content-Type"] = "application/json"; // Set default content type
axios.defaults.baseURL = import.meta.env.VITE_USERS_BASE_URL.replace(/\/$/, ""); // Set base URL for axios requests



export function useSocketInitializer(user){
    const dispatch = useDispatch()
    useEffect(()=>{
       if(user){
        
         UserSocketManager.getInstance().onIncomingMessage(({ userId, message, time }) => {
             dispatch(addChatAction({ userId, message, time , sender:false}));
             dispatch(incrementUnreadForUser({ userId, unread: 1 }));
         });
       }
    },[user])
}

// This hook fetches all followers of a user
export function useGetAllContacts() {
  const [followers, setFollowers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  
  const fetchFollowers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_USERS_BASE_URL}users/follow`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setFollowers(response.data.data || []);
    } catch (err) {
      console.error("Error fetching followers:", err);
      toast.error(err.response?.data?.error || "Failed to fetch followers", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchFollowers();
  }, []);

  return { followers, loading };
}


