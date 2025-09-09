import React, { useState, useEffect } from "react";
import { Home, FolderOpen, Users, MessageSquare, FileText, Plus, AlertTriangle, MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "./Dashboardheader";
import StatsCard from "../statscard";
import logo from "../../assets/Dashlogo.png";

// Import the new components
import ActivityLog from "./DashboardComponents/ActivityLog";
import RecentRequests from "./DashboardComponents/RecentRequests";
import RecentActivity from "./DashboardComponents/RecentActivity";

export default function Condo() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Dummy data (move these to API hooks later if needed)
  const activityData = [
    { date: "Jan 15, 2024", time: "08:30 PM", task: "Water Proofing install", status: "Completed", description: "Service HVAC Plumbing completed by Mike Hartman renovate." },
    { date: "Jan 14, 2024", time: "08:30 PM", task: "Electrical Wiring", status: "Failed", description: "Service HVAC Plumbing completed by Mike Hartman renovate." },
    { date: "Jan 13, 2024", time: "08:30 PM", task: "Foundation Inspection", status: "In Progress", description: "Service HVAC Plumbing completed by Mike Hartman renovate." },
    { date: "Jan 12, 2024", time: "08:30 PM", task: "Roof Installation", status: "Completed", description: "Service HVAC Plumbing completed by Mike Hartman renovate." }
  ];

  const recentRequests = [
    { project: "Lobby Renovation", vendor: "Premium Construction", message: "We can start the project next Monday and complete within 2 weeks.", actions: ["Chat", "Profile"] },
    { project: "Pool Maintenance", vendor: "Blue Wave Services", message: "We can start the project next Monday and complete within 2 weeks.", actions: ["Chat", "Profile"] },
    { project: "Security System Upgrade", vendor: "SafeGuard Technologies", message: "We can start the project next Monday and complete within 2 weeks.", actions: ["Chat", "Profile"] },
    { project: "Lobby Renovation", vendor: "Administrator", message: "We can start the project next Monday and complete within 2 weeks.", actions: ["Chat", "Profile"] }
  ];

  const recentActivityItems = [
    { title: "New Bid Submitted", description: "Vendor EVJ2 submitted bid for Project Skyline Tower", type: "bid" },
    { title: "Project Status Updated", description: "Riverside Complex has been marked as in progress", type: "status" },
    { title: "New Message", description: "John from BuildRight Co sent you a message about Top Renovation", type: "message" },
    { title: "Document Uploaded", description: "Safety schedule has been uploaded to Skyline Tower", type: "document" },
    { title: "Task Delayed", description: "Electrical installation for Riverside Complex has been delayed by 2 days", type: "delay" }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setIsExpanded(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <div className={`transition-all duration-300 ${isExpanded ? "lg:ml-64 ml-0" : "lg:ml-20 ml-0"}`}>
        {/* Header */}
        <Header title="Dashboard" subtitle="Welcome back!" onMobileMenuToggle={() => setIsExpanded(true)} showMobileMenu={isMobile} />

        {/* Main Content */}
        <div className="p-2 sm:p-4 lg:p-6">
          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8 gap-4">
            <div className="hidden lg:block">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900"></h1>
              <p className="text-gray-600"></p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 w-full lg:w-auto">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-custom-blue hover:text-white hover:scale-110 transition-all whitespace-nowrap">Company Network</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-custom-blue hover:text-white hover:scale-110 transition-all whitespace-nowrap">CO Repository</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-custom-blue hover:text-white hover:scale-110 transition-all whitespace-nowrap">Uploading Assets</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-custom-blue hover:text-white hover:scale-110 transition-all whitespace-nowrap">Vendor Network</button>
              <button className="px-3 py-2 bg-custom-blue hover:scale-110 text-white rounded-lg flex items-center text-sm transition-all whitespace-nowrap">
                <Plus className="w-4 h-4 mr-2" />
                Add New Project
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
            <StatsCard title="Total Projects" value="14" subtitle="+2 last month" icon={FileText} variant="light" />
            <StatsCard title="Completed Project" value="128" subtitle="+8 last month" icon={FileText} variant="light" />
            <StatsCard title="On-Going Projects" value="48" subtitle="+4 last month" icon={AlertTriangle} variant="light" />
          </div>

          {/* Subcomponents */}
          <ActivityLog activityData={activityData} navigate={navigate} />
          <RecentRequests recentRequests={recentRequests} logo={logo} />
          <RecentActivity recentActivityItems={recentActivityItems} />
        </div>
      </div>
    </div>
  );
}
