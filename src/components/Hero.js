import React from "react";
import IosSwitch from "react-ionicons/lib/IosSwitch";
import PhonePortrait from "react-ionicons/lib/IosPhonePortrait";
import IosLaptop from "react-ionicons/lib/IosLaptop";
import IosCloud from "react-ionicons/lib/IosCloud";
import IosDesktop from "react-ionicons/lib/IosDesktop";
import IosGameControllerA from "react-ionicons/lib/IosGameControllerA";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoCodepen from "react-ionicons/lib/LogoCodepen";
import MdPlanet from "react-ionicons/lib/MdPlanet";

const Hero = () => {
  const myThings = [
    "User Interfaces",
    "Websites",
    "Mobile Apps",
    "Web Apps",
    "APIs",
    "Cool Stuff",
  ];
  const [index, setIndex] = React.useState(0);
  const changeMyThings = () => {
    let thing = document.querySelector("#thing");
    thing.classList.add("slideOut");
    setTimeout(() => {
      thing.classList.remove("slideOut");
      setIndex(index === myThings.length - 1 ? 0 : index + 1);
    }, 250);
  };
  let myInterval = setInterval(() => {
    clearInterval(myInterval);
    changeMyThings();
  }, 3000);
  let updateIcon = (index) => {
    switch (index !== undefined) {
      case index === 0:
        return <IosSwitch className="inline" color="#F9D423" fontSize=".6em" />;
      case index === 1:
        return <IosLaptop className="inline" color="#F9D423" fontSize=".8em" />;
      case index === 2:
        return (
          <PhonePortrait className="inline" color="#F9D423" fontSize=".8em" />
        );
      case index === 3:
        return (
          <IosDesktop className="inline" color="#F9D423" fontSize=".8em" />
        );
      case index === 4:
        return <IosCloud className="inline" color="#F9D423" fontSize=".8em" />;
      case index === 5:
        return <MdPlanet className="inline" color="#F9D423" fontSize=".8em" />;
      default:
        return (
          <IosGameControllerA
            className="inline"
            color="#F9D423"
            fontSize=".8em"
          />
        );
    }
  };
  return (
    <header id="hero" className="hero-wrapper flex jutify-center">
      <section className="hero-message text-center sm:text-left z-10">
        <h1 className="sm:text-5xl md:text-6xl">Hi, I'm Jessie</h1>

        <h3 className="sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-start flex-col sm:flex-row whitespace-no-wrap">
          and I make
          <span
            id="thing"
            className="slideIn flex items-start justify-center pl-3"
          >
            {myThings[index]} {updateIcon(index)}
          </span>
        </h3>

        {/* LINKS */}
        <div className="pt-2 flex items-center justify-center sm:justify-start">
          <a
            className="sm:pr-2 md: pr-3"
            href="https://www.linkedin.com/in/jessie-wooten-80770a44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLinkedin
              color="#fcfcfc"
              fontSize="2em"
              className="yellow-fill-hover"
            />
          </a>
          <a
            className="sm:pr-2 md: pr-3"
            href="https://github.com/JessieWooten"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoGithub
              color="#fcfcfc"
              fontSize="2em"
              className="yellow-fill-hover"
            />
          </a>
          <a
            className="sm:pr-2 md: pr-3"
            href="https://codepen.io/JessieWooten"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoCodepen
              color="#fcfcfc"
              fontSize="2em"
              className="yellow-fill-hover"
            />
          </a>
        </div>
      </section>
      <div className="hero-wrapper-wedge" />
    </header>
  );
};

export default Hero;
