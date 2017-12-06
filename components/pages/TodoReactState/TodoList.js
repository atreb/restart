import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
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
