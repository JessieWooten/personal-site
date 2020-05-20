import React from "react";

export const Container = ({
  children = null,
  className = "",
  overwriteClasses = false,
}) => {
  return (
    <div className={`${overwriteClasses ? "" : "w-full"} ${className}`}>
      {children}
    </div>
  );
};
export const Row = ({
  children = null,
  className = "",
  fullWidth = false,
  overwriteClasses = false,
}) => {
  return (
    <div
      className={`${
        overwriteClasses
          ? ""
          : `${fullWidth ? "w-full" : "in-grid"} flex flex-wrap md:flex-no-wrap`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const Col = ({ children = null, className = "" }) => {
  return <div className={`${className}`}>{children}</div>;
};
