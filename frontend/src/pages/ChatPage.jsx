import React, { useState, useRef, useEffect } from 'react';
import { Menu, Send } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import UserIcon from '../assets/userIcon.png'; // Placeholder for user icon
import { UserSocketManager } from '../chat/SocketClient';
import { addChatAction, resetUnreadForUser } from '../store/chatSlice';
import { SideBarChat } from '../components/SidebarChat';
import { useGetAllContacts } from '../chat/hook';


export default function ChatPage() {
  const chatInputRef = useRef(null);
  const bottomDevRef = useRef(null)
  const [unReadCount, setUnReadCount] = useState(0);
  const [activeChat, setActiveChat] = useState(-1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const chatMeasages = useSelector(state => state.chat);  
  const dispatch = useDispatch();
  const unReadAlert = useRef(null);
  useEffect(() => {
    if(unReadAlert){
      unReadAlert.current?.scrollIntoView({
         behavior: "auto",
        block: "center", // or "start" 
        inline: "nearest"
      });
      // Reset the unReadAlert reference after scrolling
      unReadAlert.current = null;
    }
  },[unReadCount])

  function getActiveChats(){
    return chatMeasages[activeChat] || [];
  }

  const { followers } = useGetAllContacts();
  const contacts = followers ?? [];

  const [search, setSearch] = useState('');
  

  // Close sidebar on mobile when chat is selected
  useEffect(() => {
    if (activeChat !== -1 && window.innerWidth < 768) {
      setSidebarOpen(false);
    }
    console.log("unread mendage", getActiveChats()?.unread);
    setUnReadCount(getActiveChats()?.unread || 0);
    dispatch(resetUnreadForUser({ userId: activeChat }));
  }, [activeChat]);

  useEffect(() => {
    if(activeChat){ ;
      console.log("unread mendage", getActiveChats()[activeChat]?.unread);
      dispatch(resetUnreadForUser({ userId: activeChat }));
    }
  }, [chatMeasages]);

  const handleSendMessage = () => {
      const message = chatInputRef.current.value;
      if (!message || message.trim() === '') return; // Prevent sending empty messages
      UserSocketManager.getInstance().sendMessageToUser(activeChat, message,()=>{
        console.log(`Message sent to user ${activeChat}:`, message);
        dispatch(addChatAction({ userId: activeChat, message, time: new Date().toISOString(), sender: true }));
      });
      chatInputRef.current.value = ''; // Clear input after sending
      setTimeout(()=>bottomDevRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start", // or "start" 
      }),100)
      setUnReadCount(prevCount => prevCount + 1); // Increment unread count
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
      e.currentTarget.value = ''; // Clear input after sending
    }
  };

  // Get the active contact based on the active chat ID
  // This assumes contacts have a userId that matches the activeChat
  const activeContact = followers.find(c => c.id == activeChat);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
            setActiveChat(-1)
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  console.log("Active Chat:", unReadCount);
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && activeChat !== -1 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'w-80 md:w-80' : 'w-0'
      } transition-all duration-300 bg-white shadow-xl border-r border-blue-100 overflow-hidden
      ${activeChat !== -1 ? 'fixed md:relative z-20 md:z-auto' : 'relative'} h-full`}>
        <SideBarChat
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          contacts={contacts}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          search={search}
          setSearch={setSearch}
          />
        
      </div>
        

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {activeChat !== -1 ? (
          <>
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-full min-h-0">
              {/* Header - Fixed height */}
              <div className="bg-white shadow-lg border-b border-blue-100 flex-shrink-0">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <button
                      onClick={() => setSidebarOpen(true)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors md:hidden flex-shrink-0"
                    >
                      <Menu className="w-5 h-5" />
                    </button>
                    <div className="relative flex-shrink-0">
                      <img
                        src={activeContact.profilePic ?? UserIcon}
                        alt="Contact"
                        referrerPolicy='no-referrer'
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full p-0.5 ring-2 ring-blue-300"
                        onError={(e) => {
                           e.target.src = UserIcon; // Fallback to default user icon
                          }
                        }
                      />
                      {activeContact?.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base md:text-lg font-semibold text-gray-900 truncate">{activeContact?.name}</h2>
                      <p className="text-xs md:text-sm text-blue-600">{activeContact?.online ? 'Online' : 'Offline'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <button
                      onClick={() => setSidebarOpen(e => !e)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors hidden md:block"
                    >
                      <Menu className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages - Inverted container so new messages appear at bottom */}
             {/* Messages - Inverted container so new messages appear at bottom */}
              <div className="flex-1 overflow-y-auto min-h-0 flex flex-col-reverse">
                <div className="flex flex-col p-3 md:p-4 space-y-3 md:space-y-4">
                  {getActiveChats().messages?.slice().map((msg, i) => {
                    const messages = getActiveChats().messages;
                    const totalMessages = messages.length;
                    const unreadStartIndex = totalMessages - unReadCount;
                    const shouldShowAlert = unReadCount > 0 && !msg.sender && i === unreadStartIndex;
                 
                    return (
                      <div key={i}>
                        {shouldShowAlert && (
                          <div ref={unReadAlert} className="p-2 sm:mx-5 text-xs text-center text-blue-600 bg-blue-50 rounded-lg mb-2 border border-blue-200">
                            {unReadCount} unread message{unReadCount > 1 ? 's' : ''}
                          </div>
                         )} 

                        <div className={`flex ${msg.sender === true ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex items-end space-x-2 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${
                            msg.sender === true ? 'flex-row-reverse space-x-reverse' : ''
                          }`}>
                            {msg.sender === false && (
                              <img
                                src={activeContact.profilePic ?? UserIcon}
                                alt="Avatar"
                                referrerPolicy='no-referrer'
                                className="w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0"
                                onError={(e) => {
                                  e.target.src = UserIcon;
                                }}
                              />
                            )}
                            <div className="flex flex-col">
                              <div
                                className={`px-3 md:px-4 py-2 rounded-2xl break-words ${
                                  msg.sender === true
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm'
                                    : 'bg-white text-gray-800 shadow-md rounded-bl-sm border border-blue-100'
                                }`}
                              >
                                <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                              </div>
                              <span className={`text-xs text-gray-500 mt-1 ${
                                msg.sender === true ? 'text-right' : 'text-left'
                              }`}>
                                {(new Date(msg.time)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div ref={bottomDevRef} className="h-1"></div>
                </div>
              </div>

              {/* Input - Fixed at bottom */}
              <div className="bg-white border-t border-blue-100 p-3 md:p-4 flex-shrink-0">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      ref={chatInputRef}
                      onKeyDown={handleKeyPress}
                      placeholder="Type a message..."
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-blue-50 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                    />
                  </div>
                  
                  <button
                    onClick={handleSendMessage}
                    className="p-2 md:p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg flex-shrink-0"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Default Chat Image - Hidden on Mobile when sidebar is open */
          <>
            <NoSelectChat sidebarOpen={sidebarOpen}/>
          </>
        )}
      </div>
    </div>
  );
}

function NoSelectChat({sidebarOpen}){
  return (
    <div className={`flex-1 flex items-center justify-center ${sidebarOpen ? 'hidden md:flex' : 'flex'}`}>
      <div className="text-center p-8">
        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-200 rounded-full flex items-center justify-center">
            <Menu className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Welcome to Chat</h3>
        <p className="text-sm md:text-base text-gray-500">Select a conversation to start messaging</p>
      </div>
    </div>
  );
} 