import React, { Component } from 'react';
import './css/styles.css';
import homepageBackdrop from './assets/home_bg.jpg'

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <img className="background_img" src={homepageBackdrop} alt="homepage_bg" />
        <div className="welcome_box">
          <div className="welcome_text">
  We are a small store that sells customizable hiking and adventuring gear for your cat or dog. We are committed to helping all cats and dogs live to their full potential, experiencing the wild alongside their human hiker pals! 
          </div>

          <a className="enter_store_text"
             onClick={this.props.gotoProducts}>
          Enter Store >
          </a>
        </div>
      </div>
    );
  }
}

export default Home;