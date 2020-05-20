import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
