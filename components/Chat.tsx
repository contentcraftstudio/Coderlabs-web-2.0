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
      <div className=" p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${index % 2 === 0 ? 'sender' : 'receiver'
              } p-2 mb-2`}
            style={{
              transform: message === 'receiver' ? 'scale(-1, 1)' : 'none',
            }}
          >
            {message}
          </div>
        ))}
      </div>
      <div className="fixed bottom-[125px] ml-[35px] bg">
        <div className="relative">
          <input
            type="text"
            placeholder="Escribe"
            value={newMessage}
            onChange={handleInputChange}
            className="py-2 px-4 border bg-gray-input border-[#DBDBDB] rounded-[8px] pr-12 focus:outline-none w-[1200px]"
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-0 mt-2 mr-2 py-[2px] px-4 bg-blue-500 rounded-[8px] bg-[#5EA496] text-white text-primary "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};