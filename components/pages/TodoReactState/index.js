import React from 'react'
import TodoList from './TodoList'

export default class TodoPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      todos: {},
      visibilityFilter: 'ALL',
      newtodotext: ''
    }
  }
  handleNewTodoText (event) {
    this.setState({newtodotext: event.target.value});
  }
  handleAdd (event) {
    let todos = this.state.todos;
    let count = ++this.state.count;
    let text = this.state.newtodotext
    todos[count] = {id: count, text , complete: false}
    this.setState({
      count,
      todos,
      newtodotext: ''
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
  render() {
    const todos = Object.keys(this.state.todos).map(id => this.state.todos[id]);
    return (
      <div>
        <h1>Todo app using react state</h1>
        <input type='text' value={this.state.newtodotext} onChange={this.handleNewTodoText.bind(this)}/>
        <button onClick={this.handleAdd.bind(this)}>ADD</button>
        <TodoList todos={todos} toggle={this.handleToggle.bind(this)} remove={this.handleRemove.bind(this)}/>
      </div>
    )
  }
}
