import React, { useState } from "react";
import Hero from "../components/home/Hero";
import Portfolio from "../components/home/Portfolio";
import ContactMe from "../components/home/ContactMe";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";

const HomePage = () => {
  const [selectedPiece, setSelectedPiece] = useState(undefined);
  return (
    <div
      className={`App hero-gradient-background w-screen h-screen overflow-x-hidden ${
        selectedPiece ? "overflow-y-hidden" : "overflow-y-auto"
      }`}
    >
      <Hero />
      <Portfolio setSelectedPiece={setSelectedPiece} />
      <ContactMe />
      <Footer />
      {selectedPiece && (
        <ProjectModal
          project={selectedPiece}
          close={() => setSelectedPiece(undefined)}
        />
      )}
    </div>
  );
};

export default HomePage;
