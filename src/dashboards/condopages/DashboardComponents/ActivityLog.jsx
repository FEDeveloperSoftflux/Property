import React from "react";

export default function ActivityLog({ activityData, navigate }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "failed":
        return "bg-red-100 text-red-800";
      case "in progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div c>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Activity Log</h3>
        <button
          className="text-custom-blue hover:text-custom-blue text-sm w-20 h-9 bg-white rounded-[10px] border border-custom-blue"
          onClick={() => navigate("/Activity log")}
        >
          View All
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow w-full ">
        <div className=" sm:p-6">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-medium text-gray-500 border-b">
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
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>{item.status}</span>
                  </div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {activityData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-900">
                    <div className="font-medium">{item.task}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.date} • {item.time}</div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>{item.status}</span>
                </div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
