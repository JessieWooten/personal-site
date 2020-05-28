import React from "react";

const Player = ({ width = "560", height = "315", src, title }) => {
  return (
    <iframe
      title={title}
      width="560"
      height="315"
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
export default Player;
