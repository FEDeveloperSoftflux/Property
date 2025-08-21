import React, { useState } from 'react';
import { Check, X, ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import PropertyConnectFooter from './component/Foot';

import { useNavigate } from 'react-router-dom';
import Head from './head';
export default function PricingPage() {
  const [email, setEmail] = useState('');
   const navigate = useNavigate();
  const basicFeatures = [
    'Daily Simplified Text Account',
    'Audit Trails (7 Reports)',
    'Audit Banking'
  ];

  const premiumFeatures = [
    'Access To Daily Property Control System Accounting',
    'Daily Simplified And Advanced Reports Along With Report Generator',
    'Online Accounting and operational Property Services Developed Uniquely',
    'Receipt of Monthly Select New Statements And Reports',
    'Company Organization Is Organized As One-Day',
    'Access of Executive select New Statement And Reports',
    'Company Organization Is Organized For Current And Yearly',
    'Live Active man Adjusting Object Based From Additional Online Account Overviews Document Policy With HOAs'
  ];

  const comparisonFeatures = [
    { feature: 'Total Users', basic: 'Basic', premium: '1,000 Users', enterprise: '5,000 Users' },
    { feature: 'Personal Allocations', basic: 'Basic', premium: 'Advanced', enterprise: 'Advanced' },
    { feature: 'Approval and Bulk Storage', basic: '250 Mb Storage', premium: '250 Mb Storage', enterprise: '10 Gb Storage' },
    { feature: 'Online Tools', basic: 'Yes', premium: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Audit Trail', basic: '1 Month', premium: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Analytics', basic: '', premium: '✓', enterprise: '✓' },
    { feature: 'Online Tools', basic: '', premium: '✓', enterprise: '✓' },
    { feature: 'Report Notifications', basic: '', premium: '', enterprise: '✓' },
    { feature: 'Security & Compliance', basic: '', premium: '', enterprise: '✓' },
    { feature: 'Application Integration', basic: '', premium: '✓', enterprise: '✓' },
    { feature: 'Client Lead Advising', basic: '', premium: '✓', enterprise: '✓' }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
     <Head/>    

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Plans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a diverse list of plans that are designed to meet your accounting needs. Our goal is to 
            deliver cost-effective solutions that deliver outstanding capabilities and support for your business.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 mt-0">
        <div className="container mx-auto px-4 ">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm relative">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">0</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-custom-blue text-white py-3 rounded-md  transition-colors font-medium lg:mt-[299px] md:mt-[334px] hover:bg-blue-700">
                Subscribe Now
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$99</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-custom-blue text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare all plans</h2>
            <p className="text-gray-600">
              Choose the plan that fits your business needs perfectly, whether you are just starting or 
              looking for a large-scale solution.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Basic</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">1,000 Users</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">5,000 Users</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-700">
                        {item.basic === '✓' ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : 
                         item.basic === '' ? <X className="w-5 h-5 text-gray-300 mx-auto" /> : item.basic}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-700">
                        {item.premium === '✓' ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : 
                         item.premium === '' ? <X className="w-5 h-5 text-gray-300 mx-auto" /> : item.premium}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-700">
                        {item.enterprise === '✓' ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : 
                         item.enterprise === '' ? <X className="w-5 h-5 text-gray-300 mx-auto" /> : item.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    <PropertyConnectFooter/>
    </div>
  );
}