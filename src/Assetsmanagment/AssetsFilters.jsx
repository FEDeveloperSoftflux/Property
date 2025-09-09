import React, { useState } from "react";
import { Search, ChevronDown, QrCode, Filter } from "lucide-react";

export default function AssetsFilters() {
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <div className="mb-6">
      {/* Toggle button for mobile */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Filter className="w-4 h-4 mr-2" />
          {showFilters ? "Hide Filters" : "Show Filters"}
          <ChevronDown
            className={`w-4 h-4 ml-2 transition-transform ${
              showFilters ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Filters Form */}
      <div className={`${showFilters || !isMobile ? "block" : "hidden"} transition-all duration-300`}>
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by asset name or ID..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-4 lg:flex lg:space-x-4">
            {/* Type */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                <option>All Types</option>
                <option>HVAC</option>
                <option>Elevator</option>
                <option>Electrical</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>

            {/* Status */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                <option>All Statuses</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Needs Attention</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>

            {/* Date */}
            <div className="col-span-2 lg:col-span-1">
              <input
                type="date"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* QR Button */}
            <button className="col-span-2 lg:col-span-1 flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <QrCode className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Download QR</span>
              <span className="sm:hidden">QR Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
