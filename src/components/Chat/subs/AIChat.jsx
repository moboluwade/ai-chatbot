import ChatInfo from "./ChatInfo"

const AIChat = ({isUserBoolean}) => {
  return (
    <section className=' w-full px-4 py-2'>
        <ChatInfo isUserBoolean={false}/>
        <div className='flex flex-col items-start pl-6'>
          <div className=' shadow-sm flex flex-col items-center p-3 my-2 w-fit rounded-md text-gray-600 bg-white'>
            <span>Hello there!</span>
          </div>
          <div className=' shadow-sm flex flex-col items-center p-3 my-2 w-fit max-w-[70%] rounded-md text-gray-600 bg-white'>
            <span>Welcome to LiveChat <br/>I was made with passion. Pick a topic from the list or type down a question!</span>
          </div>
        </div>
    </section>
  )
}

export default AIChat