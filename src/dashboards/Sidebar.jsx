import React, { useEffect } from "react";
import {  
  ChevronLeft, 
  ChevronRight,
  X,
  Menu
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import nlogo from "../assets/loginlogo.png";
import { RiHome6Fill } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsBagCheckFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
export default function Sidebar({ isExpanded, setIsExpanded }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <RiHome6Fill className="w-5 h-5" />, path: "/Condo" },
    { id: "assets", label: "Assets Management", icon: <HiBuildingOffice2 className="w-5 h-5" />, path: "/assets" },
    { id: "projects", label: "Project Management", icon: < BsBagCheckFill className="w-5 h-5" />, path: "/projectmanagement" },
    { id: "vendors", label: "Vendors Management", icon: <FaUserGroup className="w-5 h-5" />, path: "/vendormanagement" },
    { id: "messages", label: "Messages", icon: <AiFillMessage className="w-5 h-5" />, path: "/message" },
    { id: "reports", label: "Reports", icon: <BsFileEarmarkTextFill className="w-5 h-5" />, path: "/report" },
  ];

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) { // lg breakpoint
        setIsExpanded(false);
      }
    };

    // Set initial state based on screen size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsExpanded]);

  // Handle clicking outside sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 1024 && isExpanded) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.contains(event.target)) {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded, setIsExpanded]);

  const handleMenuClick = (path) => {
    navigate(path);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`
          h-screen bg-white border-r border-gray-300 transition-all duration-300 ease-in-out
          ${isExpanded ? "w-64" : "w-16 sm:w-20"}
          fixed flex flex-col z-40
          ${isExpanded && window.innerWidth < 1024 ? 'shadow-2xl' : ''}
          transform lg:transform-none
          ${isExpanded ? 'translate-x-0' : window.innerWidth < 1024 ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
        `}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between p-4 lg:p-6 min-h-[80px]">
          {isExpanded && (
            <div className="flex flex-col items-center gap-2 flex-1">
              <img 
                src={nlogo} 
                alt="logo" 
                className="w-24 sm:w-28 lg:w-32 h-auto max-w-full" 
              />   
              <span className="font-bold text-lg sm:text-xl text-center leading-tight">
                Property Connect
              </span>   
            </div>
          )}
          
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? (
              <X className="w-5 h-5 lg:hidden" />
            ) : (
              <Menu className="w-5 h-5 lg:hidden" />
            )}
           { isExpanded ? (<ChevronLeft className="w-5 h-5 hidden lg:block" />) :
              (<ChevronRight className="w-5 h-5 hidden lg:block" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 space-y-1 sm:space-y-2 mt-2 sm:mt-4 px-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.path)}
                className={`
                  relative group flex items-center gap-3 py-2.5 sm:py-3 px-3 sm:px-4 
                  rounded-xl sm:rounded-2xl w-full transition-all duration-200
                  ${isActive
                    ? "bg-custom-blue text-white shadow-lg"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:scale-105"
                  }
                  ${!isExpanded ? 'justify-center' : 'justify-start'}
                `}
                title={!isExpanded ? item.label : undefined}
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                
                {isExpanded && (
                  <span className="text-[13px] sm:text-base font-medium truncate">
                    {item.label}
                  </span>
                )}     
              </button>
            );
          })}
        </div>

        {/* Settings at Bottom */}
        <div className="p-3 sm:p-4 mt-auto border-t border-gray-100">
          <button
            onClick={() => handleMenuClick("/setting")}
            className={`
              relative group flex items-center gap-3 py-2.5 sm:py-3 px-3 sm:px-4 
              w-full rounded-xl sm:rounded-2xl transition-all duration-200
              ${location.pathname === "/setting"
                ? "bg-custom-blue text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:scale-[1.04]"
              }
              ${!isExpanded ? 'justify-center' : 'justify-start'}
            `}
            title={!isExpanded ? "Settings" : undefined}
          >
            <div className="flex-shrink-0">
              <IoSettings  className="w-5 h-5" />
            </div>
            
            {isExpanded && (
              <span className="text-sm sm:text-base font-medium">Settings</span>
            )}

            {/* Tooltip for collapsed state on desktop */}
            {!isExpanded && (
              <span
                className="
                  absolute left-full ml-2 px-3 py-2 rounded-lg 
                  bg-gray-600 text-white text-sm whitespace-nowrap 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200 z-50
                  pointer-events-none
                  hidden lg:block
                "
              >
                Settings
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}