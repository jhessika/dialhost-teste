import React, { Component } from 'react';
import './statisticscontainer.css';
import Statistic from '../Statistic';

class StatisticsContainer extends Component{
  render(){
    return(
      <div className="estatisticas">
        <Statistic title="Vizualizações de pagina" users="2.000"/>
        <Statistic title="Visitantes Únicos" users="1.000"/>
        <Statistic title="Público" users="93%"/>
        <Statistic title="Região" users="60%"/>
      </div>
    )
  }
}

export default StatisticsContainer;