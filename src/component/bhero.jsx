import React from 'react';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { BiTime } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiBarChart2 } from 'react-icons/fi';
import { User, MessageCircle, Star, CreditCard, FileText, Check } from 'lucide-react';
import cimg from '../assets/card1img.png';
import cimg2 from '../assets/card2img.png';
import cimg4 from '../assets/card4img.png';

const SmartVendorConnections = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Smart Vendor Connections
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-sm sm:text-base">
          Property Connect empowers Property Managers and Homeowners to create highly detailed project requests in seconds—
          complete with photos, asset details, and background on prior maintenance—so vendors can quickly determine if the job is a fit before ever picking up the phone.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 relative flex flex-col">
          <div className="absolute top-4 left-4 text-black flex justify-center items-center rounded h-8 w-8 border border-gray-200 text-xl">
            <PiNotePencilDuotone />
          </div>
          <div className="mt-9">
            <img src={cimg} alt="Structured Projects" className="w-full max-h-40 pl-8 object-contain rounded-lg" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Structured Projects</h3>
          <p className="text-gray-600 text-sm flex-grow">
            Upload images, documents, and asset history to provide vendors with the context they need to submit accurate quotes—fast.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 relative flex flex-col">
          <div className="absolute top-4 left-4 text-black flex justify-center items-center rounded h-8 w-8 border border-gray-200 text-xl">
            <BiTime />
          </div>
          <div className="mt-10 mb-4 flex-grow">
            <img src={cimg2} alt="Instant Distribution" className="w-full h-32 object-cover rounded-lg" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-5">Instant Distribution</h3>
          <p className="text-gray-600 text-sm flex-grow">
            Your project is immediately shared with vendors in that service category and region, giving you a pool of 3–4 competitive quotes within hours or days—not weeks.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 relative flex flex-col items-center text-center">
          <div className="absolute top-4 left-4 text-black flex justify-center items-center rounded h-8 w-8 border border-gray-200 text-xl">
            <HiOutlineLightBulb />
          </div>
          <div className="mt-16 mb-4">
            <div className="w-16 h-16 bg-gradient-to-b from-[#3198FF] to-[#0734DB] rounded-lg flex items-center justify-center text-white text-2xl">
              <HiOutlineLightBulb className="h-9 w-9" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 mt-14">Smarter Decisions</h3>
          <p className="text-gray-600 text-sm flex-grow">
            Review vendor profiles, timelines, and pricing side-by-side to select the right fit with confidence.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 relative flex flex-col">
          <div className="absolute top-4 left-4 text-black flex justify-center items-center rounded h-8 w-8 border border-gray-200 text-xl">
            <FiBarChart2 />
          </div>
          <div className="mt-10 mb-4">
            <img src={cimg4} alt="More Result" className="w-full h-32 object-contain rounded-lg" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">More Result</h3>
          <p className="text-gray-600 text-sm flex-grow">
            Clear project data means fewer clarification calls, better responses, and faster execution.
          </p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-3xl mx-auto p-6 mt-20">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mb-10">
          Tips to Earn More
        </h2>

        <div className="space-y-4">
          {[
            {
              icon: <User size={20} className="text-white  group-hover:text-custom-blue" />,
              text: 'Complete your profile with high-quality photos',
            },
            {
              icon: <MessageCircle size={20} className="text-white  group-hover:text-custom-blue" />,
              text: 'Respond to bids within 2 hours for better visibility',
            },
            {
              icon: <Star size={20} className="text-white group-hover:text-custom-blue" />,
              text: 'Maintain a 4.8+ star rating for premium placement',
            },
            {
              icon: <CreditCard size={20} className="text-white  group-hover:text-custom-blue" />,
              text: 'Subscribe to Premium Plans',
            },
            {
              icon: <FileText size={20} className="text-white  group-hover:text-custom-blue" />,
              text: 'Use detailed proposals to win more projects',
            },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white text-black p-4 rounded-lg shadow-sm border border-gray-300 hover:bg-custom-blue hover:text-white transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-custom-blue rounded-lg flex items-center justify-center mr-4 group-hover:bg-white ">
                {tip.icon}
              </div>
              <div className="flex-grow">
                <p className="font-medium">{tip.text}</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div className="w-6 h-6 bg-custom-blue group-hover:bg-white rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white group-hover:text-custom-blue " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartVendorConnections;
