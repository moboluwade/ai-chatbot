import React from 'react'
import ChatInput from "../../components/Chat/subs/ChatInput"

const Footer = ({chatInput, setChatInput, onSend }) => {

  return (
    <footer className='w-full z-50 text-gray-600 bg-white sticky bottom-0'>
      <ChatInput chatInput={chatInput} setChatInput={setChatInput} onSend={onSend}/>
    </footer>
  )
}

export default Footer