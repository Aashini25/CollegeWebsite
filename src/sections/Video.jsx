import React, { useState } from "react";
import ReactPlayer from "react-player";
import college from "../assets/images/college.png"; 

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative h-[700px] max-lg:h-[400px] max-sm:h-[200px] mx-16 border-4 border-blue rounded-xl overflow-hidden">
      <img src={college} alt="Background" className="w-full h-full object-cover absolute inset-0" />
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-20 w-20 text-blue fill-current opacity-80 hover:opacity-100"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
    d="M21.382,11.769l-16-9C5.159,2.651,4.808,2.53,4.455,2.53C4.103,2.53,3.752,2.651,3.418,2.769
    C2.81,2.987,2.416,3.484,2.416,4.034v15.932c0,0.549,0.394,1.047,1.002,1.266c0.166,0.081,0.341,0.121,0.515,0.121
    c0.312,0,0.623-0.121,0.86-0.356l16-9c0.297-0.166,0.481-0.442,0.481-0.755C21.863,12.211,21.679,11.935,21.382,11.769z"
  />
</svg>

        </div>
      )}
      {isPlaying && (
        <ReactPlayer
          url="hhttps://youtu.be/Awq875Y1ZPI?si=cbWa6ohZhwaDFYDg"
          playing
          controls
          width="100%"
          height="100%"
          className="absolute inset-0"
        />
      )}
    </div>
  );
};

export default Video;
