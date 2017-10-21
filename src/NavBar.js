import React, { Component } from 'react';
import './css/styles.css';
import logo from './assets/logo.png';

class NavBar extends Component {

  goHome() {
    this.props.goHome();
  }

  render() {
    return (
      <div className="nav_bar">
        <div className="placeholder"></div>
        <div className="shop_button"></div>
        <div className="logo"
             onClick={this.goHome.bind(this)}>
             <img src={logo} alt="logo"/>
        </div>
        <hr/>
      </div>
    );
  }
}

export default NavBar;