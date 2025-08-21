import React from "react";
import { 
  Home, 
  FolderOpen, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import nlogo from "../assets/loginlogo.png"


export default function Sidebar({ active, setActive }) {
  const navigate = useNavigate();
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5 mr-2" />, onClick: () =>{navigate("/Condo");} },
    { id: "assets", label: "Assets Management", icon: <FolderOpen className="w-5 h-5 mr-2" />, onClick: () => { navigate("/assets"); } },
    { id: "projects", label: "Project Management", icon: <FileText className="w-5 h-5 mr-2" />, onClick: () => setActive("projects") },
    { id: "vendors", label: "Vendors Management", icon: <Users className="w-5 h-5 mr-2" />, onClick: () => setActive("vendors") },
    { id: "messages", label: "Messages", icon: <MessageSquare className="w-5 h-5 mr-2" />, onClick: () => setActive("messages") },
    { id: "reports", label: "Reports", icon: <FileText className="w-5 h-5 mr-2" />, onClick: () => setActive("reports") },
  ]

  return (
  
    <div className="w-64  bg-gray-50 fixed ">
          <div className="p-6  border-r border-gray-300">
            <div className="flex flex-col items-center mb-8">
          <img src={nlogo} className="w-[140px] h-[70px] bg-cover"/>
              <span className="text-xl font-bold">Property Connect</span>
            </div>
            <div className="space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={item.onClick}
          className={`w-full flex items-center py-3 rounded-lg transition-colors whitespace-nowrap${
            active === item.id
              ? "bg-custom-blue text-white"
              : "text-gray-700 hover:bg-custom-blue hover:text-white"
          }`}
        >
          {item.icon} {item.label}
        </button>
      ))}
      <button className="flex text-gray-700  hover:text-slate-800 pt-[422px]"><Settings/>settings</button>
    </div>
       </div>
      </div>
  );
}
