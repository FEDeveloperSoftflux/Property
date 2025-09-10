import React from "react";
import { User, MapPin, MessageCircle, Star } from "lucide-react";
import { FaLink, FaUser } from "react-icons/fa6";

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
    <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow bg-white flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      
      {/* Left avatar side */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <div className="lg:h-full md:w-72 md:h-full sm:w-28 sm:h-36 mobile:h-24 mobile:w-24 flex items-center justify-center bg-gray-200 rounded-lg">
          <FaUser className="md:w-28 md:h-28 sm:w-16 sm:h-16 mobile:h-12 mobile:w-12  text-white" />
        </div>
      </div>

      {/* Right content side */}
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {vendor.name}
            </h3>
            <p className="text-custom-blue text-sm sm:text-base font-medium">
              ${vendor.price || "75.00"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 ml-2">
            {vendor.status === "Available" && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                {vendor.status}
              </span>
            )}
            {vendor.verified && (
              <span className="bg-yellow-100 text-yellow-800 text-xs gap-1 px-2 py-1 rounded-full font-medium flex items-center">
                <FaLink className="h-4 w-4" /> linked
              </span>
            )}
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-3 h-3 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
          <span className="text-xs text-gray-600 leading-tight">
            {vendor.address}
          </span>
        </div>

        <div className="flex items-center">
          <div className="flex items-center mr-2">{renderStars(vendor.rating)}</div>
          <span className="text-xs text-gray-600">
            ({vendor.reviewCount || Math.floor(vendor.rating * 10)})
          </span>
        </div>

        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
          {vendor.description}
        </p>

        <div>
          <p className="text-xs font-medium text-gray-700 mb-1">Expertise</p>
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
<div className="w-full flex justify-end ">
        {/* Action buttons - stacked on mobile */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-2 ">
          <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50">
            <User className="w-3 h-3 mr-1" />
            View Profile
          </button>
          <button className="flex items-center justify-center px-3 py-2 bg-custom-blue text-white rounded-xl text-sm font-medium hover:bg-custom-blue/90">
            <MessageCircle className="w-3 h-3 mr-1" />
            Send Message
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
