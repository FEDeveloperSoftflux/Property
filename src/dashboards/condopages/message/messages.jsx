import React, { useState } from 'react';
import { 
  Home, 
  Package, 
  FolderOpen, 
  Users, 
  MessageCircle, 
  BarChart3, 
  Settings, 
  Search,
  MoreHorizontal,
  Share,
  Trash2,
  Shield,
  AlertTriangle,
  Send,
  Smile,
  Paperclip
} from 'lucide-react';
import Sidebar from '../../Sidebar';
import Header from '../Dashboardheader';
import logo from "../../../assets/Dashlogo.png";
const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [showActionMenu, setShowActionMenu] = useState(null);
  const [chats, setChats] = useState([
    {
      id: 1,
      name: 'Michael Chen',
      role: 'Home Owner',
      lastMessage: 'Thanks for the quick res...',
      timestamp: '3 hrs ago',
      avatar: logo,
      unread: true,
      messages: [
        { id: 1, sender: 'Michael Chen', content: 'Hi! I wanted to follow up on our previous discussion about the project timeline.', timestamp: '10 hrs ago', isMine: false },
        { id: 2, sender: 'You', content: 'Hello! Of course, I\'ve been working on the revised timeline. Let me share the updated schedule with you.', timestamp: '10 hrs ago', isMine: true },
        { id: 3, sender: 'Michael Chen', content: 'That sounds great! When can we schedule the next meeting?', timestamp: '12 mins ago', isMine: false }
      ]
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Home Owner',
      lastMessage: 'Thanks for the quick res...',
      timestamp: '3 hrs ago',
      avatar: logo ,
      unread: true,
      messages: [
        { id: 1, sender: 'Sarah Johnson', content: 'Could you provide an update on the maintenance request?', timestamp: '5 hrs ago', isMine: false },
        { id: 2, sender: 'You', content: 'I\'ll check with the maintenance team and get back to you shortly.', timestamp: '4 hrs ago', isMine: true }
      ]
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Condo Owner',
      lastMessage: 'Thanks for the quick res...',
      timestamp: '3 hrs ago',
      avatar: logo ,
      unread: true,
      messages: [
        { id: 1, sender: 'Michael Chen', content: 'The supplies have arrived and are ready for installation.', timestamp: '6 hrs ago', isMine: false }
      ]
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Vendor',
      lastMessage: 'Thanks for the quick res...',
      timestamp: '3 hrs ago',
      avatar: logo,
      unread: true,
      messages: []
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Home Owner',
      lastMessage: 'Thanks for the quick res...',
      timestamp: '3 hrs ago',
      avatar: logo ,
      unread: true,
      messages: []
    },
    {
      id: 6,
      name: 'Michael Chen',
      role: 'Condo Owner',
      lastMessage: 'Thanks for the quick res...',
      timestamp: '3 hrs ago',
      avatar: logo ,
      unread: true,
      messages: []
    },
    {
      id: 7,
      name: 'Michael Chen',
      role: 'Vendor',
      lastMessage: 'Thanks for the quick res...',
      timestamp: '3 hrs ago',
      avatar: logo ,
      unread: true,
      messages: []
    }
  ]);

  const navigationItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Package, label: 'Assets Management', active: false },
    { icon: FolderOpen, label: 'Project Management', active: false },
    { icon: Users, label: 'Vendors Management', active: false },
    { icon: MessageCircle, label: 'Messages', active: true },
    { icon: BarChart3, label: 'Reports', active: false },
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const updatedChats = chats.map(chat => {
      if (chat.id === selectedChat.id) {
        const newMsg = {
          id: Date.now(),
          sender: 'You',
          content: newMessage,
          timestamp: 'just now',
          isMine: true
        };
        return { ...chat, messages: [...chat.messages, newMsg] };
      }
      return chat;
    });

    setChats(updatedChats);
    setSelectedChat(updatedChats.find(chat => chat.id === selectedChat.id));
    setNewMessage('');
  };

  
const [isExpanded, setIsExpanded] = useState(true);
  const toggleActionMenu = (chatId, e) => {
    e.stopPropagation();
    setShowActionMenu(showActionMenu === chatId ? null : chatId);
  };

  return (
    <div>
<Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
     <div className={`transition-all bg-white duration-300 p-4 pt-0
          ${isExpanded ? "ml-56" : "ml-20"}`}>
    <Header title="Messages"/>
    <div className="flex h-screen bg-white border border-gray-400 rounded-2xl ml-20 mr-20 sm:p-6 md:p-8  mb-20">
      {/* Chat List */}
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
       

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">All Chat</h2>
            <p className="text-sm text-gray-500">Can talk Us</p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => {
                setSelectedChat(chat);
                setShowActionMenu(null);
              }}
              className={`flex items-center p-4 pl-0 hover:bg-gray-50 cursor-pointer border-b border-gray-100 relative ${
                selectedChat?.id === chat.id ? 'bg-blue-50 border-l-4 border-l-custom-blue' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-full  flex items-center justify-center text-white font-medium mr-3`}>
               <img src={chat.avatar}/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900 truncate">{chat.name}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{chat.timestamp}</span>
                    <div className="relative">
                      <button
                        onClick={(e) => toggleActionMenu(chat.id, e)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      </button>
                      
                      {/* Action Menu */}
                      {showActionMenu === chat.id && (
                        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 w-36">
                          <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <Share className="w-4 h-4" />
                            <span>Share Chat</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                            <Trash2 className="w-4 h-4" />
                            <span>Delete Chat</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 text-sm text-yellow-600 hover:bg-gray-100 w-full text-left">
                            <Shield className="w-4 h-4" />
                            <span>Block Client</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 text-sm text-orange-600 hover:bg-gray-100 w-full text-left">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Report Client</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-500 truncate">{chat.role}</p>
                  {chat.unread && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full  flex items-center justify-center text-white font-medium mr-3`}>
                    <img src={selectedChat.avatar}/>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{selectedChat.name}</p>
                    <p className="text-sm text-gray-500">{selectedChat.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowActionMenu(showActionMenu === 'header' ? null : 'header')}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                  </button>
                  
                  {/* Header Action Menu */}
                  {showActionMenu === 'header' && (
                    <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 w-36">
                      <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        <Share className="w-4 h-4" />
                        <span>Share Chat</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                        <Trash2 className="w-4 h-4" />
                        <span>Delete Chat</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 text-sm text-yellow-600 hover:bg-gray-100 w-full text-left">
                        <Shield className="w-4 h-4" />
                        <span>Block Client</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 text-sm text-orange-600 hover:bg-gray-100 w-full text-left">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Report Client</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
                    {!message.isMine && (
                      <div className={`w-8 h-8 rounded-full  flex items-center justify-center text-white text-xs font-medium`}>
                       <img src={selectedChat.avatar}/>
                      </div>
                    )}
                    <div>
                      <div
                        className={`px-4 py-2 rounded-2xl ${
                          message.isMine
                            ? 'bg-custom-blue text-white rounded-br-sm'
                            : 'bg-gray-200 text-gray-900 rounded-bl-sm'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 px-2">{message.timestamp}</p>
                    </div>
                    {message.isMine && (
                      <div className="w-8 h-8 rounded-full bg-custom-blue flex items-center justify-center text-white text-xs font-medium">
                        You
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Reply to chatroom here..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-custom-blue text-white rounded-full  transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-custom-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a chat from the sidebar to start messaging</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Click outside to close action menu */}
      {showActionMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowActionMenu(null)}
        />
      )}
    </div>
    </div>
    </div>
  );
};

export default Messages;