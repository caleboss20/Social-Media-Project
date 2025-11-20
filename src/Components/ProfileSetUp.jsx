import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
function ProfileSetUp() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const triggerUpload = () => {
    document.getElementById("profileInput").click();
  };

  return (
    <>
      <div className="p-6 w-full">
        <div className="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full border border-gray-400 mt-3 px-4 b-gray-400 text-[#000]">
          <span className="text-2xl text-center">&larr;</span>
        </div>
        <div>
          <h2 className="text-3xl text-center font-bold mt-10">
            Let Set Up Your Profile
          </h2>
          <p className="text-1xl text-center mt-3 text-gray-600">
            Don't worry, only you can see your personal data. No one else will
            be able to see it.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Avatar container */}
          <div
            className="w-34 h-34 rounded-full bg-gray-100 mt-10 relative cursor-pointer overflow-hidden"
            onClick={triggerUpload}
          >
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-8 h-8 mt-3 rounded-full bg-blue-400"></div>
                  <div className="w-13 h-7 mt-3 rounded-full bg-blue-400"></div>
                </div>
                <div className=" absolute bottom-3 right-5 w-6 h-6 rounded-full bg-blue-400 flex flex-col justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.232l3.536 3.536M9 11l6 6L7 21H1v-6l8-8z"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            id="profileInput"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
        <div className="mt-10">
          <label htmlFor="">Name</label> <br />
          <input
            type="text"
            placeholder="Caleboss1"
            className="w-full mt-2 mb-5 p-4 bg-gray-100 rounded-lg "
          />{" "}
          <br />
          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            placeholder="Enter Phone Number"
            className="w-full mt-2 mb-5 p-4 bg-gray-100 rounded-lg "
          />
          <Link to="/Home">
            <button className="w-full p-3 bg-blue-600 text-[#fff] rounded-full mt-10">
              <span className="">Complete Profile</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ProfileSetUp;
