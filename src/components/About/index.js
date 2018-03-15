import React, { Component } from 'react';
import './about.css';
import picture from '../../img/eu.JPG';
import { Tada } from 'react-motions';



class About extends Component{
  render(){
    return(
      <section id="About">
        <div className="About-container">
          <h2 className="About-title">Sobre mim e meu bog</h2>
          <p className="About-text">Olá meu nome é Jéssica Oliveira, nascida em Belo Horizonte, Minas Gerais e desde os 6 anos morando em Betim, também em Minas. Iniciei duas faculdades mas não conclui nenhuma. Atualmente estudo Programação em cursos online. Inclusive esta pagina que estão vendo agora eu criei desde de HTML, CSS, JavaScript e React inteiramente sozinha. Viajo pelo mundo junto ao meu marido e já conhecemos no total 10 países. No meu blog faço resenhas de produtos de cabelo, maquiagem, cuidados com a pele e outros. Também compartilho as nossas viagens em forma de posts, vlogs e fotos, no Instagram, Facebook e no canal do Youtube.</p>
        </div>
        <Tada duration={5}>
          <div className="About-picture">
            <img alt="" src={picture}/>
          </div>
        </Tada>
		  </section>
    )
  }
} 

export default About;


