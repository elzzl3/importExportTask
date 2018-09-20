import React from 'react'
import _ from 'lodash'
import Person from './person'

export default props => (
  <div>
    <p>Company: {props.name}</p>
    {_.map(props.employees, e => (
      <Person person={e} />
    ))}
  </div>
)
