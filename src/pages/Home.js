import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/home/Hero";
// import About from "../components/home/About";
import Portfolio from "../components/home/Portfolio";
import ContactMe from "../components/home/ContactMe";
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