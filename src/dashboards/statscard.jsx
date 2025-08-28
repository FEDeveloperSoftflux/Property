import React from "react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  subtitle,
  variant = "light", // light | dark
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={`p-4 sm:p-6 rounded-2xl shadow h-auto sm:h-40 
        ${isDark 
          ? "group text-gray-800 bg-white border border-gray-200 hover:bg-custom-blue hover:shadow-xl group-hover:text-white"
          : "bg-white border border-gray-200 hover:bg-custom-blue hover:shadow-xl group"}
      `}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="w-full sm:w-auto">
          <h3
            className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 ${
              isDark ? "" : "text-gray-800 group-hover:text-white"
            }`}
          >
            {title}
          </h3>
          <div
            className={`text-2xl sm:text-3xl font-bold ${
              isDark
                ? "text-gray-900 group-hover:text-white"
                : "text-gray-900 group-hover:text-white"
            }`}
          >
            {value}
          </div>
          {subtitle && (
            <div
              className={`text-sm mt-1 ${
                isDark
                  ? "text-gray-600 group-hover:text-white"
                  : "text-gray-600 group-hover:text-white"
              }`}
            >
              {subtitle}
            </div>
          )}
        </div>

        {Icon && (
          <div className="bg-white border border-gray-100 p-2 rounded-xl group-hover:bg-custom-blue self-start sm:self-auto">
            <Icon
              className={`w-6 h-6 ${
                isDark
                  ? "text-custom-blue group-hover:text-white"
                  : "text-custom-blue group-hover:text-white"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
