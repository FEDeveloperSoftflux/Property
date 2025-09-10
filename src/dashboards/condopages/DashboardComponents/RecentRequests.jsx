import React from "react";
import { MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecentRequests({ recentRequests, logo }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full mt-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 py-4 px-3 sm:px-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          Recent Requests
        </h3>
        <button
          className="text-custom-blue border border-custom-blue px-4 py-1.5 rounded-lg text-sm hover:bg-custom-blue hover:text-white transition"
          onClick={() => navigate("/Recent request")}
        >
          View All
        </button>
      </div>

      {/* Table / Cards */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 mt-2">
        {/* Table Header - visible only on sm+ */}
        <div className="hidden sm:grid grid-cols-4 gap-4 text-sm font-medium text-gray-600 bg-blue-800/5 px-6 py-3">
          <div>Project Name</div>
          <div>Vendor</div>
          <div>Message</div>
          <div>Actions</div>
        </div>

        {/* Rows */}
        {recentRequests.map((request, index) => (
          <div
            key={index}
            className="flex flex-col sm:grid sm:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6 py-4 border-t border-gray-200 text-sm"
          >
            {/* Project */}
            <div className="text-gray-900 font-medium">
              <span className="sm:hidden block text-gray-500 text-xs">
                Project:
              </span>
              {request.project}
            </div>

            {/* Vendor */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 overflow-hidden">
                <img src={logo} className="w-full h-full object-cover" alt="Logo" />
              </div>
              <span className="text-gray-900">{request.vendor}</span>
            </div>

            {/* Message */}
            <div className="text-gray-600 truncate">
              <span className="sm:hidden block text-gray-500 text-xs mb-0.5">
                Message:
              </span>
              {request.message}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
              <button className="flex-1 sm:flex-none text-custom-blue border border-gray-300 hover:bg-blue-50 text-sm flex items-center justify-center px-3 py-1.5 rounded-lg transition" onClick={() => navigate("/message")}>
                <MessageCircle className="w-4 h-4 mr-1" />  Chat
              </button>
              <button className="flex-1 sm:flex-none text-custom-blue border border-gray-300 hover:bg-blue-50 text-sm flex items-center justify-center px-3 py-1.5 rounded-lg transition" onClick={() => navigate("/setting")}>
                <User className="w-4 h-4 mr-1"  /> Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
