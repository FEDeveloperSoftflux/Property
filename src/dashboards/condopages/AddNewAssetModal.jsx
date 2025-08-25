import React, { useState } from 'react';
import { X, Upload, ChevronDown } from 'lucide-react';

export default function AssetManagementModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    assetName: '',
    assetType: '',
    condition: '',
    date: '', // ISO format for <input type="date" />
    location: '',
    serialNumber: '',
    details: '',
    photos: [] // Added for uploaded files
  });

  const assetTypes = ['HVAC', 'Electrical', 'Elevator', 'Plumbing'];
  const conditions = ['New', 'Good', 'Fair', 'Poor'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files]
    }));
  };

  const handleSubmit = () => {
    if (!formData.assetName || !formData.assetType || !formData.condition) {
      alert("Please fill all required fields");
      return;
    }
    onSubmit(formData); // ✅ Send data back to parent
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30  backdrop-blur flex justify-end z-50">
      <div className="h-full w-full max-w-4xl bg-white backdrop-blur overflow-y-auto rounded-l-3xl">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Add New Asset</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Asset Details</h3>
          <div className="space-y-6">

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asset Name</label>
                <input
                  type="text"
                  placeholder="Enter Asset Name"
                  value={formData.assetName}
                  onChange={(e) => handleInputChange('assetName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asset Type</label>
                <div className="relative">
                  <select
                    value={formData.assetType}
                    onChange={(e) => handleInputChange('assetType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue appearance-none bg-white text-gray-500"
                  >
                    <option value="">Select Type</option>
                    {assetTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                <div className="relative">
                  <select
                    value={formData.condition}
                    onChange={(e) => handleInputChange('condition', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white text-gray-500"
                  >
                    <option value="">Select Condition</option>
                    {conditions.map(condition => (
                      <option key={condition} value={condition}>{condition}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location in building</label>
                <input
                  type="text"
                  placeholder="Enter Location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
                <input
                  type="text"
                  placeholder="Enter Serial Number"
                  value={formData.serialNumber}
                  onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Details/Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Details/Notes</label>
              <textarea
                placeholder="Describe your item in detail"
                value={formData.details}
                onChange={(e) => handleInputChange('details', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-gray-50">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <Upload className="h-6 w-6 text-gray-400" />
              </div>
              <label htmlFor="file-upload" className="cursor-pointer text-sm font-medium text-gray-900 mb-1 inline-block">
                Upload Location Image
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
              <p className="text-xs text-gray-500">(Optional, but recommended)</p>

              {/* Show uploaded file names */}
              {formData.photos.length > 0 && (
                <ul className="mt-4 text-sm text-gray-600 text-left list-disc list-inside">
                  {formData.photos.map((file, idx) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
          >
            Go Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-custom-blue text-white rounded-md hover:bg-blue-700 font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
