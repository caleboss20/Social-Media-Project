import { useState, useRef } from "react";
import { XMarkIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function CreatePost({ addnewPost }) {
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
  const handleNewPost = () => {
    if (isDisabled) return;
    const newPost = {
      id: Date.now(),
      message: text,
      postimg: images.length > 0 ? images[0] : "",
      video: videos.length > 0 ? videos[0] : "",
      name: "You",
      tagline: "@you",
      comments: [],
    };
    addnewPost(newPost); // add to parent state
    setText("");
    setImages([]);
    setVideos([]);
  };
  return (
    <div className="relative w-full max-w-xl mx-auto bg-white shadow-sm min-h-screen pb-32">
      <div className="flex justify-between items-center p-4">
        <Link to="/Home">
          <XMarkIcon className="w-7 h-7 cursor-pointer text-gray-700" />
        </Link>
        <h2 className="font-bold text-xl text-gray-900">Create Post</h2>
        <button
          disabled={isDisabled}
          onClick={handleNewPost}
          className={`rounded-full px-5 py-1.5 font-semibold text-white transition ${
            isDisabled ? "bg-gray-200" : "bg-blue-600"
          }`}
        >
          Post
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onInput={handleTextInput}
        placeholder="What do you want to talk about?"
        className="p-4 w-full resize-none overflow-hidden text-lg leading-7 focus:outline-none text-gray-900 placeholder-gray-500"
        rows={1}
      />
      {/* Images */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 gap-3 px-4 mt-2">
          {images.map((img, i) => (
            <div key={i} className="relative">
              <img src={img} className="rounded-xl w-full h-40 object-cover" />
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
      {/* Videos */}
      {videos.length > 0 && (
        <div className="grid grid-cols-1 gap-3 px-4 mt-4">
          {videos.map((vid, i) => (
            <div key={i} className="relative">
              <video src={vid} controls className="rounded-xl w-full max-h-64 bg-black" />
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
      <div className="absolute bottom-10 flex gap-4 right-8">
        <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
          <PhotoIcon className="w-7 h-7 text-blue-600" />
          <span>Image</span>
          <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageSelect} />
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
          <VideoCameraIcon className="w-7 h-7 text-green-600" />
          <span>Video</span>
          <input type="file" accept="video/*" multiple className="hidden" onChange={handleVideoSelect} />
        </label>
      </div>
    </div>
  );
}
export default CreatePost;