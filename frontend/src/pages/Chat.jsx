import { useState } from "react";
import { SendHorizonal, MoreVertical } from "lucide-react";
import { FaVideo } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "Aman", content: "Hey i want learn react." },
    { sender: "You", content: "okk mai shikha dunga." },
    { sender: "Aman", content: "thanks kab se start kre!" },
    { sender: "You", content: "aaj se hi lekin mujhe node js shikhna hai." },
    { sender: "Aman", content: "okk mai tumhe node js shikha dunga!" },
    { sender: "You", content: "thanks" },
  ]);
  const [input, setInput] = useState("");
  const [join , setjoin] = useState("123");

  const navigate = useNavigate();
  const handleVideoCall = () => {
    navigate(`/call/${join}`);
  }

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "You", content: input }]);
    setInput("");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-700 to-white">
      <Header />
      <div className="w-full max-w-md mx-auto p-4 bg-gray-200 shadow-2xl rounded-2xl flex flex-col h-[600px]">
        <div className="flex items-center justify-between border-b pb-3 border-white/30">
          <div className="flex items-center gap-2">
            <img
              src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              alt="Aman"
              className="w-10 h-10 rounded-full border border-white"
            />
            <div className="text-blue-700">
              <p className="font-semibold">Aman</p>
              <p className="text-xs opacity-70">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-11">
            <input type="text"  value={join} onChange={(e) => setjoin(e.target.value)} className="hidden" />
          <FaVideo className="text-blue-700 cursor-pointer text-xl" onClick={handleVideoCall}/>
          <MoreVertical className="text-black" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto mt-3 space-y-3 scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-transparent">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-xl px-4 py-2 text-sm max-w-[70%] ${
                  msg.sender === "You"
                    ? "bg-white text-gray-900"
                    : "bg-white/30 text-black backdrop-blur-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message"
            className="flex-1 px-4 py-2 border border-white/30 bg-white/20 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={sendMessage}
            className="bg-white text-[#2575FC] p-2 rounded-full hover:bg-gray-100"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
           
      </div>
      <Footer />
    </div>
  );
}
