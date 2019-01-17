import React, { Component } from 'react'

class TodoItems extends Component {
  
  createTasks = item => {
    
    let listItem = this.props.isStrikeThrough 
    return (
      <li key={item.key} className={listItem} onClick={() => 
        
        setTimeout(() => {
          this.props.onClick()
          //this.props.deleteItem(item.key)
        }, 1000)}
    >
      {item.text}
    </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="list">{listItems}</ul>
  }
}

export default TodoItems