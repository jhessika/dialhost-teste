import React, { Component } from 'react';
import './social.css';

class Social extends Component {
  render(){
    return(
      <li>
        <a href={this.props.link} > 
          <img alt="" src={this.props.icon}/>
        </a>
        {this.props.users}
      </li>
    )
  }
}

export default Social;