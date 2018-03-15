import React, { Component } from 'react';
import './services.css';
import Service from '../Service';


class Services extends Component{
  render(){
    var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit tincidunt odio a venenatis. Donec bibendum quam eget odio bibendum, eget vehicula dui facilisis. Quisque.";
    return(
      <div className="servicos">
        <Service title="Post Patrocinado" price="500,00" description={description} />
        <Service title="Vídeo Patrocinado" price="1000,00" description={description}/>
        <Service title="Outros Formatos" price="500,00" description={description}/>
      </div>
    )
  }
}

export default Services;