import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

const Photos = () => {
  return (
    <ImageList cols={3} rowHeight={100}>
        <ImageListItem>
            <img src='https://winbook.d3m0n1k.engineer/post/71/'
            alt=""
            />
        </ImageListItem>
        <ImageListItem>
            <img src='https://winbook.d3m0n1k.engineer/post/48/'
            alt=''/>
        </ImageListItem>
        <ImageListItem>
            <img src='https://winbook.d3m0n1k.engineer/post/35/'
            alt=''/>
        </ImageListItem>
    </ImageList>
  )
}

export default Photos