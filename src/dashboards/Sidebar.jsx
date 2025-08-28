import React from "react";
import { 
  Home, 
  FolderOpen, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import nlogo from "../assets/loginlogo.png";

export default function Sidebar({ isExpanded, setIsExpanded }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5" />, path: "/Condo" },
    { id: "assets", label: "Assets Management", icon: <FolderOpen className="w-5 h-5" />, path: "/assets" },
    { id: "projects", label: "Project Management", icon: <FileText className="w-5 h-5" />, path: "/projectmanagement" },
    { id: "vendors", label: "Vendors Management", icon: <Users className="w-5 h-5" />, path: "/vendormanagement" },
    { id: "messages", label: "Messages", icon: <MessageSquare className="w-5 h-5" />, path: "/message" },
    { id: "reports", label: "Reports", icon: <FileText className="w-5 h-5" />, path: "/report" },
  ];

  return (
    <div
      className={`h-screen bg-white border-r border-gray-300 transition-all duration-200 
      ${isExpanded ? "w-64" : "w-20"} 
      fixed flex flex-col z-40`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-6">
        {isExpanded && (
          <div className="flex flex-col items-center gap-2">
            <img src={nlogo} alt="logo" className="w-32 h-auto" />   
            <span className="font-bold text-xl whitespace-nowrap">Property Connect</span>   
          </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2"
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-2 mt-4 px-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`relative group flex items-center gap-3 py-3 px-4 rounded-2xl w-full transition-colors
                ${isActive
                  ? "bg-custom-blue text-white"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-600 hover:scale-105"
                }`}
            >
              {item.icon}
              {isExpanded && <span>{item.label}</span>}

              {/* Tooltip when collapsed */}
              {!isExpanded && (
                <span
                  className="absolute left-full ml-2 px-2 py-1 rounded-lg bg-custom-blue text-white text-sm whitespace-nowrap 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50"
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Settings at Bottom */}
      <div className="p-4 mt-auto">
        <button
          onClick={() => navigate("/setting")}
          className={`relative group flex items-center gap-3 py-3 px-4 w-full rounded-2xl transition-colors
            ${location.pathname === "/setting"
              ? "bg-custom-blue text-white"
              : "text-gray-600 hover:bg-gray-200 hover:scale-105 "
            }
            ${isExpanded ? "justify-start" : "justify-center"}`}
        >
          <Settings className="w-5 h-5" />
          {isExpanded && <span>Settings</span>}

          {/* Tooltip when collapsed */}
          {!isExpanded && (
            <span
              className="absolute left-full ml-2 px-2 py-1 rounded-md bg-custom-blue text-white text-sm whitespace-nowrap 
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50"
            >
              Settings
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
