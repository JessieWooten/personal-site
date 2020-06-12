import React from "react";
import { Container, Row, Col } from "../Layout.js";
import Card from "../Card.js";
import portfolioData from "../../data/portfolio.json";
import Logo from "../../assets/FunpastaWeb.png";
import FadeIn from "../FadeIn";

const Portfolio = ({ setSelectedPiece }) => {
  return (
    <Container className="white-bg px-8 py-40 overflow-hidden">
      <Row>
        <h2 className="title">My Work</h2>
        <p className="black pt-4 pb-8 opacity-75 slide-in-bottom-with-fade animate600ms font-light">
          I'm a full stack developer from Nashville, TN. I've been
          hooked on web development since 2016 and love building tools that make
          life just a little bit easier. In case you're wondering, my mobile
          apps are still JavaScript apps, just running in a native webview. Here
          are a few projects I've worked on recently!
        </p>
      </Row>
      <FadeIn>
        <Row>
          {portfolioData.map((piece, i) => (
            <Col
              key={i}
              className="w-full md:w-1/2 lg:w-1/3 md:pr-4 pb-4 slide-in-bottom-with-fade animate600ms"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Card
                onClick={() => setSelectedPiece(piece)}
                foregroundImg={
                  piece.foregroundImg || `http://${window.location.host}${Logo}`
                }
                background={piece.background}
                title={piece.title}
                summary={piece.summary}
                techs={piece.techs}
              />
            </Col>
          ))}
        </Row>
      </FadeIn>
    </Container>
  );
};

export default Portfolio;
