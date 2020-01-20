import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./sections/Main";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
