import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Splashscreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#fff] gap-3">
      <div className="text-5xl font-extrabold text-blue-600">
        <span className="relative">
          S
          <span className="absolute w-3 h-3 t-2 bg-blue-600 rounded-full animate-dot"></span>
        </span>
        <span>a</span>

        <span>a</span>
        <span>v</span>
        <span>i</span>
       
      </div>
      <p className="mt-2">Connect. Grow. Share</p>
    </div>
  );
};
export default Splashscreen;
