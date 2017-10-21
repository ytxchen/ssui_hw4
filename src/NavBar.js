import React, { Component } from 'react';
import './css/styles.css';
import logo from './assets/logo.png';
import CartIcon from './assets/cart_icon.png';

class NavBar extends Component {

  goHome() {
    this.props.goHome();
  }

  gotoProducts() {
    this.props.gotoProducts();
  }

  gotoCart() {
    this.props.gotoCart();
  }

  getCartCount() {
    var count = 0;
    for (var i = 0; i<this.props.cart.length; i++) {
      count += this.props.cart[i].quantity;
    }
    return count;
  }

  renderGoToProducts() {
    if (this.props.page === 'home' || this.props.page === 'products') {
      return <div className="shop_button"></div>
    } else {
      return (
        <div className="shop_button big_header"
             onClick={this.gotoProducts.bind(this)}
        >
         Shop 
        </div>
      );
    }
  }

  renderCartIcon() {
    if (this.props.page === 'products' || this.props.page === 'details') {
      return (
        <a className="cart_button big_header"
           onClick={this.gotoCart.bind(this)}>
          <img className="cart_icon" src={CartIcon} alt="Cart:"/>
          <div className="big_header cart_count">{this.getCartCount()}</div>
        </a>
      );
    }
  }

  render() {
    return (
      <div className="nav_bar">
        <div className="placeholder"></div>
        {this.renderGoToProducts()}
        <div className="logo"
             onClick={this.goHome.bind(this)}>
             <img src={logo} alt="logo"/>
        </div>
        {this.renderCartIcon()}
        {this.props.page==='home' ? null : <hr/>}
      </div>
    );
  }
}

export default NavBar;