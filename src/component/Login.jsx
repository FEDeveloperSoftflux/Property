import React, { useState } from 'react';
import { Home } from 'lucide-react';
import logo from '../assets/loginlogo.png'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Login() {
 const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
 const navigate = useNavigate();
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = () => {
    console.log('Login attempted with:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleLinkedInLogin = () => {
    console.log('LinkedIn login clicked');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
    <div className="mt-8 ml-16">
                        <img src={logo} alt="Logo" className="w-[140px] h-[70px] object-contain" />
                        <span className="font-bold text-black text-lg whitespace-nowrap ">Property Connect</span>
                      </div>
    

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 ">
        <div className="w-full max-w-md">
          {/* Login Form */}
          <div className=" rounded-lg shadow-sm p-8  bg-neutral-50  border border-zinc-300/25">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">Login</h1>
              <p className="text-gray-600">
                Welcome to <span className="font-semibold">Property Connect</span> Management. Please give us 
                email id and password.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent placeholder-gray-400"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent placeholder-gray-400"
                />
                <div className="text-right mt-2">
                  <button onClick={()=>navigate("/forgetpassword")} className="text-sm text-custom-blue hover:text-blue-800">
                    Forgot Password?
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={()=>navigate("/Condo")}
                className="w-full bg-custom-blue text-white py-3 px-6 rounded-md hover:bg-custom-blue transition-colors font-medium"
              >
                Login
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or Continue with accounts</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-700 font-medium">Google</span>
                </button>

                <button
                  onClick={handleLinkedInLogin}
                  className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-gray-700 font-medium">LinkedIn</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="text-custom-blue hover:text-blue-800 font-medium">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}