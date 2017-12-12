/*
PRESENTATION COMPONENT
*/
import React from 'react'

const TodoAdd = (props) => {
  return (
    <div>
      <input type='text' value={props.newTodoText} onChange={(event) => {
        props.updateNewTodoText(event.target.value)
      }}/>
      <button onClick={() => {
        if (props.newTodoText === '') return alert('Please enter text');
        props.handleAdd(props.newTodoText);
        props.resetNewTodoText();
      }}>ADD</button>
    </div>
  )
}

export default TodoAdd
