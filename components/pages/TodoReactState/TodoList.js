/*
PRESENTATION COMPONENT
*/
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} toggle={props.toggle} remove={props.remove}/>
        })}
      </ul>
      <br/><br/>
      <button onClick={props.filter.bind(null, 'ALL')}>all</button>
      <button onClick={props.filter.bind(null, 'COMPLETE')}>completed</button>
      <button onClick={props.filter.bind(null, 'INCOMPLETE')}>incompleted</button>
    </div>
  )
}

export default TodoList
