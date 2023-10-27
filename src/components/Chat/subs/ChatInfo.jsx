import React, { useState } from 'react'
import ChatIcon from '@mui/icons-material/Chat';

const ChatInfo = ({isUserBoolean}) => {
    const [time, setTime] = useState('12:00 PM')
    const [isUser, setIsUser] = useState(isUserBoolean)
    
    return (
        <div>
            {
                isUser ?
                    <div className='text-blue-gray-500 flex flex-row items-center justify-end'>
                        <div className=' pl-1 text-xs'>Visitor</div>
                        <div className=' pl-1 text-xs'>{time}</div>
                    </div>
                    :
                    <div className='text-blue-gray-500 flex flex-row items-center justify-start'>
                        <div className='bg-white flex flex-row justify-center items-center w-5 h-5 border-gray-300 border-[1.5px] bg-none rounded-full'>
                            <ChatIcon sx={{ fontSize: '0.8rem' }} className=' text-light-blue-500' />
                        </div>
                        <div className=' pl-1 text-xs'>Livechat</div>
                        <div className=' pl-1 text-xs'>{time}</div>
                    </div>
            }
        </div>
    )
}

export default ChatInfo