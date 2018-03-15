import React, { Component } from 'react';
import './about.css';
import minhaFoto from '../../img/eu.JPG';
import { Tada } from 'react-motions';



class About extends Component{
  render(){
    return(
      <section className="descricao">
        <div className="sobre-mim">
            <div className="texto-sobre-mim">
              <h2>Sobre mim e meu bog</h2>
              <p>Olá meu nome é Jéssica Oliveira, nascida em Belo Horizonte, Minas Gerais e desde os 6 anos morando em Betim, também em Minas. Iniciei duas faculdades mas não conclui nenhuma. Atualmente estudo Programação em cursos online. Inclusive esta pagina que estão vendo agora eu criei desde de HTML, CSS, JavaScript e React inteiramente sozinha. Viajo pelo mundo junto ao meu marido e já conhecemos no total 10 países. No meu blog faço resenhas de produtos de cabelo, maquiagem, cuidados com a pele e outros. Também compartilho as nossas viagens em forma de posts, vlogs e fotos, no Instagram, Facebook e no canal do Youtube.</p>
            </div>
            <Tada duration={5}>
              <div className="minha-foto"> <img className="foto-descricao" alt="" src={minhaFoto}/></div>
            </Tada>
        </div>
		  </section>
    )
  }
} 

export default About;


