import React, { useState, useEffect, useRef } from "react";
import { User, Settings, LogOut } from "lucide-react";
import bell from "../../assets/bell.png";
import logo from "../../assets/Dashlogo.png";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Header({ title, subtitle }) {
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [notifCount, setNotifCount] = useState(3); // example count
   const  navigate = useNavigate();
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
    <div className="w-full h-14 border-b border-gray-100 bg-white flex justify-between items-center mb-7 relative px-6">
      {/* Left side */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-600  text-sm">{subtitle}</p>}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notification button */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => {
              setOpenNotifications((prev) => !prev);
              setOpenProfile(false);
            }}
            className="w-8 h-8 rounded-full bg-slate-100 flex justify-center items-center relative"
          >
            <img src={bell} className="w-5 h-5" alt="notifications" />

            {/* 🔴 Notification Badge */}
            {notifCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-custom-blue text-white text-xs font-bold flex items-center justify-center rounded-full">
         
              </span>
            )}
          </button>
       {openNotifications && (
  <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 z-50">
    <ul className="p-2 max-h-60 overflow-y-auto">
      <li className="p-2 text-sm hover:bg-gray-100 cursor-pointer">
        New message from John
      </li>
      <li className="p-2 text-sm hover:bg-gray-100 cursor-pointer">
        Your report is ready
      </li>
      <li className="p-2 text-sm hover:bg-gray-100 cursor-pointer">
        Reminder: Meeting at 3 PM
      </li>
    </ul>

    {/* See all notifications button */}
    <div className="border-t border-gray-200">
      <button
        className="w-full text-sm text-blue-600 font-medium py-2 hover:bg-gray-50"
        onClick={() => navigate("/all notification")}
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
            className="flex items-center"
          >
            <img src={logo} className="w-8 h-8 rounded-full" alt="logo" />
          </button>
          {openProfile && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border border-gray-100 z-50">
              <ul className="p-2">
                <li onClick={() => navigate("/setting")} className="flex items-center gap-2 p-2 text-sm hover:bg-gray-100 cursor-pointer">
                  <User className="w-4 h-4 text-gray-600" />
                  Profile
                </li>
                <li  onClick={() => navigate("/setting")}className="flex items-center gap-2 p-2 text-sm hover:bg-gray-100 cursor-pointer">
                  <Settings className="w-4 h-4 text-gray-600" />
                  Settings
                </li>

                {/* Divider */}
                <hr className="my-1 border-gray-200" />

                <li onClick={() => navigate("/Login")} className="flex items-center gap-2 p-2 text-sm hover:bg-gray-100 cursor-pointer text-red-500">
                  <LogOut className="w-4 h-4" />
                  Sign out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
