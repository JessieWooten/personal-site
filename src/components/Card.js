import React from "react";

const Card = ({
  title,
  backgroundImg,
  foregroundImg,
  alt,
  description,
  tech,
  onClick,
}) => {
  const imagesDir = require.context("../assets", true);
  return (
    <div
      className="w-full overflow-hidden card mr-2"
      onClick={onClick}
      style={{
        background: backgroundImg.includes("http")
          ? `url(${backgroundImg}`
          : backgroundImg,
      }}
    >
      {/* Foreground image */}
      <img
        src={imagesDir(`./${foregroundImg}`)}
        alt={alt || ""}
        className="w-2/4 foreground-image"
      />
      <div className="p-3 info flex justify-center flex-col items-center">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs">{description}</p>
        <p className="text-xs">Technologies: {tech}</p>
      </div>
    </div>
  );
};

export default Card;
