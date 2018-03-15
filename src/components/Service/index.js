import React, { Component } from 'react';
import './service.css';

class Service extends Component{
  render(){
    return(
      <div className="Service">
        <h3> {this.props.title}: R$ {this.props.price}</h3>	
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Service;