import React, { Component } from 'react';
import TodoForm from './ToDoForm'
import ToDoItems from './ToDoItems'

class NormalAll extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
      isStrikeThrough: false,
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  onClick = key => {
    console.log("Click")
    this.setState({
      isStrikeThrough: !this.state.isStrikeThrough
    });
    console.log("state", this.state.isStrikeThrough)
  }
  
  render() {
    //let listItem = this.state.isStrikeThrough ? "normal" : "strikeThrough";
    return (
      <div className="Normal">
        <TodoForm
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <ToDoItems 
          //className={listItem}
          onClick={this.onClick}
          entries={this.state.items} 
          deleteItem={this.deleteItem} 
          strikeThrough={this.state.isStrikeThrough} 
          
        />

      </div>
    );
  }
}

export default NormalAll;
