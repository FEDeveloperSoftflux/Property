import React, { useState } from 'react';
import { Menu, X } from "lucide-react"; // nice icons
import logo from "./assets/loginlogo.png";
import navimg from "./assets/bluecurve.png";
import { useNavigate } from "react-router-dom"; 

function Head() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-white relative md:px-12 ">
      {/* Desktop Nav */}
         <div className="lg:hidden mr-6 absolute top-4 right-4 z-50">
        <button onClick={toggleMenu} className="text-black">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      <div className="hidden lg:flex justify-center lg:mr-[140px] lg:ml-[140px]">
        <nav
          className="lg:text-sm lg:flex w-[900px] h-[60px] bg-cover xl:gap-10 xl:text-sm items-center justify-center sm:text-xs sm:font-semibold md:font-thin md:gap-6 lg:gap-3 sm:gap-5 md:text-sm lg:pr-4 lg:pl-4"
          style={{ backgroundImage: `url(${navimg})`, backgroundSize: '100% 100%' }}
        >
          <button onClick={() => navigate("/")} className="hover:text-black hover:font-bold text-white">Home</button>
          <button className="hover:text-black hover:font-bold text-white">Condos & Home Owners</button>
          <button className="hover:text-black hover:font-bold text-white">Organizations</button>
          <button onClick={() => navigate("/Pricing")} className="hover:text-black hover:font-bold text-white">Pricing</button>
          <button onClick={()=> navigate("/contactus")} className="hover:text-black hover:font-bold text-white">Customer Support</button>
          <button onClick={()=> navigate('/about')} className="hover:text-black hover:font-bold text-white">About</button>
        </nav>
      </div>

      {/* Mobile Hamburger */}
   
          <div className="flex flex-col ml-4 md:ml-12  lg:ml-6 xl:ml-16">
        <img src={logo} alt="Logo" className="w-[140px] h-[70px] object-contain" />
        <span className="font-bold text-black text-lg whitespace-nowrap ">Property Connect</span>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[80px] right-0 w-3/4 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 lg:hidden">
          <button onClick={() => { navigate("/"); toggleMenu(); }} className="text-black hover:text-gray-600">Home</button>
          <button className="text-black hover:text-gray-600">Condos & Home Owners</button>
          <button className="text-black hover:text-gray-600">Organizations</button>
          <button onClick={() => { navigate("/Pricing"); toggleMenu(); }} className="text-black hover:text-gray-600">Pricing</button>
          <button className="text-black hover:text-gray-600">Customer Support</button>
          <button onClick={()=> navigate('/about')}className="text-black hover:text-gray-600">About</button>
        </div>
      )}
    </header>
  );
}

export default Head;
