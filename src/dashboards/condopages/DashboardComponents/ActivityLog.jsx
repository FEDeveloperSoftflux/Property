import React from "react";

export default function ActivityLog({ activityData, navigate }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "failed":
        return "bg-red-100 text-red-600";
      case "in progress":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 py-4 px-3 sm:px-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          Activity Log
        </h3>
        <button
          className="text-custom-blue border border-custom-blue px-4 py-1.5 rounded-lg text-sm hover:bg-custom-blue hover:text-white transition"
          onClick={() => navigate("/Activity log")}
        >
          View All
        </button>
      </div>

      {/* Table / Cards */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 mt-3">
        {/* Table Header - desktop only */}
        <div className="hidden sm:grid grid-cols-4 gap-4 text-sm font-medium text-gray-600 bg-blue-800/5 px-6 py-3">
          <div>Date / Time</div>
          <div>Building Details</div>
          <div>Project Status</div>
          <div>Description</div>
        </div>

        {/* Table Rows */}
        {activityData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:grid sm:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6 py-4 border-t border-gray-200 text-sm"
          >
            {/* Date / Time */}
            <div>
              <span className="sm:hidden block text-gray-500 text-xs mb-0.5">
                Date / Time:
              </span>
              <div className="text-gray-900">{item.date}</div>
              <div className="text-gray-500">{item.time}</div>
            </div>

            {/* Building Details */}
            <div>
              <span className="sm:hidden block text-gray-500 text-xs mb-0.5">
                Building:
              </span>
              <div className="text-gray-900">{item.task}</div>
            </div>

            {/* Status */}
            <div>
              <span className="sm:hidden block text-gray-500 text-xs mb-0.5">
                Status:
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            {/* Description */}
            <div>
              <span className="sm:hidden block text-gray-500 text-xs mb-0.5">
                Description:
              </span>
              <div className="text-gray-600">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
