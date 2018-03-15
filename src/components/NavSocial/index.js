import React, { Component } from 'react';
import './navsocial.css';

class NavSocial extends Component{
  render(){
    return(
      <nav id="NavSocial">
        <ul className="NavSocial-icons">
          { this.props.children }
        </ul>
      </nav>
    )
  }
}

export default NavSocial;