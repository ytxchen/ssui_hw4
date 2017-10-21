import React, { Component } from 'react';
import './css/styles.css';

class ProductElem extends Component {

  showDetails(){
    this.props.showDetails(this.props.item);
  }

  render() {
    return (
        <a className="item_container"
           onClick={this.showDetails.bind(this)}>
          <img className="product_image" src={this.props.item.img} alt={this.props.item.name}/>
          <div className="item_label">{this.props.item.name}</div>
          <div className="item_price">$20.00</div>
        </a>
    );
  }
}

export default ProductElem;