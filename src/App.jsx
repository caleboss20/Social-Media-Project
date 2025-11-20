import { useState } from "react";
import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Splashscreen from "./Components/Splashscreen";
import SignUp from "./Components/SignUp";
import Login from "./Components/login";
import ProfileSetUp from "./Components/ProfileSetUp";
import HomePage from "./pages/HomePage";
import Videofeed from "./Components/Videofeed";
import CreatePost from "./Components/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<ProfileSetUp />} />
      <Route path="/Home" element={<HomePage />} />
       <Route path="/Videofeed" element={<Videofeed />} />
        <Route path="/CreatePost" element={<CreatePost />} />
       
      
    </Routes>
  );
}

export default App;
