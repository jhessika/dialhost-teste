import React, { Component } from 'react';
import './statistic.css';
import CountUp from 'react-countup';

class Statistic extends Component{
  render(){
    return(
      <div className="item-estatistica">
        <h3>{this.props.title}</h3>
        <span>
          <CountUp start={0} end={this.props.users} suffix={this.props.suffix} duration={5} useEasing={true}/>
        </span>
      </div>
    )
  }
}

export default Statistic;
