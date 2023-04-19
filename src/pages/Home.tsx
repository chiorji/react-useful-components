import React, { Fragment } from 'react'
import ImageCardHOC from '../components/ImageCard'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <ImageCardHOC
        renderAsUrl={false}
        imgPath='https://avatars.githubusercontent.com/chiorji'
        linkUrl='/'
      />
    </Fragment>
  )
}
