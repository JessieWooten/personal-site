import React from "react";

const Player = ({ width = "560px", height = "315px", src, title }) => {
  return (
    <div className="youtube-player flex item-center justify-center">
      <iframe
        title={title}
        src={src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Player;
