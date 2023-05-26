import React, { useState, useEffect } from 'react'
import Chat from './Chat'
import InfoChat from './InfoChat'

export default function ChatAI() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  console.log(screenSize)
  if (screenSize.width <= 1000) {
    return <Chat />
  } else {
    return <InfoChat />
  }
}