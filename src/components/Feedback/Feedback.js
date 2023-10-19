import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import { Badge } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const Feedback = () => {
    return (
        <div className=' bg-white '>
            <div className='px-2 py-2 border-t-2 flex flex-row justify-between'>
                <div className=' flex flex-row items-center'>
                    <Badge className='w-10 h-10' overlap='circular'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        variant='dot' badgeContent={4} color="success">
                        <div className=' flex flex-row justify-center items-center w-10 h-10 border-gray-300 border-[1px] bg-none rounded-full'>
                            <ChatIcon className=' text-light-blue-500' />
                        </div>
                    </Badge>
                    <div className='pl-5 text-base flex flex-col items-start justify-center'>
                        <span>Chatbot</span>
                        <span className=' text-blue-gray-500'>Support Agent</span>
                    </div>
                </div>
                <div className='pr-2 flex flex-row justify-center items-center'>
                    <ThumbUpAltIcon className='cursor-pointer mr-2 text-blue-gray-500' sx={{ fontSize: 30 }} />
                    <ThumbDownAltIcon className='cursor-pointer ml-2 text-blue-gray-500' sx={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    )
}

export default Feedback