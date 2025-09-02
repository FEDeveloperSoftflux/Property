import React, { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

export default function ProjectsTable({
  filteredProjects,
  getPriorityBadge,
  getStatusBadge,
  handleDeleteProject,
}) {
  // ---------------- Pagination State ----------------
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // ---------------- Project Selection State ----------------
  const [selectedProjects, setSelectedProjects] = useState([]);

  const isSelected = (id) => selectedProjects.includes(id);

  const toggleProject = (id) => {
    setSelectedProjects((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    const currentIds = currentProjects.map((p) => p.id);
    const allSelected = currentIds.every((id) => selectedProjects.includes(id));

    if (allSelected) {
      // Unselect all
      setSelectedProjects((prev) =>
        prev.filter((id) => !currentIds.includes(id))
      );
    } else {
      // Select all
      setSelectedProjects((prev) => [...new Set([...prev, ...currentIds])]);
    }
  };

  // ---------------- JSX ----------------
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-4">
                <input
                  type="checkbox"
                  checked={
                    currentProjects.length > 0 &&
                    currentProjects.every((p) => isSelected(p.id))
                  }
                  onChange={toggleSelectAll}
                />
              </th>
              {[
                "ID",
                "Title",
                "Company",
                "Vendor",
                "Priority",
                "Status",
                "Timeline",
                "Cost",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentProjects.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={isSelected(p.id)}
                    onChange={() => toggleProject(p.id)}
                  />
                </td>
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
                <td className="px-6 py-4 text-sm text-gray-600">
                  {p.timeline}
                </td>
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
        {currentProjects.map((p) => (
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
              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isSelected(p.id)}
                  onChange={() => toggleProject(p.id)}
                />
                <span className="text-sm text-gray-600">Select</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-3 border-t border-gray-100">
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                <Eye className="w-4 h-4 mr-1" /> View
              </button>
              <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDeleteProject(p.id)}
                className="flex items-center text-sm text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-gray-500">No projects found</p>
        </div>
      )}

      {/* Pagination Controls */}
      {filteredProjects.length > 0 && (
        <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm rounded border disabled:opacity-50"
          >
            Prev
          </button>

          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm rounded border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
