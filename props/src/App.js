//
import React, { Component } from "react";
import Product from "./Components/Product";

class App extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: "Apple Iphone X",
        price: 25000000,
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/39/1f/f8/4512fe9898661b5f3746f91370a22158.jpg",
        status: true,
      },
      {
        id: 2,
        name: "Samsung Galaxy S10",
        price: 21000000,
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/39/1f/f8/4512fe9898661b5f3746f91370a22158.jpg",
        status: false,
      },
      {
        id: 3,
        name: "Huawei M10",
        price: 15000000,
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/39/1f/f8/4512fe9898661b5f3746f91370a22158.jpg",
        status: true,
      },
    ];

    let elements = products.map((product, index) => {
      var result = "";
      if (!product.status) {
        return result;
      }
      return (
        <Product key={index} price={product.price} image={product.image}>
          {product.name}
        </Product>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Learning Props</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
