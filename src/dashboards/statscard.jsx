// components/StatsCard.jsx
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
      className={`p-6 rounded-3xl shadow h-40 
      ${isDark ? " group text-gray-800 shadow-xl bg-white border border-gray-200 group-hover:text-white hover:bg-custom-blue  hover:shadow-xl" : "bg-white shadow-xl border border-gray-200 hover:bg-custom-blue  hover:shadow-xl group"}
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3
            className={`text-lg font-semibold mb-2 ${
              isDark ? "" : "text-gray-800 group-hover:text-white pt-4"
            }`}
          >
            {title}
          </h3>
          <div
            className={`text-3xl font-bold mt-8 ${
              isDark ? "text-white" : "text-gray-900 group-hover:text-white group-hover:bg-custom-blue"
            }`}
          >
            {value}
          </div>
          {subtitle && (
            <div
              className={`text-sm ${
                isDark ? "text-gray-600 group-hover:text-white" : "text-gray-600 group-hover:text-white"
              }`}
            >
              {subtitle}
            </div>
          )}
        </div>

        {Icon && (
          <div className="bg-white border border-gray-100 p-2 rounded-xl group-hover:bg-custom-blue">
            <Icon
              className={`w-6 h-6 ${
                isDark ? "text-custom-blue group-hover:text-white" : "text-custom-blue group-hover:text-white "
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
