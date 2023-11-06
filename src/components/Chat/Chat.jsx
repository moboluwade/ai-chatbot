import React, { useEffect } from 'react'
import AIChat from './subs/AIChat'
import UserChat from './subs/UserChat'

const Chat = ({ chatTrain, setChatTrain }) => {

  useEffect(()=>{
    if(chatTrain.length === 0 && chatTrain !== null){
      setChatTrain(localStorage.getItem('chatTrain'))
    }
    //recover local storage when the page loads
  })
  
  useEffect(()=>{
    localStorage.setItem('chatTrain',chatTrain)
    //store chat history in database 
    //update: to storing in a database solution.
  },[chatTrain])
  
  //and should be updated every time a user sends an input.
  //identify what chat is ai and which is user's.
  //then this should be displayed to the user according to the time stamp.
  return (
    <div className='bg-blue-gray-50 overflow-y-hidden pb-4'>
        <AIChat />
        <UserChat />
    </div>
  )
}

export default Chat