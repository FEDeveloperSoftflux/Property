import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { 
  BarChart3, 
  Home, 
  Package, 
  FolderOpen, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings, 
  Bell,
  Download,
  Calendar,
  ChevronDown,
  ClockAlert,
  AlertTriangle,
  CheckCircle,
  Check
} from 'lucide-react';
import Sidebar from '../Sidebar';
import Header from './Dashboardheader';
import StatsCard from '../statscard';
import { DollarSign} from "lucide-react";
import img from "../../assets/invest.png";
import FilterBar from './Filter';
import Reportgraph from '../graph/reportgraph';
import { useEffect } from 'react';

const Report = () => {
  const [selectedVendor, setSelectedVendor] = useState('All Vendor');
  const [selectedDate, setSelectedDate] = useState('MM/DD/YYYY');
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // Sample data for the performance chart
  const performanceData = [
    { month: 'Jan', value: 8 },
    { month: 'Feb', value: 12 },
    { month: 'Mar', value: 16 },
    { month: 'Apr', value: 14 },
    { month: 'May', value: 22 },
    { month: 'Jun', value: 28 }
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

  // Project data
  const projects = [
    {
      id: 'A001',
      assetName: '10-07-2025',
      timeline: 'Jun 01, 2024 - Jan 15, 2024',
      investment: '$950',
      description: 'Electrical wiring ongoing',
      status: 'In Progress'
    },
    {
      id: 'A002',
      assetName: '15-05-2025',
      timeline: 'Jun 01, 2024 - Jan 15, 2024',
      investment: '$3,200',
      description: 'Electrical wiring ongoing',
      status: 'In Progress'
    },
    {
      id: 'A003',
      assetName: '10-06-2025',
      timeline: 'Jun 01, 2024 - Jan 15, 2024',
      investment: '$800',
      description: 'Painting completed',
      status: 'Complete'
    }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Package, label: 'Assets Management', active: false },
    { icon: FolderOpen, label: 'Project Management', active: false },
    { icon: Users, label: 'Vendors Management', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: FileText, label: 'Reports', active: true }
  ];

  // Mobile Project Card Component
  const ProjectCard = ({ project }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">Project {project.id}</h3>
          <p className="text-sm text-gray-600">{project.assetName}</p>
        </div>
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          project.status === 'Complete' 
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </span>
      </div>
      
      <div className="space-y-2 text-xs text-gray-600">
        <div>
          <span className="font-medium">Timeline:</span> {project.timeline}
        </div>
        <div>
          <span className="font-medium">Investment:</span> 
          <span className="text-custom-blue font-semibold ml-1">{project.investment}</span>
        </div>
        <div>
          <span className="font-medium">Description:</span> {project.description}
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
      <div className={` bg-white flex-1 overflow-hidden
        ${isExpanded && !isMobile ? "ml-64" : isMobile ? "ml-0" : "ml-16 sm:ml-20"}`}>
        
        {/* Header */}
        <Header 
          title="Report Management" 
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />

        <div className='px-4 sm:px-6 lg:px-8 pb-6'>
          {/* Dashboard Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Projects Progress Report</h2>
              <p className="text-sm sm:text-base text-gray-600">You can generate your project reports</p>
            </div>

            {/* Stats Cards - Mobile Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8 ">
              <StatsCard 
                title="Today's Investment" 
                value="10" 
                icon={DollarSign} 
              />
              <StatsCard 
                title="Total Completed Tasks" 
                value="5" 
                icon={CheckCircle} 
              />
              <StatsCard 
                title="Total Assets Worked On" 
                value="4" 
                icon={FileText} 
              />
            </div>

            {/* Filters + Graph */}
            <div className="mb-6">
              <Reportgraph/>
            </div>

            {/* Export Buttons - Mobile Responsive */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <button className="flex items-center justify-center bg-neutral-50 px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50 w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </button>
              <button className="flex items-center justify-center bg-neutral-50 px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50 w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </button>
            </div>

            {/* Projects Table/Cards - Responsive Display */}
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-800/5">
                      <tr>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project ID</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset Name</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Line</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Description</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {projects.map((project) => (
                        <tr key={project.id} className="hover:bg-gray-50">
                          <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {project.id}
                          </td>
                          <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {project.assetName}
                          </td>
                          <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {project.timeline}
                          </td>
                          <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {project.investment}
                          </td>
                          <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {project.description}
                          </td>
                          <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              project.status === 'Complete' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {project.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Projects</h3>
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;