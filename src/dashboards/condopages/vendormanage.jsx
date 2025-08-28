import React, { useState } from 'react';
import { Search, MessageCircle, User, Star, MapPin, Users,
  ChevronDown, MessageSquare, FileText, Settings, Home, Briefcase, FolderOpen } from 'lucide-react';
import Sidebar from '../Sidebar';
import Header from './Dashboardheader';

const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    )); 

// Updated Vendor Card for SearchView
const VendorCard = ({ vendor }) => (
  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white space-y-5">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center mr-3">
          <User className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">{vendor.name}</h3>
          <p className="text-custom-blue text-sm font-medium">${vendor.price || '75.00'}</p>
        </div>
      </div>
      {vendor.status === "Available" && (
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
          {vendor.status}
        </span>
      )}
    </div>

    <div className="flex items-center mb-2">
      <MapPin className="w-3 h-3 text-gray-400 mr-1" />
      <span className="text-xs text-gray-600">{vendor.address}</span>
    </div>

    <div className="flex items-center mb-3">
      <div className="flex items-center mr-2">{renderStars(vendor.rating)}</div>
      <span className="text-xs text-gray-600">({vendor.reviewCount || Math.floor(vendor.rating * 10)})</span>
    </div>

    <p className="text-xs text-gray-600 mb-4 line-clamp-2">{vendor.description}</p>

    <div className="mb-4">
      <p className="text-xs font-medium text-gray-700 mb-2">Expertise</p>
      <div className="flex flex-wrap gap-1">
        {vendor.expertise.map((service, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {service}
          </span>
        ))}
      </div>
    </div>

    <div className="flex justify-center space-x-2 mb-3">
      <button className="flex items-center justify-center px-3 py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50">
        <User className="w-3 h-3 mr-1" />
        View Profile
      </button>
      <button className="flex items-center justify-center px-3 py-1 bg-custom-blue text-white rounded text-xs font-medium hover:bg-custom-blue/90">
        <MessageCircle className="w-3 h-3 mr-1" />
        Send Message
      </button>
    </div>

    <button className="w-full py-2 bg-white text-custom-blue border border-gray-200 rounded-lg text-sm font-medium hover:text-white hover:bg-custom-blue transition-colors">
      Link with you
    </button>
  </div>
);

// SearchView component
const SearchView = ({ setActiveView, searchTerm, setSearchTerm }) => {
  const searchVendors = [
    {
      id: 'B002',
      name: 'Elite Electrical Services',
      address: '456 Oak Avenue, New York, Midtown',
      price: '85.00',
      rating: 4.8,
      reviewCount: 62,
      description: 'Professional electrical contractors specializing in commercial and industrial projects.',
      expertise: ['Electrical', 'Wiring', 'Maintenance'],
      status: 'Available'
    },
    {
      id: 'B003',
      name: 'Metro HVAC Solutions',
      address: '789 Pine Street, New York, Brooklyn',
      price: '90.00',
      rating: 4.6,
      reviewCount: 48,
      description: 'Full-service HVAC company providing installation, repair, and maintenance services.',
      expertise: ['HVAC', 'Air Conditioning', 'Heating'],
      status: 'Available'
    },
    {
      id: 'B004',
      name: 'Supreme Contractors',
      address: '321 Elm Drive, New York, Queens',
      price: '120.00',
      rating: 4.7,
      reviewCount: 73,
      description: 'General contracting services for residential and commercial construction projects.',
      expertise: ['Construction', 'Renovation', 'Project Management'],
      status: 'Available'
    },
    {
      id: 'B005',
      name: 'Perfect Painting Co.',
      address: '654 Maple Lane, New York, Staten Island',
      price: '65.00',
      rating: 4.4,
      reviewCount: 35,
      description: 'Professional painting services for interior and exterior residential and commercial spaces.',
      expertise: ['Painting', 'Surface Preparation', 'Color Consultation'],
      status: 'Available'
    }
  ];
  
  return (
    <>
      <div className="flex-1  bg-white overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {searchVendors.map((vendor, index) => (
            <VendorCard key={index} vendor={vendor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default function Vendormanage() {
  const [activeView, setActiveView] = useState("vendors");
  const [isExpanded, setIsExpanded] = useState(true);
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
    },
    {
      id: 5,
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

  const renderStarsMain = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));

  return (
    <div className=" h-full bg-gray-50">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
  <div className={`transition-all bg-white overflow-hidden duration-300  ${isExpanded ? "ml-60" : "ml-20"}`}>
   <Header title="   Vendors Management" />
      <div className='pl-8 pr-8' >
          <h2 className="text-lg font-semibold text-gray-900 ">All Vendors</h2>
          <p className="text-sm text-gray-600 mb-4">Manage your vendor treatment list and discover new service providers.</p>
       
        <div className="flex justify-center mb-6">
          <button 
            className={`px-6 py-2 rounded-xl text-sm font-medium w-[500px] border border-gray-300 ${
              activeView === 'vendors' 
                ? 'bg-custom-blue text-white' 
                : 'hover:bg-custom-blue hover:text-white bg-neutral-50 text-gray-700'
            }`}
            onClick={() => setActiveView('vendors')}
          >
            Your Linked List
          </button>
          <button
            className={`px-6 py-2 rounded-xl text-sm font-medium w-[500px] border border-gray-300 ${
              activeView === 'search' 
                ? 'bg-custom-blue text-white' 
                : 'hover:bg-custom-blue hover:text-white bg-neutral-50 text-gray-700'
            }`}
            onClick={() => setActiveView("search")}
          >
            Search New Vendor
          </button>
        </div>

        <div className=" flex space-x-4 mb-6">
          <div className="flex-1 w-60 relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by asset name or ID..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
            <div className="relative">
            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue">
              <option>Location</option>
             
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue">
              <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100 '>All Types</option>
              <option>Cleaning</option>
              <option>Security</option>
              <option>Landscaping</option>
              <option>Maintenance</option>
              <option>HVAC</option>
               <option>Electrician</option>
                <option>Plumbing</option>
              

            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue">
              <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100 '>Rating</option>
              <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100 '>4  start</option>
              <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100 ' >4 + start</option>
              <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100 ' >5 + start</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {activeView === "vendors" ? (
          <>
            {/* Vendors Grid */}
            <div className="grid grid-cols-3 gap-6 ">
              {vendors.map((vendor) => (
                <div key={vendor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow space-y-3" >
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
                    <div className="flex items-center mr-2">{renderStarsMain(vendor.rating)}</div>
                    <span className="text-xs text-gray-600">({vendor.reviewCount})</span>
                  </div>

                  <p className="text-xs text-gray-600 mb-4 line-clamp-2 pt-4">{vendor.description}</p>

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

                  <div className="flex justify-center space-x-2 pt-3">
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
          </>
        ) : (
          <SearchView setActiveView={setActiveView} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        )}
      </div>
      </div>
    </div>
  );
}