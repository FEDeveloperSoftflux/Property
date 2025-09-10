import React, { useState, useEffect } from "react";
import Sidebar from "../dashboards/condopages/Sidebar";
import Header from "../dashboards/condopages/Dashboardheader";
import ChatList from "./Chatlist";
import ChatWindow from "./ChatWindow";
import logo from "../assets/Dashlogo.png";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [showChatList, setShowChatList] = useState(true);
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Michael Chen",
      role: "Home Owner",
      lastMessage: "Thanks for the quick res...",
      timestamp: "3 hrs ago",
      avatar: logo,
      unread: true,
      messages: [
        {
          id: 1,
          sender: "Michael Chen",
          content:
            "Hi! I wanted to follow up on our previous discussion about the project timeline.",
          timestamp: "10 hrs ago",
          isMine: false,
        },
        {
          id: 2,
          sender: "You",
          content:
            "Hello! Of course, I've been working on the revised timeline. Let me share the updated schedule with you.",
          timestamp: "10 hrs ago",
          isMine: true,
        },
        {
          id: 3,
          sender: "Michael Chen",
          content: "That sounds great! When can we schedule the next meeting?",
          timestamp: "12 mins ago",
          isMine: false,
        },
      ],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Home Owner",
      lastMessage: "Thanks for the quick res...",
      timestamp: "3 hrs ago",
      avatar: logo,
      unread: true,
      messages: [
        {
          id: 1,
          sender: "Sarah Johnson",
          content: "Could you provide an update on the maintenance request?",
          timestamp: "5 hrs ago",
          isMine: false,
        },
        {
          id: 2,
          sender: "You",
          content:
            "I'll check with the maintenance team and get back to you shortly.",
          timestamp: "4 hrs ago",
          isMine: true,
        },
      ],
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Condo Owner",
      lastMessage: "Thanks for the quick res...",
      timestamp: "3 hrs ago",
      avatar: logo,
      unread: true,
      messages: [
        {
          id: 1,
          sender: "Michael Chen",
          content:
            "The supplies have arrived and are ready for installation.",
          timestamp: "6 hrs ago",
          isMine: false,
        },
      ],
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Vendor",
      lastMessage: "Thanks for the quick res...",
      timestamp: "3 hrs ago",
      avatar: logo,
      unread: true,
      messages: [],
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Home Owner",
      lastMessage: "Thanks for the quick res...",
      timestamp: "3 hrs ago",
      avatar: logo,
      unread: true,
      messages: [],
    },
    {
      id: 6,
      name: "Michael Chen",
      role: "Condo Owner",
      lastMessage: "Thanks for the quick res...",
      timestamp: "3 hrs ago",
      avatar: logo,
      unread: true,
      messages: [],
    },
    {
      id: 7,
      name: "Michael Chen",
      role: "Vendor",
      lastMessage: "Thanks for the quick res...",
      timestamp: "3 hrs ago",
      avatar: logo,
      unread: true,
      messages: [],
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle chat selection on mobile
  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    if (isMobile) {
      setShowChatList(false);
    }
  };

  // Handle back to chat list on mobile
  const handleBackToList = () => {
    if (isMobile) {
      setShowChatList(true);
      setSelectedChat(null);
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
      <div
        className={`transition-all bg-white duration-300 flex-1 overflow-hidden
          ${isExpanded && !isMobile ? "ml-64" : isMobile ? "ml-0" : "ml-16 sm:ml-20"}`}
      >
        {/* Header with Mobile Menu Button */}
        <Header
          title="Messages"
          onMobileMenuToggle={() => setIsExpanded(true)}
          showMobileMenu={isMobile}
        />

        {/* Chat Section */}
        <div className="flex h-[calc(100vh-80px)] w-full bg-white border-t">
          {/* Desktop: Always show both panels side by side */}
          {!isMobile && (
            <>
              <ChatList
                chats={chats}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                onChatSelect={handleChatSelect}
              />
              <ChatWindow 
                selectedChat={selectedChat} 
                setChats={setChats}
                onBackToList={handleBackToList}
              />
            </>
          )}

          {/* Mobile: Show either chat list or chat window */}
          {isMobile && (
            <>
              {showChatList && (
                <ChatList
                  chats={chats}
                  selectedChat={selectedChat}
                  setSelectedChat={setSelectedChat}
                  onChatSelect={handleChatSelect}
                  isVisible={showChatList}
                />
              )}
              
              {!showChatList && selectedChat && (
                <ChatWindow 
                  selectedChat={selectedChat} 
                  setChats={setChats}
                  onBackToList={handleBackToList}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}