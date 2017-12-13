import {combineReducers} from 'redux'
import {todoReducer, filterReducer, todoNewReducer} from './todos'
import {crudRecordsReducer, crudCreateReducer, crudRemoveReducer} from './crud'

const reducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer,
  newTodoText: todoNewReducer,
  records: crudRecordsReducer,
  newRecord: crudCreateReducer,
  removeRecord: crudRemoveReducer
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

  records: {
    loading: false,
    err: {stack: '', message: ''},
    data: []
  },
  newRecord: {
    loading: false,
    err: {stack: '', message: ''},
    data: {}
  },
  removeRecord: {
    loading: false,
    err: {stack: '', message: ''}
  },
  editRecord: {
    editing: true,
    data: {}//sync record to edit
  },
  updateRecord: {
    loading: false,
    err: {stack: '', message: ''},
    data: {}
  }
}

*/
