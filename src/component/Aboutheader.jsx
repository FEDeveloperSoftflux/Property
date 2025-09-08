import navimg from "../assets/navimg.png";
import { HashLink } from "react-router-hash-link";
import img from "../assets/about.png";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Topheader() {
 const navigate = useNavigate();
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);    return (
      <div className=" min-h-screen overflow-hidden">
            <div
  className="absolute h-screen w-screen inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${img})` }}
></div>

        <header className="relative z-20 flex justify-between px-6 md:px-12 py-0">
                <div className="flex flex-col items-center">
                  <img src={logo} alt="Logo" className="w-[140px] h-[70px] object-contain" />
                  <span className="font-bold text-white text-lg whitespace-nowrap ">Property Connect</span>
                </div>
                <nav className= "hidden  xl:flex w-[900px] h-[60px] bg-cover xl:gap-10 xl:text-sm items-center justify-center sm:text-xs sm:font-semibold md:font-thin md:gap-6 lg:gap-3 sm:gap-5 md:text-sm lg:pr-4 lg:pl-4     text-[clamp(12px,1.0vw,18px)] font-medium tracking-wide  " 
                     style={{ backgroundImage: `url(${navimg})`, backgroundSize: '100% 100%' }}>
                  <button className="hover:font-bold text-black lg "  onClick={() => navigate("/")}>Home</button>
                  <button  onClick={() => navigate("/#condoowner")} className="hover:font-bold text-black whitespace-nowrap">Condos & Home Owners</button>
                  <button   onClick={() => navigate("/#organization")} className="hover:font-bold  text-black">Organizations</button>
                  <button onClick={() => navigate("/Pricing")} className="hover:font-bold  text-black">Pricing</button>
                  <button onClick={()=> navigate("/contactus")} className="hover:font-bold  text-black whitespace-nowrap">Customer Support</button>
                  <button  onClick={()=> navigate("/about")} className="hover:font-bold  text-black">About</button>
                </nav>
                
       <div className="flex items-center space-x-3">
        {/* Login Button */}
        <button className="border hidden sm:flex items-center border-white bg-transparent text-white px-4 hover:font-bold rounded-full text-sm h-10 hover:bg-white hover:text-black transition-all" onClick={() => navigate("/Login")}>
          Login
        </button>
      
        {/* Sign Up Button */}
        <span className="relative  hidden sm:flex items-center rounded-full border border-white overflow-hidden group h-10 ">
          {/* Text section */}
          <button className="px-6 text-white font-medium text-sm transition-all duration-300 group-hover:text-black group-hover:font-bold hover:bg-white border border-white rounded-full h-10 flex justify-center items-center whitespace-nowrap"  onClick={()=> navigate("/signin")} >
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
                  className="xl:hidden  text-white p-2"
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
                  <button  onClick={()=> navigate("/signin")} className="font-bold  text-custom-blue">Sign up</button>

                  <hr className="w-full border-gray-200" />
                </div>
              )}
              </header>
     <div className="flex absolute bottom-40 left-14">
   <div className="justify-start"><span className="text-white md:text-9xl mobile:text-5xl sm:text-8xl font-extrabold sm:6xl ">About<br/></span><span className="text-white mobile:text-5xl md:text-9xl sm:text-8xl italic font-extraligh ">Us</span></div>
    <img src={logo} alt="Logo" className="sm:w-[200px] sm:h-[120px] object-contain mobile:w-[100px] mobile:h-[80px]" />
    </div>
      
        </div>
  )
}

export default Topheader;