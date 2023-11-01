import React, { useRef } from 'react'
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {
    const inputRef = useRef()
    
    return (
        <div className='sticky bottom-0 bg-white py-2 px-10 w-full min-h-[3rem] flex flex-row items-center justify-between'>
            <textarea ref={inputRef}  onInput={(inputRef)=>inputRef.currentTarget.style.height = inputRef.currentTarget.scrollHeight + 'px'}  className='w-full min-h-8 max-h-32 overflow-auto resize-none focus:outline-none' name="user-chat" id="user-chat-input"></textarea>
            {/* <span>'Write a message to prove that the space between input and icon will not increase'</span> */}
            <div className='pl-2'>
                <SendIcon className='fill-blueGrey-500' />
            </div>
        </div>
    )
}

export default ChatInput