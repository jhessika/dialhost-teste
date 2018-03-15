import React, { Component } from 'react';
import './form.css';

class Form extends Component{
  render(){
    return(
      <form>
				<div className="campo-formulario">
					<label forName="nome">Nome</label>
					<input type="text" name="nome"/>
				</div>
				<div className="campo-formulario">
					<label forName="email">E-mail</label>
					<input type="email" name="email"/>
				</div>
				<div className="campo-formulario">
					<label forName="mensagem">Mensagem</label>
					<textarea name="email"></textarea>
				</div>
				<button className="botao-enviar">Enviar</button>
			</form>
    )
  }
}

export default Form;
