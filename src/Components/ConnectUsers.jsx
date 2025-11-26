import { useState } from "react";
import social2 from "../assets/member-6.png";
import social4 from "../assets/member-8.png";
import social5 from "../assets/member-9.png";
import social6 from "../assets/photo4.png";
import social7 from "../assets/photo5.png";
import { XMarkIcon } from "@heroicons/react/24/solid";

function ConnectUsers() {
  const [users, setUsers] = useState([
    {
      userimage: social2,
      username: "Lily Graham",
      following: false,
    },
    {
      userimage: social4,
      username: "Stella Bae",
      following: false,
    },
    {
      userimage: social5,
      username: "Michael ",
      following: false,
    },
    {
      userimage: social6,
      username: "Nebulla Randy",
      following: false,
    },
    {
      userimage: social7,
      username: "Mark Hubert",
      following: false,
    },
    {
      userimage: social2,
      username: "Lily Graham",
      following: false,
    },
    {
      userimage: social4,
      username: "Stella Bae",
      following: false,
    },
    {
      userimage: social5,
      username: "Michael ",
      following: false,
    },
    {
      userimage: social6,
      username: "Nebulla Randy",
      following: false,
    },
    {
      userimage: social7,
      username: "Mark Hubert",
      following: false,
    },
  ]);

  const handleDelete = (i) => {
    const newUsers = [...users];
    newUsers.splice(i, 1);
    setUsers(newUsers);
  };

  const toggleFollow = (user) => {
    user.following = !user.following;
    setUsers([...users]);
  };

  return (
    <div className="flex mb-100 h-100 w-full bg-400 overflow-x-auto space-x-4 pl-4 pt-4 bg-[#fefefe] mt-0 rounded-xl">
      {users.map((item, i) => (
        <div key={i} className="relative border border-gray-200 flex-col flex-shrink-0 w-41 h-68 rounded-lg flex items-center justify-center text-[#212121]">
          <XMarkIcon
            onClick={() => handleDelete(i)}
            className="absolute top-2 right-2 w-6 h-6"
          />
          <img
            src={item.userimage}
            className="mt-3 w-20 h-20 rounded-full bg-blue-400"
            alt=""
          />
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="text-black text-md font-bold">{item.username}</h2>
            <p className="mt-3 text-gray-500">suggested for you</p>
          </div>

          <button
            className={`${
              item.following
                ? "outline-none bg-gray-200 rounded-sm mt-7 font-bold px-8 py-3 text-md text-white"
                : " outline-none bg-blue-600 rounded-sm mt-7 font-bold px-8 py-3 text-md text-white"
            }`}
            onClick={() => toggleFollow(item)}
          >
            {item.following ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}
export default ConnectUsers;
