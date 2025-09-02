import React, { useState } from "react";
import img from "../../../assets/img.png";
import logo from "../../../assets/settingicons/user.png";
import { FaCamera } from "react-icons/fa";

export default function SettingsContent({ activeTab }) {
  // Profile state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  // Security state
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: true,
  });

  // Notifications state
  const [notifications, setNotifications] = useState({
    emailNotification: true,
    pushNotification: true,
  });

  // Handlers
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecurityData({ ...securityData, [name]: type === "checkbox" ? checked : value });
  };

  const handleNotificationChange = (setting) =>
    setNotifications({ ...notifications, [setting]: !notifications[setting] });

  return (
    <div className="bg-white  border-gray-200">
      {/* Profile */}
      {activeTab === "profile" && (
        <div className="p-8 pt-1">
          <h2 className="text-2xl font-semibold text-gray-900 ml-0 pl-0 mb-2">Profile Settings</h2>
          <p className="text-gray-600 text-sm mb-6">Update your Profile Settings</p>

          {/* Background + Picture */}
          <div className="relative">
            <div className="h-56 rounded-xl overflow-hidden">
              <img src={img} alt="Background" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 left-8">
              <img src={logo} alt="Profile" className="w-20 h-20 object-cover rounded-full border-white" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                <FaCamera className="text-gray-600 text-sm" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mt-12 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="px-4 py-3 bg-neutral-50 border rounded-lg" />
              <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="px-4 py-3 bg-neutral-50 border rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="px-4 py-3 bg-neutral-50 border rounded-lg" />
              <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="px-4 py-3 bg-neutral-50 border rounded-lg" />
            </div>
            <textarea name="description" value={formData.description} onChange={handleInputChange} rows={4} placeholder="Description..." className="w-full px-4 py-3 bg-neutral-50 border rounded-lg resize-none" />
          </div>

          <div className="flex justify-end mt-8">
            <button className="px-8 py-3 bg-custom-blue text-white rounded-lg">Save</button>
          </div>
        </div>
      )}

      {/* Security */}
      {activeTab === "security" && (
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-2">Security Settings</h2>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <input type="password" name="currentPassword" value={securityData.currentPassword} onChange={handleSecurityChange} placeholder="Current Password" className="px-4 py-3 bg-neutral-50 border rounded-lg" />
            <input type="password" name="newPassword" value={securityData.newPassword} onChange={handleSecurityChange} placeholder="New Password" className="px-4 py-3 bg-neutral-50 border rounded-lg" />
          </div>
          <input type="password" name="confirmPassword" value={securityData.confirmPassword} onChange={handleSecurityChange} placeholder="Confirm Password" className="mt-6 w-full px-4 py-3 bg-neutral-50 border rounded-lg" />

          <div className="flex items-center justify-between mt-6">
            <p>Enable 2FA on Login</p>
            <input type="checkbox" name="twoFactorEnabled" checked={securityData.twoFactorEnabled} onChange={handleSecurityChange} />
          </div>

          <div className="flex justify-end mt-8">
            <button className="px-8 py-3 bg-custom-blue text-white rounded-lg">Save</button>
          </div>
        </div>
      )}

      {/* Notification */}
      {activeTab === "notification" && (
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-2">Notification Settings</h2>
          <div className="space-y-4 mt-6">
            <div className="flex justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" checked={notifications.emailNotification} onChange={() => handleNotificationChange("emailNotification")} />
            </div>
            <div className="flex justify-between">
              <span>Push Notifications</span>
              <input type="checkbox" checked={notifications.pushNotification} onChange={() => handleNotificationChange("pushNotification")} />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button className="px-8 py-3 bg-custom-blue text-white rounded-lg">Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
