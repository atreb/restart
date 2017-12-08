/*
PRESENTATION COMPONENT
*/
import React from 'react'

const TodoItem = (props) => {
    const todo = props.todo;
    const toggleButton = <button onClick={props.toggle.bind(null, todo.id)}>toggle</button>
    const removeButton = <button onClick={props.remove.bind(null, todo.id)}>remove</button>
    return (todo.complete) ? <li><del>{todo.text}</del>{toggleButton}{removeButton}</li>
                           : <li>{todo.text}{toggleButton}{removeButton}</li>
}

export default TodoItem
