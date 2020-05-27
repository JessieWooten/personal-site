import React from "react";

// export const SubTitle = ({children}) => ();
export const Heading = ({ children, className = "", style = {} }) => (
  <h2 className={`font-bold text-xl mb-2 ${className}`} style={style}>
    {children}
  </h2>
);

export const SubHeading = ({ children, className = "", style = {} }) => (
  <h3 className={`font-bold text-lg mb-2 ${className}`} style={style}>
    {children}
  </h3>
);
export const Text = ({ children, className = "", style = {} }) => (
  <p className={`text-gray-700 text-base pb-2 ${className}`} style={style}>
    {children}
  </p>
);
