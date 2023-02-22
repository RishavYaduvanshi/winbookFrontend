import { Box, Typography } from '@mui/material'
import React from 'react'

const ChatRightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box width={300}>
                <Typography variant="h5" fontWeight={400} sx={{ mb: 1 }}>Chats</Typography>
            </Box>
        </Box>
    )
}

export default ChatRightbar