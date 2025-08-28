import React, { useState, useEffect } from "react";
import { CheckCircle, Trash2, Bell } from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  // Example notifications (replace with API later)
  useEffect(() => {
    setNotifications([
      { id: 1, text: "New message from John", time: "2m ago", read: false },
      { id: 2, text: "Your report is ready", time: "10m ago", read: false },
      { id: 3, text: "Reminder: Meeting at 3 PM", time: "1h ago", read: false },
      { id: 4, text: "System update scheduled", time: "3h ago", read: false },
      { id: 5, text: "Password changed successfully", time: "6h ago", read: true },
      { id: 6, text: "New comment on your post", time: "1d ago", read: false },
      { id: 7, text: "Your subscription will expire soon", time: "2d ago", read: true },
    ]);
  }, []);

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  // Clear all
  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="h-screen p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-custom-blue flex items-center gap-2">
          <Bell className="w-7 h-7 text-custom-blue" />
          All Notifications
        </h1>
        {notifications.length > 0 && (
          <div className="flex gap-3">
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition"
            >
              <CheckCircle className="w-4 h-4" />
              Mark all as read
            </button>
            <button
              onClick={clearAll}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
            >
              <Trash2 className="w-4 h-4" />
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Notifications List */}
      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <Bell className="w-10 h-10 mb-2 text-gray-400" />
          <p>No notifications yet</p>
        </div>
      ) : (
        <ul className="bg-white shadow-md rounded-xl divide-y divide-gray-200 max-h-[70vh] overflow-y-auto">
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={`p-4 transition-all duration-200 hover:bg-gray-50 cursor-pointer ${
                notif.read ? "bg-white" : "bg-blue-50"
              }`}
            >
              <p className="text-sm text-gray-800">{notif.text}</p>
              <span className="text-xs text-gray-500">{notif.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
