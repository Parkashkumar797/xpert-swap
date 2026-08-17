import { ArrowBigLeft, Menu, Search } from "lucide-react";
import UserIcon from '../assets/userIcon.png'; // Placeholder for user icon
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export function SideBarChat({ sidebarOpen, setSidebarOpen, contacts, activeChat, setActiveChat, search, setSearch }) {
  const chats = useSelector((state) => state.chat);
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-full relative ">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-blue-100">
        <div className="flex items-center justify-start mb-4">
          <span className="cursor-pointer" onClick={()=>navigate(-1)}>
            <ArrowBigLeft/>
          </span>
          <h1 className="text-xl mx-auto font-bold text-gray-900">Messages</h1>
          
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 bg-blue-50 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {contacts.filter(e => {
            if (e.name.toLowerCase().includes(search.toLowerCase())) {
                return e;
            }
            return null;
        }).map((contact) => (
          <div
            key={contact.id}
            onClick={() => setActiveChat(contact.id)}
            className={`flex items-center p-4 hover:bg-blue-50 cursor-pointer transition-colors border-l-4 ${
              activeChat === contact.id 
                ? 'bg-blue-50 border-blue-500' 
                : 'border-transparent hover:border-blue-200'
            }`}
          >
            <div className="relative">
              <img
                src={contact.profilePic ?? UserIcon}
                alt={contact.name}
                referrerPolicy='no-referrer'
                onError={(e) => {
                  e.target.src = UserIcon; // Fallback to default user icon
                }
                }
                className="w-12 h-12 rounded-full p-0.5 ring-2 ring-blue-300"
              />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="ml-3 flex-1 min-w-0 flex flex-row justify-between">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {contact.name}
                </h3>
                <span className="text-xs text-gray-500">{contact.time}</span>
              </div>
              <div className="flex items-center justify-between mt-1 ">
                <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                {(chats[contact.id]?.unread ?? 0) > 0 && (
                  <span className="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-5 text-center">
                    {(chats[contact.id].unread ?? 0)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}