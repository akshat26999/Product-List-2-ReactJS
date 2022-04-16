import React, { Component } from "react";
import ProductList from "./ProductList";
class App extends Component {
  render() {
    return (
      <ProductList
        items={[
          { name: "JBL Earphones", qty: 2 },
          { name: "Polestar Backpack", qty: 3 },
          { name: "One Plus Nord 2", qty: 2 },
          { name: "Apple i-Phone 13", qty: 1 },
          { name: "Cannon", qty: 3 },
          { name: "Dettol N-95 Mask", qty: 4 },
        ]}
      />
    );
  }
}

export default App;
