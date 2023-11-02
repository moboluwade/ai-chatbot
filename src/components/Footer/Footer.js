import React from 'react'
import ChatInput from "../../components/Chat/subs/ChatInput"

const Footer = ({setChatInput, onSend}) => {
  return (
    <footer className='w-full z-50 text-gray-600 bg-white sticky bottom-0'>
      <ChatInput onSend={onSend} setChatInput={setChatInput}/>
    </footer>
  )
}

export default Footer