import React from "react";
import { Container, Row, Col } from "../Layout.js";
import FadeInScroll from "../FadeIn";
import JessiePic from "../../assets/jessie_720.jpg";
import styled from "styled-components";

const About = () => (
  // <section
  //   className="w-50 py-10 px-8 sm:px-20 lg:px-56 flex items-center justify-center text-center"
  //   style={aboutStyle}
  // >
  <Container className="pt-56 px-8 white-bg relative">
    <Row className="w-full">
      <h2 className="title pb-8">About Me</h2>
    </Row>
    <FadeInScroll>
      <Row>
        <Col className="pr-8 w-full md:w-1/3">
          <ImageWrapper className="m-auto md:m-0">
            <img className="me" alt="me" src={JessiePic} />
          </ImageWrapper>
        </Col>
        <Col className="w-full md:w-2/3">
          <p className="text">
            I am a self-taught developer from Nashville, TN with a passion for
            solving unique problems through web technologies. I have spent the
            last 4 years building complex single page web applications, hybrid
            mobile applications, and responsive web sites. I love what I do!
          </p>
        </Col>
      </Row>
    </FadeInScroll>
  </Container>
  // </section>
);

export default About;

const ImageWrapper = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  & img.me {
    height: 100%;
    max-width: 300%;
    width: auto;
  }
`;
