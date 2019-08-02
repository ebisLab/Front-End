import React, {useState} from "react";
import { Route, Link } from "react-router-dom";
import {Logo, LogoContainer } from "./components/Stylist Dashboard/styled-components"

import Dashboard from "./components/Stylist Dashboard/Dashboard";

import "./App.css";



function App() {
  
  return (
    <div className="App">
      <LogoContainer>
        <Logo  src="https://i.imgur.com/jaZMHk5.png" alt="Hair Care Logo"/>
      </LogoContainer>
      <div className="nav-container">
          <Link className="navLinks" to="/">Login</Link> 
          
          <Link className="navLinks" to="/components/Dashboard/StylistsPosts">Stylist Dashboard</Link>
          
      </div>

      <Route path="/components/Dashboard/StylistsPosts"
             component={Dashboard} />
    </div>
  );
}

export default App;
