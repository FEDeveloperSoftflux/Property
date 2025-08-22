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
import logo from "../assets/Dashlogo.png"
import bell from "../assets/bell.png"
import Sidebar from "./Sidebar";
export default function Condo() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isExpanded, setIsExpanded] = useState(true);
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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'in progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className=" bg-white flex border border-gray-100 border-b-0 ">
      {/* Sidebar */}
   <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
            <div 
        className={`transition-all duration-300 flex-1 p-8 
          ${isExpanded ? "ml-64" : "ml-20"}`}
      >
        {/* Header */}
        <div className="w-full h-24 origin-top-left border-b border-gray-100 bg-white flex justify-between items-center mb-6" >
                   <h1 className="text-4xl font-bold text-gray-900 ml-6">Dashboard<br/> <p className="justify-start text-black text-base font-semibold font-['Helvetica_Now_Display']">Welcome back! </p></h1> 
                  
               <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-100 flex justify-center items-center"> <img src={bell} className="w-5 h-5 bg-cover"/></button> 
                <img src={logo} className="w-10 h-10 flex items-center mr-6"/>
                </div> 
                 </div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 ml-6"></h1>
            <p className="text-gray-600 ml-6"></p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-custom-blue hover:text-white">
              Company Network
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-custom-blue hover:text-white">
              CO Repository
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-custom-blue hover:text-white">
              Uploading Assets
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-custom-blue hover:text-white">
              Vendor Network
            </button>
            <button className="px-4 py-2 bg-custom-blue text-white rounded-lg  flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Add New Project
            </button>
    
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow h-48">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Projects</h3>
                <div className="text-3xl font-bold text-gray-900 mt-14">14</div>
                <div className="text-sm text-gray-600">+2 last month</div>
              </div>
              <div className="bg-white border border-gray-100 p-2 rounded-xl">
                <FileText className="w-6 h-6 text-custom-blue" />
              </div>
            </div>
          </div>
          
          <div className="bg-custom-blue  p-6 rounded-3xl  text-white shadow-xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">Completed Projects</h3>
                <div className="text-3xl font-bold mt-14">128</div>
                <div className="text-sm text-blue-200">+8 last month</div>
              </div>
              <div className="bg-white border border-gray-100 p-2 rounded-xl">
                <FileText className="w-6 h-6 text-custom-blue" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Going Projects</h3>
                <div className="text-3xl font-bold text-gray-900 mt-14">48</div>
                <div className="text-sm text-gray-600">+4 last month</div>
              </div>
              <div className="bg-white border border-gray-100 p-2 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-custom-blue" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 rounded-3xl bg-white">
          {/* Activity Log */}
          <div className="bg-white rounded-3xl shadow w-full ">
            <div className="flex justify-between rounded-t-3xl items-center p-6 border-b bg-blue-800/5">
              <h3 className="text-lg font-semibold text-gray-900">Activity Log</h3>
              <button className="text-custom-blue hover:text-blue-800 text-sm w-20 h-9 bg-white rounded-[10px] border border-blue-800">View All</button>
            </div>
            <div className="p-6">
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
          </div>

          {/* Recent Requests */}
          <div className="bg-white rounded-3xl shadow">
            <div className="flex justify-between rounded-t-3xl  items-center p-6 border-b  bg-blue-800/5">
              <h3 className="text-lg font-semibold rounded-3xl  text-gray-900 ">Recent Requests</h3>
              <button className="text-custom-blue hover:text-blue-800 text-sm w-20 h-9 bg-white rounded-[10px] border border-blue-800">View All</button>
            </div>
            <div className="p-6">
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
                        <img src={logo} className="w-full h-full" />
                      </div>
                      <span className="text-sm text-gray-900">{request.vendor}</span>
                    </div>
                    <div className="text-sm text-gray-600">{request.message}</div>
                    <div className="flex space-x-2">
                      <button className="text-custom-blue hover:text-blue-800 text-sm  items-center w-20 h-8 flex justify-center bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-black/20">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </button>
                      <button className="text-custom-blue hover:text-blue-800 text-sm  items-center w-20 h-8 flex justify-center bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-black/20">
                        <User className="w-4 h-4 mr-1" />
                        Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-3xl shadow">
          <div className="flex justify-between rounded-t-3xl  items-center p-6 border-b  bg-blue-800/5">
            <h3 className="text-lg font-semibold  text-gray-900">Recent Activity</h3>
            <button className="text-custom-blue hover:text-blue-800 text-sm w-20 h-9 bg-white rounded-[10px] border border-blue-800">View All</button>
          </div>
         <div className="p-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {recentActivityItems.map((item, index) => (
      <div key={index} className="border h-60 rounded-lg p-4  hover:bg-blue-50 hover:shadow-md transition-shadow bg-white pt-10 hover:border hover:border-blue-600">
        <div className="flex items-center mb-3 pt-2">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
            {item.type === 'bid' && <FileText className="w-4 h-4 text-custom-blue font-bold" />}
            {item.type === 'status' && <AlertTriangle className="w-4 h-4 text-custom-blue" />}
            {item.type === 'message' && <MessageCircle className="w-4 h-4 text-custom-blue" />}
            {item.type === 'document' && <FileText className="w-4 h-4 text-custom-blue text-xl" />}
            {item.type === 'delay' && <Calendar className="w-4 h-4 text-custom-blue" />}
          </div>
          <h4 className="font-bold  text-gray-900 text-2xl">{item.title}</h4>
        </div>
        <p className="text-xs text-gray-600 mb-4">{item.description}</p>
        <button className="w-full px-3 py-2 border border-custom-blue hover:bg-custom-blue rounded-xl text-xs text-gray-700  hover:text-white mt-5">
          View Details
        </button>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
}