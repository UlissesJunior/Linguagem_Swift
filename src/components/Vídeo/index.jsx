import React from "react";

function Video({ text, videoUrl, description }) {
  return (
    <div className="video-container">
      <div className="video">
        <iframe src={videoUrl}></iframe>
      </div>
      <div className="text">
        {text}
        <br />
        <div className="description">{description} </div>
      </div>
    </div>
  );
}

export default Video;
