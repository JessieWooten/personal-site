import React from "react";
import { Container, Row, Col } from "../Layout.js";
import Card from "../Card.js";
import portfolioData from "../../data/portfolio.json";
import Logo from "../../assets/FunpastaWeb.png";
import FadeIn from "../FadeIn";

const Portfolio = () => {
  return (
    <Container className="white-bg px-8 py-40 overflow-hidden">
      <Row>
        <h2 className="title">My Work</h2>
        <p className="black pt-4 pb-8 opacity-75 slide-in-bottom-with-fade animate600ms font-light">
          I'm a self-taught developer from Nashville, TN. I have a passion for
          web technologies and enjoy using them to solve unique problems. Here
          are a few projects I've worked on recently.
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
              <a href={piece.href} target="_blank" rel="noopener noreferrer">
                <Card
                  onClick={() => null}
                  foregroundImg={
                    piece.foregroundImg ||
                    `http://${window.location.host}${Logo}`
                  }
                  backgroundImg={piece.backgroundImg}
                  title={piece.title}
                  description={piece.description}
                  tech={piece.tech}
                />
              </a>
            </Col>
          ))}
        </Row>
      </FadeIn>
    </Container>
  );
};

export default Portfolio;
