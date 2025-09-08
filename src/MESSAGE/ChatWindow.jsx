import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Smile, Paperclip, Send, ArrowLeft, MoreVertical, Share, Trash2, UserX, Flag } from "lucide-react";
import { AiFillMessage } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
export default function ChatWindow({ selectedChat, setChats, onBackToList }) {
  const [newMessage, setNewMessage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  id: Date.now(),
                  sender: "You",
                  content: newMessage,
                  timestamp: "just now",
                  isMine: true,
                },
              ],
            }
          : chat
      )
    );
    setNewMessage("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuAction = (action) => {
    setShowDropdown(false);
    
    switch (action) {
      case 'share':
        // Handle share chat
        console.log('Share chat:', selectedChat.name);
        break;
      case 'delete':
        // Handle delete chat
        if (confirm(`Are you sure you want to delete the chat with ${selectedChat.name}?`)) {
          setChats((prev) => prev.filter((chat) => chat.id !== selectedChat.id));
          onBackToList();
        }
        break;
      case 'block':
        // Handle block client
        console.log('Block client:', selectedChat.name);
        break;
      case 'report':
        // Handle report client
        console.log('Report client:', selectedChat.name);
        break;
      default:
        break;
    }
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AiFillMessage className="w-6 h-6 sm:w-8 sm:h-8 text-custom-blue" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">Select a conversation</h3>
          <p className="text-sm sm:text-base text-gray-500">Choose a chat from the sidebar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <div className="p-3 sm:p-4 border-b flex items-center bg-white">
        {/* Back button for mobile */}
        <button
          onClick={onBackToList}
          className="lg:hidden p-2 mr-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <img 
          src={selectedChat.avatar} 
          alt={selectedChat.name} 
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3" 
        />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm sm:text-base truncate">{selectedChat.name}</p>
          <p className="text-xs sm:text-sm text-gray-500 truncate">{selectedChat.role}</p>
        </div>

        {/* Three dots menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="py-1">
                <button
                  onClick={() => handleMenuAction('share')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3"
                >
                  <Share className="w-4 h-4" />
                  <span>Share Chat</span>
                </button>
                
                <button
                  onClick={() => handleMenuAction('delete')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Chat</span>
                </button>
                
                <button
                  onClick={() => handleMenuAction('block')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3"
                >
                  <UserX className="w-4 h-4" />
                  <span>Block Client</span>
                </button>
                
                <button
                  onClick={() => handleMenuAction('report')}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3"
                >
                  <Flag className="w-4 h-4" />
                  <span>Report Client</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4 bg-gray-50">
        {selectedChat.messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-sm sm:text-base">No messages yet. Start a conversation!</p>
          </div>
        ) : (
          selectedChat.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMine ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-2xl max-w-[280px] sm:max-w-xs md:max-w-sm ${
                  msg.isMine
                    ? "bg-custom-blue text-white"
                    : "bg-white text-gray-900 border"
                }`}
              >
                <p className="text-sm sm:text-base break-words">{msg.content}</p>
                <p className={`text-xs mt-1 ${msg.isMine ? "text-blue-100" : "text-gray-500"}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div className="p-3 sm:p-4 border-t bg-white">
        <div className="flex items-center space-x-3">
          {/* Emoji button */}
          <button className="w-10 h-10  rounded-full flex items-center justify-center transition-colors">
            <FaSmile className="w-5 h-5 text-yellow-400" />
          </button>
          
          {/* Attachment button */}
          <button className=" rounded-full flex items-center justify-center transition-colors">
            <Paperclip className="w-5 h-5 text-gray-500" />
          </button>
          
          {/* Input field */}
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Reply to soham here..."
            className="flex-1 px-4 py-3 text-sm sm:text-base bg-gray-100 rounded-full focus:ring-2 focus:ring-custom-blue focus:bg-white focus:outline-none border-0 placeholder-gray-500"
          />
          
          {/* Send button */}
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="w-10 h-10 bg-custom-blue text-white rounded-full hover:bg-custom-blue disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}