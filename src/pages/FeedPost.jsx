// src/pages/FeedPost.jsx
import {
  EllipsisVerticalIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import FeedPostInteract from "./FeedPostInteract";
import CommentModal from "./CommentModal";
// function FeedPost({ posts, setPosts }) {
//   const [activeCommentPost, setActiveCommentPost] = useState(null);
//   // toggle follow/unfollow
//   const toggleFollow = (id) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((p) =>
//         p.id === id ? { ...p, following: !p.following } : p
//       )
//     );
//   };
//   // add comment
//   const addComment = (postId, username, text) => {
//     if (!text) return;
//     setPosts((prevPosts) =>
//       prevPosts.map((p) =>
//         p.id === postId
//           ? {
//               ...p,
//               comments: [
//                 ...p.comments,
//                 {
//                   id: Date.now(),
//                   username: username || "You",
//                   text,
//                   time: "now",
//                 },
//               ],
//             }
//           : p
//       )
//     );
//   };
//   return (
//     <div className="w-full max-w-xl mx-auto mt-5">
//       {posts.map((post) => (
//         <div key={post.id} className="mb-10 w-full bg-white rounded-lg p-4">
//           {/* Post Header */}
//           <div className="flex justify-between items-center mb-3">
//             <div className="flex gap-3 items-center">
//               <img
//                 src={post.image}
//                 alt=""
//                 className="w-12 h-12 rounded-full border border-gray-300"
//               />
//               <div>
//                 <h2 className="font-bold">{post.name}</h2>
//                 <span className="text-gray-500">{post.tagline}</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <button
//                 className={`${
//                   post.following
//                     ? "text-gray-700 cursor-pointer font-bold bg-gray-100 rounded-sm px-4 py-2 border-none outline-none"
//                     : "text-white cursor-pointer font-bold bg-blue-700 rounded-sm px-4 py-2 border-none outline-none"
//                 }`}
//                 onClick={() => toggleFollow(post.id)}
//               >
//                 {post.following ? "Following" : "Follow"}
//               </button>
//               <div>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </div>
//             </div>
//           </div>
//           {/* Post message */}
//           <div className="text-lg mb-3">{post.message}</div>
//           {/* Post image */}
//           {post.postimg && (
//             <img
//               src={post.postimg}
//               alt=""
//               className="w-full object-cover mb-3"
//             />
//           )}
//           {/* Interactions */}
//           <FeedPostInteract
//             onCommentClick={() => setActiveCommentPost(post.id)}
//           />
//         </div>
//       ))}
//       {/* Comment modal */}
//       {activeCommentPost && (
//         <CommentModal
//           post={posts.find((p) => p.id === activeCommentPost)}
//           onClose={() => setActiveCommentPost(null)}
//           addComment={addComment}
//         />
//       )}
//     </div>
//   );
// }

function FeedPost({ posts, setPosts,deletePost }) {
  const toggleFollow = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === id ? { ...p, following: !p.following } : p
      )
    );
  };
  const [activeCommentPost, setActiveCommentPost] = useState(null);
  const videoRefs = useRef([]);
  const [mutedStates, setMutedStates] = useState({});
  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    setMutedStates((prev) => ({ ...prev, [index]: newMuted }));
  };

  const addComment = (postId, username, text) => {
    if (!text) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [
                ...p.comments,
                {
                  id: Date.now(),
                  username: username || "You",
                  text,
                  time: "now",
                },
              ],
            }
          : p
      )
    );
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
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
  return (
    <>
      <div className="w-full max-w-xl mx-auto">
        {/* Feed Posts */}
        {posts.map((post, index) => (
          <div key={post.id} className="mt-5 mb-15 w-full ">
            {/* Post Header */}
            <div className="w-full bg--200 p-4 mb-6 flex justify-between">
              <h1>Suggested for you</h1>
              <div onClick={()=>deletePost(index)} className="font-bold"><span><XMarkIcon className="w-6 h-6  "/></span></div>
              </div>
            <div className="w-full h-15  flex justify-between pl-4">
              <div className="flex gap-3 flex-2">
                <div className="w-15 h-15 border border-2 border-gray-400 rounded-full">
                  <img
                    className="w-12 h-12 rounded-full ml-1 mt-1"
                    src={post.postimg}
                    alt=""
                  />
                </div>
                
                <div className="mt-1">
                  <h2 className="text-xl font-bold">{post.name}</h2>
                  <span>{post.tagline}</span>
                </div>
                
               
                
              </div>

               <div className="flex flex-1">
                  <span
                  className="pt-1.5 font-bold text-blue-500 cursor-pointer"
                  onClick={() => toggleFollow(post.id)}
                >
                  {post.following ? (
                    <button className="text-gray-700 font-bold bg-gray-100 px-2 py-2">
                      Following
                    </button>
                  ) : (
                    <button className="text-[#ffffff] rounded-sm font-bold bg-blue-600 px-4 py-2">
                      Follow
                    </button>
                  )}
                  </span>
                </div>
             
              <div className="flex items-center gap-3 relative">
                <EllipsisVerticalIcon className="absolute top-2 right-3 w-8 text-gray-900" />
              </div>

            </div>
            {/* Post Message */}
            <div className="pl-4 mt-5 w-full pr-4 text-xl"><span>{post.message}</span>
            
             </div>
            {/* Post Media */}
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
                  className="absolute bottom-3 right-3 bg-black  rounded-full p-2 text-white flex justify-center items-center"
                >
                  {mutedStates[index] ?? true ? (
                    <SpeakerXMarkIcon className="w-6 h-6" />
                  ) : (
                    <SpeakerWaveIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            ) : (
              post.postimg && (
                <img
                  className="mt-5 w-full object-cover"
                  src={post.postimg}
                  alt=""
                />
              )
            )}
            {/* Interactions */}
            <FeedPostInteract
              onCommentClick={() => setActiveCommentPost(post.id)}
            />
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
    </>
  );
}

export default FeedPost;
