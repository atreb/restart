import React from 'react'

export default class TodoItem extends React.Component {
  handleToggle (id) {
    this.props.toggle(id);
  }
  handleRemove (id) {
    this.props.remove(id);
  }
  render () {
    const todo = this.props.todo;
    const toggleButton = <button onClick={this.handleToggle.bind(this, todo.id)}>toggle</button>
    const removeButton = <button onClick={this.handleRemove.bind(this, todo.id)}>remove</button>
    return (todo.complete) ? <li><del>{todo.text}</del>{toggleButton}{removeButton}</li>
                           : <li>{todo.text}{toggleButton}{removeButton}</li>
  }
}
