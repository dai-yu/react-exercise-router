import React, { Component } from "react";
import Home from "./Home";
import Mypro from "./Mypro";
import About from "./About";
import Products from "./Products";
import "../styles/App.css";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/my-profile">Mypro</Link>
            <Link to="/about-us">About Us</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-profile" component={Mypro} />
            <Route path="/about-us" component={About} />
            <Route path="/products" component={Products} />
            <Redirect from="/goods" to="/products" />
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
