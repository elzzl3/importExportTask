import React from 'react'
import _ from 'lodash'

export default props => (
  <ul>
    {_.map(props.numbers, number => (
      <li>{number}</li>
    ))}
  </ul>
)
