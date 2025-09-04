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
const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };
import AssetsStats from "../../Assetsmanagment/AssetsStats";
import AssetsFilters from "../../Assetsmanagment/AssetsFilters";
import AssetsTable from "../../Assetsmanagment/AssetsTable";
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
              <p className="text-sm lg:text-base text-gray-600 pt-2">You can manage and update your assets</p>
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
<AssetsStats assetsData={assetsData} />
<AssetsFilters />
<AssetsTable
  assetsData={assetsData}
  selectedAssets={selectedAssets}
  toggleAllAssets={toggleAllAssets}
  toggleAssetSelection={toggleAssetSelection}
  getStatusColor={getStatusColor}
  setPreviewAsset={setPreviewAsset}
  handleDeleteAsset={(id) => setAssetsData(prev => prev.filter(a => a.id !== id))}
/>

      </div>
      </div>
    </div>
  );
}