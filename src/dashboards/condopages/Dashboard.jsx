import React, { useState } from "react";
import { 
  Home, 
  FolderOpen, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings,
  Plus,
  Eye,
  AlarmClock,
  MessageCircle,
  Calendar,
  User,
  AlertTriangle,
  Bell,
  TruckElectric
} from "lucide-react";
import logo from "../../assets/Dashlogo.png"
import bell from "../../assets/bell.png"
import Sidebar from "../Sidebar";
import Header from "./Dashboardheader";
import StatsCard from '../statscard';
import { useEffect } from "react";

export default function Condo() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, active: true },
    { id: "assets", label: "Assets Management", icon: FolderOpen },
    { id: "projects", label: "Project Management", icon: FileText },
    { id: "vendors", label: "Vendors Management", icon: Users },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "reports", label: "Reports", icon: FileText },

  ];

  const activityData = [
    { date: "Jan 15, 2024", time: "08:30 PM", task: "Water Proofing install", status: "Completed", description: "Service HVAC Plumbing completed by Mike Hartman renovate." },
    { date: "Jan 14, 2024", time: "08:30 PM", task: "Electrical Wiring", status: "Failed", description: "Service HVAC Plumbing completed by Mike Hartman renovate." },
    { date: "Jan 13, 2024", time: "08:30 PM", task: "Foundation Inspection", status: "In Progress", description: "Service HVAC Plumbing completed by Mike Hartman renovate." },
    { date: "Jan 12, 2024", time: "08:30 PM", task: "Roof Installation", status: "Completed", description: "Service HVAC Plumbing completed by Mike Hartman renovate." }
  ];

  const recentRequests = [
    { project: "Lobby Renovation", vendor: "Premium Construction", message: "We can start the project next Monday and complete with in 2 weeks as usual.", actions: ["Chat", "Profile"] },
    { project: "Pool Maintenance", vendor: "Blue Wave Services", message: "We can start the project next Monday and complete with in 2 weeks as usual.", actions: ["Chat", "Profile"] },
    { project: "Security System Upgrade", vendor: "SafeGuard Technologies", message: "We can start the project next Monday and complete with in 2 weeks as usual.", actions: ["Chat", "Profile"] },
    { project: "Lobby Renovation", vendor: "Administrator", message: "We can start the project next Monday and complete with in 2 weeks as usual.", actions: ["Chat", "Profile"] }
  ];

  const recentActivityItems = [
    { 
      title: "New Bid Submitted", 
      description: "Vendor EVJ2 submitted bid for Project Skyline Tower",
      type: "bid"
    },
    { 
      title: "Project Status Updated", 
      description: "Riverside Complex has been marked as in progress",
      type: "status"
    },
    { 
      title: "New Message", 
      description: "John from BuildRight Co sent you a message about Top Renovation",
      type: "message"
    },
    { 
      title: "Document Uploaded", 
      description: "Safety schedule has been uploaded to Skyline Tower",
      type: "document"
    },
    { 
      title: "Task Delayed", 
      description: "Electrical installation for Riverside Complex has been delayed by 2 days",
      type: "delay"
    }
  ];
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
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'in progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sidebar */}
   <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      
      <div className={`transition-all duration-300 
        ${isExpanded ? "lg:ml-64 ml-0" : "lg:ml-20 ml-0"}`}>
           <Header 
                 title="DashBoard"
                 subtitle="Welcom back!" 
                 onMobileMenuToggle={() => setIsExpanded(true)}
                 showMobileMenu={isMobile}
               />
        
        {/* Main Content */}
        <div className="p-2 sm:p-4 lg:p-6">
          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8 gap-4">
            <div className="hidden lg:block">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900"></h1>
              <p className="text-gray-600"></p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 w-full lg:w-auto">
              <button className="px-2 sm:px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-custom-blue hover:text-white hover:scale-110 transition-all whitespace-nowrap">
                Company Network
              </button>
              <button className="px-2 sm:px-3 lg:px-4 py-2 border hover:scale-110 border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-custom-blue hover:text-white transition-all whitespace-nowrap">
                CO Repository
              </button>
              <button className="px-2 sm:px-3 lg:px-4 py-2 border hover:scale-110 border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-custom-blue hover:text-white transition-all whitespace-nowrap">
                Uploading Assets
              </button>
              <button className="px-2 sm:px-3 lg:px-4 py-2 border hover:scale-110 border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-custom-blue hover:text-white transition-all whitespace-nowrap">
                Vendor Network
              </button>
              <button className="px-2 sm:px-3 lg:px-4 py-2 bg-custom-blue hover:scale-110 text-white rounded-lg flex items-center text-xs sm:text-sm transition-all whitespace-nowrap">
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Add New Project
              </button>
            </div>
          </div>

          {/* Stats Cards */}
  

{/* Stats Cards (reusable) */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
<StatsCard
title="Total Projects"
value="14"
subtitle="+2 last month"
icon={FileText}
variant="light"
/>


<StatsCard
title="Completed Project"
value="128"
subtitle="+8 last month"
icon={FileText}
variant="light"
/>


<StatsCard
title="On-Going Projects"
value="48"
subtitle="+4 last month"
icon={AlertTriangle}
variant="light"
/>
</div>

          <div className="space-y-4 rounded-3xl bg-transparent">
            {/* Activity Log */}
            <div className="bg-white rounded-3xl shadow w-full">
              <div className="flex justify-between rounded-t-3xl items-center sm:p-6 border-b bg-blue-800/5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Activity Log</h3>
                <button className="text-custom-blue hover:text-custom-blue text-xs sm:text-sm w-16 sm:w-20 h-8 sm:h-9 bg-white rounded-[10px] border border-custom-blue">
                  View All
                </button>
              </div>
              <div className="p-4 sm:p-6">
                {/* Desktop Table View */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-medium text-gray-500">
                    <div>Date / Time</div>
                    <div>Building Code</div>
                    <div>Project Status</div>
                    <div>Description</div>
                  </div>
                  <div className="space-y-4">
                    {activityData.map((item, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                        <div className="text-sm text-gray-900">
                          <div>{item.date}</div>
                          <div className="text-gray-500">{item.time}</div>
                        </div>
                        <div className="text-sm text-gray-900">{item.task}</div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden space-y-4">
                  {activityData.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-sm text-gray-900">
                          <div className="font-medium">{item.task}</div>
                          <div className="text-gray-500 text-xs mt-1">{item.date} • {item.time}</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Requests */}
            <div className="bg-white rounded-3xl shadow">
              <div className="flex justify-between rounded-t-3xl items-center p-4 sm:p-6 border-b bg-blue-800/5">
                <h3 className="text-base sm:text-lg font-semibold rounded-3xl text-gray-900">Recent Requests</h3>
                <button className="text-custom-blue hover:text-blue-800 text-xs sm:text-sm w-16 sm:w-20 h-8 sm:h-9 bg-white rounded-[10px] border border-blue-800">
                  View All
                </button>
              </div>
              <div className="p-4 sm:p-6">
                {/* Desktop Table View */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-medium text-gray-500">
                    <div>Project Name</div>
                    <div>Vendor</div>
                    <div>Message</div>
                    <div>Actions</div>
                  </div>
                  <div className="space-y-4">
                    {recentRequests.map((request, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 last:border-b-0 items-center">
                        <div className="text-sm text-gray-900">{request.project}</div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                            <img src={logo} className="w-full h-full" alt="Logo" />
                          </div>
                          <span className="text-sm text-gray-900">{request.vendor}</span>
                        </div>
                        <div className="text-sm text-gray-600  ">{request.message}</div>
                        <div className="flex space-x-2">
                          <button className="text-custom-blue hover:text-blue-800 text-sm items-center w-28 h-10 flex justify-center bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-black/20">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Chat
                          </button>
                          <button className="text-custom-blue hover:text-blue-800 text-sm items-center w-28 h-10 flex justify-center bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-black/20">
                            <User className="w-4 h-4 mr-1" />
                            Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden space-y-4">
                  {recentRequests.map((request, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="mb-3">
                        <div className="font-medium text-gray-900 mb-1">{request.project}</div>
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                            <img src={logo} className="w-full h-full" alt="Logo" />
                          </div>
                          <span className="text-sm text-gray-900">{request.vendor}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">{request.message}</div>
                        <div className="flex space-x-2">
                          <button className="text-custom-blue hover:text-blue-800 text-xs items-center px-3 py-2 flex justify-center bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-black/20">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Chat
                          </button>
                          <button className="text-custom-blue hover:text-blue-800 text-xs items-center px-3 py-2 flex justify-center bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-black/20">
                            <User className="w-3 h-3 mr-1" />
                            Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6 lg:mt-8 bg-white rounded-3xl shadow">
            <div className="flex justify-between rounded-t-3xl items-center p-4 sm:p-6 border-b bg-blue-800/5">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Activity</h3>
              <button className="text-custom-blue hover:text-blue-800 text-xs sm:text-sm w-16 sm:w-20 h-8 sm:h-9 bg-white rounded-[10px] border border-blue-800">
                View All
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {recentActivityItems.map((item, index) => (
                  <div key={index} className="border h-52 sm:h-60 rounded-lg p-4 hover:bg-blue-50 hover:shadow-md transition-shadow bg-white pt-6 sm:pt-10 hover:border hover:border-blue-600">
                    <div className="flex items-center mb-3 pt-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        {item.type === 'bid' && <FileText className="w-4 h-4 text-custom-blue font-bold" />}
                        {item.type === 'status' && <AlertTriangle className="w-4 h-4 text-custom-blue" />}
                        {item.type === 'message' && <MessageCircle className="w-4 h-4 text-custom-blue" />}
                        {item.type === 'document' && <FileText className="w-4 h-4 text-custom-blue" />}
                        {item.type === 'delay' && <Calendar className="w-4 h-4 text-custom-blue" />}
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg sm:text-2xl">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 mb-4">{item.description}</p>
                    <button className="w-full px-3 py-2 border border-custom-blue hover:bg-custom-blue rounded-xl text-xs text-gray-700 hover:text-white mt-3 sm:mt-5 transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}