import React from "react";
import Hero from "../components/home/Hero";
import Portfolio from "../components/home/Portfolio";
import ContactMe from "../components/home/ContactMe";
import Footer from "../components/Footer";

const HomePage = () => (
  <div className="App hero-gradient-background">
    <Hero />
    <Portfolio />
    <ContactMe />
    <Footer />
  </div>
);

export default HomePage;
