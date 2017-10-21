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
    var dogHarness = {
      tag: "dog_harness",
      name: "Dog Harness",
      img: dogHarnessImg,
      desc: "Unlike most harnesses, it is completely adjustable and easy to manage. The Reflective element of design will keep your dog safe even during those early morning walks, or during darker evenings.",
    }

    var catHarness = {
      tag: "cat_harness",
      name: "Cat Harness",
      img: catHarnessImg,
      desc: "The walking vests provide more "
            + "coverage and pressure distribution than leads, "
            + "and it can be a good choice for cats who pull a lot during "
            + "walks or for flexible felines who can wriggle out of a lead "
            + "and scamper away.",
    }

    var gpsCollar = {
      tag: "gps_collar",
      name: "GPS Collar",
      img: gpsCollarImg,
      desc: "Mini Waterproof Multi-functional GPS "
            + "pet tracker with powerful location monitoring and an extremely "
            + "high technical specifcation - follow the footprints of your "
            + "beloved kitten, puppy, or pony.",
    }

    var harnessAttachment = {
      tag: "harness_attachment",
      name: "Harness Attachment",
      img: harnessAttachmentImg,
      desc: "Food and water storage attachment to "
            + "harness. Convenient way to carry small items while taking"
            + " our friends with paws out for a walk.",
    }

    super(props);
    this.products = [dogHarness, catHarness, gpsCollar, harnessAttachment];
    this.state = {
      page: "home",
      currentProduct: this.products[0],
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

  renderContent() {
    if (this.state.page === "home") {
      return <Home gotoProducts={this.gotoProducts.bind(this)}/>;
    } else if (this.state.page === "products") {
      return (
        <Products products={this.products} 
                  showDetails={this.showDetails.bind(this)}/>
      );
    } else if (this.state.page === "details") {
      return <Details item={this.state.currentProduct} />;
    } else {
      return <Cart />;
    }
  }

  render() {
    return(
    <div className="App">
      <NavBar goHome={this.goHome.bind(this)}/>
      {this.renderContent()}
    </div>
    );
  }
}

export default App;
