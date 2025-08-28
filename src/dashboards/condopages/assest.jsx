import React, { useState } from "react";
import { 
  Home, FolderOpen, Users, MessageSquare, FileText, Settings,
  Plus, Eye, AlertTriangle, Calendar, User, Bell, Search,
  ChevronDown, Download, QrCode, Edit, Trash2, Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import AssetManagementModal from "../condopages/AddNewAssetModal";
import AssetPreviewModal from "../condopages/PreviewAsset";
import Header from "./Dashboardheader";

export default function AssetsManagement() {
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewAsset, setPreviewAsset] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

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
    <div className="min-h-screen relative">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={`transition-all duration-300 
          ${isExpanded ? "ml-64" : "ml-20"}`}>
<Header title="Assets Management" />
      {/* Main Content */}
  
        <div className="pl-2 pr-2">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div className="pl-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">All Assets</h2>
              <p className="text-sm text-gray-500">You can manage and update your assets</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}  
              className="flex items-center justify-center px-4 md:px-6 py-2 text-sm font-semibold text-white bg-custom-blue rounded-lg hover:bg-blue-900 h-11 mr-3 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add New Asset
            </button>
          </div>

          {/* Modal Mount */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {/* Total Assets */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 hover:shadow-xl hover:bg-custom-blue group h-40">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4 group-hover:text-white">Total Assets</p>
                  <p className="text-3xl font-bold text-gray-900 group-hover:text-white">10</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-custom-blue">
                  <FolderOpen className="w-6 h-6 text-custom-blue group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* Needs Attention */}
            <div className="bg-white border border-gray-200 p-6 rounded-3xl hover:shadow-lg hover:bg-custom-blue group h-40">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4 group-hover:text-white">Needs Attention</p>
                  <p className="text-3xl font-bold text-black group-hover:text-white">5</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-custom-blue border">
                  <AlertTriangle className="w-6 h-6 text-custom-blue group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* Good Condition */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 hover:shadow-lg hover:bg-custom-blue group h-40">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4 group-hover:text-white">Good Condition</p>
                  <p className="text-3xl font-bold text-gray-900 group-hover:text-white">4</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-custom-blue">
                  <Check className="bg-custom-blue text-white rounded-full group-hover:bg-white group-hover:text-custom-blue"/> 
                </div>
              </div>
            </div>

            {/* Fair Condition */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 hover:shadow-lg hover:bg-custom-blue group h-40">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4 group-hover:text-white">Fair Condition</p>
                  <p className="text-3xl font-bold text-gray-900 group-hover:text-white">1</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-gray-100  group-hover:bg-custom-blue">
                  <div className="rounded-full bg-custom-blue group-hover:bg-white w-7 flex justify-center items-center">
                    <span className="text-white text-xl group-hover:text-custom-blue">!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by asset name or ID..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto">
                <option>All Types</option>
                <option>HVAC</option>
                <option>Elevator</option>
                <option>Electrical</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue w-full sm:w-auto">
                <option>All Statuses</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Needs Attention</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <input
                type="date"
                className="w-full sm:w-auto bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>

            <button className="flex items-center justify-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-600 hover:bg-gray-100 w-full sm:w-auto">
              <QrCode className="w-4 h-4 mr-2" />
              Download QR Code
            </button>
          </div>

          {/* Assets Table */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-x-auto">
            {/* Table Header */}
            <div className="min-w-[800px]">
              <div className="bg-blue-800/5 px-6 py-4 border-b border-gray-100">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAssets.length === assetsData.length}
                    onChange={toggleAllAssets}
                    className="w-4 h-4 mr-6"
                  />
                  <div className="grid grid-cols-6 gap-8 flex-1 text-xs font-medium text-gray-500 uppercase">
                    <div>ID / Created At</div>
                    <div>Asset Name</div>
                    <div>Type</div>
                    <div>Category</div>
                    <div>Location</div>
                    <div>Status</div>
                  </div>
                  <div className="w-20 text-xs font-medium text-gray-500 uppercase">Actions</div>
                </div>
              </div>

              {/* Table Body */}
              {assetsData.map(asset => (
                <div key={asset.id} className="px-6 py-4 border-b border-gray-100 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAssets.includes(asset.id)}
                    onChange={() => toggleAssetSelection(asset.id)}
                    className="w-4 h-4 mr-6"
                  />
                  <div className="grid grid-cols-6 gap-8 flex-1 items-center text-sm">
                    <div>
                      <div className="font-medium">{asset.id}</div>
                      <div className="text-xs text-gray-500">{asset.createdAt}</div>
                    </div>
                    <div>{asset.name}</div>
                    <div>{asset.type}</div>
                    <div>{asset.category}</div>
                    <div>{asset.location}</div>
                    <div>
                      <span className={`px-3 py-1 rounded-xl text-xs font-medium border ${getStatusColor(asset.status)}`}>
                        {asset.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2 w-20">
                    <Eye className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" onClick={() => setPreviewAsset(asset)} />
                    <Edit className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                    <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600 cursor-pointer" />
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
