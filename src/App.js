import React, { Component } from 'react';
import './css/styles.css';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Products from './Products.js';
import Details from './Details.js';
import Cart from './Cart.js';

import dogHarnessImg from './assets/dog_harness.jpg';
import catHarnessImg from './assets/cat_harness.jpg';
import gpsCollarImg from './assets/gps_collar.jpg';
import harnessAttachmentImg from './assets/harness_attachment.jpg';

class App extends Component {

  constructor(props) {
    var products = require("./products.json");

    /*  Cannot dynamicly load image sources because of bug:
     *  https://github.com/webpack/webpack/issues/2670
     *
     *  Temporarily hard-coded checks
     */
    for (var i = 0; i < products.length; i++) {
      if (products[i].imgSrc === './assets/dog_harness.jpg') {
        products[i].img = dogHarnessImg;
      } else if (products[i].imgSrc === './assets/cat_harness.jpg') {
        products[i].img = catHarnessImg;
      } else if (products[i].imgSrc === './assets/gps_collar.jpg') {
        products[i].img = gpsCollarImg;
      } else if (products[i].imgSrc === './assets/harness_attachment.jpg') {
        products[i].img = harnessAttachmentImg;
      }
    }

    super(props);
    this.products = products;
    this.state = {
      page: "home",
      currentProduct: this.products[0],
      cart: [],
    };
  }

  showDetails(item) {
    this.setState({
      page: "details",
      currentProduct: item,
    });
  }

  goHome() {
    this.setState({
      page: "home",
    });
  }

  gotoProducts() {
    this.setState({
      page: "products",
    });
  }

  gotoCart() {
    this.setState({
      page: "cart",
    });
  }

  addToCart(entry) {
    var cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      var check = cart[i];
      if (check.colorTag === entry.colorTag &&
          check.size === entry.size &&
          check.item.name === entry.item.name) {
        cart[i].quantity += entry.quantity;
        this.setState({
          cart: cart,
        })
        return;
      }
    }

    cart.push(entry);
    this.setState({
      cart: cart,
    });
  }

  deleteCartEntry(i) {
    var cart = this.state.cart;
    cart.splice(i, 1);
    this.setState({
      cart: cart,
    })
  }

  changeCartQuantity(i, delta) {
    var cart = this.state.cart;
    if (delta < 0 && cart[i].quantity > 1){
      cart[i].quantity += delta;
      this.setState({
        cart: cart,
      });
    } else if (delta > 0 && cart[i].quantity < 99) {
      cart[i].quantity += delta;
      this.setState({
        cart: cart,
      });
    }
  }

  renderContent() {
    if (this.state.page === "home") {
      return (
        <Home gotoProducts={this.gotoProducts.bind(this)}/>
      );
    } else if (this.state.page === "products") {
      return (
        <Products products={this.products} 
                  showDetails={this.showDetails.bind(this)}/>
      );
    } else if (this.state.page === "details") {
      return <Details item={this.state.currentProduct} 
                      addToCart={this.addToCart.bind(this)}/>
    } else {
      return (
        <Cart cart={this.state.cart}
              deleteCartEntry={this.deleteCartEntry.bind(this)}
              changeCartQuantity={this.changeCartQuantity.bind(this)}/>
        );
    }
  }

  render() {
    return(
    <div className="App">
      <NavBar goHome={this.goHome.bind(this)}
              gotoProducts={this.gotoProducts.bind(this)}
              page={this.state.page}
              cart={this.state.cart}
              gotoCart={this.gotoCart.bind(this)}
      />
      {this.renderContent()}
    </div>
    );
  }
}

export default App;
