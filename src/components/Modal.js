import React, { useRef } from "react";
import CloseIcon from "./CloseIcon";
import { Heading, SubHeading, Text } from "./Typeography";
import TechLogos from "./TechLogos";

const ProjectModal = ({
  close,
  project: {
    title,
    background,
    foregroundImg,
    summary,
    details,
    techs,
    href,
    buttons,
  },
}) => {
  const imagesDir = require.context("../assets", true);
  const overlayRef = useRef();
  function handleClose() {
    overlayRef.current.classList.add("fade-out");
    setTimeout(close, 200);
  }
  return (
    <div
      ref={overlayRef}
      className="overlay flex items-center justify-center fade-in animate200ms"
      onClick={handleClose}
    >
      {/* Modal */}
      <div
        className="modal w-10/12 md:w-6/12 white-bg rounded-lg relative overflow-hidden slide-in-bottom-with-fade animate400ms shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon
          className="absolute top-0 right-0 p-4"
          size="14px"
          color="white"
          onClick={handleClose}
        />
        <div className="w-full h-full overflow-y-auto overflow-x-hidden inner">
          {/* Image  */}
          <div
            className="w-full flex items-center justify-center overflow-hidden p-8"
            style={{
              background:
                background && background.includes("http")
                  ? `url(${background}`
                  : background,
            }}
          >
            <img
              className="w-2/4"
              alt={title}
              src={imagesDir(`./${foregroundImg}`)}
            />
          </div>
          {/* Text */}
          <div className="p-4 black">
            <Heading>{title}</Heading>
            <Text className="pb-4">{summary}</Text>

            {details &&
              details.map((detail, i) => (
                <div className="pb-4" key={i}>
                  <SubHeading>{detail.title}</SubHeading>
                  {detail.htmlText ? (
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: detail.htmlText,
                      }}
                    />
                  ) : (
                    <Text>{detail.text}</Text>
                  )}
                </div>
              ))}
            <SubHeading>Technologies</SubHeading>
            <TechLogos className="justify-start mb-4" logos={techs} />
            {/* Buttons */}
            <div className="flex items-center justify-center">
              {Array.isArray(buttons) &&
                buttons.map((button, i) => (
                  <a
                    key={i}
                    href={button.link}
                    disabled={!button.link}
                    className={!button.link ? "disabled m-1" : "m-1"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      disabled={!button.link}
                      className="blue-bg purple-bg-hover white font-bold py-2 px-4 rounded block m-auto"
                    >
                      {button.text}
                    </button>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
