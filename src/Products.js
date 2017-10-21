import React, { Component } from 'react';
import './css/styles.css';
import ProductElem from './ProductElem.js';

class Products extends Component {

  showDetails(item) {
    this.props.showDetails(item);
  }

  renderProducts() {
    return (
      <div className="products_container">
        {this.props.products.map(item => {
          return (
            <ProductElem key={item.tag}
                         item={item} 
                         showDetails={this.showDetails.bind(this)}/>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="products">
        <div className="contents">
          <div className="big_header product_header">Products</div>
          <div className="page_description">
            Each of our products come in sizes Tiny/Small/Medium/Large, and come in colors Strawberry/Blackberry/Crazyberry/Camouflage/Night Moon/Fire Orange
          </div>

          {this.renderProducts()}

        </div>
      </div>
    );
  }
}

export default Products;