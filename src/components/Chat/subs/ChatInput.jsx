import React, { useRef } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { AttachFile } from '@mui/icons-material';

const ChatInput = ({setChatInput, onSend}) => {
    const inputRef = useRef()

    return (
        <div className='sticky bottom-0 bg-white py-2 px-10 pl-5 w-full min-h-[3rem] flex flex-row items-end justify-between'>
            <textarea placeholder='Write a message' ref={inputRef} onChange={(e) => { setChatInput(e.target.value) }} onInput={(inputRef) => { inputRef.currentTarget.style.height = 'auto'; inputRef.currentTarget.style.height = inputRef.currentTarget.scrollHeight + 'px' }} className='w-full min-h-8 max-h-32 pl-2 pt-2 overflow-auto resize-none border-2 border-opacity-50 border-blue-gray-600 rounded-md focus:outline-none scroll overscroll-contain' name="user-chat" id="user-chat-input"></textarea>
            <button className=' cursor-pointer ml-2 rounded-md border-[1.5px] border-white hover:border-opacity-50 hover:border-blue-gray-500 w-10 h-10 flex flex-row items-center justify-center'>
                <AttachFile className=' fill-blue-gray-500' />
            </button>
            <button onClick={()=>{onSend()}} className=' cursor-pointer ml-2 rounded-md border-[1.5px] border-white hover:border-opacity-50 hover:border-blue-gray-500 w-10 h-10 flex flex-row items-center justify-center'>
                <SendIcon className='fill-blue-gray-500' />
            </button>
        </div>
    )
}

export default ChatInput