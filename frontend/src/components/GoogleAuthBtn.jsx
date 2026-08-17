import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React, { useContext } from 'react'
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Context from "../context/Context";
// login = false for signup, true for login
export default function GoogleAuthBtn({login=false}) {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { fetchUsersDetails } = useContext(Context); 
  const handleSubmitGoogle = async (credential) => {
    try {
      setLoading(true);
      const url = login 
        ? `${import.meta.env.VITE_USERS_BASE_URL}users/login/google`
        : `${import.meta.env.VITE_USERS_BASE_URL}users/register/google`;
      const response = await axios.post(
        url,
        { credential },
        { headers: { "Content-Type": "application/json" } , withCredentials: true}
      );
      const data = response.data;
      localStorage.setItem("token", data.token);
      console.log("Google Auth Response:-------------", data);
      setLoading(false);
      if(!login){
        toast.success(response.data.message || "Registration successful!", {
          position: "top-center",
        });
      }
      
      else{
        toast.success(response.data.message || "Login successful!", {
          position: "top-center",
        });
      }
      fetchUsersDetails(); 
      navigate("/");
    } catch (err) {
      console.error("Google Auth Error:-------------", err);
      toast.error(err.response?.data?.error || "you allready exist.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            text={login ? "signin_with" : "signup_with"}
            onSuccess={credentialResponse => {
              handleSubmitGoogle(credentialResponse.credential);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
      </GoogleOAuthProvider>
    </>
  )
}
