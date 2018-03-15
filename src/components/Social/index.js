import React, { Component } from 'react';
import './social.css';

class Social extends Component {
  render(){
    return(
      <li className="Social">
        <a target="_blank" href={this.props.link} > 
          <img alt="" src={this.props.icon}/>
        </a>
        {this.props.users}
      </li>
    )
  }
}

export default Social;