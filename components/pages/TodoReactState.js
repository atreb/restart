import React from 'react'

class TodoItem extends React.Component {
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

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {filterType: 'ALL'}
  }
  filterTodos (type) {
    this.setState({filterType: type});
  }
  render () {
    let filteredTodos = this.props.todos || [];
    if (this.state.filterType === 'COMPLETE') {
      filteredTodos = filteredTodos.filter(todo => todo.complete)
    } else if (this.state.filterType === 'INCOMPLETE') {
      filteredTodos = filteredTodos.filter(todo => !todo.complete)
    }
    return (
      <div>
      <ul>
        {filteredTodos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} toggle={this.props.toggle} remove={this.props.remove}/>
        })}
      </ul>
      <br/><br/>
      <button onClick={this.filterTodos.bind(this, 'ALL')}>all</button>
      <button onClick={this.filterTodos.bind(this, 'COMPLETE')}>completed</button>
      <button onClick={this.filterTodos.bind(this, 'INCOMPLETE')}>incompleted</button>
      </div>
    )
  }
}

class TodoPage extends React.Component {
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

export default TodoPage
