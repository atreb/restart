import {combineReducers} from 'redux'
import {todoReducer, filterReducer} from './todos'

const reducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer
})

export default reducer
