export const TODO_NEW = 'TODO_NEW'
export const TODO_NEW_RESET = 'TODO_NEW_RESET'
export const TODO_ADD = 'TODO_ADD'
export const TODO_REMOVE = 'TODO_REMOVE'
export const TODO_TOGGLE = 'TODO_TOGGLE'
export const TODO_CHANGE_FILTER = 'TODO_CHANGE_FILTER'

export const todoAdd = text => {
  return {
    type: TODO_ADD,
    text
  }
}

export const todoRemove = id => {
  return {
    type: TODO_REMOVE,
    id
  }
}

export const todoToggle = id => {
  return {
    type: TODO_TOGGLE,
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: TODO_CHANGE_FILTER,
    filter
  }
}

export const updateNewTodoText = text => {
  return {
    type: TODO_NEW,
    text
  }
}

export const resetNewTodoText = () => {
  return {
    type: TODO_NEW_RESET
  }
}
