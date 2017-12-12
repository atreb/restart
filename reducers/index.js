import {combineReducers} from 'redux'
import {todoReducer, filterReducer, todoNewReducer} from './todos'

const reducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer,
  newTodoText: todoNewReducer
})

export default reducer

/*
STATE
{
  todos: {
    '1': 'todo1',
    '2': 'todo2'
  },
  visibilityFilter: 'ALL',
  newTodoText: ''
}

*/
