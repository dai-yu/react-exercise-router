import React from "react";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        bicycle: {
          id: 1,
          name: "Bicycle",
          price: 30,
          quantity: 15,
          desc: "Bicycle is Good",
        },
        TV: {
          id: 2,
          name: "TV",
          price: 40,
          quantity: 16,
          desc: "TV is good",
        },
        pencil: {
          id: 3,
          name: "Pencil",
          price: 50,
          quantity: 17,
          desc: "Pencil is good",
        },
      },
    };
  }
  render() {
    const id = this.props.match.params.id;
    const product = this.state.list[id];
    return (
      <section>
        <h2>Product Details</h2>
        <h3>Name:{product.name}</h3>
        <h3>Id:{product.id}</h3>
        <h3>Price:{product.price}</h3>
        <h3>Quantity:{product.quantity}</h3>
        <h3>Desc:{product.desc}</h3>
        <h3>URL:{this.props.match.url}</h3>
      </section>
    );
  }
}
