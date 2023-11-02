import React from 'react'
import ChatInput from "../../components/Chat/subs/ChatInput"

const Footer = ({setChatInput}) => {
  return (
    <footer className='w-full z-50 text-gray-600 bg-white sticky bottom-0'>
      <ChatInput setChatInput={setChatInput}/>
    </footer>
  )
}

export default Footer