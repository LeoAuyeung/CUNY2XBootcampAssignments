import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			mobileNumber: this.props.mobileNumber,
			email: this.props.email,
			workNumber: this.props.workNumber,
		};
	}
	render() {
		return (
			<td class="info">
				<h1>{ this.state.name }</h1>
				<p> Mobile: { this.state.mobileNumber } </p>
				<p> Work: { this.state.workNumber } </p>
				<p> Email: { this.state.email } </p>
			</td>
		)
	}
}

class Decrement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
		};
	}
	
	handleClick = () => {
		this.state.value > 0 ? this.setState({value: this.state.value-1}) : alert("Cannot be less than zero")
	}
	
	render() {
		return (
			<button className="decrement" class="buttons-coll custom-btn btn-1"
			onClick={ this.handleClick }>
				{this.state.value}
			</button>
		);
	}
}

class App extends Component {
  render() {
    return (
		<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
		<br></br>
		<h1>Contact Information: </h1>
		<br></br>
		<table class="table table-bordered table-hover">
		<tr>
			<ContactCard
				name = "Andy" 
				mobileNumber = "2121234567"
				workNumber = "2129876543"
				email = "andy@email.com"
			/>
			<ContactCard
				name = "Bobby" 
				mobileNumber = "3471234567"
				workNumber = "3479876543"
				email = "bobby@email.com"
			/>
			<ContactCard
				name = "Leo" 
				mobileNumber = "9171234567"
				workNumber = "9179876543"
				email = "leo@email.com"
			/>
		</tr>
		</table>
		
        </header>
        <header className="App-header">
		<h1>DECREMENTER</h1>
		<Decrement
			value={10}
		/>
        </header>
      </div>
    );
  }
}

export default App;
