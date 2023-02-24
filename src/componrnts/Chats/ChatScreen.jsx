import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ChatRightbar from './ChatRightbar'
import Add from '../Add/Add'
import ChatCard from './ChatCard'

const ChatScreen = (props) => {
    // console.log(props);
    return (
        <Box bgcolor={"background.default"} color={"text.primary"} sx={{ minHeight: "100vh" }} >
            <Navbar setMode={props.setMode} mode={props.mode} />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar position="sticky" setMode={props.setMode} mode={props.mode} />
                <ChatCard setMode={props.setMode} mode={props.mode} />
                <ChatRightbar />
            </Stack>
        </Box>
    )
}

export default ChatScreen