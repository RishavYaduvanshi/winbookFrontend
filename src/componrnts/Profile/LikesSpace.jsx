import { Typography, Box, List, Divider } from '@mui/material'
import React from 'react'
import LikeList from './LikeList'

const LikesSpace = (props) => {
    // console.log(props.ob.likedBy);
    return (
        <Box sx={{
            width: "25%",
            position: "absolute",
            display: { xs: "none", sm: "block" }
        }}>
            <Typography variant="h6" fontWeight={500} sx={{ mt: 2, mb: 1 }}>Likes</Typography>
            <Divider />
            <Box sx={{ height: "auto", overflow: "auto" }}>
                <List
                    rowHeight={46}
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        props.ob.likedBy.map((item) => {
                            return <LikeList user={item} />
                        })
                    }
                </List>
            </Box>
        </Box>
    )
}

export default LikesSpace