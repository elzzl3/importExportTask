import React from 'react'
import _ from 'lodash'

export default props => (
  <ul>
    {_.map(props.imageNames, imageName => (
      <li>
        <img src={props.dir + imageName + props.ext} />
      </li>
    ))}
  </ul>
)
