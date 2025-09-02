import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "./Dashboardheader";
import SettingsTabs from "../../dashboards/condopages/setting pages/SettingTabs";
import SettingsContent from "../../dashboards/condopages/setting pages/SettingContents";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="min-h-screen bg-gray-50 flex relative">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <div
        className={`transition-all bg-white duration-300 flex-1 overflow-hidden
        ${isExpanded && !isMobile ? "ml-64" : isMobile ? "ml-0" : "ml-16 sm:ml-20"}`}
      >
        <Header
          title="Settings"
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />

        {/* Tabs */}
        <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <SettingsContent activeTab={activeTab} />
      </div>
    </div>
  );
}
