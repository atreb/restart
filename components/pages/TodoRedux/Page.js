import React from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const Page = (props) => {
  return (
    <div>
      <h1>Todo app using redux</h1>
      <TodoAdd handleAdd={props.add}/>
      <TodoList todos={props.todos} toggle={props.toggle} remove={props.remove} filter={props.filter}/>
    </div>
  )
}

export default Page
