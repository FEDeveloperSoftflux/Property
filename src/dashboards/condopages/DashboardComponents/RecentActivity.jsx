import React from "react";  
import { FaFileInvoice, FaTasks } from "react-icons/fa";
import { BiSolidFile } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function RecentActivity({ recentActivityItems }) {
  const navigate = useNavigate();

  return (
    <div className="mt-3 sm:mt-4 bg-white w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 py-4 px-3 sm:px-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          Recent Activity
        </h3>
        <button
          className="text-custom-blue border border-custom-blue px-4 py-1.5 rounded-lg text-sm hover:bg-custom-blue hover:text-white transition"
          onClick={() => navigate("/Recent Activity")}
        >
          View All
        </button>
      </div>

      {/* Activity Cards */}
      <div className="p-3 sm:p-6 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recentActivityItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border min-h-[160px] sm:min-h-[200px] rounded-2xl p-4 hover:scale-[1.02] hover:shadow-md transition bg-white hover:border-blue-600 group"
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  {item.type === "bid" && (
                    <FaFileInvoice className="w-[20px] h-[20px] text-custom-blue" />
                  )}
                  {item.type === "status" && (
                    <HiBuildingOffice2 className="w-[20px] h-[20px] text-custom-blue" />
                  )}
                  {item.type === "message" && (
                    <AiFillMessage className="w-[20px] h-[20px] text-custom-blue" />
                  )}
                  {item.type === "document" && (
                    <BiSolidFile className="w-[20px] h-[20px] text-custom-blue" />
                  )}
                  {item.type === "delay" && (
                    <FaTasks className="w-[20px] h-[20px] text-custom-blue" />
                  )}
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
                  {item.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-3">
                {item.description}
              </p>

              {/* Button */}
              <button className="w-full px-3 py-2 border border-custom-blue group-hover:bg-custom-blue rounded-xl text-xs sm:text-sm text-gray-700 group-hover:text-white mt-auto transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
