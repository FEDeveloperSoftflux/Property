import React, { useState, useEffect } from "react";
import { Search, ChevronDown, User, MapPin, Star, MessageCircle } from "lucide-react";
import Sidebar from "../Sidebar";
import Header from "./Dashboardheader";
import SearchView from "../../VendorManagement/SearchVeiw";
import VendorCard from "../../VendorManagement/VendorCard";

export default function Vendormanage() {
  const [activeView, setActiveView] = useState("vendors");
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const vendors = [
    {
      id: 1,
      name: "Profix Plumbing",
      price: "75.00",
      rating: 4.5,
      reviewCount: 45,
      address: "123 Main Street, New York, Downtown",
      description:
        "Experienced plumbing company with 15+ years in commercial and residential services.",
      services: ["Plumbing", "Emergency Repairs", "Installation"],
      verified: true,
    },
    {
      id: 2,
      name: "Bright Cleaners",
      price: "60.00",
      rating: 4.2,
      reviewCount: 28,
      address: "88 Broadway, New York, Manhattan",
      description: "Reliable cleaning services for residential and office spaces.",
      services: ["Cleaning", "Disinfection", "Office Cleaning"],
      verified: true,
    },
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
    <div className="h-full bg-gray-50">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={`transition-all bg-white overflow-hidden duration-300 ${
          isExpanded && !isMobile
            ? "ml-64"
            : isMobile
            ? "ml-0"
            : "ml-16 sm:ml-20"
        }`}
      >
        <Header
          title="Vendors Management"
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />

        <div className="px-2 sm:px-6 lg:px-8 mt-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            All Vendors
          </h2>
          <p className="text-sm text-gray-600 mb-4 pt-2">
            Manage your vendor treatment list and discover new service providers.
          </p>

          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row justify-center mb-6 space-y-2 sm:space-y-0">
            <button
              className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-medium w-full sm:w-[500px] border border-gray-300 ${
                activeView === "vendors"
                  ? "bg-custom-blue text-white"
                  : "hover:bg-custom-blue hover:text-white bg-neutral-50 text-gray-700"
              }`}
              onClick={() => setActiveView("vendors")}
            >
              Your Linked List
            </button>
            <button
              className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-medium w-full sm:w-[500px] border border-gray-300 ${
                activeView === "search"
                  ? "bg-custom-blue text-white"
                  : "hover:bg-custom-blue hover:text-white bg-neutral-50 text-gray-700"
              }`}
              onClick={() => setActiveView("search")}
            >
              Search New Vendor
            </button>
          </div>

          {/* Search input */}
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by vendor name..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 w-full sm:w-auto">
                  <option>Location</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400" />
              </div>
              <div className="relative w-full sm:w-auto">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 w-full sm:w-auto">
                  <option>All Types</option>
                  <option>Cleaning</option>
                  <option>Security</option>
                  <option>Landscaping</option>
                  <option>Maintenance</option>
                  <option>HVAC</option>
                  <option>Electrician</option>
                  <option>Plumbing</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400" />
              </div>
              <div className="relative w-full sm:w-auto">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 w-full sm:w-auto">
                  <option>Rating</option>
                  <option>4 stars</option>
                  <option>4+ stars</option>
                  <option>5 stars</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Conditional view */}
          {activeView === "vendors" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          ) : (
            <SearchView searchTerm={searchTerm} />
          )}
        </div>
      </div>
    </div>
  );
}
