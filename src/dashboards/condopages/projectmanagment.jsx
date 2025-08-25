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
  CheckCircle,
  X,
  ChevronDown,
  Calendar
} from 'lucide-react';
import Sidebar from '../Sidebar';
import CreateProjectModal from '../condopages/CreateProjectModal'; // Import the modal
import Header from '../condopages/Dashboardheader';
export default function ProjectManagementDashboard() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeMenuItem, setActiveMenuItem] = useState('projects');
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState({
    company: '',
    vendor: '',
    priority: '',
    status: '',
    startDate: '',
    endDate: ''
  });

  // Projects state - now dynamic
  const [projects, setProjects] = useState([
    {
      id: 'PRJ-001',
      title: 'HVAC System Maintenance',
      type: 'Maintenance',
      company: 'Tower A',
      vendor: 'Cool Air Services',
      priority: 'High',
      status: 'Complete',
      timeline: 'Jun 01, 2024\nJan 15, 2025',
      cost: '$12500',
      startDate: '2024-06-01',
      endDate: '2025-01-15'
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
      cost: '$8700',
      startDate: '2024-06-01',
      endDate: '2025-01-15'
    },
    {
      id: 'PRJ-003',
      title: 'Lobby Renovation',
      type: 'Upgrade',
      company: 'Tower B',
      vendor: 'Modern Interiors',
      priority: 'Urgent',
      status: 'Due Date',
      timeline: 'Jun 01, 2024\nJan 15, 2025',
      cost: '$6700',
      startDate: '2024-06-01',
      endDate: '2025-01-15'
    },
    {
      id: 'PRJ-004',
      title: 'Security System Upgrade',
      type: 'Replacement',
      company: 'Tower C',
      vendor: 'SecureTech',
      priority: 'High',
      status: 'In Progress',
      timeline: 'Jun 01, 2024\nJan 15, 2025',
      cost: '$45000',
      startDate: '2024-06-01',
      endDate: '2025-01-15'
    },
    {
      id: 'PRJ-005',
      title: 'Plumbing System Overhaul',
      type: 'Maintenance',
      company: 'Tower B',
      vendor: 'Aqua Fix Solutions',
      priority: 'Medium',
      status: 'Complete',
      timeline: 'May 15, 2024\nDec 20, 2024',
      cost: '$18000',
      startDate: '2024-05-15',
      endDate: '2024-12-20'
    },
    {
      id: 'PRJ-006',
      title: 'Fire Safety Inspection',
      type: 'Inspection',
      company: 'Tower A',
      vendor: 'SafeGuard Systems',
      priority: 'Urgent',
      status: 'On Going',
      timeline: 'Jul 10, 2024\nFeb 28, 2025',
      cost: '$3200',
      startDate: '2024-07-10',
      endDate: '2025-02-28'
    }
  ]);

  // Get unique values for filter dropdowns
  const getUniqueValues = (key) => {
    return [...new Set(projects.map(project => project[key]))];
  };

  // Filter projects based on search and filters
  const filteredProjects = projects.filter(project => {
    // Search filter
    const matchesSearch = project.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.vendor.toLowerCase().includes(searchTerm.toLowerCase());

    // Company filter
    const matchesCompany = !filters.company || project.company === filters.company;
    
    // Vendor filter
    const matchesVendor = !filters.vendor || project.vendor === filters.vendor;
    
    // Priority filter
    const matchesPriority = !filters.priority || project.priority === filters.priority;
    
    // Status filter
    const matchesStatus = !filters.status || project.status === filters.status;

    return matchesSearch && matchesCompany && matchesVendor && matchesPriority && matchesStatus;
  });

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      company: '',
      vendor: '',
      priority: '',
      status: '',
      startDate: '',
      endDate: ''
    });
    setSearchTerm('');
  };

  // Count active filters
  const activeFiltersCount = Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  // Handle adding new project
  const handleAddProject = (newProject) => {
    setProjects(prev => [newProject, ...prev]); // Add to beginning of array
    console.log('New project added:', newProject);
  };

  // Handle project deletion
  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(project => project.id !== projectId));
    }
  };

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
      'Urgent': 'bg-red-100 text-red-800',
      'Low': 'bg-gray-100 text-gray-800'
    };
    return priorityConfig[priority] || 'bg-gray-100 text-gray-800';
  };

  // Calculate stats based on filtered projects
  const stats = {
    total: filteredProjects.length,
    urgent: filteredProjects.filter(p => p.priority === 'Urgent').length,
    inProgress: filteredProjects.filter(p => p.status === 'In Progress' || p.status === 'On Going').length,
    overdue: filteredProjects.filter(p => p.status === 'Due Date').length
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 flex-1 p-8 
          ${isExpanded ? "ml-64" : "ml-20"}`}>
        
  <Header title="Project Management" />

        {/* Projects & Operations Section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Projects & Operations</h2>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create New Project
            </button>
          </div>

          {/* Stats Cards - Updated with filtered data */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="group bg-white p-6 rounded-3xl h-40 border border-gray-200 hover:bg-custom-blue hover:shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800 pt-4 group-hover:text-white">
                  Total Projects
                </h3>
                <Archive className="w-5 h-5 text-custom-blue mt-4 group-hover:text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-8 group-hover:text-white">{stats.total}</p>
            </div>

            <div className="group bg-white hover:bg-custom-blue hover:shadow-lg p-6 rounded-3xl border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800 pt-4 group-hover:text-white">
                  Urgent Priority Projects
                </h3>
                <AlertTriangle className="w-5 h-5 text-custom-blue mt-4 group-hover:text-white" />
              </div>
              <p className="text-3xl text-gray-900 font-bold mt-8 group-hover:text-white">{stats.urgent}</p>
            </div>

            <div className="group bg-white p-6 rounded-3xl border border-gray-200 hover:bg-custom-blue hover:shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800 pt-4 group-hover:text-white">
                  In Progress Projects
                </h3>
                <Clock className="w-5 h-5 mt-4 text-custom-blue group-hover:text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-8 group-hover:text-white">{stats.inProgress}</p>
            </div>

            <div className="group bg-white p-6 rounded-3xl border border-gray-200 hover:bg-custom-blue hover:shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg pt-4 font-semibold text-gray-800 group-hover:text-white">
                  Over Due Projects
                </h3>
                <CheckCircle className="w-5 mt-4 h-5 text-custom-blue group-hover:text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-8 group-hover:text-white">{stats.overdue}</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative ">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Project ID, Title, or Vendor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-3xl transition-colors relative
                ${showFilters ? 'bg-custom-blue text-white border-custom-blue' : 'border-gray-300 hover:bg-gray-50'}
              `}
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            {activeFiltersCount > 0 && (
              <button 
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
              <div className="grid grid-cols-4 gap-4">
                {/* Company Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <select
                    value={filters.company}
                    onChange={(e) => handleFilterChange('company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  >
                    <option value="">All Companies</option>
                    {getUniqueValues('company').map(company => (
                      <option key={company} value={company}>{company}</option>
                    ))}
                  </select>
                </div>

                {/* Vendor Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vendor</label>
                  <select
                    value={filters.vendor}
                    onChange={(e) => handleFilterChange('vendor', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  >
                    <option value="">All Vendors</option>
                    {getUniqueValues('vendor').map(vendor => (
                      <option key={vendor} value={vendor}>{vendor}</option>
                    ))}
                  </select>
                </div>

                {/* Priority Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    value={filters.priority}
                    onChange={(e) => handleFilterChange('priority', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  >
                    <option value="">All Priorities</option>
                    {getUniqueValues('priority').map(priority => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  >
                    <option value="">All Status</option>
                    {getUniqueValues('status').map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Projects Table */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
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
                  {filteredProjects.length === 0 ? (
                    <tr>
                      <td colSpan="10" className="py-8 px-4 text-center text-gray-500">
                        No projects found matching your filters
                      </td>
                    </tr>
                  ) : (
                    filteredProjects.map((project) => (
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
                            <button 
                              onClick={() => handleDeleteProject(project.id)}
                              className="p-1 text-gray-400 hover:text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Results Summary */}
          {filteredProjects.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
              {activeFiltersCount > 0 && ` (${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied)`}
            </div>
          )}
        </div>
      </div>

      {/* Create Project Modal */}
      <CreateProjectModal 
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleAddProject}
      />
    </div>
  );
}