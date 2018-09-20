import React from 'react'

export default props => (
  <div style={{ border: '5px solid' }}>
    <p>{props.title}</p>
    {props.content}
  </div>
)
