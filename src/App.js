import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      {/* <About /> */}
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
