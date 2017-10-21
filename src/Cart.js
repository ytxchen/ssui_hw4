import React, { Component } from 'react';
import './css/styles.css';
import CartEntry from './CartEntry.js';

class Cart extends Component {

  constructor(props) {
    super(props);
  }

  getSubtotal() {
    var subtotal = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      var entry = this.props.cart[i];
      subtotal += entry.item.price * entry.quantity;
    }
    return subtotal;
  }

  renderCartEntries() {
    return (
      <div>
      {this.props.cart.map(entry => {
        return (
          <CartEntry entry={entry} />
          )
      })}
      </div>
    )
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

          {this.renderCartEntries()}

          <div className="cart_footer">
            <div className="big_header cart_subtotal">
              <div className="cart_subtotal_label">Subtotal:</div>
              <div className="cart_subtotal_value">{" $ " + this.getSubtotal() + ".00 "}</div>
            </div>
            <div className="checkout_button">Checkout</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Cart;