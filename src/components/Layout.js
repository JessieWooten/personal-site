import React from "react";

function generateClassNames() {
  return [...arguments].filter((c) => !!c).join(" ");
}
export const Container = ({
  children = null,
  className = "",
  sm = "",
  md = "",
  lg = "",
  xl = "",
  fullWidth = false,
}) => {
  return (
    <div
      className={`${fullWidth ? "w-full" : "in-grid"} flex ${generateClassNames(
        sm,
        md,
        lg,
        xl,
        className
      )}`}
    >
      {children}
    </div>
  );
};
export const Row = ({
  children = null,
  className = "",
  sm = "",
  md = "",
  lg = "",
  xl = "",
}) => {
  return (
    <div className={`${generateClassNames(sm, md, lg, xl, className)}`}>
      {children}
    </div>
  );
};

export const Col = ({
  children = null,
  className = "",
  sm = "",
  md = "",
  lg = "",
  xl = "",
}) => {
  return (
    <div className={`${generateClassNames(sm, md, lg, xl, className)}`}>
      {children}
    </div>
  );
};
