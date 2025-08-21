import React, { useState } from "react";
import { Wrench, Building, Home } from "lucide-react";
import logo from "../assets/loginlogo.png";
import { useNavigate } from "react-router-dom"; // ✅ Correct import

export default function SignUp() {
  const [selected, setSelected] = useState("vendor");
  const navigate = useNavigate();

  const accounts = [
    { id: "vendor", label: "Vendor Account", icon: Wrench },
    { id: "company", label: "Company Management Account", icon: Building },
    { id: "homeowner", label: "Condo & Home Owner Account", icon: Home }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-gradient-to-b from-white via-slate-200 to-[#ccdaff] rounded-lg shadow-lg p-8 w-full max-w-md">
        
        {/* Logo */}
        <div className="mb-4 flex justify-center mt-6 pt-6">
          <img src={logo} alt="logo" className="w-24 flex justify-center" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-center mb-2">Sign Up</h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Welcome to <span className="font-bold text-gray-900">Property Connect</span> Management.
          Please select your account type.
        </p>

        {/* Account Selection (Vendor + Company) */}
        <div className="grid grid-cols-2 gap-4 mb-4 pt-8 mt-8">
          {accounts.slice(0, 2).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`h-28 rounded-lg border transition hover:scale-105 ${
                selected === id ? "bg-custom-blue text-white" : "bg-gray-50 text-gray-900"
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-1 ${selected === id ? "text-white" : "text-gray-700"}`} />
              <span className="text-xs font-semibold">{label}</span>
            </button>
          ))}
        </div>

        {/* Homeowner Button (with navigate) */}
        <button
          onClick={() => {
            setSelected("homeowner");
            navigate("/dashboard");
          }}
          className={`w-full h-28 rounded-lg border transition hover:scale-105 ${
            selected === "homeowner" ? "bg-custom-blue text-white" : "bg-gray-50 text-gray-900"
          }`}
        >
          <Home className={`w-6 h-6 mx-auto mb-1 ${selected === "homeowner" ? "text-white" : "text-gray-700"}`} />
          <span className="text-xs font-semibold">
            Condo & Home Owner <br /> Account
          </span>
        </button>

        {/* Selected Info */}
        <p className="text-center text-xs text-black mt-4 pb-52 mb-36">
          Selected: {accounts.find(a => a.id === selected)?.label}
        </p>
      </div>
    </div>
  );
}
