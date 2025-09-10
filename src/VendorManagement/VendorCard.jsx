import React from "react";
import { User, MapPin, MessageCircle, Star, UserLock } from "lucide-react";
import { FaLink, FaUser } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const renderStars = (rating) =>
  Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-3 h-3 ${
        i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
      }`}
    />
  ));

export default function VendorCard({ vendor }) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow bg-white flex space-x-4 space-">
      
      {/* Left avatar side */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <div className="h-full md:w-72 sm:w-28 flex items-center justify-center bg-gray-200 rounded-lg">
          <FaUser className="md:w-28 md:h-28 sm:w-16 sm:h-16 text-white" />
        </div>
      </div>

      {/* Right content side */}
      <div className="flex-1 space-y-10 sm:space-y-5">
        <div className="flex items-start justify-between mb-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
              {vendor.name}
            </h3>
            <p className="text-custom-blue text-xs sm:text-sm font-medium">
              ${vendor.price || "75.00"}
            </p>
          </div>

          {vendor.status === "Available" && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">
              {vendor.status}
            </span>
          )}
          {vendor.verified && (
            <span className="bg-yellow-100 text-yellow-800 text-sm gap-1 px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2 flex">
              <FaLink className="h-5 w-5" /> linked
            </span>
          )}
        </div>

        <div className="flex items-start mb-2">
          <MapPin className="w-3 h-3 text-gray-400 mr-1 flex-shrink-0 mt-0.5" />
          <span className="text-xs text-gray-600 leading-tight">
            {vendor.address}
          </span>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(vendor.rating)}
          </div>
          <span className="text-xs text-gray-600">
            ({vendor.reviewCount || Math.floor(vendor.rating * 10)})
          </span>
        </div>

        <p className="text-xs text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
          {vendor.description}
        </p>

        <div className="mb-0">
          <p className="text-xs font-medium text-gray-700 mb-2">Expertise</p>
          <div className="flex flex-wrap gap-1">
            {(vendor.expertise || vendor.services || []).map((service, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-3 ml-[900px]">
          <button className="flex items-center h-10 justify-center px-3 py-2 sm:py-1 border border-gray-300 rounded-xl text-sm whitespace-nowrap font-medium text-gray-700 hover:bg-gray-50 sm:w-auto">
            <User className="w-3 h-3 mr-1" />
            View Profile
          </button>
          <button className="flex items-center justify-center px-3 py-2 sm:py-1 bg-custom-blue text-white rounded-xl text-sm whitespace-nowrap font-medium hover:bg-custom-blue/90 w-full sm:w-auto">
            <MessageCircle className="w-3 h-3 mr-1" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
