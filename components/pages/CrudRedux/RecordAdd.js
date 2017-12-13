/*
PRESENTATION COMPONENT
*/
import React from 'react'

const RecordAdd = (props) => {
    return (
      <div>
        <input type='text' value={props.newRecord.data.name} onChange={event => {
          props.sync({name: event.target.value, city: props.newRecord.data.city});
        }}/>
        <input type='text' value={props.newRecord.data.city} onChange={event => {
          props.sync({name: props.newRecord.data.name, city: event.target.value});
        }}/>
        <button onClick={() => {
          props.create({name: props.newRecord.data.name, city: props.newRecord.data.city});
        }}>add</button>
        <button onClick={() => {
          props.reset();
        }}>reset</button>
        <span>{props.newRecord.err.message}</span>
      </div>
    )
}

export default RecordAdd
