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
  <Container className="pt-32 text-center px-8 white-bg relative">
    <FadeInScroll>
      <Row>
        {/* <Col className="pr-8 w-full md:w-1/3">
          <ImageWrapper className="m-auto md:m-0">
            <img className="me" alt="me" src={JessiePic} />
          </ImageWrapper>
        </Col> */}
        <Col className="w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 slide-in-bottom-with-fade animate600ms">
          <h3 className="black">Hey, my name is Jessie </h3>
          <p className="text black px-8">
            my name is Jessie and I'm a full stack developer from Nashville, TN.
            I'm self-taught so I love learning and I'm always looking for that
            new hotness add to the toolbelt! I have spent the last 4 years
            building complex single page web applications, hybrid mobile
            applications, and responsive web sites.
            <br />
            What can I say, <em>I love what I do!</em>
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
