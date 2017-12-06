import React from 'react'

const Entry = (props) => (
  <div>
    <h1>Entry for {props.match.params.number}</h1>
  </div>
)

export default Entry
