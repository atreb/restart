/*
PRESENTATION COMPONENT
*/
import React from 'react'

const Record = (props) => {
    return (
      <li>
        <input type='text' readOnly value={props.record._id}/>
        <input type='text' readOnly value={props.record.name}/>
        <input type='text' readOnly value={props.record.city}/>
        <button onClick={props.remove.bind(null, props.record._id)}>delete</button>
      </li>
    )
}

export default Record
