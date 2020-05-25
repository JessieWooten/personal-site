import React from "react";

const Card = ({
  title,
  backgroundImg,
  foregroundImg,
  alt,
  description,
  onClick,
}) => {
  return (
    <div
      className="w-full overflow-hidden card mr-2"
      onClick={onClick}
      style={{ backgroundImage: `url(${backgroundImg}` }}
    >
      {/* Foreground image */}
      <img
        src={foregroundImg}
        alt={alt || ""}
        className="w-4/5 foreground-image"
      />
      <div className="p-3 info flex justify-center flex-col items-center">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Card;
