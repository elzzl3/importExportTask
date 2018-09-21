import React from 'react'
import Box from './box'
import List from './numbers'
import AddPictureList from './addPictureList'
import ColourBox from './colourBox'

export default () => {
  return (
    <div>
      <p>Ellies Favourite Animals</p>
      <Box title={'Favourite Dogs'} content={<List numbers={['dalmation', 'husky', 'poodle', 'labrador', 'pug', 'staffy']} />} />
      <Box title={'Favourite Cats'} content={<AddPictureList imageNames={[]} />} />
      <Box title={'coloured box'} content={<ColourBox />} />
    </div>
  )
}
