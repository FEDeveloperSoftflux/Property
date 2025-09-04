import React, { useState } from "react";
import { MessageCircle, Smile, Paperclip, Send, ArrowLeft } from "lucide-react";
import { AiFillMessage } from "react-icons/ai";
export default function ChatWindow({ selectedChat, setChats, onBackToList }) {
  const [newMessage, setNewMessage] = useState("");

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
        <div className="flex items-center space-x-2">
          {/* Emoji and attachment buttons - hidden on very small screens */}
          <button className="hidden xs:block p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
            <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="hidden xs:block p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="p-2 sm:p-2 bg-custom-blue text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}