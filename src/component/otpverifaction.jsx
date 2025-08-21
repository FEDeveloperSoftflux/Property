import { useState } from "react";
import { useNavigate } from "react-router-dom";
function OtpVerification({ onClose, message }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate=useNavigate();
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur z-50 ">
      <div className="bg-white rounded-[30px] shadow-lg p-6 w-80 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        <h2 className="text-xl font-bold text-center mb-2">Enter OTP Code</h2>
        <p className="text-gray-500 text-xs text-center mb-6">{message}</p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-10 h-12 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-blue outline-none"
            />
          ))}
        </div>

        {/* Verify Button */}
       

        {/* Timer and Options */}
        <div className="text-center mt-4 space-y-1 text-xs text-gray-500">
          <div>30 Sec</div>
          <div className="flex flex-col">
              <button className="text-custom-blue hover:underline">Resend Code</button>
          <button className="text-custom-blue hover:underline ">Call Request</button>
          </div>
         <button onClick={()=>navigate("/reset")}
          className="w-full bg-custom-blue text-white py-2 rounded-lg shadow-md hover:bg-blue-900 transition-colors"
        >
          Verify Now
        </button>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
