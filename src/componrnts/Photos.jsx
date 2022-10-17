import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

const Photos = () => {
  return (
    <ImageList cols={3} rowHeight={100}>
        <ImageListItem>
            <img src='https://winbookbackend.d3m0n1k.engineer/media/posts/IMG_20221016_193241_055.jpg'
            alt=""
            />
        </ImageListItem>
        <ImageListItem>
            <img src='https://winbookbackend.d3m0n1k.engineer/media/posts/IMG20220926111010_EuCORDS.jpg'
            alt=''/>
        </ImageListItem>
        <ImageListItem>
            <img src='https://winbookbackend.d3m0n1k.engineer/media/posts/IMG_20220320_123757.jpg'
            alt=''/>
        </ImageListItem>
    </ImageList>
  )
}

export default Photos