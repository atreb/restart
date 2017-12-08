import {TODO_ADD, TODO_REMOVE, TODO_TOGGLE, TODO_CHANGE_FILTER} from '../actions/todos'

let count = 0;

export const todoReducer = (state = {}, action) => {
  let clonedTodo = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TODO_ADD:
      ++count;
      clonedTodo[count] = {id: count, text: action.text, complete: false}
      return Object.assign({}, clonedTodo)
    case TODO_REMOVE:
      delete clonedTodo[action.id];
      return Object.assign({}, clonedTodo)
    case TODO_TOGGLE:
      console.log('inside toggle reducer')
      clonedTodo[action.id].complete = !clonedTodo[action.id].complete;
      return Object.assign({}, clonedTodo)
    default:
      return state
  }
}

export const filterReducer = (state = 'ALL', action) => {
  switch(action.type) {
    case TODO_CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
}
