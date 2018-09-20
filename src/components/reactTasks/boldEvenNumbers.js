import React from 'react'
import _ from 'lodash'

export default props => (
  <ul>
    {_.map(props.numList, n => {
      if (n % 2 === 0) {
        return (
          <li>
            <b>{n}</b>
          </li>
        )
      }
      return <li>{n}</li>
    })}{' '}
  </ul>
)
