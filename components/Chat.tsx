import React, { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div className="flex flex-col h-screen p-4">
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {messages.map((message, index) => (
            <div key={index} className={`message ${index % 2 === 0 ? 'sender' : 'receiver'} p-2 mb-2`}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-[95px] lg:px-[70px] md:px-[50px] sm:px-[32px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Escribe"
            value={newMessage}
            onChange={handleInputChange}
            className="py-2 px-4 border bg-gray-input border-[#DBDBDB] rounded-[8px] pr-12 focus:outline-none md:w-[700px] sm:w-[330px] xl:w-[1120px]"
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-0 mt-2 mr-2 py-[2px] px-4 bg-blue-500 rounded-[8px] bg-[#5EA496] text-white text-primary"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
