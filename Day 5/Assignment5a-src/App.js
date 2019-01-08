import React, { Component } from 'react';
import logo from './logo.svg';
import './FormEdit.css';

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'Leo',
      lname: 'Au-Yeung',
      isEditMode: true,
      tempfname: '',
      templname: '',
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isEditMode: !prevState.isEditMode,
      tempfname: this.state.fname,
      templname: this.state.lname
    }));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = () => {
    this.setState(prevState => ({
      isEditMode: !prevState.isEditMode,
      fname: this.state.tempfname,
      lname: this.state.templname
    }));
  }

  render() {
    if (this.state.isEditMode) {
      return (
        <div>
          <div className="first">First name:&nbsp; {this.state.fname}</div>
          <div className="last">Last name:&nbsp; {this.state.lname}</div>
          <button className="buttons-coll custom-btn btn-11" onClick={this.handleClick}>
            Edit
          </button>
        </div>
      )
    }
    else {
      return (
        <form onSubmit={this.handleSubmit}>
          First name:&nbsp;
          <input name="tempfname" type="text" value={this.state.tempfname} onChange={this.handleChange}></input>
          
          <br></br>
          Last name:&nbsp;
          <input name="templname" type="text" value={this.state.templname} onChange={this.handleChange}></input>
          
          <br></br>
          <input className="buttons-coll custom-btn btn-11" type="submit" value="Save"></input>
          <button className="buttons-coll custom-btn btn-11" onClick={this.handleClick}>
            Cancel
          </button>
        </form>
      )
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormEdit
          />
        </header>
      </div>
    );
  }
}

export default App;