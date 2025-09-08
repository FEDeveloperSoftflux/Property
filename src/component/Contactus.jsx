import React, { useState } from 'react';
import { ChevronRight, X, Send, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import contactus from '../assets/contactus.png';
import PropertyConnectFooter from './Footer';
import Head from '../Header';
export default function FAQSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const faqs = [
    "Why Vendors Choose Property Connect?",
    "Where can I get support?",
    "On how many domains I can use Listed?",
    "Vendor Can See Live Project Feed?",
    "Vendor Can Direct Access to Decision-Maker?",
    "Pre-Qualified Opportunities?",
    "Expand Your Reach?"
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', { email, message });
    setIsModalOpen(false);
    setEmail('');
    setMessage('');
  };

  const handleNewsletterSubmit = () => {
    console.log('Newsletter signup:', newsletterEmail);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
<Head/>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Questions? We're Happy to Answer!
            </h2>
          </div>

          <div className="space-y-1 ml-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-50  hover:bg-custom-blue hover:text-white border border-gray-200 rounded-lg group">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-custom-blue hover:text-white transition-colors duration-200"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-white ">{faq}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      expandedFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      This is a sample answer for "{faq}". You can replace this with the actual FAQ content for each question.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-28 w-14 h-14 bg-white hover:bg-blue-700   text-custom-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
      >
      <img src={contactus} />
      </button>

<PropertyConnectFooter/>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative transform animate-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Please fill out form for any queries
              </h3>

              <div className="space-y-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-custom-blue outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all duration-200"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-custom-blue hover:bg-custom-blue text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}