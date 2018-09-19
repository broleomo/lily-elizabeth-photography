import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './BaseLayout.css';

export default class BaseLayout extends Component {
  render(){
    return(
      <div className="container">
        <div className="nav-bar">
          <Link to="/"><img className="logo-image" src='logo1.png' alt="logo" /></Link>
          <div className="right-align-nav">
            <Link className="nav-items" to='/Contact'>Contact</Link>
            <Link className="nav-items" to='/shop-hats' activeClassName="selected" >Gallery</Link>
            <Link className="nav-items" to='/shop-shirts' activeClassName="selected">Pricing</Link>
          </div>
      </div>
        {this.props.children}
      <div className="nav-bar">
      <div className="bottom-nav-bar">
        <p>© Lily Elizabeth Photography 2018</p>
      </div>
    </div>
    </div>
    )
  }
}