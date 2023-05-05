import { Box, Typography } from '@mui/material'
import React from 'react'
import Photos from './LatestPosts/Photos'
import Conversations from './Chats/Conversations'

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300} mb={2}>Latest Posts</Typography>
        <Photos />
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>Latest Conversations</Typography>
        <Conversations />
      </Box>
    </Box>
  )
}

export default Rightbar