import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Chat from "../../components/Chat/Chat"

const Layout = () => {
  const [chatInput, setChatInput] = useState('')
  const [chatTrain, setChatTrain] = useState([])
  const [messageObject, setMessageObject] = useState(null)

  useEffect(()=>{
    setChatTrain(chatTrain=>[...chatTrain, messageObject])
    //passes
  }
  ,[messageObject])

  const onSend = ()=>{
    setMessageObject(
      {
        id: chatTrain.length + 1,
        role: 'user',
        timestamp: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        description: chatInput,
      }
    )
    //passes
  }
  
  return (
    <div className="md:px-48 max-h-screen h-screen">
      <Header />
      {/* <main>{children}</main> */}
      {/* newer components should be built in the dedicted components folder and called in here*/}
      <Chat chatTrain={chatTrain} setChatTrain={setChatTrain} />
      <Footer chatInput={chatInput} setChatInput={setChatInput} onSend={onSend}/>
    </div>
  )
}

export default Layout