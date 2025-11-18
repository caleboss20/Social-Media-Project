import {
  HomeIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
function BottomNavbar() {
  return (
    <div className="z-10 pl-2 pr-2 flex fixed z-20  left-0 right-0 bottom-0 items-center rounded-xl justify-between items-center shadow-2xl h-16 bg-[#fafafa]">
      <HomeIcon className="w-7 h-7 text-gray-600" />
      <VideoCameraIcon className="w-7 h-7 text-gray-600" />
      <div className="w-12 h-12 bg-blue-400 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
        <PlusIcon className="w-7 h-7 text-[#fff] font-bold" />
      </div>

      <ChatBubbleLeftRightIcon className="w-7 h-7 text-gray-600" />
      <UserCircleIcon className="w-7 h-7 text-gray-600" />
    </div>
  );
}
export default BottomNavbar;
