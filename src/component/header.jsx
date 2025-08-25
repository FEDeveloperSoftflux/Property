import React from "react"; 
import navimg from "../assets/navimg.png";
import img from "../assets/img.png";
import logo from "../assets/logo.png";
import app from "../assets/appstore.png";
import g from "../assets/gstoe.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import ar1 from "../assets/ar1.png";
import ar2 from "../assets/ar2.png";
import video from "../assets/video.png";
import button from "../assets/button.png";
import vendor from "../assets/vendor.png";
import com from "../assets/com.png";
import condo from "../assets/condo.png";
import bcurve from "../assets/bcurve.png";
import bu from "../assets/b.png";
import { Check } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Login from "./Login"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Header() {
 const navigate = useNavigate();
 const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }
}, [location]);
  

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={img} alt="Background" className="w-full h-full object-cover" />
        </div>

        {/* Navbar - untouched */}
        <header className="relative z-20 flex justify-between px-6 md:px-12 py-0">
                <div className="flex flex-col items-center">
                  <img src={logo} alt="Logo" className="w-[140px] h-[70px] object-contain" />
                  <span className="font-bold text-white text-lg whitespace-nowrap ">Property Connect</span>
                </div>
                <nav className= "hidden lg:text-sm lg:flex w-[900px] h-[60px] bg-cover xl:gap-10 xl:text-sm items-center justify-center sm:text-xs sm:font-semibold md:font-thin md:gap-6 lg:gap-3 sm:gap-5 md:text-sm lg:pr-4 lg:pl-4     text-[clamp(12px,1.0vw,18px)] font-medium tracking-wide  " 
                     style={{ backgroundImage: `url(${navimg})`, backgroundSize: '100% 100%' }}>
                  <button className="hover:font-bold text-black lg">Home</button>
                  <button  onClick={() => navigate("/#condoowner")} className="hover:font-bold text-black whitespace-nowrap">Condos & Home Owners</button>
                  <button   onClick={() => navigate("/#organization")} className="hover:font-bold  text-black">Organizations</button>
                  <button onClick={() => navigate("/Pricing")} className="hover:font-bold  text-black">Pricing</button>
                  <button onClick={()=> navigate("/contactus")} className="hover:font-bold  text-black whitespace-nowrap">Customer Support</button>
                  <button  onClick={()=> navigate("/about")} className="hover:font-bold  text-black">About</button>
                </nav>
                
       <div className="flex items-center space-x-3">
        {/* Login Button */}
        <button className="border border-white bg-transparent text-white px-4 hover:font-bold rounded-full text-sm h-10 hover:bg-white hover:text-black transition-all" onClick={() => navigate("/Login")}>
          Login
        </button>
      
        {/* Sign Up Button */}
        <span className="relative flex items-center rounded-full border border-white overflow-hidden group h-10 ">
          {/* Text section */}
          <button className="px-6 text-white font-medium text-sm transition-all duration-300 group-hover:font-bold group-hover:text-black hover:bg-white border border-white rounded-full h-10 flex justify-center items-center whitespace-nowrap"  onClick={()=> navigate("/signin")} >
            Sign up
          </button>
      
          {/* Arrow section */}
          <span className="w-0 group-hover:w-12 flex items-center justify-center transition-all duration-300 ease-in-out">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </span>
                <button
                  className="lg:hidden  text-white p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>      
      </div>
      
                   {mobileMenuOpen && (
                <div className=" lg:hidden 2xl:hidden absolute top-20 left-0 w-full backdrop-blur-sm text-white  shadow-lg z-30 flex flex-col items-start px-6 py-7 space-y-4">
                  <a href="#" className="hover:text-black hover:font-semibold">Home</a>
                  <a href="#" className="hover:text-black hover:font-semibold">Condos & Home Owners</a>
                  <a href="#" className="hover:text-black hover:font-semibold">Organizations</a>
                  <a href="#" className="hover:text-black hover:font-semibold">Pricing</a>
                  <a href="#" className="hover:text-black hover:font-semibold">Customer Support</a>
                  <a href="#" className="hover:text-black hover:font-semibold">About</a>
                  <hr className="w-full border-gray-200" />
                </div>
              )}
              </header>

        {/* Main Section - made responsive */}
        <main className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 sm:px-8 md:px-24 py-12 md:py-24">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Building <br />
            <span className="italic font-extralight">beyond</span>
          </h1>

  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
  <button className="border-2 border-white text-white font-boldbg-transparent h-12 rounded-full text-sm hover:bg-white hover:text-black w-full sm:w-32">
    Become a Vendor
  </button>

  <button className="relative flex items-center justify-center rounded-full border border-white overflow-hidden group h-12 sm:w-32">
    {/* Text section */}
    <span className="flex items-center justify-center text-white font-medium text-sm w-full h-full transition-all duration-300 group-hover:text-black group-hover:bg-white border border-white rounded-full whitespace-nowrap ">
      Watch a demo
    </span>

    {/* Arrow section */}
    <span className="w-0 group-hover:w-12 flex items-center justify-center transition-all duration-300 ease-in-out">
      <svg
        className="w-5 h-5 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>
  </button>
</div>



          <div className="flex space-x-4">
            <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src={app} alt="App Store" className="h-10 rounded border border-transparent" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src={g} alt="Google Play" className="h-10 rounded" />
            </a>
          </div>
        </main>

      </div>

      {/* How Our System Works Section */}
      <section className="flex justify-center items-center py-12 md:py-20 bg-white px-4 sm:px-8">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-helvetica font-bold mt-6 md:mt-9 text-gray-900">How Our System Works</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-16 h-16 bg-sky-200 rounded-xl flex items-center justify-center mb-4">
                <img src={icon1} alt="Icon 1" className="w-8 h-6" />
              </div>
              <h6 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Capture and have 1 central location to manage Assets</h6>
            </div>
            <img src={ar1} alt="Arrow 1" className="hidden lg:block w-12 h-8" />
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-16 h-16 bg-purple-200 rounded-xl flex items-center justify-center mb-4">
                <img src={icon2} alt="Icon 2" className="w-8 h-8" />
              </div>
              <h6 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Easily create projects to manage existing assets or new projects</h6>
            </div>
            <img src={ar2} alt="Arrow 2" className="hidden lg:block w-12 h-8" />
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-16 h-16 bg-pink-200 rounded-xl flex items-center justify-center mb-4">
                <img src={icon3} alt="Icon 3" className="w-8 h-8" />
              </div>
              <h6 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Your project is immediately shared with vendors in that service category and region</h6>
            </div>
            <img src={ar1} alt="Arrow 3" className="hidden lg:block w-12 h-8" />
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-16 h-16 bg-indigo-200 rounded-xl flex items-center justify-center mb-4">
                <img src={icon4} alt="Icon 4" className="w-8 h-8" />
              </div>
              <h6 className="text-base sm:text-lg font-medium text-gray-900">Capture all the data including all bids and quotes, invoices, pictures having one central repository for all your assets</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Introduction */}
      <div className="max-w-7xl mx-auto flex flex-col space-y-10 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-helvetica font-bold mt-9 mb-10 text-center">Platform Introduction</h1>
        <div 
          className="w-full h-[250px] sm:h-[400px] md:h-[600px] bg-cover bg-center rounded-3xl flex items-center justify-center shadow-lg" 
          style={{ backgroundImage: `url(${video})` }}>
          <img src={button} alt="Play Button" className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 hover:scale-105 transition-transform duration-300 cursor-pointer" />
        </div>
      </div>

      {/* All Features Section */}
      <section className="w-full bg-white flex flex-col gap-0 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-helvetica font-bold mt-9 mb-8 text-center">All Features</h2>

          {/* Vendor */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="relative max-w-sm w-full">
              <img 
                src={vendor} 
                alt="Vendor" 
                className="w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"></div>
            </div>
            <div className="space-y-4 pt-12 sm:pt-24 max-w-lg">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold">Vendor</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Vendors can register securely, showcase their services, bid on filtered projects, manage jobs, chat with clients, and more.
              </p>
              <ul className="space-y-2 text-black text-base sm:text-lg">
                {[
                  "Professional Profiles",
                  "Smart Bidding System",
                  "Reputation Building",
                  "Secure Payments",
                  "Direct Client Communication",
                  "Verified Badge System"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-5 h-5 mr-3 bg-custom-blue rounded-full text-white flex items-center justify-center text-xs font-bold mt-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Organizations */}
          <div id="organization"className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="relative max-w-[400px] w-full">
              <img 
                src={com} 
                alt="Organizations" 
                className="w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="space-y-7 max-w-lg">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold pt-8 sm:pt-11">Organizations</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Organizations can efficiently post projects, manage vendors, track progress, and more through a centralized dashboard.
              </p>
              <ul className="pl-5 text-black text-base sm:text-lg space-y-1">
                {[
                  "Company Registration",
                  "Post Projects",
                  "Hire & Manage",
                  "Approve Work",
                  "Release Payment",
                  "Compare Bids"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-5 h-5 mr-3 bg-custom-blue rounded-full text-white flex items-center justify-center text-xs font-bold mt-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Home Owners */}
          <div id="condoowner" className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="relative max-w-sm w-full">
              <img 
                src={condo} 
                alt="Condo Owners" 
                className="w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
            <div className="space-y-4 mt-8 sm:mt-20 max-w-lg">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold">Home Owners / Condo Owners</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Homeowners can post service requests, connect with vendors, negotiate, and manage everything on one platform.
              </p>
              <ul className="pl-5 text-black text-base sm:text-lg space-y-1">
                {[
                  "Registration",
                  "Post Service Request",
                  "Chat & Negotiate",
                  "Service Completion",
                  "Review & Rate",
                  "Get Matched"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-5 h-5 mr-3 bg-custom-blue rounded-full text-white flex items-center justify-center text-xs font-bold mt-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}