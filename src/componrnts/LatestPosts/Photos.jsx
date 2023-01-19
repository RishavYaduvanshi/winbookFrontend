import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import { useEffect } from 'react'
import Pics from './Pics'

const Photos = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    fetch('https://winbookbackend.d3m0n1k.engineer/post/', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Authorization": "Token " + localStorage.getItem('authtoken')
      },
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then((data) => {
          // console.log(data);
          setPosts(data);
        })
      }
    })
  }, []);


  const rows = [];
  for (let i = 0; i < posts.length; i++) {
    // console.log(posts[i].url);
    if (posts[i].url && rows.length <= 2) {

      rows.push(posts[i].url);
    }
  }

  return (
    <ImageList cols={3} rowHeight={100}>
      {rows.map((item) => (
        <ImageListItem >
          <Pics url={item} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Photos