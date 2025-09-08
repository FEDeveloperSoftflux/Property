import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import app from "../assets/appstore.png";
import g from "../assets/gstoe.png";
import ScrollToTop from './arrowup';
import img from "../assets/navimg.png"

export default function PropertyConnectFooter() {
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact number submitted:', contactNumber);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
   <footer className="py-12 px-4 relative  text-white bg-custom-blue">
    <div className='w-screen flex justify-center mobile:pr-4 sm:pr-0'><img src={img} className='absolute top-0 w-[900px] h-[60px]bg-cover flex justify-center'/></div>  
      <div className="flex flex-col items-center justify-center px-6 relative z-10">
        {/* Logo and Title */}
        <img src={logo} alt="Property Connect Logo" className="w-24 md:w-24 mb-4 mt-8" />
        <h1 className="text-xl font-semibold mb-10">Property Connect</h1>

        {/* Header Text */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Receive our special</h2>
          <h2 className="text-3xl font-bold">offers by email!</h2>
        </div>

        {/* Forms */}
        <div className="w-full max-w-md space-y-6 mb-10">
          {/* Contact Number Form */}
          <form onSubmit={handleContactSubmit} className="relative">
            <input
              type="tel"
              required
              maxLength={15}
              placeholder="Contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border-b-2 border-white/60 text-white placeholder-white/80 focus:border-white focus:outline-none text-lg transition-all duration-300"
            />
            <button
              type="submit"
              aria-label="Submit contact number"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3"
            >
              <FaArrowRight className="text-white hover:text-white/80" />
            </button>
          </form>

          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="relative">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border-b-2 border-white/60 text-white placeholder-white/80 focus:border-white focus:outline-none text-lg transition-all duration-300"
            />
            <button
              type="submit"
              aria-label="Submit email"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3"
            >
              <FaArrowRight className="text-white hover:text-white/80" />
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className='w-full h-22 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mt-16'>
          <div className="text-white/80 text-sm text-center md:text-left">
            © {new Date().getFullYear()} | All Rights Reserved by Property Connect
          </div>

          {/* App Stores and Socials */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                <img src={app} alt="App Store" className="h-10 rounded" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src={g} alt="Google Play" className="h-10 rounded" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 ml-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5 text-white hover:text-white/70 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 text-white hover:text-white/70 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5 text-white hover:text-white/70 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>

    
  );
}
