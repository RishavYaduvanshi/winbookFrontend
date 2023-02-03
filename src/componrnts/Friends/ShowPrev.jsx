import React from 'react'
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Tooltip from '@mui/material/Tooltip';

const ShowPrev = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Tooltip title="Previous Page" arrow sx={{ position: "fixed", bottom: 20, right: 120 }}>
                <Fab variant="extended" color='primary'>
                    <ArrowCircleLeftIcon sx={{ mr: 1 }} />
                    Prev
                </Fab>
            </Tooltip>
            <Tooltip title="Next Page" arrow sx={{ position: "fixed", bottom: 20, right: 10 }}>
                <Fab variant="extended" color='primary'>
                    <ArrowCircleRightIcon sx={{ mr: 1 }} />
                    Next
                </Fab>
            </Tooltip>
        </Box >
    )
}

export default ShowPrev