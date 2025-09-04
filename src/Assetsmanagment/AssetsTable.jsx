import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

export default function AssetsTable({
  assetsData,
  selectedAssets,
  toggleAllAssets,
  toggleAssetSelection,
  getStatusColor,
  setPreviewAsset,
  handleDeleteAsset
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="b px-6 py-4 bg-blue-800/5 border-b border-gray-200">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedAssets.length === assetsData.length}
                onChange={toggleAllAssets}
                className="w-4 h-4 mr-6"
                style={{ accentColor: "rgba(56, 90, 156, 1)" }}
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

          {/* Rows */}
          {assetsData.map(asset => (
            <div key={asset.id} className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedAssets.includes(asset.id)}
                  onChange={() => toggleAssetSelection(asset.id)}
                  className="w-4 h-4 mr-6"
                  style={{ accentColor: "rgba(56, 90, 156, 1)" }}
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
                  <button onClick={() => setPreviewAsset(asset)} className="p-1 hover:bg-blue-100 rounded">
                    <Eye className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                  </button>
                  <button className="p-1 hover:bg-blue-100 rounded">
                    <Edit className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                  </button>
                  <button onClick={() => handleDeleteAsset(asset.id)} className="p-1 hover:bg-red-100 rounded">
                    <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        {assetsData.map(asset => (
          <div key={asset.id} className="p-4 border-b border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedAssets.includes(asset.id)}
                  onChange={() => toggleAssetSelection(asset.id)}
                  className="w-4 h-4 mr-3"
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

            <div className="text-sm text-gray-600 mb-2">Location: {asset.location}</div>

            <div className="flex space-x-4">
              <button onClick={() => setPreviewAsset(asset)} className="flex items-center text-sm text-blue-600">
                <Eye className="w-4 h-4 mr-1" /> View
              </button>
              <button className="flex items-center text-sm text-gray-600">
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
              <button onClick={() => handleDeleteAsset(asset.id)} className="flex items-center text-sm text-red-600">
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-between items-center px-6 py-4 border-t bg-blue-800/5">
            <button
              className="px-3 py-1 text-sm rounded border disabled:opacity-50"
            >
              Prev
            </button>

            <div className="text-sm text-gray-600">
              Page 1 of 1
            </div>

            <button
              className="px-3 py-1 text-sm rounded border disabled:opacity-50"
            >
              Next
            </button>
          </div>
    </div>
  );
}
