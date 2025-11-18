import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="h-screen flex justify-center bg-[#fff] p-10">
      <div className="">
        <h2 className="text-3xl text-center font-bold">Create Account</h2>
        <p className="text-1xl text-center mt-3 text-gray-600">
          Fill your information below or register with your social account.
        </p>
        <form action="" className="mt-10 flex flex-col ">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Caleb Antwi"
            className="mt-2 mb-5 p-4 bg-gray-100 rounded-lg"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="mt-2 mb-5 p-4 bg-gray-100 rounded-lg"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="mt-2 mb-5 p-4 bg-gray-100 rounded-lg"
          />

          <div className="flex gap-2">
            <input type="checkbox" />
            <span>
              Agree with{" "}
              <span className="text-blue-600">Terms & Condition</span>
            </span>
          </div>
          <button className="p-3 bg-blue-600 text-[#fff] rounded-full mt-10">
            Sign Up
          </button>
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <Link to="/Profile" ><span className="text-blue-600 ">Sign In</span></Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
