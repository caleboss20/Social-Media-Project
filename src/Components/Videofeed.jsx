import React, { useState, useRef } from "react";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import programmersvideo from "../assets/programmers.mp4";
import football from "../assets/football.mp4";
import parliament from "../assets/parliament.mp4";
 const videos = [
    {
    src: programmersvideo,
    caption: "CNN news update",
    user: "CNN",
  },
     {
    src: parliament,
    caption: "Parliament house meeting highlights",
    user: "GovNews",
  },
  {
    src: football,
    caption: "Crazy football goal!",
    user: "SportsDaily",
  },
 
  
];
const Videofeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartRef = useRef(0);
  const total = videos.length;
  // --- Touch Handlers ---
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    if (isAnimating) return;
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStartRef.current - touchEnd;
    if (diff > 50) {
      // Swipe up → next video
      setDirection(1);
      setNextIndex((currentIndex + 1) % total); // loop back to first
      setIsAnimating(true);
    } else if (diff < -50) {
      // Swipe down → previous video
      setDirection(-1);
      setNextIndex((currentIndex - 1 + total) % total); // loop to last
      setIsAnimating(true);
    }
  };
  // --- Keyboard navigation ---
  const handleKey = (e) => {
    if (isAnimating) return;
    if (e.key === "ArrowDown") {
      setDirection(1);
      setNextIndex((currentIndex + 1) % total);
      setIsAnimating(true);
    } else if (e.key === "ArrowUp") {
      setDirection(-1);
      setNextIndex((currentIndex - 1 + total) % total);
      setIsAnimating(true);
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, isAnimating]);
  const handleTransitionEnd = () => {
    if (nextIndex !== null) {
      setCurrentIndex(nextIndex);
      setNextIndex(null);
      setDirection(0);
      setIsAnimating(false);
    }
  };

  const renderVideo = (index, pos) => (
    <div
      key={index}
      className="absolute top-0 left-0 w-full h-screen transition-transform duration-500 ease-in-out"
      style={{
        transform:
          nextIndex === null
            ? "translateY(0)"
            : pos === "current"
            ? `translateY(${direction === 1 ? "-100%" : "100%"})`
            : `${direction === 1 ? "translateY(100%)" : "translateY(-100%)"}`,
      }}
      onTransitionEnd={pos === "next" ? handleTransitionEnd : undefined}
    >
      <video
        src={videos[index].src}
        className="h-screen w-full object-cover"
        autoPlay
        muted
        loop
      />
      {/* Right-side icons */}
      <div className="absolute right-15 bottom-24 flex flex-col items-center space-y-6 text-white">
        <HeartIcon />
        <ChatBubbleLeftIcon />
        <ShareIcon />
      </div>
      {/* Caption */}
      <div className="absolute bottom-10 left-5 text-white">
        <p className="text-lg">{videos[index].caption}</p>
        <p className="text-sm">@{videos[index].user}</p>
      </div>
    </div>
  );
  return (
    <div
      className="h-screen w-full relative bg-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {videos.map((video, index) => {
        // Only render current and next video for performance & animation
        if (index === currentIndex || index === nextIndex) {
          const pos = index === currentIndex ? "current" : "next";
          return renderVideo(index, pos);
        } else return null; // skip all other videos
      })}
    </div>
  );
};
export default Videofeed;