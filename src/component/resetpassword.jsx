import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/loginlogo.png"; // adjust path as needed
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center relative">
      {/* Logo */}
      <div className="mt-8 ml-16 absolute top-0 left-0">
        <img src={logo} alt="Logo" className="w-[140px] h-[70px] object-contain" />
        <span className="font-bold text-black text-lg whitespace-nowrap">Property Connect</span>
      </div>

      {/* Form Card */}
      <div className="bg-neutral-50 border border-zinc-300/25 rounded-lg p-10 w-[700px] space-y-8 relative">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">Re-Set Password</h1>

        {/* Form */}
        <form className="space-y-6">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter Your New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-custom-blue focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Re-Enter Password
            </label>
            <input
              type="password"
              placeholder="Re-Enter Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-custom-blue focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="flex items-center justify-center w-40 h-14 rounded-2xl border border-custom-blue text-custom-blue hover:text-white hover:bg-custom-blue transition-colors bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>

            <button onClick={()=>navigate("/Login")}
              type="submit"
              className="w-40 h-14 rounded-2xl bg-slate-50 text-custom-blue hover:text-white border border-custom-blue hover:bg-custom-blue transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
