import React from "react";
import { FaFileInvoice, FaTasks } from "react-icons/fa";
import { BiSolidFile } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";


export default function RecentActivity({ recentActivityItems }) {
    const navigate = useNavigate();
    return (
    <div className="mt-6 lg:mt-8 bg-white rounded-3xl shadow">
      <div className="flex justify-between rounded-t-3xl items-center p-4 sm:p-6 border-b bg-blue-800/5">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-custom-blue hover:text-blue-800 text-sm w-20 h-9 bg-white rounded-[10px] border border-blue-800"   onClick={() => navigate("/Recent Activity")}>View All</button>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recentActivityItems.map((item, index) => (
            <div key={index} className="border h-52 sm:h-60 rounded-lg p-4 hover:scale-105 hover:shadow-md transition-shadow bg-white pt-6 sm:pt-10 hover:border hover:border-blue-600">
              <div className="flex items-center mb-3 pt-2">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                  {item.type === "bid" && <FaFileInvoice className="w-5 h-5 text-custom-blue" />}
                  {item.type === "status" && <HiBuildingOffice2 className="w-5 h-5 text-custom-blue" />}
                  {item.type === "message" && <AiFillMessage className="w-5 h-5 text-custom-blue" />}
                  {item.type === "document" && <BiSolidFile className="w-5 h-5 text-custom-blue" />}
                  {item.type === "delay" && <FaTasks className="w-5 h-5 text-custom-blue" />}
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
              </div>
              <p className="text-xs text-gray-600 mb-4">{item.description}</p>
              <button className="w-full px-3 py-2 border border-custom-blue hover:bg-custom-blue rounded-xl text-xs text-gray-700 hover:text-white mt-3 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
