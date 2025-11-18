import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="h-screen flex justify-center bg-[#fff] pt-10">
      <div className="">
        <h2 className="text-3xl text-center font-bold">Sign In</h2>
        <p className="text-1xl text-center mt-3 text-gray-600">
          Hi! Welcome back,you've been missed
        </p>
        <form action="" className="mt-10 flex flex-col ">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="king@example.com"
            className="mt-2 mb-5 p-4 bg-gray-100 rounded-lg"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="mt-2 mb-5 p-4 bg-gray-100 rounded-lg"
          />
          <p className="text-right text-blue-600">Forgot Password?</p>
          <Link to="/Profile" className="text-blue-600">
            <button className="w-full p-3 bg-blue-600 text-[#fff] rounded-full mt-10">
            Sign In
          </button>
          </Link>
          
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
