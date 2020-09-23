import React, { Component } from "react";
import Home from "./Home";
import Mypro from "./Mypro";
import About from './About';
import "../styles/App.css";
import { BrowserRouter , Link, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        
        <BrowserRouter>
        <div className="nav">
          <Link to='/' className="link">Home</Link>
          <Link to='/my-profile' className="link">Mypro</Link>
          <Link to='/about-us' className="link">About Us</Link>
        </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-profile" component={Mypro} />
            <Route path="/about-us" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
