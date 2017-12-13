/*
CONTAINER COMPONENT
*/
import {connect} from 'react-redux'
import Page from './Page'
import {crudGetAll, crudCreateSync, crudCreate, crudCreateReset, crudRemove, crudRemoveReset} from '../../../actions/crud'

const mapStateToProps = state => {
  return {
    records: state.records,
    newRecord: state.newRecord,
    removeRecord: state.removeRecord,
    heros: state.heros
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => {dispatch(crudGetAll())},
    sync: (record) => {dispatch(crudCreateSync(record))},
    create: (record) => {dispatch(crudCreate(record))},
    reset: () => {dispatch(crudCreateReset())},
    remove: (_id) => {dispatch(crudRemove(_id))},
    removeReset: () => {dispatch(crudRemoveReset())}
  }
}

const crudContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default crudContainer
