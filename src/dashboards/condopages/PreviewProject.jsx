import React from "react";
import { X } from "lucide-react";
import img from "../../assets/assets.png";

export default function ProjectPreviewModal({ 
  isOpen, 
  onClose, 
  project, 
  getPriorityBadge, 
  getStatusBadge 
}) {
  if (!isOpen || !project) return null;

  const handleSaveProject = () => {
    // Handle save logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur flex lg:justify-end sm:justify-center z-50 ">
      <div className="h-full w-full max-w-4xl bg-white backdrop-blur-2xl overflow-y-auto lg:rounded-l-3xl sm:rounded-none">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Project Preview</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Image Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Preview</h3>
            <div className="relative">
              <img
                src={img}
                className="w-full h-52 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Project Title</p>
                <p className="text-base font-semibold text-gray-900">{project.title}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <span
                  className={`inline-flex px-3 py-1 rounded-xl text-sm font-medium border ${getStatusBadge(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Company</p>
                <p className="text-sm font-medium text-gray-900">{project.company}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We are experiencing a water leakage issue from the bathroom ceiling...
                  <button className="text-custom-blue text-sm font-medium ml-1">
                    Read More
                  </button>
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Project Type</p>
                <p className="text-sm font-medium text-gray-900">{project.type || "Maintenance"}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Priority</p>
                <span
                  className={`inline-flex px-3 py-1 rounded-xl text-sm font-medium border ${getPriorityBadge(
                    project.priority
                  )}`}
                >
                  {project.priority}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Vendor</p>
                <p className="text-sm font-medium text-gray-900">{project.vendor}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Timeline</p>
                <p className="text-sm font-medium text-gray-900">{project.timeline}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Budget</p>
                <p className="text-base font-semibold text-gray-900">{project.cost}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Project ID</p>
                <p className="text-sm font-medium text-gray-900">{project.id}</p>
              </div>
            </div>
          </div>

          {/* Urgent Priority Alert */}
          {project.priority === "Urgent" && (
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-sm text-red-800">
                This project has urgent priority and requires immediate attention.
              </p>
            </div>
          )}

          {/* Due Date Alert */}
          {project.status === "Due Date" && (
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <p className="text-sm text-orange-800">
                This project is approaching or has passed its due date.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Go Back
            </button>
            <button
              onClick={handleSaveProject}
              className="px-6 py-2 text-sm font-medium text-white bg-custom-blue rounded-lg transition-all hover:scale-105"
            >
              Submit Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
