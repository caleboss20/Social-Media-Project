import { useState, useRef } from "react";
import { XMarkIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function CreatePost() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const textareaRef = useRef(null);
  
  const handleTextInput = (e) => {
    setText(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };
  const handleImageSelect = (e) => {
    const files = [...e.target.files];
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };
  const handleVideoSelect = (e) => {
    const files = [...e.target.files];
    const newVideos = files.map((file) => URL.createObjectURL(file));
    setVideos((prev) => [...prev, ...newVideos]);
  };
  const removeImage = (url) => setImages(images.filter((img) => img !== url));
  const removeVideo = (url) => setVideos(videos.filter((vid) => vid !== url));
  const isDisabled = text.trim() === "" && images.length === 0 && videos.length === 0;
 
  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-sm  relative min-h-screen pb-32">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 ">
        <Link to="/Home">
          <XMarkIcon className="w-7 h-7 cursor-pointer text-gray-700" />
        </Link>
        <h2 className="font-bold text-xl text-gray-900">Create Post</h2>
        <button
          disabled={isDisabled}
          className={`rounded-full px-5 py-1.5 font-semibold text-white transition
            ${isDisabled ? "bg-gray-200" : "bg-blue-600"}
          `}
        >
          Post
        </button>
      </div>
      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={text}
        onInput={handleTextInput}
        placeholder="What do you want to talk about?"
        className="p-4 w-full resize-none overflow-hidden text-lg leading-7 focus:outline-none text-gray-900 placeholder-gray-500"
        rows={1}
      />
      {/* Image Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-3 px-4 mt-2">
          {images.map((img, i) => (
            <div key={i} className="relative">
              <img src={img} className="rounded-xl w-full h-40 object-cover" />
              {/* Always visible remove button */}
              <button
                onClick={() => removeImage(img)}
                className="absolute top-2 right-2 bg-black/60 p-1 rounded-full"
              >
                <XMarkIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Video Grid */}
      {videos.length > 0 && (
        <div className="grid grid-cols-1 gap-3 px-4 mt-4">
          {videos.map((vid, i) => (
            <div key={i} className="relative">
              <video src={vid} controls className="rounded-xl w-full max-h-64 bg-black" />
              {/* Always visible remove button */}
              <button
                onClick={() => removeVideo(vid)}
                className="absolute top-2 right-2 bg-black/60 p-1 rounded-full"
              >
                <XMarkIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Bar */}
      <div className="fixed bottom-4 flex gap-4 right-8">
        <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
          <PhotoIcon className="w-7 h-7 text-blue-600" />
          <span>Image</span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageSelect}
          />
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
          <VideoCameraIcon className="w-7 h-7 text-green-600" />
          <span>Video</span>
          <input
            type="file"
            accept="video/*"
            multiple
            className="hidden"
            onChange={handleVideoSelect}
          />
        </label>
      </div>
    </div>
  );
}
export default CreatePost;