import React, { Component } from 'react';
import './navsocial.css';

class NavSocial extends Component{
  render(){
    return(
      <nav>
        <ul className="icones-redes-sociais">
          { this.props.children }
        </ul>
      </nav>
    )
  }
}

export default NavSocial;