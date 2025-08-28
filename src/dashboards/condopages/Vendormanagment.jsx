import React, { useState } from "react";
import {
  Search,
  Star,
  MapPin,
  Building2,
  Briefcase,
} from "lucide-react";
import Sidebar from "../Sidebar"; // adjust path if needed

export default function VendorsManagement() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const vendors = [
    { id: "001", name: "Vendor A", type: "Plumbing", rating: 4.5, location: "New York", projects: 12 },
    { id: "002", name: "Vendor B", type: "Electrical", rating: 4.8, location: "Los Angeles", projects: 8 },
    { id: "003", name: "Vendor C", type: "Cleaning", rating: 4.2, location: "Chicago", projects: 15 },
    { id: "004", name: "Vendor D", type: "Construction", rating: 4.9, location: "Houston", projects: 20 },
  ];

  const filteredVendors = vendors.filter(
    (v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.id.includes(searchTerm)
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="w-full h-16 border-b border-gray-100 bg-white flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Vendors Management
            <p className="text-sm font-medium text-gray-600">
              All Your Vendors In One Place
            </p>
          </h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md mb-3 md:mb-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by vendor name or ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span>Price/Location</span>
              <span>All Types</span>
              <span>All Ratings</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button className="bg-custom-blue text-white px-6 py-2 rounded-lg text-sm font-medium">
              Your Linked List
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
              Search New Vendor
            </button>
          </div>

          {/* Vendor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
                <p className="text-sm text-gray-500">ID: {vendor.id}</p>

                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Building2 className="w-4 h-4 mr-1" />
                  {vendor.type}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {vendor.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Briefcase className="w-4 h-4 mr-1" />
                  {vendor.projects} projects
                </div>
                <div className="flex items-center text-sm text-yellow-500 mt-1">
                  <Star className="w-4 h-4 mr-1" />
                  {vendor.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar (hidden on small & medium, only visible lg+) */}
      <div className="hidden lg:block w-80 p-6 bg-white border-l border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

        {/* Vendor Type Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Vendor Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="cleaning">Cleaning</option>
            <option value="construction">Construction</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All</option>
            <option value="4.5">4.5+</option>
            <option value="4.0">4.0+</option>
            <option value="3.5">3.5+</option>
          </select>
        </div>
      </div>
    </div>
  );
}
