import svc from '../services/crud'


export const CRUD_UPDATE_START = 'CRUD_UPDATE_START'
export const CRUD_UPDATE_SUCCESS = 'CRUD_UPDATE_SUCCESS'
export const CRUD_UPDATE_FAIL = 'CRUD_UPDATE_FAIL'
export const CRUD_UPDATE = 'CRUD_UPDATE'

export const CRUD_REMOVE_START = 'CRUD_REMOVE_START'
export const CRUD_REMOVE_SUCCESS = 'CRUD_REMOVE_SUCCESS'
export const CRUD_REMOVE_FAIL = 'CRUD_REMOVE_FAIL'
export const CRUD_REMOVE_RESET = 'CRUD_REMOVE_RESET'

export const CRUD_GETALL_START = 'CRUD_GETALL_START'
export const CRUD_GETALL_SUCCESS = 'CRUD_GETALL_SUCCESS'
export const CRUD_GETALL_FAIL = 'CRUD_GETALL_FAIL'
export const CRUD_GETALL = 'CRUD_GETALL'

export const CRUD_CREATE_START = 'CRUD_CREATE_START'
export const CRUD_CREATE_SUCCESS = 'CRUD_CREATE_SUCCESS'
export const CRUD_CREATE_FAIL = 'CRUD_CREATE_FAIL'
export const CRUD_CREATE = 'CRUD_CREATE'
export const CRUD_CREATE_SYNC = 'CRUD_CREATE_SYNC'
export const CRUD_CREATE_RESET = 'CRUD_CREATE_RESET'

export const crudGetAllStart = () => {
  return {
    type: CRUD_GETALL_START
  }
}
export const crudGetAllSuccess = (data) => {
  return {
    type: CRUD_GETALL_SUCCESS,
    data
  }
}
export const crudGetAllFail = (err) => {
  return {
    type: CRUD_GETALL_FAIL,
    err
  }
}
export const crudGetAll = () => {
  return (dispatch) => {
    dispatch(crudGetAllStart());
    svc.getAll((err, data) => {
      if (err) return dispatch(crudGetAllFail(err));
      dispatch(crudGetAllSuccess(data));
    });
  }
}

export const crudCreateStart = () => {
  return {
    type: CRUD_CREATE_START
  }
}
export const crudCreateSuccess = (err, record) => {
  return {
    type: CRUD_CREATE_SUCCESS,
    err,
    record
  }
}
export const crudCreateFail = (err, record) => {
  return {
    type: CRUD_CREATE_FAIL,
    err,
    record
  }
}
export const crudCreate = (record) => {
  return (dispatch) => {
    dispatch(crudCreateStart());
    svc.create(record, (err, data) => {
      if (err) return dispatch(crudCreateFail(err));
      dispatch(crudCreateSuccess(data));
      dispatch(crudCreateReset());
      dispatch(crudGetAll());
    })
  }
}
export const crudCreateSync = record => {
  return {
    type: CRUD_CREATE_SYNC,
    record
  }
}
export const crudCreateReset = () => {
  return {
    type: CRUD_CREATE_RESET
  }
}


//
// export const crudUpdateStart = record => {
//   svc.update(record, (err, data) => {
//     dispatch(crudUpdateSuccess(err, data));
//   });
//   return {
//     type: CRUD_UPDATE_START,
//     record
//   }
// }
// export const crudUpdateSuccess = (err, record) => {
//   return {
//     type: CRUD_UPDATE_SUCCESS,
//     err,
//     record
//   }
// }
//
export const crudRemoveStart = () => {
  return {
    type: CRUD_REMOVE_START
  }
}
export const crudRemoveSuccess = () => {
  return {
    type: CRUD_REMOVE_SUCCESS
  }
}
export const crudRemoveFail = err => {
  return {
    type: CRUD_REMOVE_FAIL,
    err
  }
}
export const crudRemove = _id => {
  return (dispatch) => {
    dispatch(crudRemoveStart());
    svc.remove(_id, (err, data) => {
      if (err) return dispatch(crudRemoveFail(err));
      dispatch(crudRemoveSuccess());
      dispatch(crudGetAll());
    })
  }
}
export const crudRemoveReset = () => {
  return {
    type: CRUD_REMOVE_RESET
  }
}

// export const crudGetByIdStart = _id => {
//   svc.getById(_id, (err, data) => {
//     dispatch(crudGetByIdSuccess(err, data));
//   });
//   return {
//     type: CRUD_GETBYID_START,
//     _id: _id
//   }
// }
// export const crudGetByIdSuccess = (err, records) => {
//   return {
//     type: CRUD_GETBYID_SUCCESS,
//     err,
//     records
//   }
// }
