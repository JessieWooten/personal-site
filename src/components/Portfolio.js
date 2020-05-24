import React from "react";
import { Container, Row, Col } from "./Layout.js";
import Card from "./Card.js";
import portfolioData from "../data/portfolio.json";
import Logo from "../assets/FunpastaWeb.png";
import FadeIn from "./FadeIn";

const Portfolio = () => {
  return (
    <Container className="white-bg px-8 py-40 overflow-hidden">
      <Row>
        <h2 className="title pb-8">My Work</h2>
      </Row>
      <FadeIn>
        <Row>
          {portfolioData.map((piece, i) => (
            <Col
              key={i}
              className="w-full md:w-1/2 lg:w-1/3 pr-4 pb-4 slide-in-bottom-with-fade animate600ms"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Card
                onClick={() => null}
                foregroundImg={
                  piece.foregroundImg || `http://${window.location.host}${Logo}`
                }
                backgroundImg={piece.backgroundImg}
                title={piece.title}
                description={piece.description}
              />
            </Col>
          ))}
        </Row>
      </FadeIn>
    </Container>
  );
};

export default Portfolio;
