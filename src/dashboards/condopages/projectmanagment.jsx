import React, { useState, useEffect } from "react";
import {
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  X,
  Download,
  Archive,
  AlertTriangle,
  Clock,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

import Sidebar from "../Sidebar";
import Header from "../condopages/Dashboardheader";
import StatsCard from "../statscard";
import CreateProjectModal from "../condopages/CreateProjectModal";

export default function ProjectManagementDashboard() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filters
  const [filters, setFilters] = useState({
    company: "",
    vendor: "",
    priority: "",
    status: "",
  });

  // Sample Projects Data
  const [projects, setProjects] = useState([
    {
      id: "PRJ-001",
      title: "HVAC System Maintenance",
      type: "Maintenance",
      company: "Tower A",
      vendor: "Cool Air Services",
      priority: "High",
      status: "Complete",
      timeline: "Jun 01, 2024 - Jan 15, 2025",
      cost: "$12,500",
    },
    {
      id: "PRJ-002",
      title: "Elevator Repair",
      type: "Repair",
      company: "Tower A",
      vendor: "Lift Solutions Inc.",
      priority: "Medium",
      status: "On Going",
      timeline: "Jun 01, 2024 - Jan 15, 2025",
      cost: "$8,700",
    },
    {
      id: "PRJ-003",
      title: "Lobby Renovation",
      type: "Upgrade",
      company: "Tower B",
      vendor: "Modern Interiors",
      priority: "Urgent",
      status: "Due Date",
      timeline: "Jun 01, 2024 - Jan 15, 2025",
      cost: "$6,700",
    },
  ]);

  // Responsive Sidebar
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

  // Filters + Search
  const getUniqueValues = (key) => [...new Set(projects.map((p) => p[key]))];

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCompany = !filters.company || p.company === filters.company;
    const matchesVendor = !filters.vendor || p.vendor === filters.vendor;
    const matchesPriority = !filters.priority || p.priority === filters.priority;
    const matchesStatus = !filters.status || p.status === filters.status;
    return (
      matchesSearch &&
      matchesCompany &&
      matchesVendor &&
      matchesPriority &&
      matchesStatus
    );
  });

  const clearAllFilters = () => {
    setFilters({ company: "", vendor: "", priority: "", status: "" });
    setSearchTerm("");
  };

  const activeFiltersCount =
    Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  // Stats
  const stats = {
    total: filteredProjects.length,
    urgent: filteredProjects.filter((p) => p.priority === "Urgent").length,
    inProgress: filteredProjects.filter(
      (p) => p.status === "In Progress" || p.status === "On Going"
    ).length,
    overdue: filteredProjects.filter((p) => p.status === "Due Date").length,
  };

  const getStatusBadge = (status) => {
    const map = {
      Complete: "bg-green-100 text-green-800 border-green-200",
      "On Going": "bg-blue-100 text-blue-800 border-blue-200",
      "In Progress": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Due Date": "bg-red-100 text-red-800 border-red-200",
    };
    return map[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getPriorityBadge = (priority) => {
    const map = {
      High: "bg-orange-100 text-orange-800 border-orange-200",
      Medium: "bg-blue-100 text-blue-800 border-blue-200",
      Urgent: "bg-red-100 text-red-800 border-red-200",
      Low: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return map[priority] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 min-h-screen ${
          isExpanded && !isMobile
            ? "ml-64"
            : isMobile
            ? "ml-0"
            : "ml-16 sm:ml-20"
        }`}
      >
        {/* Header */}
        <Header
          title="Project Management"
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />

        <div className="p-4 lg:p-6">
          {/* Page Title */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Projects & Operations
              </h2>
              <p className="text-sm lg:text-base text-gray-600">
                Manage and track all ongoing projects
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create New Project
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard title="Total Projects" value={stats.total} icon={Archive} />
            <StatsCard
              title="Urgent Priority"
              value={stats.urgent}
              icon={AlertTriangle}
            />
            <StatsCard
              title="In Progress"
              value={stats.inProgress}
              icon={Clock}
            />
            <StatsCard
              title="Overdue"
              value={stats.overdue}
              icon={CheckCircle}
            />
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Filters + Search */}
          <div
            className={`${
              showFilters || !isMobile ? "block" : "hidden"
            } lg:block mb-6`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search by ID, Title or Vendor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Company Filter */}
                <select
                  value={filters.company}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, company: e.target.value }))
                  }
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600"
                >
                  <option value="">All Companies</option>
                  {getUniqueValues("company").map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                {/* Vendor Filter */}
                <select
                  value={filters.vendor}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, vendor: e.target.value }))
                  }
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600"
                >
                  <option value="">All Vendors</option>
                  {getUniqueValues("vendor").map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Export Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="flex items-center justify-center bg-white px-4 py-3 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </button>
                <button className="flex items-center justify-center bg-white px-4 py-3 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
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
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Vendor
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Priority
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Timeline
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredProjects.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {p.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{p.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{p.company}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{p.vendor}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getPriorityBadge(
                            p.priority
                          )}`}
                        >
                          {p.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getStatusBadge(
                            p.status
                          )}`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{p.timeline}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {p.cost}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="p-1 hover:bg-blue-100 rounded">
                            <Eye className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                          </button>
                          <button className="p-1 hover:bg-blue-100 rounded">
                            <Edit className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(p.id)}
                            className="p-1 hover:bg-red-100 rounded"
                          >
                            <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-4 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-medium text-gray-900 text-base">
                        {p.title}
                      </div>
                      <div className="text-sm text-gray-500">{p.id}</div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusBadge(
                        p.status
                      )}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Company:</span>
                      <span className="text-sm font-medium text-gray-900">
                        {p.company}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Vendor:</span>
                      <span className="text-sm font-medium text-gray-900">
                        {p.vendor}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Timeline:</span>
                      <span className="text-sm text-gray-900">{p.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Cost:</span>
                      <span className="text-sm font-medium text-gray-900">
                        {p.cost}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-3 border-t border-gray-100">
                    <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(p.id)}
                      className="flex items-center text-sm text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-gray-500">No projects found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Modal */}
      <CreateProjectModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={(newProject) => setProjects((prev) => [newProject, ...prev])}
      />
    </div>
  );
}
