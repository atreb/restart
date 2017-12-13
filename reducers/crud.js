import {CRUD_GETALL, CRUD_GETALL_START, CRUD_GETALL_SUCCESS, CRUD_GETALL_FAIL,
        CRUD_CREATE_SYNC, CRUD_CREATE_RESET, CRUD_CREATE_START, CRUD_CREATE_SUCCESS, CRUD_CREATE_FAIL, CRUD_CREATE,
        CRUD_REMOVE_START, CRUD_REMOVE_SUCCESS, CRUD_REMOVE_FAIL, CRUD_REMOVE, CRUD_REMOVE_RESET} from '../actions/crud'

const recordsInitialState = {
  loading: false,
  err: {stack: '', message: ''},
  data: []
}
export const crudRecordsReducer = (state = recordsInitialState, action) => {
  switch (action.type) {
    case CRUD_GETALL_START:
      return Object.assign({}, state, {loading: true});
    case CRUD_GETALL_SUCCESS:
      return Object.assign({}, state, {loading: false, data: action.data});
    case CRUD_GETALL_FAIL:
      return Object.assign({}, state, {loading: false, err: {stack: action.err.stack, message: action.err.message}});
    default://CRUD_GETALL
      return state;
  }
}

const createInitialState = {
  loading: false,
  err: {stack:'', message:''},
  data: {name: '', city: ''}
}
export const crudCreateReducer = (state = createInitialState, action) => {
  switch(action.type) {
    case CRUD_CREATE_SYNC:
      return Object.assign({}, state, {data: action.record});
    case CRUD_CREATE_RESET:
      return createInitialState;
    case CRUD_CREATE_START:
      return Object.assign({}, state, {loading: true});
    case CRUD_CREATE_SUCCESS:
      return Object.assign({}, state, {loading: false, err: {stack:'', message:''}})
    case CRUD_CREATE_FAIL:
      return Object.assign({}, state, {loading: false, err: {stack: action.err.stack, message: action.err.message}})
    default:
      return state;
  }
}

const removeInitialState = {
  loading: false,
  err: {stack:'', message:''}
}
export const crudRemoveReducer = (state = removeInitialState, action) => {
  switch(action.type) {
    case CRUD_REMOVE_START:
      return Object.assign({}, state, {loading: true});
    case CRUD_REMOVE_SUCCESS:
      return removeInitialState;
    case CRUD_REMOVE_RESET:
      return removeInitialState;
    case CRUD_REMOVE_FAIL:
      return Object.assign({}, state, {loading: false, err: {stack: action.err.stack, message: action.err.message}})
    default:
      return state;
  }
}
// export const crudCreateReducer = (state = {
//   loading: false,
//   err: {stack:'', message:''},
//   data: {name:'', city:''},
// }, action) => {
//   switch(action.type) {
//     case CRUD_CREATE_SYNC:
//       return Object.assign({}, state, action.record)
//     case CRUD_CREATE_RESET:
//       return {loading: false,err: {stack:'', message:''},data: {name:'', city:''}}
//     case CRUD_CREATE_START:
//       return Object.assign({}, state, {loading: true});
//     case CRUD_CREATE_SUCCESS:
//       return Object.assign({}, state, {loading: false, record: record});
//     case CRUD_CREATE_FAIL:
//       return Object.assign({}, state, {loading: false});
//     default:
//       return state;
//   }
// }
