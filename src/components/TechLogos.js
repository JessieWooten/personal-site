import React from "react";

const TechLogos = ({ logos, className = "", style = {} }) => {
  function getTechImage(tech) {
    switch (tech) {
      case "javascript":
        return { className: "w-8 mr-2", img: "javascript.png", title: "JavaScript" };
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
        return {
          className: "h-6 mr-2",
          img: "express.png",
          title: "Express.js",
        };
      case "mysql":
        return {
          className: "h-8 mr-2",
          img: "mysql.png",
          title: "MySQL",
        };
      case "azure":
        return {
          className: "h-6 mr-2",
          img: "azure.png",
          title: "Microsoft Azure",
        };
      default:
        return { className: "w-8 mr-2", img: "", title: "" };
    }
  }
  const imagesDir = require.context("../assets", true);
  return (
    <div
      className={`flex items-center flex-wrap mt-21 ${className}`}
      style={style}
    >
      {logos.map((t, i) => {
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
  );
};

export default TechLogos;
