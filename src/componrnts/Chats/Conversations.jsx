import React from 'react'
import Messages from './Messages';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { getChatList } from '../utils';

const Conversations = () => {

  const [chatlist, setchatlist] = React.useState([]);

  useEffect(() => {
    const list = getChatList().then((data) => {
      setchatlist(data.results);
    }
    );

  }, [])

  return (
    <Box sx={{
      maxHeight: "50vh",
      overflowY: "scroll",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    }}>
      {
        chatlist.map((chat) => {
          return (
            <Messages user={chat} />
          )
        })
      }
    </Box>
  )
}

export default Conversations