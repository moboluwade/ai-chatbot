import React from 'react'
import AIChat from './subs/AIChat'
import UserChat from './subs/UserChat'

const Chat = () => {
  return (
    <div className='bg-blue-gray-50 overflow-y-hidden pb-4'>
        <AIChat />
        <UserChat />
    </div>
    
  )
}

export default Chat