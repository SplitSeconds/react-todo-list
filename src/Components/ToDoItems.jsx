import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => 
       
        setTimeout(() => {
          this.props.deleteItem(item.key)
        }, 5000)}
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