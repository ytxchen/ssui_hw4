import React, { Component } from 'react';
import './css/styles.css';
import CartEntry from './CartEntry.js';

class Cart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart">
        <div className="contents">
          <div className="cart_header">
            <div className="big_header cart_header_label">Shipping Cart</div>
            <div className="cart_header_text cart_header_quantity_label">quantity:</div>
            <div className="cart_header_text cart_header_price_label">price:</div>
            <hr/>
          </div>

          <CartEntry />

          <div className="cart_footer">
            <div className="big_header cart_subtotal">
              <div className="cart_subtotal_label">Subtotal:</div>
              <div className="cart_subtotal_value">$</div>
            </div>
            <div className="checkout_button">Checkout</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Cart;