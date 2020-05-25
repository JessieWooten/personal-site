import React from "react";
import { Container, Row, Col } from "../Layout.js";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import MailIcon from "react-ionicons/lib/IosMail";

const ContactMe = () => {
  return (
    <Container className="py-56 px-8 flex justify-center flex-col relative">
      <div className="wedge-left" />
      <Row>
        <h2 className="title pb-8 white">Connect With Me</h2>
      </Row>
      <Row>
        <Col className="w-full md:w-1/2 lg:w-1/3 pr-4 pb-4 flex">
          <a
            className="sm:pr-2 md: pr-3"
            href="mailto:jessiewootendev@gmail.com"
            rel="noopener noreferrer"
          >
            <MailIcon
              color="#fcfcfc"
              fontSize="2rem"
              className="yellow-fill-hover"
            />
          </a>
          <a
            className="sm:pr-2 md: pr-3"
            href="https://www.linkedin.com/in/jessie-wooten-80770a44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLinkedin
              color="#fcfcfc"
              fontSize="2rem"
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
              fontSize="2rem"
              className="yellow-fill-hover"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
