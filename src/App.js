import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./contents/Home";
import Projects from "./contents/Projects";
import Education from "./contents/Education";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/*Home.js routing */}
        <Route exact path="/">
          <Home />
        </Route>
        {/*Projects.js routing */}
        <Route path="/projects">
          <Projects />
        </Route>
        {/*Education.js routing */}
        <Route path="/education">
          <Education />
        </Route>
        {/*Skills.js routing */}
        <Route path="/skills">
          <Skills />
        </Route>
        {/*Contact.js routing */}
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
