import {
  HomeIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function BottomNavbar() {
  return (
    <div className="z-10 pl-2 pr-2 flex fixed z-20  left-0 right-0 bottom-0 items-center rounded-xl justify-between items-center shadow-2xl h-16 bg-[#fafafa]">
      <HomeIcon className="w-7 h-7 text-gray-600" />
     <Link><MagnifyingGlassIcon className="w-7 h-7 text-gray-600" /></Link> 
      <div className="w-12 h-12 bg-blue-400 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
        <Link to={'/CreatePost'}><PlusIcon className="w-7 h-7 text-[#fff] font-bold" /></Link>
      </div>

     <Link to={'/Videofeed'}> <VideoCameraIcon className="w-7 h-7 text-gray-600" /></Link>
      <UserCircleIcon className="w-7 h-7 text-gray-600" />
    </div>
  );
}
export default BottomNavbar;
