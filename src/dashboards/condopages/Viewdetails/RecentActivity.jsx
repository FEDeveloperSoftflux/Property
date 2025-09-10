import React, { useState } from 'react';
import { 
  Home, 
  FolderOpen, 
  FileText, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Sidebar from '../Sidebar';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Dashboardheader';
import { useEffect } from 'react';
import { FaArrowLeftLong, FaFileInvoice } from "react-icons/fa6";
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidFile } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';
const recentActivityItems = [
    { title: "New Bid Submitted", description: "Vendor EVJ2 submitted bid for Project Skyline Tower", type: "bid" },
    { title: "Project Status Updated", description: "Riverside Complex has been marked as in progress", type: "status" },
    { title: "New Message", description: "John from BuildRight Co sent you a message about Top Renovation", type: "message" },
    { title: "Document Uploaded", description: "Safety schedule has been uploaded to Skyline Tower", type: "document" },
    { title: "Task Delayed", description: "Electrical installation for Riverside Complex has been delayed by 2 days", type: "delay" }
  ];
const  RecentActivit= () => {
      const navigate = useNavigate();
      
  
  const [isExpanded, setIsExpanded] = useState(true);
      const [isMobile, setIsMobile] = useState(false);
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


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sidebar */}
   <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
    <div className={`transition-all duration-300 
           ${isExpanded ? "lg:ml-64 ml-0" : "lg:ml-20 ml-0"}`}>
              <Header 
                    title="DashBoard"
                    subtitle="Welcom back!" 
                    onMobileMenuToggle={() => setIsExpanded(true)}
                    showMobileMenu={isMobile}
                  />             
   <h2 className="text-xl font-semibold text-gray-900 flex items-center pt-6 pl-4">
                <FaArrowLeftLong className="w-[21px] h-[21px] mr-2"  onClick={() => navigate("/Condo")}/>
               Recent Activity
              </h2>
           <div className="p-3 sm:p-6 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {recentActivityItems.map((item, index) => (
                      <div
                        key={index}
                        className="border min-h-[180px] sm:h-60 rounded-3xl p-4 hover:scale-105 hover:shadow-md transition bg-white pt-3 sm:pt-10 hover:border-blue-600 group"
                      >
                        {/* Icon + Title */}
                        <div className="flex items-center mb-3 pt-1">
                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 shrink-0">
                            {item.type === "bid" && (
                              <FaFileInvoice className="w-[21px] h-[21px] text-custom-blue" />
                            )}
                            {item.type === "status" && (
                              <HiBuildingOffice2 className="w-[21px] h-[21px] text-custom-blue" />
                            )}
                            {item.type === "message" && (
                              <AiFillMessage className="w-[21px] h-[21px] text-custom-blue" />
                            )}
                            {item.type === "document" && (
                              <BiSolidFile className="w-[21px] h-[21px] text-custom-blue" />
                            )}
                            {item.type === "delay" && (
                              <FaTasks className="w-[21px] h-[21px] text-custom-blue" />
                            )}
                          </div>
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                            {item.title}
                          </h4>
                        </div>
          
                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3">
                          {item.description}
                        </p>
          
                        {/* Button */}
                        <button className="w-full px-3 py-2.5 border border-custom-blue group-hover:bg-custom-blue rounded-xl text-xs sm:text-sm text-gray-700 group-hover:text-white mt-auto transition-colors">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
        </div>
</div>
  );
};

export default RecentActivit;