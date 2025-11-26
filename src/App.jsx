// App.jsx
import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Splashscreen from "./Components/Splashscreen";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ProfileSetUp from "./Components/ProfileSetUp";
import HomePage from "./pages/HomePage";
import CreatePost from "./Components/CreatePost";
import Videofeed from "./Components/Videofeed";
// assets (IMAGES ONLY)
import speaker from "./assets/speaker.jpg";
import speaker2 from "./assets/speaker2.jpg";
import chinavideo from "./assets/programmer2.mp4"
function App() {
  // ---------- LOAD FROM LOCAL STORAGE ----------
  const loadPosts = () => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [

       {
        id: 1,
        message: "China invest heavily in electrical equipment to improve teaching and learning in schools so as to boost productivity.A lot of student say..more",
        image: speaker,
        name: "China_tech",
        hashtags: "#AI #future",
        tagline: "@techies",
        postimg: speaker,
        video:chinavideo,
        comments: [],
      },
      {
        id: 2,
        message: "I give all Glory to God for such a wonderful session yesterday as I led a group of students to embark on a growth journey.",
        image: speaker,
        name: "Impact_wealth",
        hashtags: "#ArtificialIntelligence #SaudiArabia",
        tagline: "@globalimpact",
        postimg: speaker,
        comments: [],
      },
      {
        id: 3,
        message: "The future you desire must be worked for today,the decision you make determines where you will be and who you become .listen to more of these at www.impactglobe.com",
        image: speaker,
        name: "TakeCharge",
        hashtags: "#AI #future",
        tagline: "@decision_making",
        postimg: speaker2,
        comments: [],
      },
     
    ];
  };
  const [posts, setPosts] = useState(loadPosts);
  // ---------- SAVE TO LOCAL STORAGE WHENEVER POSTS CHANGE ----------
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  // ---------- ADD NEW POST ----------
  const AddnewPost = (newPost) => {
    setPosts(prev => [{ ...newPost, id: Date.now() }, ...prev]);
  };

  const deletePost=(i)=>{
    const newPost=[...posts];
    newPost.splice(i,1);
    setPosts(newPost);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<ProfileSetUp />} />
        {/* Pass posts into HomePage */}
        <Route path="/Home" element={<HomePage posts={posts} setPosts={setPosts} deletePost={deletePost}/>} />
        <Route path="/CreatePost" element={<CreatePost addnewPost={AddnewPost} />} />
        <Route path="/Videofeed" element={<Videofeed />} />
      </Routes>
    </>
  );
}
export default App;