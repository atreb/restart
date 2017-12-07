/*
PARENT COMPONENT
*/
import React from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

export default class TodoPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      todos: {},
      visibilityFilter: 'ALL'
    }
  }
  handleNewTodoText (event) {
    this.setState({newtodotext: event.target.value});
  }
  handleAdd (text) {
    let todos = this.state.todos;
    let count = ++this.state.count;
    todos[count] = {id: count, text , complete: false}
    this.setState({
      count,
      todos
    });
  }
  handleToggle (id) {
    this.state.todos[id].complete = !this.state.todos[id].complete;//toggle complete for the specific todo and update state
    this.setState({
      todos: this.state.todos
    })
  }
  handleRemove (id) {
    delete this.state.todos[id]
    this.setState({
      todos: this.state.todos
    })
  }
  handleFilter (type) {
    this.setState({
      visibilityFilter: type
    })
  }
  render() {
    const todos = Object.keys(this.state.todos).map(id => this.state.todos[id]);
    let filteredTodos = todos;
    if (this.state.visibilityFilter === 'COMPLETE') {
      filteredTodos = filteredTodos.filter(todo => todo.complete);
    } else if (this.state.visibilityFilter === 'INCOMPLETE') {
      filteredTodos = filteredTodos.filter(todo => !todo.complete);
    }
    return (
      <div>
        <h1>Todo app using react state</h1>
        <TodoAdd handleAdd={this.handleAdd.bind(this)}/>
        <TodoList todos={filteredTodos} toggle={this.handleToggle.bind(this)} remove={this.handleRemove.bind(this)} filter={this.handleFilter.bind(this)}/>
      </div>
    )
  }
}
