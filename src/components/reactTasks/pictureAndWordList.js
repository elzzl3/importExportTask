import React from 'react'
import _ from 'lodash'
import PictureAndWord from './pictureAndWord'

export default props => (
  <ul>
    {_.map(props.imageNames, imageName => (
      <li>
        <PictureAndWord title={imageName} image={props.dir + imageName + props.ext} />
      </li>
    ))}
  </ul>
)
