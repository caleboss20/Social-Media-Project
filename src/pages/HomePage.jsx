import { useState } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  HeartIcon,
 PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import ConnectUsers from "../Components/ConnectUsers";
import BottomNavbar from "./BottomNavbar";
import Feed from "./FeedPost";
import mettle1 from "../assets/mettle.jpg";
import mettle2 from "../assets/mettle1.jpeg";
import mettle3 from "../assets/mettle2.jpg";
import mettle4 from "../assets/mettle4.jpeg";
import mettle5 from "../assets/mettle5.jpg";

import pitch from "../assets/pitch-competition.jpg";
import speaker from "../assets/speaker.jpg";
import speaker2 from "../assets/speaker2.jpg";
import minister from "../assets/minister.jpg";


function HomePage() {
  const [statusDetails, setstatusDetails] = useState([
    { image: mettle3, plus: true, name: "You" },
    { image: pitch, name: "Enactus" },
    { image: speaker, name: "Cece" },
    { image: speaker2, name: "Lina" },
    { image: minister, name: "Minister" },
    { image: mettle4, name: "Joe Mettle" },
  ]);

  return (
    <div className="h-screen w-full justify-center ">
      <div className="flex justify-between items-center w-full h-20 pl-4 pr-4 bg-[#fff] fixed z-20 top-0 left-0 right-0 ">
        <div className="flex gap-3 justify-center items-center">
          <div className="w-10 h-10 border border-gray-400 rounded-full">
            <img src={mettle1} className="w-10 h-10 p-1 rounded-full" alt="" />
          </div>
          <h2 className="font-bold text-2xl">
            <span>Impact</span>
          </h2>
        </div>

        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full flex justify-center items-center">
           
            <PlusIcon className="h-7 w-7 text-black-600 border border-2-black rounded-full " />
          </div>
          <div className=" relative w-10 h-10 rounded-full flex justify-center items-center">
             <div className="absolute top-2 right-1.5 bg-red-600 w-2 h-2 rounded-full  "></div>
            <HeartIcon className="h-7 w-7 text-black-600" />
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center">
            <PaperAirplaneIcon className="h-7 w-7 text-black-600 rotate-320 mb-2" />
          </div>
        </div>
      </div>
      {/* Top Status */}

      <div className="flex h-55 overflow-x-auto space-x-4 pl-5 pt-4 bg-[#fefefe] mt-20 rounded-xl ">
        {statusDetails.map((list, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-38 h-40 rounded-lg flex items-center justify-center text-white "
          >
            <img
              className=" w-36 h-46 rounded-xl mr-2 object-cover"
              src={list.image}
              alt=""
            />
            {list.plus && (
              <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 ">
                <PlusIcon className="w-6 h-6 font-bold" />
              </div>
            )}
            <div className="absolute left-0 bottom-2 flex p-4 ">
              <div className="absolute left-2 bottom-0 flex items-center justify-center w-10 h-10 rounded-full border-3 border-blue-600"></div>
              <img
                src={list.image}
                alt=""
                className="absolute left-3 bottom-1 w-8 h-8 rounded-full"
              />
              <span className="absolute top-0 text-white ml-12 font-bold">
                {list.name}
              </span>
            </div>
          </div>
        ))}
      </div>
       
      <BottomNavbar />
      <Feed />
      <p className="text-blue-500 text-xl font-bold ml-85">see all</p>
      <ConnectUsers />
    </div>
  );
}
export default HomePage;
