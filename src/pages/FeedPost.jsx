// src/components/Feed.jsx
import { useEffect, useRef, useState } from "react";
import mettle1 from "../assets/mettle.jpg";
import mettle2 from "../assets/mettle1.jpeg";
import pitch from "../assets/pitch-competition.jpg";
import speaker from "../assets/speaker.jpg";
import speaker2 from "../assets/speaker2.jpg";
import minister from "../assets/minister.jpg";
import social2 from "../assets/social2.png";
import social4 from "../assets/social4.png";
import social5 from "../assets/social5.jpg";
import social6 from "../assets/social6.jpg";
import programmersvideo from "../assets/programmers.mp4";
import programmer2 from "../assets/programmer2.mp4";
import { EllipsisVerticalIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import FeedPostInteract from "./FeedPostInteract";
import CommentModal from "./CommentModal";
function FeedPost() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      message: "Joe Mettle has won the artist of the year award. He was interviewed and guess what..",
      image: mettle1,
      name: "Joe Mettle",
      tagline: "@mettle_singer",
      postimg: mettle2,
      comments: [{ id: 1, username: "agnogreen", text: " Joe Mettle is a blessing", time: "18h" }],
    },
    {
      id: 4,
      message: "Chinese Teacher speaks to CNN about electric machinery during classes which is boosting productivity in school",
      image: speaker,
      name: "China News",
      tagline: "@chinese",
      video: programmer2,
      postimg: "",
      comments: [],
    },
    {
      id: 7,
      message: "Mark Zuckerberg and Richard Stallman speak about programming's future",
      image: speaker,
      name: "TechGiants",
      tagline: "@techies",
      video: programmersvideo,
      postimg: "",
      comments: [],
    },
     {
      id: 5,
      message:
        "The Board of Directors together with the Minority leader at parliament had such a trailblaizing moment where",
      image: minister,
      name: "Minister",
      tagline: "@ministerX",
      postimg: minister,
      comments: [],
    },
    {
      id: 6,
      message:
        "I'm really grateful to God Almighty for such a successful session last night during the Launch of my new book...",
      image: speaker2,
      name: "Lina Morey",
      tagline: "@linaspeaks",
      postimg: speaker2,
      comments: [],
    },
    {
      id: 7,
      message:
        "Mark Zuckerberg and Richard Stallman speak about the future of programming. how programming is going to shape the future of humanity ",
      image: speaker,
      name: "TechGiants",
      tagline: "@techies",
      video: programmersvideo,
      postimg: "",
      comments: [],
    },
    {
      id: 8,
      message:
        "Ceo and Founder of Reecopak Ghana: We have turned 1 million tons of planting waste including banana pseudostems into eco-friendly packaging this quarter.",
      hashtags: "#impact #innovation #EcoFriendly",
      image: social2,
      name: "JoshuaReeco",
      tagline: "@Reecopack_gh",
      postimg: social2,
      comments: [],
    },
    {
      id: 9,
      message:
        "The Government of Ghana is doing it's best to pursue a data-driven fiscal strategy to boost revenue for long-term sustainability",
      image: social4,
      name: "Ato Forson",
      tagline: "@Ato_forson",
      postimg: social4,
      comments: [],
    },
    {
      id: 10,
      message:
        "Bitcoin is the most amazing mathematical miracle.It's better than gold.God bless Satoshi Nakamoto #legendary",
      image: social6,
      name: "Steve",
      tagline: "@bitcoin_gold",
      postimg: social6,
      comments: [],
    },
  ]);



  const [activeCommentPost, setActiveCommentPost] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  // Refs and muted states
  const videoRefs = useRef([]);
  const [mutedStates, setMutedStates] = useState({}); // track mute per video
  // Add comment function
  const addComment = (postId, username, text) => {
    if (!text) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [...p.comments, { id: Date.now(), username: username || "You", text, time: "now" }],
            }
          : p
      )
    );
  };
  // IntersectionObserver to auto-play/pause videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            // pause all other videos
            videoRefs.current.forEach((v) => v !== video && v.pause());
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );
    videoRefs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, [posts]);
  // toggle mute per video
  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    setMutedStates((prev) => ({ ...prev, [index]: newMuted }));
  };
  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id} className="mt-5 mb-15 w-full ">
          {/* Post Header */}
          <div className="w-full h-15 flex justify-between pl-4">
            <div className="flex gap-3">
              <div className="w-15 h-15 border border-2 border-gray-400 rounded-full">
                <img className="w-12 h-12 rounded-full ml-1 mt-1" src={post.image} alt="" />
              </div>
              <div className="mt-1">
                <h2 className="text-xl font-bold">{post.name}</h2>
                <span>{post.tagline}</span>
              </div>
              <span
                className="pt-1.5 font-bold text-blue-500 cursor-pointer"
                onClick={()=>setIsFollowing(!isFollowing)}
              >
                {isFollowing ? <span className="text-black font-bold">Following</span> : <span>Follow</span>}
              </span>
            </div>
            <div className="flex items-center gap-3 relative">
              <span className="absolute top-3 right-10 text-gray-600">4h</span>
              <EllipsisVerticalIcon className="absolute top-2 right-2 w-8 text-gray-900" />
            </div>
          </div>
          {/* Post Message */}
          <div className="pl-4 mt-5 text-xl">
            {post.message} <span className="text-blue-500">{post.hashtags}</span>
          </div>
          {/* Video / Image */}
          {post.video ? (
            <div className="relative mt-4">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="h-60 w-full object-cover"
                muted={mutedStates[index] ?? true}
                loop
                playsInline
                autoPlay
                src={post.video}
              />
              <button
                onClick={() => toggleMute(index)}
                className="absolute bottom-3 right-3 bg-black bg-opacity-50 rounded-full p-2 text-white flex justify-center items-center"
              >
                {mutedStates[index] ?? true ? (
                  <SpeakerXMarkIcon className="w-6 h-6" />
                ) : (
                  <SpeakerWaveIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          ) : (
            post.postimg && <img className="mt-5 w-full object-cover " src={post.postimg} alt="" />
          )}
          {/* Interactions */}
          <FeedPostInteract onCommentClick={() => setActiveCommentPost(post.id)} />
        </div>
      ))}
      {/* Comment Modal */}
      {activeCommentPost && (
        <CommentModal
          post={posts.find((p) => p.id === activeCommentPost)}
          onClose={() => setActiveCommentPost(null)}
          addComment={addComment}
        />
      )}
    </div>
  );
}
export default FeedPost;