import React from 'react'
import Box from './box'
import List from './numbers'
import PictureList from './pictureList'
import PictureAndWordList from './pictureAndWordList'

export default () => {
  return (
    <div>
      <p>Ellies Favourite Animals</p>
      <Box title={'Favourite Dogs'} content={<List numbers={['dalmation', 'husky', 'poodle', 'labrador', 'pug', 'staffy']} />} />
      <Box
        title={'Favourite Cats'}
        content={
          <PictureAndWordList
            imageNames={['abyssinian', 'britishshorthair', 'mainecoon', 'norwegianforest', 'persian', 'ragdoll', 'russianblue', 'siamese']}
            dir={'cats/'}
            ext={'.jpeg'}
          />
        }
      />
      <Box
        title={'Cats'}
        content={
          <PictureList
            imageNames={['abyssinian', 'britishshorthair', 'mainecoon', 'norwegianforest', 'persian', 'ragdoll', 'russianblue', 'siamese']}
            dir={'cats/'}
            ext={'.jpeg'}
          />
        }
      />
    </div>
  )
}
