import React, { useState } from 'react';
import { 
  Home, 
  FolderOpen, 
  FileText, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Sidebar from '../Sidebar';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Dashboardheader';
import { useEffect } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
const DashboardActivityLog = () => {
      const navigate = useNavigate();
      
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

  const activities = [
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Water Pipeline Install',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Electrical Wiring',
      status: 'Failed',
      statusColor: 'bg-red-100 text-red-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Foundation Inspection',
      status: 'In Progress',
      statusColor: 'bg-yellow-100 text-yellow-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Roof Installation',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Water Pipeline Install',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Electrical Wiring',
      status: 'Failed',
      statusColor: 'bg-red-100 text-red-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Foundation Inspection',
      status: 'In Progress',
      statusColor: 'bg-yellow-100 text-yellow-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Roof Installation',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Water Pipeline Install',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Electrical Wiring',
      status: 'Failed',
      statusColor: 'bg-red-100 text-red-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Foundation Inspection',
      status: 'In Progress',
      statusColor: 'bg-yellow-100 text-yellow-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    },
    {
      date: 'Jan 15, 2024',
      time: '03:30 PM',
      building: 'Roof Installation',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      description: 'Vendor [ABC Plumbing] completed the lobby bathroom renovatio...'
    }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: FolderOpen, label: 'Assets Management', active: false },
    { icon: FileText, label: 'Project Management', active: false },
    { icon: Users, label: 'Vendors Management', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
    { icon: Settings, label: 'Setting', active: false }
  ];
  const [isExpanded, setIsExpanded] = useState(true);
      const [isMobile, setIsMobile] = useState(false);

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
      if (currentPage > 3) pages.push('...');
      
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
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
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'in progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

    
    return pages;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sidebar */}
   <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
    <div className={`transition-all duration-300 
           ${isExpanded ? "lg:ml-64 ml-0" : "lg:ml-20 ml-0"}`}>
              <Header 
                    title="DashBoard"
                    subtitle="Welcom back!" 
                    onMobileMenuToggle={() => setIsExpanded(true)}
                    showMobileMenu={isMobile}
                  />

  
             
   <h2 className="text-xl font-semibold text-gray-900 flex items-center pt-6 pl-4">
                <FaArrowLeftLong className="w-[21px] h-[21px] mr-2"  onClick={() => navigate("/Condo")}/>
                Activity Log
              </h2>
        <div className="flex-1 p-6 pt-3 overflow-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
            

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className=''>
                  <div className="border-b border-gray-200 bg-blue-800/5 rounded-t-3xl pb-2 pt-2  ">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date / Time
                    </th>
                    <th className="px-44 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Building Details
                    </th>
                    <th className="px-44 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project Status
                    </th>
                    <th className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </div>
                </thead>
                <div className="bg-white divide-y divide-gray-200">
                  {activities.map((activity, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{activity.date}</div>
                        <div className="text-sm text-gray-500">{activity.time}</div>
                      </td>
                      <td className="px-[176px] py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{activity.building}</div>
                      </td>
                      <td className="px-[150px] py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${activity.statusColor}`}>
                          {activity.status}
                        </span>
                      </td>
                      <td className="px-[120px] py-4">
                        <div className="text-sm text-gray-600 max-w-xs truncate">
                          {activity.description}
                        </div>
                      </td>
                    </tr>
                  ))}
                </div>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200  rounded-b-3xl">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  File Page Range (1 to 10)
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  
                  {renderPageNumbers().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                      disabled={page === '...'}
                      className={`min-w-[32px] h-8 px-2 rounded transition-colors ${
                        page === currentPage
                          ? 'bg-custom-blue text-white'
                          : page === '...'
                          ? 'cursor-default text-gray-400'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

export default DashboardActivityLog;