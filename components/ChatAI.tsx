import React from 'react'
import Chat from './Chat'
import InfoChat from './InfoChat'

export default function ChatAI() {
  const [chat, setChat] = React.useState(false);
  // const { screens } = require('tailwindcss/defaultTheme');
  // const mobile = screens.sm

  const showChat = () => {
    setChat(true);
  };

  return (
    <>
      <div className="col-span-1">
        <InfoChat showChat={showChat} />
      </div>
      {chat && (
        <div>
          <Chat />
        </div>
      )}
    </>
  )
}