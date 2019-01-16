import React, { Component } from 'react';
import './App.css';
import NormalAll from './Components/NormalAll'
import HooksAll from './Components/HooksAll'

class App extends Component {
  render() {
    return (

      <div className="App">
        <h2>ToDo</h2>
          <NormalAll />
        <hr></hr>
        <h2>ToDo with hooks</h2>
          <HooksAll />
      </div>
    );
  }
}

export default App;
