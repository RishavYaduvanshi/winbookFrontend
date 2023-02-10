import { Box, Skeleton, Stack, styled } from '@mui/material'
import Posts from './Posts'
import { useEffect, useState } from 'react';
import React from 'react'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

const UserBox = styled(Box)(({ theme }) => ({
  marginLeft: "0px",
  flex: 4,
}));

const Feed = (props) => {
  //console.log(props);

  const data = {
    "url": "https://ibb.co/9ZKddpb",
    "caption": "Welcome To Wibrant",
    "liked_cnt": 1,
    "created_at": "2023-02-10T09:21:53.793492Z",
    "updated_at": "2023-02-10T09:21:59.453798Z",
    "pk": 113,
    "userName": "admin",
    "user": 57,
    "likedStatus": false,
    "userDp": "http://winbookbackend.d3m0n1k.engineer/static/authn/dp.png",
    "comments": [],
    "likedBy": [
      {
        "pk": 57,
        "dp": "/static/authn/dp.png",
        "username": "admin",
        "first_name": "Admin ",
        "last_name": ""
      }
    ]
  }

  var [users, setUsers] = useState([]);
  const [status, setstatus] = useState(false);

  const pull_data = (data) => {
    // console.log("DATA: ", status);
    setstatus(!status);
  }

  useEffect(() => {
    fetch('https://winbookbackend.d3m0n1k.engineer/post/feed', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Authorization": "Token " + localStorage.getItem('authtoken')
      },
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then((data) => {
          console.log(data);
          setUsers(data);
        })
      }
    })
  }, [status, props.data]);



  if (users.length === 0) return (
    <Box flex={4} p={2}>
      <posts ob={data} func={pull_data} />
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" height={120} />
        <Skeleton variant="rounded" height={120} />
      </Stack>
    </Box>
  );
  else {
    return (
      <UserBox >
        {
          users.map((post) => {
            return <Posts ob={post} func={pull_data} />
          })
        }
      </UserBox>
    );
  }
}

export default Feed;