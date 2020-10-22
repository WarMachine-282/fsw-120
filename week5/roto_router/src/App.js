import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import About from "./components/About";
import "./style.css";

function App() {
  return (
    <div>
      <div class="topnav">
        <Link to="/">Home</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/About">About</Link>
      </div>
      <div className="bg">   
      <switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/pricing" render={() => <Pricing />} />
      </switch>
      </div>
        <footer>&copy; Copyright 2020 Christian's Plumbing Services</footer>
    </div>
  );
}

export default App;
