import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

const Video = () => {
  return (
    <div className="flex flex-col items-center">
      
      <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 mx-2 my-4"
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 mx-2 my-4"
          >
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
};

export default Video;