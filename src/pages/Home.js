import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
// import About from "../components/About";
import Portfolio from "../components/Portfolio";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const HomePage = () => (
  <div className="App hero-gradient-background">
    <Navigation />
    <Hero />
    {/* <About /> */}
    <Portfolio />
    <ContactMe />
    <Footer />
  </div>
);

export default HomePage;
