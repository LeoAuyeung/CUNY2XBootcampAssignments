import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      display: !prevState.display,
    }));
  }

  render() {
    if (this.state.display) {
      return(
        <div>
          <button className="custom-btn btn-11" onClick={this.handleClick}>Togwaggle</button>
          <br></br>
          <img src="https://visualpharm.com/assets/889/Folder-595b40b65ba036ed117d40dd.svg" alt="Folder icon"></img>
          Home
          <br></br>
          <img src="https://www.iconsdb.com/icons/preview/black/blank-file-xxl.png" alt="File icon"></img>File 1
          <br></br>
          <img src="https://www.iconsdb.com/icons/preview/black/blank-file-xxl.png" alt="File icon"></img>File 2
          <br></br>
          <img src="https://www.iconsdb.com/icons/preview/black/blank-file-xxl.png" alt="File icon"></img>File 3
          <br></br>
        </div>
      )
    }
    
    else {
      return (
      <div>
        <button className="custom-btn btn-11" onClick={this.handleClick}>Togwaggle</button>
      <br></br>
        <img src="https://visualpharm.com/assets/889/Folder-595b40b65ba036ed117d40dd.svg" alt="Folder icon"></img>
        Home
        <br></br>
        </div>
      )
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Folder
          />
        </header>
      </div>
    );
  }
}

export default App;