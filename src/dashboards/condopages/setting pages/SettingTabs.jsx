import React from "react";

export default function SettingsTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "profile", label: "Profile Details" },
    { id: "security", label: "Security" },
    { id: "notification", label: "Notification" },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-8 w-full justify-center bg-white p-4 sm:p-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 sm:px-8 py-3 w-full sm:w-[500px] max-w-full rounded-2xl font-medium text-sm sm:text-base transition-all ${
            activeTab === tab.id
              ? "bg-custom-blue text-white shadow-md"
              : "bg-neutral-50 text-gray-700 hover:bg-gray-50 shadow-sm"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}