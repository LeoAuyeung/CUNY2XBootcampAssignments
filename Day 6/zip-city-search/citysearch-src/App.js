import CitySearch from './CitySearch';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CitySearch/>
        </header>
      </div>
    );
  }
}

export default App;
