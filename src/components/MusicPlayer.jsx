import React from "react";
import ReactPlayer from "react-player";
const Music = ({ preview }) => {
  return (
    <div className="music">
      <ReactPlayer
        url={preview}
        width="15vw"
        height="10vh"
        playing={true}
        controls={true}
      />
    </div>
  );
};

export default Music;
