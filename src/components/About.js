import React from "react";
const aboutStyle = {
  minHeight: "300px",
};

const About = () => (
  <section
    className="w-50 py-10 px-8 sm:px-20 lg:px-56 flex items-center justify-center text-center"
    style={aboutStyle}
  >
    <p className="text-xl font-bold">
      I am a versatile developer with 4 years experience building complex single
      page web applications, hybrid mobile applications, and responsive web
      sites. I am a self starter with a passion for web technologies and using
      the web stack to solve unique problems.
    </p>
  </section>
);

export default About;
