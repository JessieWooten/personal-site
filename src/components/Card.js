import React from "react";
import TechLogos from "./TechLogos";

const Card = ({
  title,
  background,
  foregroundImg,
  alt,
  summary,
  techs,
  onClick,
}) => {
  const imagesDir = require.context("../assets", true);
  return (
    <div
      className="w-full overflow-hidden card mr-2"
      onClick={onClick}
      style={{
        background: background.includes("http")
          ? `url(${background}`
          : background,
      }}
    >
      {/* Foreground image */}
      <img
        src={imagesDir(`./${foregroundImg}`)}
        alt={alt || ""}
        className="w-2/4 foreground-image fade-in animate400ms"
        style={{ animationDelay: 200 }}
      />
      <div className="p-3 info flex justify-center flex-col items-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xs">{summary}</p>
        <TechLogos logos={techs} className="justify-center" />
      </div>
    </div>
  );
};

export default Card;
