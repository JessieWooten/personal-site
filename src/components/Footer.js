import React from "react";

const Footer = () => {
  return (
    <footer className="w-full black-bg">
      <p className="text-center white p-6 font-thin text-sm">
        © Jessie Wooten {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
