import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import { Route } from "react-router-dom";
import Home from "./Bootstrap/Home";
import About from "./Bootstrap/About";
import Contact from "./Bootstrap/Contact";
import Login from "./Bootstrap/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route exact path = "/" >
          <Home/>
        </Route>

        <Route path = "/about" >
          <About/>
        </Route>

        <Route path = "/contact" >
          <Contact/>
        </Route>

        <Route path = "/login" >
          <Login/>
        </Route>
      </div>
    );
  }
}

export default App;
