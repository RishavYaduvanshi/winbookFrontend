import { Box } from '@mui/material'
import Posts from './Posts'
import { useEffect, useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {styled} from '@mui/material';
import React from 'react'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

const Feed = () => { 


const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "100px",
  alignItems: "center",
justifyContent: "center",
}));

var [users, setUsers] = useState([]);

useEffect(() => {
  fetch('https://winbookbackend.d3m0n1k.engineer/post/',{
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Authorization": "Token " + localStorage.getItem('authtoken')
    },
  }).then((response) => {
    if(response.status >= 200 && response.status < 300){
      response.json().then((data) => {
        //console.log(data);
        setUsers(data);
      })
    }
  })
}, []);



if (users.length===0) return <UserBox><CircularProgress /></UserBox>;

 return (
  <Box flex={4} p={2}>
    {
      users.map((post) => {
        return <Posts ob={post} />
      })
    }
</Box>
  );
}

export default Feed;