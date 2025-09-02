import React, { useState } from 'react';
import { Search, MessageCircle, User, Star, MapPin, Users,
  ChevronDown, MessageSquare, FileText, Settings, Home, Briefcase, FolderOpen } from 'lucide-react';
import Sidebar from '../Sidebar';
import Header from './Dashboardheader';
import { useEffect } from 'react';

const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    )); 

// Updated Vendor Card for SearchView - Mobile Responsive
const VendorCard = ({ vendor }) => (
  <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow bg-white space-y-3 sm:space-y-5">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center flex-1 min-w-0">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-custom-blue rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
          <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{vendor.name}</h3>
          <p className="text-custom-blue text-xs sm:text-sm font-medium">${vendor.price || '75.00'}</p>
        </div>
      </div>
      {vendor.status === "Available" && (
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">
          {vendor.status}
        </span>
      )}
    </div>

    <div className="flex items-start mb-2">
      <MapPin className="w-3 h-3 text-gray-400 mr-1 flex-shrink-0 mt-0.5" />
      <span className="text-xs text-gray-600 leading-tight">{vendor.address}</span>
    </div>

    <div className="flex items-center mb-3">
      <div className="flex items-center mr-2">{renderStars(vendor.rating)}</div>
      <span className="text-xs text-gray-600">({vendor.reviewCount || Math.floor(vendor.rating * 10)})</span>
    </div>

    <p className="text-xs text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{vendor.description}</p>

    <div className="mb-3 sm:mb-4">
      <p className="text-xs font-medium text-gray-700 mb-2">Expertise</p>
      <div className="flex flex-wrap gap-1">
        {vendor.expertise.map((service, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {service}
          </span>
        ))}
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-3">
      <button className="flex items-center justify-center px-3 py-2 sm:py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
        <User className="w-3 h-3 mr-1" />
        View Profile
      </button>
      <button className="flex items-center justify-center px-3 py-2 sm:py-1 bg-custom-blue text-white rounded text-xs font-medium hover:bg-custom-blue/90 w-full sm:w-auto">
        <MessageCircle className="w-3 h-3 mr-1" />
        Send Message
      </button>
    </div>

    <button className="w-full py-2 bg-white text-custom-blue border border-gray-200 rounded-lg text-sm font-medium hover:text-white hover:bg-custom-blue transition-colors">
      Link with you
    </button>
  </div>
);

// SearchView component - Mobile Responsive
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
    <div className="flex-1 bg-white overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {searchVendors.map((vendor, index) => (
          <VendorCard key={index} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default function Vendormanage() {
  const [activeView, setActiveView] = useState("vendors");
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderStarsMain = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));

  return (
    <div className="h-full bg-gray-50">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={`transition-all bg-white overflow-hidden duration-300 ${isExpanded && !isMobile ? "ml-64" : isMobile ? "ml-0" : "ml-16 sm:ml-20"}`}>
        <Header   
          title="Vendors Management"
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />
        <div className='px-4 sm:px-6 lg:px-8'>
          <h2 className="text-lg font-semibold text-gray-900">All Vendors</h2>
          <p className="text-sm text-gray-600 mb-4">Manage your vendor treatment list and discover new service providers.</p>
       
          {/* Mobile-responsive tab buttons */}
          <div className="flex flex-col sm:flex-row justify-center mb-6 space-y-2 sm:space-y-0">
            <button 
              className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-medium w-full sm:w-[500px] border border-gray-300 ${
                activeView === 'vendors' 
                  ? 'bg-custom-blue text-white' 
                  : 'hover:bg-custom-blue hover:text-white bg-neutral-50 text-gray-700'
              }`}
              onClick={() => setActiveView('vendors')}
            >
              Your Linked List
            </button>
            <button
              className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-medium w-full sm:w-[500px] border border-gray-300 ${
                activeView === 'search' 
                  ? 'bg-custom-blue text-white' 
                  : 'hover:bg-custom-blue hover:text-white bg-neutral-50 text-gray-700'
              }`}
              onClick={() => setActiveView("search")}
            >
              Search New Vendor
            </button>
          </div>

          {/* Mobile-responsive search and filters */}
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by asset name or ID..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter dropdowns - stack on mobile, row on larger screens */}
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue w-full sm:w-auto">
                  <option>Location</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative w-full sm:w-auto">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue w-full sm:w-auto">
                  <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100'>All Types</option>
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

              <div className="relative w-full sm:w-auto">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue w-full sm:w-auto">
                  <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100'>Rating</option>
                  <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100'>4 stars</option>
                  <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100'>4+ stars</option>
                  <option className='rounded bg-white text-custom-blue hover:bg-custom-blue hover:text-white border border-gray-100'>5 stars</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {activeView === "vendors" ? (
            <>
              {/* Mobile-responsive Vendors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow space-y-3">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-custom-blue rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{vendor.name}</h3>
                          <p className="text-custom-blue text-xs sm:text-sm font-medium">{vendor.price}</p>
                        </div>
                      </div>
                      {vendor.verified && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">
                          Verified
                        </span>
                      )}
                    </div>

                    <div className="flex items-start mb-2">
                      <MapPin className="w-3 h-3 text-gray-400 mr-1 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600 leading-tight">{vendor.address}</span>
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-2">{renderStarsMain(vendor.rating)}</div>
                      <span className="text-xs text-gray-600">({vendor.reviewCount})</span>
                    </div>

                    <p className="text-xs text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed pt-2 sm:pt-4">{vendor.description}</p>

                    <div className="mb-3 sm:mb-4">
                      <p className="text-xs font-medium text-gray-700 mb-2">Expertise</p>
                      <div className="flex flex-wrap gap-1">
                        {vendor.services.map((service, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-3">
                      <button className="flex items-center justify-center px-3 py-2 sm:py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                        <User className="w-3 h-3 mr-1" />
                        View Profile
                      </button>
                      <button className="flex items-center justify-center px-3 py-1 bg-custom-blue text-white rounded text-xs font-medium hover:bg-custom-blue/90 w-full sm:w-auto">
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