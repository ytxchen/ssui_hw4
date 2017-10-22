import React, { Component } from 'react';
import './css/styles.css';

class CartEntry extends Component {

  deleteCartEntry() {
    this.props.deleteCartEntry(this.props.index);
  }

  decQuantity() {
    this.props.changeCartQuantity(this.props.index, -1);
  }

  incQuantity() {
    this.props.changeCartQuantity(this.props.index, 1);
  }

  render() {
    return (
      <div className="CartEntry">
        <div className="cart_entry">
          <img className="cart_image" 
               src={this.props.entry.item.img} 
               alt={this.props.entry.item.name}/>
          <div className="cart_entry_details">
            <div className="cart_entry_label">{this.props.entry.item.name}</div>
            <div className="cart_entry_size">Size: {this.props.entry.size}</div>
            <div className="cart_entry_color">
              <div className="cart_entry_color_label">Color:</div>
              <div className={"color_block " + this.props.entry.colorTag}></div>
              <div className="color_label">{this.props.entry.colroName}</div>
            </div>

            <div className="cart_remove_button"
                 onClick={this.deleteCartEntry.bind(this)}>Remove from Cart</div>
          </div>

          <div className="cart_quantity_widget">
            <div className="quantity_change_button quantity_button"
                 onClick={this.decQuantity.bind(this)}> - </div>
            <div className="quantity_number quantity_button">{this.props.entry.quantity}</div>
            <div className="quantity_change_button quantity_button"
                 onClick={this.incQuantity.bind(this)}> + </div>
          </div>

          <div className="cart_entry_price">{"$" + this.props.entry.item.price + ".00"}</div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default CartEntry;