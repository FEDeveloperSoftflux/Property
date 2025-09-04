import React, { useState } from "react";
import { Search, X } from "lucide-react";

export default function ChatList({ 
  chats, 
  selectedChat, 
  setSelectedChat, 
  isVisible = true, 
  onChatSelect 
}) {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    if (onChatSelect) {
      onChatSelect(chat);
    }
  };

  return (
    <div className={`
      w-full lg:w-[400px] bg-white border-r flex flex-col rounded-l-none lg:rounded-l-3xl
      ${isVisible ? 'block' : 'hidden lg:flex'}
    `}>
      {/* Header */}
      <div className="p-3 sm:p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <h1 className="text-xl sm:text-2xl font-semibold">All Chat</h1>
            <p className="text-xs sm:text-sm text-gray-500">Can talk to us</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <div className="p-4 text-center">
            <p className="text-gray-500 text-sm">
              {search ? "No chats found" : "No conversations yet"}
            </p>
          </div>
        ) : (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat)}
              className={`
                flex items-center p-3 sm:p-4 cursor-pointer border-b hover:bg-gray-50 transition-colors
                ${selectedChat?.id === chat.id 
                  ? "bg-blue-50 border-l-4 border-l-custom-blue" 
                  : ""
                }
              `}
            >
              <div className="relative">
                <img 
                  src={chat.avatar} 
                  alt={chat.name} 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 flex-shrink-0" 
                />
                
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm sm:text-base truncate pr-2">
                    {chat.name}
                  </p>
                  <span className="text-xs text-gray-500 flex-shrink-0">
                    {chat.timestamp}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-500 truncate mb-1">
                  {chat.role}
                </p>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-gray-600 truncate flex-1 pr-2">
                    {chat.lastMessage}
                  </p>
                 
                
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mobile-only bottom padding for safe area */}
      <div className="h-4 lg:h-0"></div>
    </div>
  );
}