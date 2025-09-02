import React, { useState, useEffect } from "react";
import { 
  Home, FolderOpen, Users, MessageSquare, FileText, Settings,
  Plus, Eye, AlertTriangle, Calendar, User, Bell, Search,
  ChevronDown, Download, QrCode, Edit, Trash2, Check, Menu
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import AssetManagementModal from "./AddNewAssetModal";
import AssetPreviewModal from "./PreviewAsset";
import Header from "./Dashboardheader";
import StatsCard from "../statscard";

export default function AssetsManagement() {
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewAsset, setPreviewAsset] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [assetsData, setAssetsData] = useState([
    {
      id: "A001",
      createdAt: "Jan 15, 2024",
      name: "Main HVAC System",
      type: "HVAC",
      category: "Mechanical",
      location: "Basement, Room B12",
      status: "Good"
    },
    {
      id: "A002",
      createdAt: "Jan 15, 2024",
      name: "Elevator #1",
      type: "Elevator",
      category: "Transportation",
      location: "Main Lobby",
      status: "Needs Attention"
    },
    {
      id: "A003",
      createdAt: "Jan 15, 2024",
      name: "Emergency Generator",
      type: "Electrical",
      category: "Power",
      location: "Basement, Room B10",
      status: "Fair"
    }
  ]);

  // Handle responsive behavior
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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'good': return 'bg-green-100 text-green-600 border-green-200';
      case 'fair': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'needs attention': return 'bg-red-100 text-red-600 border-red-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const handleAddAsset = (newAsset) => {
    const newId = `A${String(assetsData.length + 1).padStart(3, "0")}`;
    const createdAt = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });

    const assetToAdd = {
      id: newId,
      createdAt,
      name: newAsset.assetName,
      type: newAsset.assetType,
      category: newAsset.assetType === "HVAC" ? "Mechanical" : 
                newAsset.assetType === "Elevator" ? "Transportation" : 
                newAsset.assetType === "Electrical" ? "Power" : "General",
      location: newAsset.location,
      status: newAsset.condition
    };

    setAssetsData(prev => [assetToAdd, ...prev]);
    setIsModalOpen(false);
  };

  const toggleAssetSelection = (assetId) => {
    setSelectedAssets(prev => 
      prev.includes(assetId) 
        ? prev.filter(id => id !== assetId)
        : [...prev, assetId]
    );
  };

  const toggleAllAssets = () => {
    if (selectedAssets.length === assetsData.length) {
      setSelectedAssets([]);
    } else {
      setSelectedAssets(assetsData.map(asset => asset.id));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 min-h-screen
          ${isExpanded && !isMobile ? "ml-64" : isMobile ? "ml-0" : "ml-16 sm:ml-20"}`}>
        
        {/* Header with Mobile Menu Support */}
        <Header 
          title="Assets Management" 
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />
        
        <div className="p-4 lg:p-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">All Assets</h2>
              <p className="text-sm text-gray-500 mt-1">You can manage and update your assets</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}  
              className="flex items-center justify-center px-4 lg:px-6 py-3 text-sm font-semibold text-white bg-custom-blue rounded-lg hover:bg-blue-900 transition-colors w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add New Asset
            </button>
          </div>

          {/* Modals */}
          {isModalOpen && (
            <AssetManagementModal 
              onClose={() => setIsModalOpen(false)} 
              onSubmit={handleAddAsset} 
            />
          )}
          {previewAsset && (
            <AssetPreviewModal
              asset={previewAsset}
              onClose={() => setPreviewAsset(null)}
            />
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title="Total Assets"
              value={assetsData.length}
              icon={FolderOpen}
            />
            <StatsCard
              title="Needs Attention"
              value={assetsData.filter(a => a.status.toLowerCase() === "needs attention").length}
              icon={AlertTriangle}
            />
            <StatsCard
              title="Good Condition"
              value={assetsData.filter(a => a.status.toLowerCase() === "good").length}
              icon={Check}
            />
            <StatsCard
              title="Fair Condition"
              value={assetsData.filter(a => a.status.toLowerCase() === "fair").length}
              icon={() => (
                <div className="rounded-full bg-custom-blue w-7 h-7 flex items-center justify-center text-white text-lg">
                  !
                </div>
              )}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by asset name or ID..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:flex lg:space-x-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                  <option>All Types</option>
                  <option>HVAC</option>
                  <option>Elevator</option>
                  <option>Electrical</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                  <option>All Statuses</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Needs Attention</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <input
                  type="date"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="col-span-2 lg:col-span-1 flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <QrCode className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Download QR</span>
                <span className="sm:hidden">QR Code</span>
              </button>
            </div>
          </div>

          {/* Assets Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedAssets.length === assetsData.length}
                      onChange={toggleAllAssets}
                      className="w-4 h-4 mr-6 text-custom-blue rounded focus:ring-custom-blue"
                    />
                    <div className="grid grid-cols-6 gap-8 flex-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                      <div>ID / Created At</div>
                      <div>Asset Name</div>
                      <div>Type</div>
                      <div>Category</div>
                      <div>Location</div>
                      <div>Status</div>
                    </div>
                    <div className="w-20 text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</div>
                  </div>
                </div>

                {/* Table Body */}
                {assetsData.map(asset => (
                  <div key={asset.id} className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAssets.includes(asset.id)}
                        onChange={() => toggleAssetSelection(asset.id)}
                        className="w-4 h-4 mr-6 text-custom-blue rounded focus:ring-custom-blue"
                      />
                      <div className="grid grid-cols-6 gap-8 flex-1 items-center text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{asset.id}</div>
                          <div className="text-xs text-gray-500">{asset.createdAt}</div>
                        </div>
                        <div className="font-medium text-gray-900">{asset.name}</div>
                        <div className="text-gray-600">{asset.type}</div>
                        <div className="text-gray-600">{asset.category}</div>
                        <div className="text-gray-600">{asset.location}</div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                            {asset.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2 w-20">
                        <button 
                          onClick={() => setPreviewAsset(asset)}
                          className="p-1 hover:bg-blue-100 rounded transition-colors"
                        >
                          <Eye className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                        </button>
                        <button className="p-1 hover:bg-blue-100 rounded transition-colors">
                          <Edit className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                        </button>
                        <button className="p-1 hover:bg-red-100 rounded transition-colors">
                          <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedAssets.length === assetsData.length}
                      onChange={toggleAllAssets}
                      className="w-4 h-4 mr-3 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Select All</span>
                  </label>
                  <span className="text-sm text-gray-500">
                    {selectedAssets.length} of {assetsData.length} selected
                  </span>
                </div>
              </div>

              {assetsData.map(asset => (
                <div key={asset.id} className="p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAssets.includes(asset.id)}
                        onChange={() => toggleAssetSelection(asset.id)}
                        className="w-4 h-4 mr-3 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{asset.name}</div>
                        <div className="text-sm text-gray-500">{asset.id} • {asset.createdAt}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <span className="ml-1 text-gray-900">{asset.type}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Category:</span>
                      <span className="ml-1 text-gray-900">{asset.category}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm mb-3">
                    <span className="text-gray-500">Location:</span>
                    <span className="ml-1 text-gray-900">{asset.location}</span>
                  </div>

                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setPreviewAsset(asset)}
                      className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                    <button className="flex items-center text-sm text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}