import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Chat from "../../components/Chat/Chat"

const Layout = () => {
  const [chatInput, setChatInput] = useState('')
  const [chatTrain, setChatTrain] = useState([])

  return (
    <div className="md:px-48 max-h-screen">
      <Header />
      {/* <main>{children}</main> */}
      {/* newer components should be built in the dedicted components folder and called in here*/}
      <Chat chatInput={chatInput} chatTrain={chatTrain} setChatTrain={setChatTrain} />
      <Footer setChatInput={setChatInput} />
    </div>
  )
}

export default Layout