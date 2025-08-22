import React, { useState } from 'react';
import {
  Home,
  FolderOpen,
  Users,
  MessageSquare,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Archive,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import Sidebar from '../Sidebar';

export default function ProjectManagementDashboard() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeMenuItem, setActiveMenuItem] = useState('projects');
   const [isExpanded, setIsExpanded] = useState(true);
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'assets', label: 'Assets Management', icon: FolderOpen },
    { id: 'projects', label: 'Project Management', icon: FileText },
    { id: 'vendors', label: 'Vendors Management', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];
  
  const projects = [
    {
      id: 'PRJ-001',
      title: 'HVAC System Maintenance',
      type: 'Maintenance',
      company: 'Tower A',
      vendor: 'Cool Air Services',
      priority: 'High',
      status: 'Complete',
      timeline: 'Jun 01, 2024\nJan 15, 2025',
      cost: '$12500'
    },
    {
      id: 'PRJ-002',
      title: 'Elevator Repair',
      type: 'Repair',
      company: 'Tower A',
      vendor: 'Lift Solutions Inc.',
      priority: 'Medium',
      status: 'On Going',
      timeline: 'Jun 01, 2024\nJan 15, 2025',
      cost: '$8700'
    },
    {
      id: 'PRJ-003',
      title: 'Lobby Renovation',
      type: 'Upgrade',
      company: 'Tower A',
      vendor: 'Modern Interiors',
      priority: 'Urgent',
      status: 'Due Date',
      timeline: 'Jun 01, 2024\nJan 15, 2025',
      cost: '$6700'
    },
    {
      id: 'PRJ-004',
      title: 'Security System Upgrade',
      type: 'Replacement',
      company: 'Tower A',
      vendor: 'SecureTech',
      priority: 'High',
      status: 'In Progress',
      timeline: 'Jun 01, 2024\nJan 15, 2025',
      cost: '$45000'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Complete': 'bg-green-100 text-green-800',
      'On Going': 'bg-blue-100 text-blue-800',
      'Due Date': 'bg-red-100 text-red-800',
      'In Progress': 'bg-yellow-100 text-yellow-800'
    };
    return statusConfig[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      'High': 'bg-orange-100 text-orange-800',
      'Medium': 'bg-blue-100 text-blue-800',
      'Urgent': 'bg-red-100 text-red-800'
    };
    return priorityConfig[priority] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
     <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      {/* Main Content */}
      <div className={`transition-all duration-300 flex-1 p-8 
          ${isExpanded ? "ml-64" : "ml-20"}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Project Management</h1>
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Projects & Operations Section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Projects & Operations</h2>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create New Project
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8 ">
            <div className="bg-white p-6 rounded-3xl h-48 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-600 pt-4">Total Projects</h3>
                <Archive className="w-5 h-5 text-custom-blue" />
              </div>
              <p className="text-3xl font-bold text-gray-900 pt-8">10</p>
            </div>

            <div className="bg-custom-blue p-6 rounded-lg text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">Urgent Priority Projects</h3>
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className="text-3xl font-bold">5</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">In Progress Projects</h3>
                <Clock className="w-5 h-5 text-custom-blue" />
              </div>
              <p className="text-3xl font-bold text-gray-900">4</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Over Due Projects</h3>
                <CheckCircle className="w-5 h-5 text-custom-blue" />
              </div>
              <p className="text-3xl font-bold text-gray-900">1</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Project ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Vendor</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Priority</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Timeline</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Cost</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm font-medium text-gray-900">{project.id}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{project.title}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{project.type}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{project.company}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{project.vendor}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(project.priority)}`}>
                          {project.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 whitespace-pre-line">{project.timeline}</td>
                      <td className="py-4 px-4 text-sm font-medium text-gray-900">{project.cost}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
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
}