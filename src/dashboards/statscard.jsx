import React from "react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  subtitle,
}) {
  return (
    <div className="p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-sm 
                    bg-white border border-gray-200 
                    hover:bg-custom-blue hover:shadow-xl hover:scale-[1.02] 
                    transition-all duration-300 ease-in-out group
                    min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]
                    w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center 
                      gap-3 sm:gap-4 h-full">
        {/* Content Section */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold 
                         mb-1 sm:mb-2 text-gray-800 group-hover:text-white
                         transition-colors duration-300 leading-tight">
            {title}
          </h3>
          
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold 
                          text-gray-900 group-hover:text-white
                          transition-colors duration-300 
                          mt-2 sm:mt-3 leading-none">
            {value}
          </div>
          
          {subtitle && (
            <div className="text-xs sm:text-sm text-gray-600 group-hover:text-white
                            transition-colors duration-300 
                            mt-2 sm:mt-3 leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>
        
        {/* Icon Section */}
        {Icon && (
          <div className="flex-shrink-0 self-start sm:self-center">
            <div className="bg-gray-50 group-hover:bg-white 
                            border border-gray-100 group-hover:border-custom-blue
                            p-2 sm:p-2.5 lg:p-3 rounded-xl
                            transition-all duration-300 ease-in-out
                            group-hover:shadow-md">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 
                               text-custom-blue group-hover:text-custom-blue
                               transition-colors duration-300" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}