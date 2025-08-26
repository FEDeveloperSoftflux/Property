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

const Report = () => {
  const [selectedVendor, setSelectedVendor] = useState('All Vendor');
  const [selectedDate, setSelectedDate] = useState('MM/DD/YYYY');

  // Sample data for the performance chart
  const performanceData = [
    { month: 'Jan', value: 8 },
    { month: 'Feb', value: 12 },
    { month: 'Mar', value: 16 },
    { month: 'Apr', value: 14 },
    { month: 'May', value: 22 },
    { month: 'Jun', value: 28 }
  ];

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
const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
       <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
           <div  className={`transition-all bg-white duration-300 flex-1 p-8 
          ${isExpanded ? "ml-56" : "ml-20"}`}>
        {/* Header */}
       <Header title="Report Management"></Header>

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Projects Progress Report</h2>
            <p className="text-gray-600">You can generate your project reports</p>
          </div>

          {/* Stats Cards */}
<div className="grid grid-cols-3 gap-6">
      <StatsCard 
        title="Today's Investment" 
        value="10" 
        icon={DollarSign} 
      />
      <StatsCard 
        title="Total Completed Tasks" 
        value="5" 
        icon={CheckCircle} 
        variant="dark"   // 👈 makes middle card blue
      />
      <StatsCard 
        title="Total Assets Worked On" 
        value="4" 
        icon={FileText} 
      />
    </div>
          {/* Filters */}
          
<FilterBar/>
          {/* Performance Chart */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Performance Progress</h3>
              <p className="text-gray-600">Monthly completed projects and earnings overview</p>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    domain={[0, 32]}
                    ticks={[0, 8, 16, 24, 32]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="rgba(56, 90, 156, 1)" 
                    strokeWidth={3}
                    dot={{ fill: 'rgba(56, 90, 156, 1)', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: 'rgba(56, 90, 156, 1)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <button className="flex items-center px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </button>
              <button className="flex items-center px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </button>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-800/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Line</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {project.assetName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {project.timeline}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {project.investment}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {project.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
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
        </div>
      </div>
    </div>
  );
};

export default Report;