
import React from "react";
import bell from "../../assets/bell.png";
import logo from "../../assets/Dashlogo.png";

export default function Header({ title, subtitle }) {
  return (
    <div className="w-full h-16 origin-top-left border-b border-gray-100 bg-white flex justify-between items-center mb-6">
      <div className="ml-6">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        {subtitle && (
          <p className="text-black text-base font-semibold font-['Helvetica_Now_Display']">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex gap-2 items-center">
        <button className="w-10 h-10 rounded-full bg-slate-100 flex justify-center items-center">
          <img src={bell} className="w-5 h-5" alt="notifications" />
        </button>
        <img src={logo} className="w-10 h-10 mr-6" alt="logo" />
      </div>
    </div>
  );
}
