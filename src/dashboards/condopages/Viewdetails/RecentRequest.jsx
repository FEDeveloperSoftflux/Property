import React, { useState, useEffect } from 'react';
import {
  Home,
  FolderOpen,
  FileText,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Sidebar from '../Sidebar';
import { useNavigate } from 'react-router-dom';
import Header from '../Dashboardheader';
import { FaArrowLeftLong } from "react-icons/fa6";

import logo from "../../../assets/Dashlogo.png";
const RecentRequest = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Example data (replace with API data)
const requests = [
    {
      project: "Lobby Renovation",
      vendor: "Premium Construction",
   
      rating: 5,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Pool Maintenance",
      vendor: "Blue Water Services",
      avatar: "BW",
      rating: 4,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Security System Upgrade",
      vendor: "SafeGuard Technologies",
      avatar: "ST",
      rating: 5,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Lobby Renovation",
      vendor: "Administrator",
      avatar: "A",
      rating: 3,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Lobby Renovation",
      vendor: "Premium Construction",
      avatar: "PC",
      rating: 5,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Pool Maintenance",
      vendor: "Blue Water Services",
      avatar: "BW",
      rating: 4,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Security System Upgrade",
      vendor: "SafeGuard Technologies",
      avatar: "ST",
      rating: 5,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Lobby Renovation",
      vendor: "Administrator",
      avatar: "A",
      rating: 4,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Lobby Renovation",
      vendor: "Premium Construction",
      avatar: "PC",
      rating: 5,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Pool Maintenance",
      vendor: "Blue Water Services",
      avatar: "BW",
      rating: 4,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Security System Upgrade",
      vendor: "SafeGuard Technologies",
      avatar: "ST",
      rating: 5,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    },
    {
      project: "Lobby Renovation",
      vendor: "Administrator",
      avatar: "A",
      rating: 3,
      message: "We can start the project next Monday and complete within 3 weeks as discus..."
    }
  ];
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 5;

    if (showEllipsis) {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    return pages;
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-xs ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isExpanded ? "lg:ml-64 ml-0" : "lg:ml-20 ml-0"
        }`}
      >
        <Header
          title="Dashboard"
          subtitle="Welcome back!"
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />
<div className="p-6">
        {/* Back button and title */}
        <div className="flex items-center mb-6">
          <button className="mr-3">
            <FaArrowLeftLong className="w-[21px] h-[21px]"onClick={() => navigate("/Condo")} />
          </button>
          <h1 className="text-2xl font-semibold">Recent Requests</h1>
        </div>

        {/* Table Container */}
       <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full table-auto">
      <thead>
        <tr className="border-b border-gray-200 bg-gray-50">
          <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                    Project Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                    Vendor
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                    Message
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {requests.map((req, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {req.project}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium mr-3">
                    <img src={logo} className="w-full h-full" alt="Logo"/>
                 </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{req.vendor}</div>
                          {renderStars(req.rating)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-md">
                      {req.message}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center space-x-2">
                        <button className="px-4 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center">
                          <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                          Chat
                        </button>
                        <button className="px-4 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center">
                          <Users className="w-3.5 h-3.5 mr-1.5" />
                          Profile
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Fee Page Range (1 to 10)
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <button
                  onClick={() => handlePageChange(1)}
                  className={`min-w-[32px] h-8 px-2 rounded transition-colors ${
                    currentPage === 1
                      ? "bg-custom-blue text-white"
                      : "hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  1
                </button>

                <button
                  onClick={() => handlePageChange(2)}
                  className={`min-w-[32px] h-8 px-2 rounded transition-colors ${
                    currentPage === 2
                      ? "bg-custom-blue text-white"
                      : "hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  2
                </button>

                <span className="text-gray-400 px-1">...</span>

                <button
                  onClick={() => handlePageChange(9)}
                  className={`min-w-[32px] h-8 px-2 rounded transition-colors ${
                    currentPage === 9
                      ? "bg-custom-blue text-white"
                      : "hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  9
                </button>

                <button
                  onClick={() => handlePageChange(10)}
                  className={`min-w-[32px] h-8 px-2 rounded transition-colors ${
                    currentPage === 10
                      ? "bg-custom-blue text-white"
                      : "hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  10
                </button>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>   
      </div> 
    </div>
  );
};

export default RecentRequest;
