import { MoreHoriz, Remove } from '@mui/icons-material';
import Feedback from "../Feedback/Feedback";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-6 w-full">
      <div className=" py-4 flex flex-row w-full justify-between">
        <div className=" cursor-pointer text-gray-600 w-8 h-8">
          <MoreHoriz />
        </div>
        <span>Chat with us!</span>
        <div className=" cursor-pointer text-gray-600 w-8 h-8">
          <Remove />
        </div>
      </div>
      <Feedback />
    </header>
  )
}

export default Header