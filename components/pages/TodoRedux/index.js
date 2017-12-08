/*
CONTAINER COMPONENT
*/
import {connect} from 'react-redux'
import Page from './Page'
import {todoAdd, todoRemove, todoToggle, setVisibilityFilter} from '../../../actions/todos'

const filterTodos = (todos, visibilityFilter) => {
  const todosList = Object.keys(todos).map(id => todos[id]);
  let filteredTodos = todosList;
  if (visibilityFilter === 'COMPLETE') {
    filteredTodos = filteredTodos.filter(todo => todo.complete);
  } else if (visibilityFilter === 'INCOMPLETE') {
    filteredTodos = filteredTodos.filter(todo => !todo.complete);
  }
  return filteredTodos;
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: filterTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: text => {dispatch(todoAdd(text))},
    remove: id => {dispatch(todoRemove(id))},
    toggle: id => {dispatch(todoToggle(id))},
    filter: filter => {dispatch(setVisibilityFilter(filter))}
  }
}

const TodoPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default TodoPageContainer
