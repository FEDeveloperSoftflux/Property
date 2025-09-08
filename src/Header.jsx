import React, { useState } from 'react';
import { Menu, X } from "lucide-react"; // nice icons
import logo from "./assets/loginlogo.png";
import navimg from "./assets/bluecurve.png";
import { useNavigate } from "react-router-dom"; 

function Head() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
       const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
  <header className="relative z-20 flex justify-between px-6 md:px-12 py-0">
                <div className="flex flex-col items-center">
                  <img src={logo} alt="Logo" className="w-[140px] h-[70px] object-contain" />
                  <span className="font-bold text-custom-blue text-lg whitespace-nowrap ">Property Connect</span>
                </div>
                <nav className= "hidden lg:text-sm xl:flex w-[900px] h-[60px] bg-cover xl:gap-10 xl:text-sm items-center justify-center sm:text-xs sm:font-semibold md:font-thin md:gap-6 lg:gap-3 sm:gap-5 md:text-sm lg:pr-4 lg:pl-4     text-[clamp(12px,1.0vw,18px)] font-medium tracking-wide  " 
                     style={{ backgroundImage: `url(${navimg})`, backgroundSize: '100% 100%' }}>
                  <button onClick={() => navigate("/")} className="hover:font-bold text-white lg">Home</button>
                  <button  onClick={() => navigate("/#condoowner")} className="hover:font-bold text-white whitespace-nowrap">Condos & Home Owners</button>
                  <button   onClick={() => navigate("/#organization")} className="hover:font-bold  text-white">Organizations</button>
                  <button onClick={() => navigate("/Pricing")} className="hover:font-bold  text-white">Pricing</button>
                  <button onClick={()=> navigate("/contactus")} className="hover:font-bold  text-white whitespace-nowrap">Customer Support</button>
                  <button  onClick={()=> navigate("/about")} className="hover:font-bold  text-white">About</button>
                </nav>
                
       <div className="flex items-center space-x-3">
        {/* Login Button */}
        <button className="border hidden sm:flex items-center border-black bg-transparent text-custom-blue px-4 hover:font-bold rounded-full text-sm h-10 hover:bg-custom-blue hover:text-white transition-all" onClick={() => navigate("/Login")}>
          Login
        </button>
      
        {/* Sign Up Button */}
        <span className="relative  hidden sm:flex flex items-center rounded-full border border-black overflow-hidden group h-10 ">
          {/* Text section */}
          <button className="px-6 text-custom-blue font-medium text-sm transition-all duration-300 group-hover:text-white group-hover:font-bold  hover:bg-custom-blue border border-black rounded-full h-10 justify-center items-center whitespace-nowrap"  onClick={()=> navigate("/signin")} >
            Sign up
          </button>
        </span>
                <button
                  className="xl:hidden  text-custom-blue p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>      
      </div>
      
                   {mobileMenuOpen && (
                          <div className=" xl:hidden absolute top-20 left-0 w-full  bg-white backdrop-blur-md text-custom-blue  shadow-lg z-30 flex flex-col items-start px-6 py-7 space-y-4">
                 <button className="font-bold  text-custom-blue lg "  onClick={() => navigate("/")}>Home</button>
                  <button  onClick={() => navigate("/#condoowner")} className="font-bold   text-custom-blue whitespace-nowrap">Condos & Home Owners</button>
                  <button   onClick={() => navigate("/#organization")} className="font-bold  text-custom-blue">Organizations</button>
                  <button onClick={() => navigate("/Pricing")} className="font-bold  text-custom-blue">Pricing</button>
                  <button onClick={()=> navigate("/contactus")} className="font-bold  text-custom-blue whitespace-nowrap">Customer Support</button>
                  <button  onClick={()=> navigate("/about")} className="font-bold  text-custom-blue">About</button>
                  <button  onClick={()=> navigate("/login")} className="font-bold  text-custom-blue">Login</button>
                  <button  onClick={()=> navigate("/signin")} className="font-bold  text-custom-blue">Sign up </button>

                  <hr className="w-full border-gray-200" />
                </div>
              )}
              </header>
  );
}

export default Head;
