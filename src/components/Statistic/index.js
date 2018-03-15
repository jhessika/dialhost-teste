import React, { Component } from 'react';
import './statistic.css';

class Statistic extends Component{
  render(){
    return(
      <div className="item-estatistica">
        <h3>{this.props.title}</h3>
        <span>{this.props.users}</span>
      </div>
    )
  }
}

export default Statistic;
