/*
PRESENTATION COMPONENT
*/
import React from 'react'
import Record from './Record'

const Records = (props) => {
    if (props.records.err.stack) console.error(props.records.err.stack)
    return (
      <div>
      <span>{props.records.err.message}</span>
      <ul>
        {props.records.data.map(record => {
          return <Record key={record._id} record={record} remove={props.remove}/>
        })}
      </ul>
      </div>
    )
}

export default Records
