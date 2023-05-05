import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Namecard from './Namecard'
import { getChatList } from '../utils'

const ChatRightbar = () => {
    const [chatlist, setchatlist] = React.useState([]);
    let chatArray = [];

    useEffect(() => {
        const list = getChatList().then((data) => {
            setchatlist(data.results);
        }
        );
    }, [])
    // console.log(chatlist);
    chatlist.map((chat) => {
        if (!chatArray.includes(chat)) {
            // console.log(chat);
            chatArray.push(chat);
        }
    })
    // console.log(chatArray);


    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box width={300}>
                <Typography variant="h5" fontWeight={400} sx={{ mb: 1 }}>Chat Threads</Typography>
            </Box>
            {
                chatArray.map((chat) => {
                    return (
                        <Namecard user={chat} />
                    )
                })
            }
        </Box>
    )
}

export default ChatRightbar