import React from 'react'
import Messages from './Messages';
import Box from '@mui/material/Box';

const Conversations = () => {
  const sock = new WebSocket(
    "wss://winbookbackend.d3m0n1k.engineer/ws/chat/?" +
      localStorage.getItem("authtoken")
  );
  sock.onmessage = function (e) {
    console.log(e.data);
    //use this method to update the messages in a chat window
  };
  sock.onopen = sock.onmessage;
  sock.onerror = sock.onmessage;
  sock.onclose = sock.onmessage;
  console.log("I WAS EXEC", sock);
  return (
    <Box>
      <Messages />
    </Box>
  )
}

export default Conversations