import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

export default function CreateProjectModal({ isOpen, onClose, onSave }) {
  const [newProject, setNewProject] = useState({
    title: '',
    type: '',
    priority: '',
    description: '',
    estimatedCost: '',
    expectedStartDate: '',
    expectedEndDate: '',
    building: '',
    vendor: '',
    photos: []
  });

  // Handle form changes
  const handleNewProjectChange = (field, value) => {
    setNewProject(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setNewProject(prev => ({
      ...prev,
      photos: [...prev.photos, ...files]
    }));
  };

  // Reset form
  const resetForm = () => {
    setNewProject({
      title: '',
      type: '',
      priority: '',
      description: '',
      estimatedCost: '',
      expectedStartDate: '',
      expectedEndDate: '',
      building: '',
      vendor: '',
      photos: []
    });
  };

  // Handle save
  const handleSave = () => {
    // Validate required fields
    if (!newProject.title || !newProject.type || !newProject.priority || !newProject.building || !newProject.vendor) {
      alert('Please fill in all required fields');
      return;
    }

    // Create project object with additional properties
    const projectToSave = {
      ...newProject,
      id: `PRJ-${String(Date.now()).slice(-3).padStart(3, '0')}`, // Generate simple ID
      company: newProject.building, // Use building as company
      status: 'In Progress', // Default status
      timeline: `${newProject.expectedStartDate}\n${newProject.expectedEndDate}`,
      cost: newProject.estimatedCost ? `$${newProject.estimatedCost}` : '$0',
      startDate: newProject.expectedStartDate,
      endDate: newProject.expectedEndDate
    };

    // Call parent save function
    onSave(projectToSave);
    
    // Reset form and close modal
    resetForm();
    onClose();
  };

  // Handle close
  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex lg:justify-end sm:justify-center z-50">
  <div className="h-full w-full p-6 max-w-4xl bg-white backdrop-blur-2xl overflow-y-auto lg:rounded-l-3xl sm:rounded-none">
    {/* Header */}
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Create New Project</h3>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-6">
          {/* Basic Info Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Basic Info</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Project Name..."
                  value={newProject.title}
                  onChange={(e) => handleNewProjectChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={newProject.type}
                  onChange={(e) => handleNewProjectChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                >
                  <option value="">Select Type</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Resolution">Resolution</option>
                  <option value="Upgrade">Upgrade</option>
                  <option value="Repair">Repair</option>
                  <option value="Inspection">Inspection</option>
                  <option value="Replacement">Replacement</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority <span className="text-red-500">*</span>
                </label>
                <select
                  value={newProject.priority}
                  onChange={(e) => handleNewProjectChange('priority', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Cost ($)</label>
                <input
                  type="number"
                  placeholder="Enter Estimated Cost..."
                  value={newProject.estimatedCost}
                  onChange={(e) => handleNewProjectChange('estimatedCost', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Enter Project Description..."
                value={newProject.description}
                onChange={(e) => handleNewProjectChange('description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Start Date</label>
                <input
                  type="date"
                  value={newProject.expectedStartDate}
                  onChange={(e) => handleNewProjectChange('expectedStartDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected End Date</label>
                <input
                  type="date"
                  value={newProject.expectedEndDate}
                  onChange={(e) => handleNewProjectChange('expectedEndDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
              </div>
            </div>
          </div>

          {/* Building and Vendor Selection */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Building <span className="text-red-500">*</span>
                </label>
                <select
                  value={newProject.building}
                  onChange={(e) => handleNewProjectChange('building', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                >
                  <option value="">Select Building</option>
                  <option value="Tower A">Tower A</option>
                  <option value="Tower B">Tower B</option>
                  <option value="Tower C">Tower C</option>
                  <option value="Tower D">Tower D</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vendor <span className="text-red-500">*</span>
                </label>
                <select
                  value={newProject.vendor}
                  onChange={(e) => handleNewProjectChange('vendor', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
                >
                  <option value="">Select Vendor</option>
                  <option value="Cool Air Services">Cool Air Services</option>
                  <option value="Lift Solutions Inc.">Lift Solutions Inc.</option>
                  <option value="Modern Interiors">Modern Interiors</option>
                  <option value="SecureTech">SecureTech</option>
                  <option value="Aqua Fix Solutions">Aqua Fix Solutions</option>
                  <option value="SafeGuard Systems">SafeGuard Systems</option>
                </select>
              </div>
            </div>
          </div>

          {/* File Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Photos & Videos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                     <Upload className="h-6 w-6 rounded-full text-gray-400" />
                </div>
                <div>
                  <label className="cursor-pointer">
                    <span className="text-custom-blue font-medium hover:text-blue-700">Upload location images</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <p className="text-sm text-gray-500">PNG, JPG, MP4 up to 10MB</p>
                </div>
              </div>
            </div>
            {newProject.photos.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">{newProject.photos.length} file(s) selected</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {newProject.photos.map((file, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {file.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Save as Draft
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-custom-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}