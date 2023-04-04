import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ChatRightbar from './ChatRightbar'
import { useParams } from 'react-router-dom';
import ChatCard from './ChatCard'
import { getDetails } from '../utils'

const ChatScreen = (props) => {
    document.title = "Wibrant | Chat";
    const [userData, setuserData] = useState([]);
    var username;
    const { val } = useParams();
    if (typeof val === "undefined") {
        username = localStorage.getItem("user");
    }
    else {
        username = val;
    }


    useEffect(() => {
        getDetails(username).then((data) => {
            setuserData(data);
        });
    }, [username]);
    // console.log(username);


    return (
        <Box bgcolor={"background.default"} color={"text.primary"} sx={{ minHeight: "100vh" }} >
            <Navbar setMode={props.setMode} mode={props.mode} />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar position="sticky" setMode={props.setMode} mode={props.mode} />
                {username === "new" ? <Box display="flex" flex={4}>
                    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
                        <Typography variant="h6" fontWeight={500} color="primary">
                            Select a chat to start messaging
                        </Typography>
                    </Box>
                </Box> : <ChatCard setMode={props.setMode} mode={props.mode} user={userData} />}
                <ChatRightbar />
            </Stack>
        </Box>
    )
}

export default ChatScreen