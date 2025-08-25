import React, { useState } from 'react';
import { Search, MessageCircle, User, Star, MapPin, Code, Users, BarChart3, MessageSquare, FileText, Settings, Home, Briefcase, FolderOpen, Wrench } from 'lucide-react';
import Sidebar from '../Sidebar';
import Header from './Dashboardheader';

const Vendor = () => {
  const [activeFilter, setActiveFilter] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');

  const vendors = [
    {
      id: 1,
      name: "Profix Plumbing",
      price: "$75.00",
      rating: 4.5,
      reviewCount: 45,
      address: "123 Main Street, New York, Downtown",
      description: "Experienced plumbing company with 15+ years in commercial and residential services.",
      services: ["Plumbing", "Emergency Repairs", "Installation"],
      verified: true
    },
    {
      id: 2,
      name: "Profix Plumbing",
      price: "$75.00",
      rating: 4.5,
      reviewCount: 45,
      address: "123 Main Street, New York, Downtown",
      description: "Experienced plumbing company with 15+ years in commercial and residential services.",
      services: ["Plumbing", "Emergency Repairs", "Installation"],
      verified: true
    },
    {
      id: 3,
      name: "Profix Plumbing",
      price: "$75.00",
      rating: 4.5,
      reviewCount: 45,
      address: "123 Main Street, New York, Downtown",
      description: "Experienced plumbing company with 15+ years in commercial and residential services.",
      services: ["Plumbing", "Emergency Repairs", "Installation"],
      verified: true
    },
    {
      id: 4,
      name: "Profix Plumbing",
      price: "$75.00",
      rating: 4.5,
      reviewCount: 45,
      address: "123 Main Street, New York, Downtown",
      description: "Experienced plumbing company with 15+ years in commercial and residential services.",
      services: ["Plumbing", "Emergency Repairs", "Installation"],
      verified: true
    }
  ];

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: false },
    { icon: Briefcase, label: "Assets Management", active: false },
    { icon: FolderOpen, label: "Project Management", active: false },
    { icon: Users, label: "Vendors Management", active: true },
    { icon: MessageSquare, label: "Messages", active: false },
    { icon: FileText, label: "Reports", active: false },
    { icon: Settings, label: "Setting", active: false }
  ];

  const serviceTypes = [
    "Planning", "Electrician", "HVAC", "Cleaning", "Landscaping", "Security", "Maintenance"
  ];

  const ratings = ["5 Star", "4+ Star", "3+ Star", "2+ Star", "1+ Star"];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
<Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
       <div  className={`transition-all bg-white duration-300 flex-1 p-8 
          ${isExpanded ? "ml-64" : "ml-20"}`}>
        {/* Vendors List */}
        <div className="flex-1 p-6">
          {/* Header */}
     <Header title="Vendors Management"/>

          {/* All Vendors Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">All Vendors</h2>
            <p className="text-sm text-gray-600 mb-4">Manage your vendor treatment list and discover new service providers.</p>
            
            <div className="flex items-center space-x-4 mb-6">
              <button className="bg-custom-blue text-white px-6 py-2 rounded-lg text-sm font-medium">
                Your Linked List
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                Search New Vendor
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by vendor name or ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Price/Location</span>
                <span className="text-sm text-gray-600">All Types</span>
                <span className="text-sm text-gray-600">All Ratings</span>
              </div>
            </div>

            {/* Vendors Grid */}
            <div className="grid grid-cols-3 gap-6">
              {vendors.map((vendor) => (
                <div key={vendor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{vendor.name}</h3>
                        <p className="text-custom-blue text-sm font-medium">{vendor.price}</p>
                      </div>
                    </div>
                    {vendor.verified && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="flex items-center mb-2">
                    <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-600">{vendor.address}</span>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      {renderStars(vendor.rating)}
                    </div>
                    <span className="text-xs text-gray-600">{vendor.reviewCount}</span>
                  </div>

                  <p className="text-xs text-gray-600 mb-4 line-clamp-2">{vendor.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-700 mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-1">
                      {vendor.services.map((service, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex items-center justify-center px-3 py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50">
                      <User className="w-3 h-3 mr-1" />
                      View Profile
                    </button>
                    <button className="flex items-center justify-center px-3 py-1 bg-custom-blue text-white rounded text-xs font-medium hover:bg-custom-blue/90">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Send Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 bg-white border-l border-gray-200">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Remove Action</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Are you sure to remove the link</p>
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-1 border border-gray-300 rounded text-xs text-gray-700">
                No
              </button>
              <button className="flex-1 px-3 py-1 bg-custom-blue text-white rounded text-xs">
                Yes
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Service Types</h3>
            <div className="space-y-2">
              {serviceTypes.map((type) => (
                <div
                  key={type}
                  className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
                    type === 'Planning' 
                      ? 'bg-custom-blue text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">All Ratings</h3>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div
                  key={rating}
                  className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
                    rating === '5 Star' 
                      ? 'bg-custom-blue text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {rating}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-blue {
          background-color: #4F75B8;
        }
        .bg-custom-blue {
          background-color: #4F75B8;
        }
        .text-custom-blue {
          color: #4F75B8;
        }
        .hover\\:bg-custom-blue\\/90:hover {
          background-color: rgba(79, 117, 184, 0.9);
        }
        .focus\\:ring-custom-blue:focus {
          --tw-ring-color: #4F75B8;
        }
      `}</style>
    </div>
  );
};

export default Vendor;