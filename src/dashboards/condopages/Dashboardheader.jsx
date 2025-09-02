import React, { useState, useEffect, useRef } from "react";
import { User, Settings, LogOut, Menu } from "lucide-react";
import bell from "../../assets/bell.png";
import logo from "../../assets/Dashlogo.png";
import { useNavigate } from "react-router-dom";

export default function Header({ title, subtitle, onMobileMenuToggle, showMobileMenu = false }) {
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [notifCount, setNotifCount] = useState(3); // example count
  const navigate = useNavigate();
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setOpenNotifications(false);
        setOpenProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-14 border-b border-gray-100 bg-white flex justify-between items-center mb-7 relative px-4 lg:px-6">
      {/* Left side */}
            {/* Mobile Menu Button */}
        {showMobileMenu && (
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        )}
        
        {/* Title */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 j">{title}</h1>
          {subtitle && <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">{subtitle}</p>}
        </div>


      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification button */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => {
              setOpenNotifications((prev) => !prev);
              setOpenProfile(false);
            }}
            className="w-8 h-8 rounded-full bg-slate-100 flex justify-center items-center relative hover:bg-slate-200 transition-colors"
          >
            <img src={bell} className="w-4 h-4 sm:w-5 sm:h-5" alt="notifications" />

            {/* Notification Badge */}
            {notifCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-custom-blue text-white text-xs font-bold flex items-center justify-center rounded-full">
              </span>
            )}
          </button>
          
          {openNotifications && (
            <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-white shadow-lg rounded-lg border border-gray-100 z-50">
              <div className="p-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
              </div>
              <ul className="p-2 max-h-60 overflow-y-auto">
                <li className="p-2 text-sm hover:bg-gray-50 cursor-pointer rounded-md transition-colors">
                  <div className="font-medium text-gray-900">New message from John</div>
                  <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
                </li>
                <li className="p-2 text-sm hover:bg-gray-50 cursor-pointer rounded-md transition-colors">
                  <div className="font-medium text-gray-900">Your report is ready</div>
                  <div className="text-xs text-gray-500 mt-1">1 hour ago</div>
                </li>
                <li className="p-2 text-sm hover:bg-gray-50 cursor-pointer rounded-md transition-colors">
                  <div className="font-medium text-gray-900">Reminder: Meeting at 3 PM</div>
                  <div className="text-xs text-gray-500 mt-1">3 hours ago</div>
                </li>
              </ul>

              {/* See all notifications button */}
              <div className="border-t border-gray-200">
                <button
                  className="w-full text-sm text-blue-600 font-medium py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    navigate("/all-notification");
                    setOpenNotifications(false);
                  }}
                >
                  See all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile dropdown */}
        <div ref={profileRef} className="relative">
          <button
            onClick={() => {
              setOpenProfile((prev) => !prev);
              setOpenNotifications(false);
            }}
            className="flex items-center hover:ring-2 hover:ring-gray-200 rounded-full p-1 transition-all"
          >
            <img src={logo} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full" alt="profile" />
          </button>
          
          {openProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50">
              <div className="p-3 border-b border-gray-100">
                <div className="text-sm font-semibold text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">john.doe@example.com</div>
              </div>
              <ul className="p-2">
                <li 
                  onClick={() => {
                    navigate("/profile");
                    setOpenProfile(false);
                  }} 
                  className="flex items-center gap-3 p-2 text-sm hover:bg-gray-50 cursor-pointer rounded-md transition-colors"
                >
                  <User className="w-4 h-4 text-gray-600" />
                  <span>Profile</span>
                </li>
                <li 
                  onClick={() => {
                    navigate("/setting");
                    setOpenProfile(false);
                  }}
                  className="flex items-center gap-3 p-2 text-sm hover:bg-gray-50 cursor-pointer rounded-md transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-600" />
                  <span>Settings</span>
                </li>

                {/* Divider */}
                <hr className="my-2 border-gray-200" />

                <li 
                  onClick={() => {
                    navigate("/Login");
                    setOpenProfile(false);
                  }} 
                  className="flex items-center gap-3 p-2 text-sm hover:bg-red-50 cursor-pointer text-red-600 rounded-md transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}