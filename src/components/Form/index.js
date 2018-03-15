import React, { Component } from 'react';
import './form.css';

class Form extends Component{
	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			message: '',
		}
	}

	handleNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	handleEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	handleMessageChange = (event) => {
		this.setState({message: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		alert('👏 Parabéns '+ this.state.name + ' Seu email foi enviado com sucesso!')
	}

	validate = (name, email, message) => {
		return {
			name: name.length === 0,
			email: email.length === 0,
			message: message.length === 0,
		}
	}


  render(){
		const errors = this.validate(this.state.name, this.state.email, this.state.message);
		const isDisabled = Object.keys(errors).some(x => errors[x])
    return(
      <form id="Form" onSubmit={this.handleSubmit}>
				<div className="Form-field">
					<label>Nome</label>
					<input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
				</div>
				<div className="Form-field">
					<label>E-mail</label>
					<input type="email" name="email" vaule={this.state.email} onChange={this.handleEmailChange}/>
				</div>
				<div className="Form-field">
					<label>Mensagem</label>
					<textarea name="message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
				</div>
				<button disabled={isDisabled} className="Form-button">Enviar</button>
			</form>
    )
  }
}

export default Form;

