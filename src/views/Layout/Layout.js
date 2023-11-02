import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Chat from "../../components/Chat/Chat"

const Layout = () => {
  const [chatInput, setChatInput] = useState('')
  const [chatTrain, setChatTrain] = useState([])

  const onSend = ()=>{
    
    const message = {
      id: chatTrain.length + 1,
      timestamp: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      description: chatInput,
    }
    //create a new input obj; with id, timestamp and description
    console.log(`this is the message log: ${message}`)
    console.log(message)
    setChatTrain([...chatTrain, message])
    console.log(chatTrain)
    setTimeout(() => {
      console.log(`this is the chatTrain log: ${chatTrain}`)
    }, 5000);
    //push that object into the chatTrain
  }
  
  return (
    <div className="md:px-48 max-h-screen">
      <Header />
      {/* <main>{children}</main> */}
      {/* newer components should be built in the dedicted components folder and called in here*/}
      <Chat chatInput={chatInput} chatTrain={chatTrain} setChatTrain={setChatTrain} />
      <Footer setChatInput={setChatInput} onSend={onSend}/>
    </div>
  )
}

export default Layout