import React, { Component } from 'react';
import './about.css';
import minhaFoto from '../../img/eu.JPG';

class About extends Component{
  render(){
    return(
      <section className="descricao">
        <div className="sobre-mim">
            <div className="texto-sobre-mim">
              <h2>Sobre mim e meu bog</h2>
              <p>Olá meu nome é Jéssica Oliveira, nascida em Belo Horizonte Minas Gerais e desde os 6 anos morando em Betim - MG. Iniciei duas faculdades mas não concluir nenhuma, atualmente estudo TI online, inclusive esta pagina que estão vendo agora eu criei desde de HTML, CSS e Javascript interamente sozinha. Viajo pelo mundo, junto ao meu mario e já conhecemos no total 10 países. No meu blog faço resenha de produtos de cabelo, maquiagem e cuidados com a pele e outros. Também compartilho as nossas viagens em forma de posts, vlogs e fotos, no Instagram, Facebook e no canal do Youtube.</p>
            </div>
          <div className="minha-foto"> <img className="foto-descricao" src={minhaFoto}/></div>
        </div>
		  </section>
    )
  }
} 

export default About;


