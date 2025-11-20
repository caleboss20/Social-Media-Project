// src/components/CommentModal.jsx
import { useState, useEffect, useRef } from "react";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

 function CommentModal({ post, onClose, addComment }) {
  const [input, setInput] = useState("");
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const containerRef = useRef(null);
  // lock body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  // optional: focus input when modal opens
  useEffect(() => {
    const t = setTimeout(() => {
      const el = containerRef.current?.querySelector("input");
      if (el) el.focus();
    }, 250);
    return () => clearTimeout(t);
  }, []);
  const handlePost = () => {
    if (!input.trim()) return;
    addComment(post.id, undefined, input.trim());
    setInput("");
    // keep modal open so user can add more, or auto-close:
    // onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      {/* sliding panel */}
      <div
        ref={containerRef}
        className="relative w-full bg-white rounded-t-2xl shadow-xl transform transition-transform duration-300 ease-out translate-y-0"
        style={{ height: "75vh" }}
      >
        {/* drag bar + header */}
        <div className="p-4 border-b">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3" />
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Comments</h2>
            <button onClick={onClose} className="p-1">
              <XMarkIcon className="w-6 h-6  text-gray-800" />
            </button>
          </div>
        </div>
        {/* comments list */}
        <div
          className="px-4 pt-3 overflow-y-auto"
          style={{ height: "calc(75vh - 140px)" }}
        >
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((c) => (
              <div
                key={c.id}
                className="flex gap-3 items-start justify-between py-3 border-b last:border-b-0"
              >
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                    {c.username?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <div>
                    <div className="text-xm font-semibold">{c.username}</div>
                    <div className="text-gray-800">{c.text}</div>
                    <div className="text-sm text-gray-500 mt-1">{c.time}</div>
                  </div>
                </div>
                <div
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex gap-2 mt-1"
                >
                  {isLiked ? (
                    <HeartSolid className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartIcon className="w-6 h-6" />
                  )}
                  <span>{isLiked ? 1 : 0}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-6">
              No comments yet — be the first to comment!
            </div>
          )}
        </div>
        {/* bottom input */}
        <div className="p-1 pr-4 border-t flex items-center gap-3 ">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a comment..."
            className="flex-4 px-4 py-2 rounded-full border border-gray-300 text-lg placeholder:text-base focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            onClick={handlePost}
            className="px-2 py-2 flex-1 rounded-full bg-blue-500 text-white font-medium"
          >
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CommentModal;