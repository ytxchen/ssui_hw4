import React, { Component } from 'react';
import './css/styles.css';

function CartDrawerEntry(props) {
  return (
    <div className="cart_drawer_entry">
      <img className="cart_drawer_entry_image" 
           src={props.entry.item.img}
           alt={props.entry.item.name}/>
      <div className="cart_drawer_entry_details">
        <div className="cart_drawer_entry_label">{props.entry.item.name}</div>
        <div className="cart_drawer_entry_size">Size: {props.entry.size}</div>
        <div className="cart_drawer_entry_color">
          <div className="cart_drawer_entry_color_label">Color:</div>
          <div className={"color_block " + props.entry.colorTag}></div>
        </div>
      </div>
      <div className="cart_drawer_price_details">
        <div className="cart_drawer_price_label">{"$" + props.entry.item.price + ".00"}</div>
        <div className="cart_drawer_quantity">Quantity: {props.entry.quantity}</div>
      </div>
      <hr className="cart_drawer_divider"/>
    </div>
  );
}

class CartDrawer extends Component {

  cursorEnterDrawer() {
    this.props.cursorEnterDrawer();
  }

  cursorLeaveDrawer() {
    this.props.cursorLeaveDrawer();
  }

  renderCartStatus() {
    var subtotal = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      subtotal += this.props.cart[i].quantity * 
                  this.props.cart[i].item.price;
    }
    return (
      <div className="cart_drawer_label cart_drawer_status_label">
        Subtotal: $ {subtotal}.00
      </div>
    )
  }

  renderDrawerEntries() {
    if (this.props.cart.length > 0) {
      return (
        <div className="cart_drawer_entries">
          {this.props.cart.map((entry,idx) =>{
            return (
              <CartDrawerEntry key={idx}
                               entry={entry} />
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="cart_drawer"
           onMouseEnter={this.cursorEnterDrawer.bind(this)}
           onMouseLeave={this.cursorLeaveDrawer.bind(this)}> 
          <div className="cart_drawer_label"> Cart:
          </div>
          {this.renderCartStatus()}
          <hr className="cart_drawer_divider"/>
        {this.renderDrawerEntries()}
      </div>
    );
  }
}

export default CartDrawer;