import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.remove(this.props.value.name, e);
  }
  render() {
    return (
      <tr>
        <td>{this.props.value.name}</td>
        <td>{this.props.value.qty}</td>
        <td className="btn">
          <button onClick={this.handleClick}>Delete</button>
        </td>
      </tr>
    );
  }
}
