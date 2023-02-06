import { Box, Skeleton, Stack } from '@mui/material'
import Posts from './Posts'
import { useEffect, useState } from 'react';
import React from 'react'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

const Feed = (props) => {
  //console.log(props);

  var [users, setUsers] = useState([]);
  const [status, setstatus] = useState();

  const pull_data = (data) => {
    // console.log("DATA: ",data);
    setstatus(data);
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
          //console.log(data);
          setUsers(data);
        })
      }
    })
  }, [status, props.data]);



  if (users.length === 0) return (<Box flex={4} p={2}><Stack spacing={1}>
    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" height={120} />
    <Skeleton variant="rounded" height={120} />
  </Stack></Box>);

  return (
    <Box flex={4} p={2} sx={{ padding: "0px" }}>
      {
        users.map((post) => {
          return <Posts ob={post} func={pull_data} />
        })
      }
    </Box>
  );
}

export default Feed;