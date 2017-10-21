import React, { Component } from 'react';
import './css/styles.css';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 'tiny',
      color: 'strawberry',
      quantity: 1,
    }
  }

  handleSizeChange(size){
    this.setState({size});
  }

  handleColorChange(color){
    this.setState({color});
  }

  handleQuantityInc(){
    var currQuantity = this.state.quantity;
    if (currQuantity <= 99) {
      this.setState({quantity: currQuantity + 1});
    }
  }

  handleQuantityDec(){
    var currQuantity = this.state.quantity;
    if (currQuantity > 1) {
      this.setState({quantity: currQuantity - 1});
    }
  }

  addToCart() {
    var entry = {
      size: this.state.size,
      colorTag: this.state.color,
      colorName: this.state.color,
      quantity: this.state.quantity,
      item: this.props.item,
    }

    if (entry.colorName === "night_moon"){
      entry.colorName = "night moon";
    } else if (entry.colorName === "fire_orange"){
      entry.colorName = "fire orange";
    }

    this.props.addToCart(entry);
  }

  render() {
    return (
      <div className="details">
        <div className="contents">
          <img className="details_image" src={this.props.item.img} alt={this.props.item.name}/>
          <div className="product_details">
            <div className="details_header_row">
              <div className="big_header item_name">{this.props.item.name}</div>
              <div className="details_price_tag">{" $ " + this.props.item.price + ".00 "}</div>
            </div>

            <div className="details_description">
              {this.props.item.desc}
            </div>

            <div className="size_selector">
              <div className="details_page_label">Size:</div>
              <div className={"size_label " + (this.state.size==="tiny" ? "size_selected" : "")}
                   onClick={() => this.handleSizeChange('tiny')}>
                tiny
              </div>

              <div className={"size_label " + (this.state.size==="small" ? "size_selected" : "")}
                   onClick={() => this.handleSizeChange('small')}>
                small
              </div>

              <div className={"size_label " + (this.state.size==="medium" ? "size_selected" : "")}
                   onClick={() => this.handleSizeChange('medium')}>
                medium
              </div>

              <div className={"size_label " + (this.state.size==="large" ? "size_selected" : "")}
                   onClick={() => this.handleSizeChange('large')}>
                large
              </div>
            </div>

            <div className="color_selector">
              <div className="details_page_label color_selector_label">Color:</div>

              <div className={"color_tag "+ (this.state.color==="strawberry" ? "selected_color" : "")}
                   onClick={() => this.handleColorChange('strawberry')}>
                <div className="color_block strawberry"></div>
                <div className="color_label">strawberry</div>
              </div>

              <div className={"color_tag "+ (this.state.color==="blackberry" ? "selected_color" : "")}
                   onClick={() => this.handleColorChange('blackberry')}>
                <div className="color_block blackberry"></div>
                <div className="color_label">blackberry</div>
              </div>

              <div className={"color_tag "+ (this.state.color==="crazyberry" ? "selected_color" : "")}
                   onClick={() => this.handleColorChange('crazyberry')}>
                <div className="color_block crazyberry"></div>
                <div className="color_label">crazyberry</div>
              </div>

              <div className={"color_tag "+ (this.state.color==="camouflage" ? "selected_color" : "")}
                   onClick={() => this.handleColorChange('camouflage')}>
                <div className="color_block camouflage"></div>
                <div className="color_label">camouflage</div>
              </div>

              <div className={"color_tag "+ (this.state.color==="night_moon" ? "selected_color" : "")}
                   onClick={() => this.handleColorChange('night_moon')}>
                <div className="color_block night_moon"></div>
                <div className="color_label">night moon</div>
              </div>

              <div className={"color_tag "+ (this.state.color==="fire_orange" ? "selected_color" : "")}
                   onClick={() => this.handleColorChange('fire_orange')}>
                <div className="color_block fire_orange"></div>
                <div className="color_label">fire orange</div>
              </div>
            </div>

            <div className="quantity_selector">
              <div className="details_page_label">Quantity:</div>
              <div>
                <div className="quantity_change_button quantity_button"
                     onClick={() => this.handleQuantityDec()}>
                     - 
                </div>
                <div className="quantity_number quantity_button"> {this.state.quantity} </div>
                <div className="quantity_change_button quantity_button"
                     onClick={() => this.handleQuantityInc()}>
                 + 
                </div>
              </div>
            </div>

            <div className="add_to_cart_button"
                 onClick={() => this.addToCart()}>
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;