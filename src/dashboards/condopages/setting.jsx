import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  FolderOpen, 
  Users, 
  MessageCircle, 
  FileText,
  Bell,
  Shield,
  Edit3,
  BarChart3
} from 'lucide-react';
import Header from './Dashboardheader';
import Sidebar from '../Sidebar';
import img from "../../assets/img.png"
import logo from "../../assets/settingicons/user.png"
import { FaCamera } from 'react-icons/fa';


export default function SettingsPage(){
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: ''
  });
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true
  });
  const [notifications, setNotifications] = useState({
    emailNotification: true,
    pushNotification: true
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecurityData({
      ...securityData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleNotificationChange = (setting) => {
    setNotifications({
      ...notifications,
      [setting]: !notifications[setting]
    });
  };

  const sidebarItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'assets', icon: FolderOpen, label: 'Assets Management' },
    { id: 'project', icon: Edit3, label: 'Project Management' },
    { id: 'vendors', icon: Users, label: 'Vendors Management' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'reports', icon: FileText, label: 'Reports' }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile Details' },
    { id: 'security', label: 'Security' },
    { id: 'notification', label: 'Notification' }
  ];
const [isExpanded, setIsExpanded] = useState(true);
  return (
 <div className="min-h-screen bg-gray-50 flex relative">
      
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>

        {/* Main Content */}
         <div  className={`transition-all bg-white duration-300 flex-1 p-8 
          ${isExpanded ? "ml-56" : "ml-20"}`}>
          <div className="pl-8">
            {/* Header */}
           <Header title="Settings"/>
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-8 w-full justify-center bg-white">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 w-[500px] rounded-2xl font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-custom-blue text-white shadow-md'
                      : 'bg-neutral-50 text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Cards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Profile Details Tab */}
              {activeTab === 'profile' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Settings</h2>
                    <p className="text-gray-600 text-sm">Update your Profile Settings</p>
                  </div>

                  {/* Profile Header with Background */}
                  <div className="relative " >
                    <div 
                      className="h-48 rounded-xl relative overflow-hidden"

                    >
                               <img src={img} alt="Background" className="w-full h-full object-cover mr-56" />
                     
                    </div>
                    
                    {/* Profile Picture */}
                    <div className="absolute -bottom-10 left-8" >
                    
                        <img 
                          src={logo}
                          alt="Profile"
                          className="w-20 h-20 object-cover overflow-hidden "
                        />
                          <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
    <FaCamera className="text-gray-600 text-sm" />
  </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6 mt-11">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your First Name"
                          className="w-full px-4 bg-neutral-50 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your Last Name"
                          className="w-full px-4 py-3 border bg-neutral-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your Email"
                          className="w-full px-4 py-3 bg-neutral-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="w-full px-4 py-3 bg-neutral-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description (About You)</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Description..."
                        rows={4}
                        className="w-full px-4 py-3 bg-neutral-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent resize-none text-sm placeholder-gray-400"
                      ></textarea>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end mt-8">
                    <button className="px-8 py-3 bg-custom-blue text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium shadow-sm">
                      Save
                    </button>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Security Settings</h2>
                    <p className="text-gray-600 text-sm">Update your Security Profile Settings</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={securityData.currentPassword}
                          onChange={handleSecurityChange}
                          placeholder="Enter your Current Password"
                          className="w-full px-4 py-3 bg-neutral-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          name="newPassword"
                          value={securityData.newPassword}
                          onChange={handleSecurityChange}
                          placeholder="Enter your New Password"
                          className="w-full px-4 py-3 bg-neutral-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={securityData.confirmPassword}
                        onChange={handleSecurityChange}
                        placeholder="Enter your Confirm New Password"
                        className="w-full px-4 py-3 bg-neutral-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between py-4">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">Enable 2FA on Login</h4>
                          <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="twoFactorEnabled"
                            checked={securityData.twoFactorEnabled}
                            onChange={handleSecurityChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-blue shadow-sm"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end mt-8">
                    <button className="px-8 py-3 bg-custom-blue text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium shadow-sm">
                      Save
                    </button>
                  </div>
                </div>
              )}

              {/* Notification Tab */}
              {activeTab === 'notification' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Notification Settings</h2>
                    <p className="text-gray-600 text-sm">Update your Notification Settings</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-4">
                      <h4 className="font-medium text-gray-900">Email Notification</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.emailNotification}
                          onChange={() => handleNotificationChange('emailNotification')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-blue shadow-sm"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-4">
                      <h4 className="font-medium text-gray-900">Push Notification</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.pushNotification}
                          onChange={() => handleNotificationChange('pushNotification')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-blue shadow-sm"></div>
                      </label>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end mt-8">
                    <button className="px-8 py-3 bg-custom-blue text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium shadow-sm">
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

  );
};

