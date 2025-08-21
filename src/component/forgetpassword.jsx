import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/loginlogo.png";
import { useNavigate } from "react-router-dom";
import OtpVerification from "./otpverifaction";

export default function Forgetpassword() {
  const [activeTab, setActiveTab] = useState("phone");
  const [phone, setPhone] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center  relative "> 
      {/* Logo */}
        <div className="mt-8 ml-16 absolute top-0 left-0">
                               <img src={logo} alt="Logo" className="w-[140px] h-[70px] object-contain" />
                               <span className="font-bold text-black text-lg whitespace-nowrap ">Property Connect</span>
                             </div>
      <div className=" bg-neutral-50 border border-zinc-300/25 rounded-lg  p-8 w-[700px] space-y-10 relative ">
        
      

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8 flex justify-center ">
          Verification 
        </h1>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab("phone")}
            className={`flex-1 py-3 px-4 rounded-l-lg w-96 font-medium transition-colors ${
              activeTab === "phone"
                ? "bg-custom-blue text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Phone Number
          </button>
          <button
            onClick={() => setActiveTab("email")}
            className={`flex-1 py-3 px-4 rounded-r-lg font-medium transition-colors ${
              activeTab === "email"
                ? "bg-custom-blue text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Email Address
          </button>
        </div>

        {/* Phone Number Input */}
        {activeTab === "phone" && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Phone Number
            </label>
            <PhoneInput
              country={"us"}
              enableSearch
              value={phone}
              onChange={(value) => setPhone(value)}
              inputClass="!w-full !h-9 !text-base"
            />
          </div>
        )}

        {/* Email Input */}
        {activeTab === "email" && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none placeholder-gray-400"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex place-items-end gap-2 pl-96">
          <button
            onClick={() => navigate("/login")}
            className=" flex items-center justify-center w-40 h-14 relative rounded-2xl border border-custom-blue  font-medium text-custom-blue   hover:text-white  hover:bg-custom-blue hover:bg-blue-100 transition-colors bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <button
            onClick={() => setShowOtpModal(true)}
            className=" text-gray-700  w-40 h-14 relative rounded-2xl bg-slate-50 text-custom-blue hover:text-white  border border-custom-blue  hover:bg-custom-blue py-3 px-4  font-medium "
          >
            Continue
          </button>
        </div>


      </div>
              {/* OTP Modal */}
        {showOtpModal && (
          <OtpVerification
            onClose={() => setShowOtpModal(false)}
            message={
              activeTab === "phone"
                ? "Check your phone and enter the OTP."
                : "Check your email and enter the OTP."
            }
          />
        )}
    </div>
  );
}
