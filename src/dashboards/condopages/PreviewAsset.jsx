import React from "react";
import { X, Download } from "lucide-react";
import qr from "../../assets/objects.png";

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  setFormData(prev => ({
    ...prev,
    photos: [...prev.photos, ...files]
  }));
};

const AssetPreviewModal = ({ asset, onClose, onSave }) => {
  if (!asset) return null;

  // Sample asset image
  const assetImage = asset?.photos?.[0]
    ? URL.createObjectURL(asset.photos[0])
    : "https://via.placeholder.com/400x200?text=No+Image";

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "good":
        return "bg-green-100 text-green-600 border-green-200";
      case "fair":
        return "bg-yellow-100 text-yellow-600 border-yellow-200";
      case "needs attention":
        return "bg-red-100 text-red-600 border-red-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = qr;
    link.download = `qr-code-${asset.id}.svg`;
    link.click();
  };

  const handleSaveAsset = () => {
    if (onSave) onSave(asset);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur flex justify-end z-50">
      <div className="h-full w-full max-w-4xl bg-white backdrop-blur-2xl overflow-y-auto rounded-l-3xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Asset Preview</h2>
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
                src={assetImage}
                alt={asset.name}
                className="w-full h-52 object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg text-sm font-medium">
                {asset.type}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Name</p>
                <p className="text-base font-semibold text-gray-900">{asset.name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Condition</p>
                <span
                  className={`inline-flex px-3 py-1 rounded-xl text-sm font-medium border ${getStatusColor(
                    asset.status
                  )}`}
                >
                  {asset.status}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-sm font-medium text-gray-900">
                  {asset.location}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Notes</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {asset.notes || "We are experiencing a water leakage issue from the bathroom ceiling. The issue seems to be related to internal piping and needs immediate attention. Looking for an experienced plumber who can identify the issue, fix the leak, and ensure no future damage occurs..."}
                  {asset.notes && (
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium ml-1">
                      Read More
                    </button>
                  )}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Asset Type</p>
                <p className="text-sm font-medium text-gray-900">{asset.type}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Date</p>
                <p className="text-sm font-medium text-gray-900">
                  {asset.createdAt}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Serial Number</p>
                <p className="text-sm font-medium text-gray-900">{asset.id}</p>
              </div>
            </div>
          </div>

          {/* Needs Attention Alert */}
          {asset.status === "Needs Attention" && (
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-sm text-red-800">
                This asset requires immediate maintenance. Please check the issue
                and schedule repairs as soon as possible.
              </p>
            </div>
          )}

          {/* QR Code Section */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">QR Code</h3>
                <div className="w-32 h-32 bg-white rounded-xl p-3 border border-gray-200">
                  <img 
                    src={qr} 
                    alt="QR Code" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <button
                onClick={handleDownloadQR}
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Download QR Code
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Go Back
            </button>
            <button
              onClick={handleSaveAsset}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Save Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetPreviewModal;