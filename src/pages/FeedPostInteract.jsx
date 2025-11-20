// src/components/FeedPostInteract.jsx
import { useState } from "react";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
function FeedPostInteract({ onCommentClick }) {
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <>
      <div className="w-full pl-4 rounded-2xl flex gap-5 items-center bg-white-500 mt-5">
        {/* LIKE */}
        <div
          className="relative flex justify-center p-3 w-20 bg-gray-100 rounded-full cursor-pointer"
          onClick={() => {
            setIsLiked((s) => !s);
            setLikesCount((c) => (isLiked ? c - 1 : c + 1));
          }}
        >
          {isLiked ? (
            <HeartSolid className="w-6 h-6 text-red-500" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}
          <span className="absolute right-2 top-3 right-3 ">{likesCount}</span>
        </div>
        {/* COMMENT */}
        <div
          className="flex justify-center gap-2 p-3 w-20 bg-gray-100 rounded-full cursor-pointer"
          onClick={onCommentClick}
        >
          <ChatBubbleLeftIcon className="w-6 h-6" />
          <span>50</span>
        </div>
        {/* SHARE */}
        <div className="flex justify-center gap-2 p-3 w-20 bg-gray-100 rounded-full">
          <ShareIcon className="w-6 h-6" />
          <span>21</span>
        </div>
        {/* BOOKMARK */}
        <div
          className="flex justify-center gap-2 p-3 w-20 bg-gray-100 rounded-full cursor-pointer"
          onClick={() => setIsBookmarked((s) => !s)}
        >
          {isBookmarked ? (
            <BookmarkIconSolid className="w-6 h-6" />
          ) : (
            <BookmarkIcon className="w-6 h-6" />
          )}
        </div>
      </div>
    </>
  );
}
export default FeedPostInteract;
