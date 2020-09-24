import React from "react";
import Product from "./Product";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default class Products extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          All Products
          <div className="nav">
            <Link to="/products/bicycle" className="link">
              Bicycle
            </Link>
            <Link to="/products/TV" className="link">
              TV
            </Link>
            <Link to="/products/pencil" className="link">
              Pencil
            </Link>
          </div>
          <Switch>
            <Route path="/products/:id" component={Product} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
