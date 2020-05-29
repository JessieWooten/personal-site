import React from "react";

const Footer = () => {
  return (
    <footer className="w-full black-bg">
      <p className="text-center white p-4 font-thin text-sm">
        Site made with React.js and Tailwind CSS | © Jessie Wooten{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
