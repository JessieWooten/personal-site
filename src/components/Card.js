import React from "react";

function getTechImage(tech) {
  switch (tech) {
    case "vue":
      return { className: "w-8 mr-2", img: "vue.png", title: "Vue.js" };
    case "react":
      return { className: "w-10 mr-2", img: "react.png", title: "React.js" };
    case "typescript":
      return {
        className: "w-8 mr-2",
        img: "typescript.png",
        title: "TypeScript",
      };
    case "node":
      return { className: "w-8 mr-2", img: "node.png", title: "Node.js" };
    case "swift":
      return { className: "w-8 mr-2", img: "swift.png", title: "Swift" };
    case "java":
      return { className: "w-8 mr-2", img: "java.png", title: "Java" };
    case "express":
      return { className: "h-6 mr-2", img: "express.png", title: "Express.js" };
    case "mysql":
      return { className: "w-8 mr-2 flex-1", img: "mysql.png", title: "MySQL" };
    default:
      return { className: "w-8 mr-2", img: "", title: "" };
  }
}

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
        className="w-2/4 foreground-image"
      />
      <div className="p-3 info flex justify-center flex-col items-center">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs">{summary}</p>
        <div className="flex items-center justify-center flex-wrap mt-2">
          {techs.map((t, i) => {
            const tech = getTechImage(t.toLowerCase());
            return (
              <img
                key={i}
                title={tech.title}
                className={tech.className}
                src={imagesDir(`./logos/${tech.img}`)}
                alt={tech.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
