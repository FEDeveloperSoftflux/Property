import React, { useState } from "react";
import img from "../../../assets/img.webp";
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

  // Profile picture state
  const [profilePic, setProfilePic] = useState(logo);

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

  const handleSecurityChange = (name) =>
    setSecurityData({ ...securityData, [name]: !securityData[name] });

  const handleNotificationChange = (setting) =>
    setNotifications({ ...notifications, [setting]: !notifications[setting] });

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  // ✅ Reusable Toggle Component
  const Toggle = ({ enabled, onToggle }) => (
    <button
      type="button"
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-custom-blue" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="bg-white border-gray-200">
      {/* Profile */}
      {activeTab === "profile" && (
        <div className="p-8 pt-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Profile Settings
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Update your Profile Settings
          </p>

          {/* Background + Picture */}
          <div className="relative">
            <div className="h-56 rounded-xl overflow-hidden">
              <img
                src={img}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-8">
              <img
                src={profilePic}
                alt="Profile"
                className="w-20 h-20 object-cover rounded-full border-4 border-white"
              />

              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                id="profileUpload"
                className="hidden"
                onChange={handleProfilePicChange}
              />

              {/* Camera button */}
              <label
                htmlFor="profileUpload"
                className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer"
              >
                <FaCamera className="text-gray-600 text-sm" />
              </label>
            </div>
          </div>

          {/* Form */}
          <div className="mt-12 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                  className="w-full px-4 py-3 bg-neutral-50 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                  className="w-full px-4 py-3 bg-neutral-50 border rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  className="w-full px-4 py-3 bg-neutral-50 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 bg-neutral-50 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Write about yourself..."
                className="w-full px-4 py-3 bg-neutral-50 border rounded-lg resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button className="px-8 py-3 bg-custom-blue text-white rounded-lg">
              Save
            </button>
          </div>
        </div>
      )}

      {/* Security */}
      {activeTab === "security" && (
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-2">Security Settings</h2>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={securityData.currentPassword}
                onChange={(e) =>
                  setSecurityData({
                    ...securityData,
                    currentPassword: e.target.value,
                  })
                }
                placeholder="Enter current password"
                className="w-full px-4 py-3 bg-neutral-50 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={securityData.newPassword}
                onChange={(e) =>
                  setSecurityData({
                    ...securityData,
                    newPassword: e.target.value,
                  })
                }
                placeholder="Enter new password"
                className="w-full px-4 py-3 bg-neutral-50 border rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={securityData.confirmPassword}
              onChange={(e) =>
                setSecurityData({
                  ...securityData,
                  confirmPassword: e.target.value,
                })
              }
              placeholder="Re-enter new password"
              className="w-full px-4 py-3 bg-neutral-50 border rounded-lg"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-sm font-medium text-gray-700">
              Enable 2FA on Login
            </p>
            <Toggle
              enabled={securityData.twoFactorEnabled}
              onToggle={() => handleSecurityChange("twoFactorEnabled")}
            />
          </div>

          <div className="flex justify-end mt-8">
            <button className="px-8 py-3 bg-custom-blue text-white rounded-lg">
              Save
            </button>
          </div>
        </div>
      )}

      {/* Notification */}
      {activeTab === "notification" && (
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-2">Notification Settings</h2>
          <div className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Email Notifications
              </span>
              <Toggle
                enabled={notifications.emailNotification}
                onToggle={() => handleNotificationChange("emailNotification")}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Push Notifications
              </span>
              <Toggle
                enabled={notifications.pushNotification}
                onToggle={() => handleNotificationChange("pushNotification")}
              />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button className="px-8 py-3 bg-custom-blue text-white rounded-lg">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
