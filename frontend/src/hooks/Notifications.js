import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.withCredentials = true; // Ensure cookies are sent with requests
axios.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem("token")}`; // Set default authorization header
axios.defaults.headers.common["Content-Type"] = "application/json"; // Set default content type


export function useManageNotificationHook(){
    const [notification,setNotification] = useState([])
    const [count,setCount] = useState(0)
    const [refresh, setRefresh] = useState(false);
    useEffect(()=>{
        fetchNotification()
        getNotificationCount()
    },[refresh])

    function getNotificationCount(){
        axios.get(`${import.meta.env.VITE_USERS_BASE_URL}notification/counts`).then((res)=>{
            if(res.status >= 200 && res.status < 300){
                setCount(res.data.count || 0);
                console.log("Notification count fetched successfully:", res);
            } else {
                toast.error("Failed to fetch notification count", {
                    position: "top-center",
                });
            }
        }).catch((err)=>{
            console.error("Error fetching notification count:", err);
            setCount(0);
            toast.error(err.response?.data?.error || "Failed to fetch notification count", {
                position: "top-center",
            });
        })
    }
    console.log("Notification count: ", count);
    function fetchNotification(){
        axios.get(`${import.meta.env.VITE_USERS_BASE_URL}notification`).then((res)=>{
            setNotification(res.data.notifications || [])

        }).catch((err)=>{
            console.error("Error fetching notifications:", err);
            setNotification([]);
            toast.error(err.response?.data?.error || "Failed to fetch notifications", {
                position: "top-center",
            }); 
        })
    }

    function markAllAsRead(){
        if(count === 0)
            return; // No notifications to mark as read;
        axios.get(`${import.meta.env.VITE_USERS_BASE_URL}notification/markread`).then((res)=>{
            if(res.status >= 200 && res.status < 300){
                fetchNotification(); 
                setCount(0); // Reset count after marking as read
            } 
        }).catch((err)=>{
            console.error("Error marking all notifications as read:", err);
            toast.error(err.response?.data?.error || "Failed to mark all notifications as read", {
                position: "top-center",
            });
        })
    }



    return {notificationList:notification,markAllAsReadHandler:markAllAsRead,NotificationCount: count,RefreshNotification: () => {setRefresh(!refresh)}};
}   