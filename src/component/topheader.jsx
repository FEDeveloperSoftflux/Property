import navimg from "../assets/navimg.png";
import img from "../assets/about.png";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Topheader() {
 const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);    return (
      <div className=" min-h-screen overflow-hidden">
            <div className="absolute inset-0">
              <img src={img} alt="Background" className="w-full h-full object-cover backdrop-blur" />
            </div>
            <header className="relative  justify-between px-6 md:px-12 py-0">
      
       <div className="flex justify-center">  <nav className= "hidden lg:text-sm lg:flex w-[900px] h-[60px] bg-cover xl:gap-10 xl:text-sm items-center justify-center sm:text-xs sm:font-semibold md:font-thin md:gap-6 lg:gap-3 sm:gap-5 md:text-sm lg:pr-4 lg:pl-4  " 
               style={{ backgroundImage: `url(${navimg})`, backgroundSize: '100% 100%' }}>
            <button onClick={() => navigate("/")} className="hover:font-bold text-black lg">Home</button>
            <button className="hover:font-bold text-black whitespace-nowrap">Condos & Home Owners</button>
            <button  className="hover:font-bold  text-black">Organizations</button>
            <button onClick={() => navigate("/Pricing")} className="hover:font-bold  text-black">Pricing</button>
            <button onClick={()=> navigate("/contactus")} className="hover:font-bold  text-black whitespace-nowrap">Customer Support</button>
            <button className="hover:font-bold  text-black">About</button>
          </nav>
          </div> 
              <div className="absolute lg:top-5 left-10 sm:top-5 md:left-3">
            <img src={logo} alt="Logo" className="w-[180px] h-[90px] object-contain" />
            <span className="font-bold text-white text-2xl whitespace-nowrap ">Property Connect</span>
          </div>
   

             {mobileMenuOpen && (
          <div className=" lg:hidden 2xl:hidden absolute top-20 left-0 w-full bg-transparent text-white  shadow-lg z-30 flex flex-col items-start px-6 py-7 space-y-4">
            <a href="#" className="hover:text-black hover:font-semibold">Home</a>
            <a href="#" className="hover:text-black hover:font-semibold">Condos & Home Owners</a>
            <a href="#" className="hover:text-black hover:font-semibold">Organizations</a>
            <a href="#" className="hover:text-black hover:font-semibold">Pricing</a>
            <a href="#" className="hover:text-black hover:font-semibold">Customer Support</a>
            <a href="#" className="hover:text-black hover:font-semibold">About</a>
            <hr className="w-full border-gray-200" />
          </div>
        )}
             <button
            className="lg:hidden  text-white p-2 absolute top-5 right-10 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>      

        </header>
        <div className="flex absolute bottom-36 left-24">
   <div className="justify-start"><span className="text-white text-9xl font-extrabold ">About<br/></span><span className="text-white text-9xl italic font-extraligh ">Us</span></div>
    <img src={logo} alt="Logo" className="w-[200px] h-[120px] object-contain" />
    </div>
      
        </div>
  )
}

export default Topheader;