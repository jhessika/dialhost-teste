import React, { Component } from 'react';
import './statisticscontainer.css';
import Statistic from '../Statistic';

class StatisticsContainer extends Component{
  render(){
    return(
      <div className="estatisticas">
        <Statistic title="Vizualizações de pagina" users={2000}/>
        <Statistic title="Visitantes Únicos" users={1000}/>
        <Statistic title="Público" users={93} suffix="%"/>
        <Statistic title="Região" users={63} suffix="%"/>
      </div>
    )
  }
}

export default StatisticsContainer;