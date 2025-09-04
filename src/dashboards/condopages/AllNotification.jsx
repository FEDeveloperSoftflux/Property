import React, { useState, useEffect } from "react";
import { CheckCircle, Trash2, Bell } from "lucide-react";
import Header from "./Dashboardheader";
import Sidebar from "../Sidebar";
import { BsBellFill } from "react-icons/bs";
export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true)
  // Example notifications (replace with API later)
  
useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  // Clear all
  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="h-screen  bg-white">
      
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
     <div className={` bg-white flex-1 overflow-hidden
        ${isExpanded && !isMobile  ? "ml-64" : isMobile ? "ml-0" : "ml-16 sm:ml-20"}`}>
      <Header 
               title="ALL Notification" 
               onMobileMenuToggle={() => setIsExpanded(true)}
               showMobileMenu={isMobile}
             />
      {/* Notifications List */}
      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <BsBellFill className="w-10 h-10 mb-2 text-custom-blue" />
          <p>No notifications yet</p>
        </div>
      ) : (
        <ul className="bg-white shadow-md rounded-xl divide-y divide-gray-200 max-h-[70vh] overflow-y-auto">
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={`p-4 transition-all duration-200 hover:bg-gray-50 cursor-pointer ${
                notif.read ? "bg-white" : "bg-blue-50"
              }`}
            >
              <p className="text-sm text-gray-800">{notif.text}</p>
              <span className="text-xs text-gray-500">{notif.time}</span>
            </li>
          ))}
        </ul>
      )}
</div>
</div>
  );
}
