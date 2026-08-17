import React, { useState } from 'react';
import { Bell, X, BellOff } from 'lucide-react';
import { useManageNotificationHook } from '../hooks/Notifications';

function getRelativeTime(timestamp) {
  const now = new Date();
  const then = new Date(timestamp);
  const diff = Math.floor((now - then) / 1000); // in seconds

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minute${diff < 120 ? '' : 's'} ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hour${diff < 7200 ? '' : 's'} ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} day${diff < 172800 ? '' : 's'} ago`;

  // Optional: Show date if more than 7 days ago
  return then.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notificationList,NotificationCount,markAllAsReadHandler} = useManageNotificationHook();
  
  // Sample data for demo purposes - replace with actual API data

  // Use actual notifications from hook or sample data
  const currentNotifications = notificationList || [];

  const handleButtonClick = () => {
    markAllAsReadHandler()
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <div className="relative">
      {/* Notification Button */}
      <button
        onClick={handleButtonClick}
        className="relative p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Bell size={20} />
        {NotificationCount > 0 && (
           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {NotificationCount > 10 ? '10+' : NotificationCount}
          </span>
        )}
      </button>

      {/* Notification Popup */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleClose}
          />
          
          {/* Notification Center */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50 w-96 max-h-96 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <div className="flex items-center gap-2">
                
                <button
                  onClick={handleClose}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {currentNotifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <BellOff size={32} className="mx-auto mb-2 text-gray-300" />
                  <p>No notifications</p>
                </div>
              ) : (
                currentNotifications.map((notification) => (
                  <div
                    key={notification._id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                   
                  >
                    <div className="flex items-start gap-3">
                      {/* New notification indicator */}
                      <div className="flex-shrink-0 mt-1">
                        {!notification.read ? (
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        ) : (
                          <div className="w-2 h-2"></div>
                        )}
                      </div>
                      
                      {/* Notification content */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${
                          !notification.read ? 'text-gray-900 font-medium' : 'text-gray-700'
                        }`}>
                          {notification.notification}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {getRelativeTime(notification.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationButton;
         