import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {
  return (
    <div className='fixed bottom-8 bg-white py-2 px-10 w-full min-h-[3rem] flex flex-row items-center justify-between'>
      <textarea className='w-full min-h-8 max-h-32 overflow-auto resize-none pr-2 focus:outline-none' name="" id=""></textarea>
      {/* <span>'Write a message to prove that the space between input and icon will not increase'</span> */}
      far far
      <SendIcon className='fill-blueGrey-500'/>
    </div>
  )
}

export default ChatInput