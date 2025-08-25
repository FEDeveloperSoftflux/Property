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
import { useNavigate } from "react-router-dom";
import nlogo from "../assets/loginlogo.png";

export default function Sidebar({ active, setActive, isExpanded, setIsExpanded }) {
  const navigate = useNavigate();
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5 mr-2" />, onClick: () =>{navigate("/Condo");} },
    { id: "assets", label: "Assets Management", icon: <FolderOpen className="w-5 h-5 mr-2" />, onClick: () => { navigate("/assets"); } },
    { id: "projects", label: "Project Management", icon: <FileText className="w-5 h-5 mr-2" />, onClick: () => navigate("/projectmanagement") },
    { id: "vendors", label: "Vendors Management", icon: <Users className="w-5 h-5 mr-2" />, onClick: () => navigate("/vendormanagement") },
    { id: "messages", label: "Messages", icon: <MessageSquare className="w-5 h-5 mr-2" />, onClick: () => setActive("messages") },
    { id: "reports", label: "Reports", icon: <FileText className="w-5 h-5 mr-2" />, onClick: () => setActive("reports") },
  ]

  return (
    <div
      className={`h-screen bg-white border-r border-gray-300 transition-all duration-200 
        ${isExpanded ? "w-64" : "w-20"} 
        fixed flex flex-col`}
    >
      {/* Logo + Toggle */}
    <div>
      <div className="flex items-center justify-between p-6">
      {isExpanded && (
         <div className=""> <div className="flex flex-col items-center gap-2 ">
            <img src={nlogo} alt="logo" className="w-32 h-auto " />   
            <span className=" font-bold text-xl  mt-0 whitespace-nowrap">Propert Connect</span>   
          </div>
          </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2"
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div> 


      </div>

      {/* Menu Items */}
  <div className="flex-1 space-y-2 mt-4 pl-2 pr-2">
  {menuItems.map((item) => (
    <div key={item.id} className="relative group">
      <button
        onClick={item.onClick}
        className={`flex items-center gap-3 py-3 px-4 rounded-2xl w-full transition-colors
          ${active === item.id
           ? 'bg-custom-blue text-white '
                      : 'text-gray-600 hover:z-50 hover:bg-custom-blue hover:text-white  hover:scale-102 hover:shadow-sm '}`
          
          }
      >
        {item.icon}
        {isExpanded && (
          <span className="whitespace-nowrap">{item.label}</span>
        )}
      </button>

      {/* Tooltip label (only show if collapsed) */}
      {!isExpanded && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
          hidden group-hover:flex bg-custom-blue text-white text-sm px-2 py-1 rounded-md shadow-lg whitespace-nowrap z-10">
          {item.label}
        </span>
      )}
    </div>
  ))}
</div>

      {/* Settings at Bottom */}
      <div className="p-4 mt-auto">
        <button
          className="flex items-center gap-3 py-3 px-4 w-full rounded-lg text-gray-700 hover:bg-gray-200"
        >
          <Settings className="w-5 h-5" />
          {isExpanded && <span>Settings</span>}
        </button>
      </div>
    </div>
  );
}
