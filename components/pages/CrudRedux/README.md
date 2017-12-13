# sample CRUD using react and redux
- for create we are syncing the form fields to redux store so that it can be accessed somwhere else. This may not be needed

# POINTERS
- use local state for form data before submitting eg. add and update. Move local state to redux only if the state matters and needs to be accesible globally
- standardize actions. Action creators should return
  {
    type: ACTION_TYPE,
    payload: {..some data goes},
    error: null //can be optionally set to error object
  }
  standard ACTION_TYPEs would be
  COLLECTION_ACTION
  COLLECTION_ACTION_START
  COLLECTION_ACTION_SUCCESS
  COLLECTION_ACTION_FAIL
    COLLECTION can be table name or collection name or some unique property eg. APPCONFIGS or STACKCONFIGS or APPS etc
    ACTION is CREATE, GETALL, GET, UPDATE, DELETE
  corresponding action creators will be named as below:
  collectionAction
  collectionActionStart
  collectionActionFinish
- standardize initial state for reducer
  {
    loading: false,
    payload: {..some data goes here},
    error: null //can be optionally set to error object
  }
