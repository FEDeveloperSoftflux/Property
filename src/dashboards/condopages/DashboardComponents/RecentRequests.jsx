import React from "react";
import { MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecentRequests({ recentRequests, logo }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-3xl shadow mt-6">
      <div className="flex justify-between rounded-t-3xl items-center p-4 sm:p-6 border-b bg-blue-800/5">
        <h3 className="text-lg font-semibold text-gray-900">Recent Requests</h3>
        <button className="text-custom-blue text-sm w-20 h-9 bg-white rounded-[10px] border border-blue-800" onClick={() => navigate("/Recent request")} >View All</button>
      </div>

      <div className="p-4 sm:p-6">
        {/* Desktop Table */}
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
                <div className="text-sm text-gray-600">{request.message}</div>
                <div className="flex space-x-2">
                  <button className="text-custom-blue hover:text-blue-800 text-sm flex items-center w-28 h-10 justify-center bg-white rounded-lg border border-gray-300">
                    <MessageCircle className="w-4 h-4 mr-1" /> Chat
                  </button>
                  <button className="text-custom-blue hover:text-blue-800 text-sm flex items-center w-28 h-10 justify-center bg-white rounded-lg border border-gray-300">
                    <User className="w-4 h-4 mr-1" /> Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {recentRequests.map((request, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="font-medium text-gray-900 mb-1">{request.project}</div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <img src={logo} className="w-full h-full" alt="Logo" />
                </div>
                <span className="text-sm text-gray-900">{request.vendor}</span>
              </div>
              <div className="text-sm text-gray-600 mb-3">{request.message}</div>
              <div className="flex space-x-2">
                <button className="text-custom-blue hover:text-blue-800 text-xs flex items-center px-3 py-2 justify-center bg-white rounded-lg border border-gray-300">
                  <MessageCircle className="w-3 h-3 mr-1" /> Chat
                </button>
                <button className="text-custom-blue hover:text-blue-800 text-xs flex items-center px-3 py-2 justify-center bg-white rounded-lg border border-gray-300">
                  <User className="w-3 h-3 mr-1" /> Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
