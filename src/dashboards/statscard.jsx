import React from "react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  subtitle,
}) {
  return (
    <div
      className="p-4 sm:p-6 rounded-3xl shadow-sm h-auto sm:h-40 
        bg-white border border-gray-200 hover:bg-custom-blue hover:shadow-xl group"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 ">
        <div className="w-full sm:w-auto">
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-800 group-hover:text-white">
            {title}
          </h3>
          <div className="text-2xl mt-5 sm:text-3xl font-bold text-gray-900 group-hover:text-white">
            {value}
          </div>
          {subtitle && (
            <div className="text-sm mt-5  text-gray-600 group-hover:text-white">
              {subtitle}
            </div>
          )}
        </div>

        {Icon && (
          <div className="bg-white border border-gray-100 p-2 rounded-xl group-hover:bg-custom-blue self-start sm:self-auto">
            <Icon className="w-6 h-6 text-custom-blue group-hover:text-white" />
          </div>
        )}
      </div>
    </div>
  );
}
