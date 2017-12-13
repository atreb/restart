/*
PARENT COMPONENT
*/
import React from 'react'
import Records from './Records'
import RecordAdd from './RecordAdd'

export default class Page extends React.Component {
  componentDidMount () {
    this.props.getAll()
  }

  render () {
    return (
      <div>
        <RecordAdd sync={this.props.sync} newRecord={this.props.newRecord} create={this.props.create} reset={this.props.reset}/>
        {(this.props.removeRecord.err.message === '') ? null :
          <div>{this.props.removeRecord.err.message}<button onClick={this.props.removeReset}>clear</button></div>
        }
        <Records records={this.props.records} remove={this.props.remove}/>
      </div>
    )
  }
}
