import React, { Component } from 'react';
import './App.css';
import TodoForm from './ToDoForm'
import TodoFormHooks from './ToDoForm_Hooks'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = e => {
    e.preventDefault()
    console.log('Hello World')
  }
  render() {
    return (

      <div className="App">
        <h2>To do</h2>
        <TodoForm 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <hr></hr>
        <h2>ToDo with hooks</h2>
        <TodoFormHooks />
      </div>
    );
  }
}

export default App;
