import {useState} from 'react'

const ChatStatus = () => {
  const [isRead, setIsRead] = useState(false)
  return (
    <div> 
      {isRead ? 'Read' : 'Sent'}
    </div>
  )
}

export default ChatStatus