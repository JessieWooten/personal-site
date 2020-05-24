import React from "react";

export const Container = ({
  children = null,
  className = "",
  overwriteClasses = false,
  style = {},
}) => {
  return (
    <div
      className={`${overwriteClasses ? "" : "w-full"} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
export const Row = ({
  children = null,
  className = "",
  fullWidth = false,
  overwriteClasses = false,
  style = {},
}) => {
  return (
    <div
      className={`${
        overwriteClasses
          ? ""
          : `${fullWidth ? "w-full" : "in-grid"} flex flex-wrap`
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export const Col = ({ children = null, className = "", style = {} }) => {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
};
