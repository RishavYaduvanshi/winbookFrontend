import { Box, Card, CardActions, CardHeader, CardMedia, IconButton } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteIcon from '@mui/icons-material/Delete';

const NotifyCard = (props) => {
    // console.log(props);

    const handleclick = () => {
        fetch('https://winbookbackend.d3m0n1k.engineer/notification/' + props.ob.id + '/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Token " + localStorage.getItem('authtoken')
            },
            body: JSON.stringify({
                "isRead": true
            })
        })
        props.func(props.ob.isRead)
    }

    const deletenoti = () => {
        fetch('https://winbookbackend.d3m0n1k.engineer/notification/' + props.ob.id + '/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('authtoken')
            },
        })
        props.func(props.ob.isRead)
    }


    var time = new Date(props.ob.date);
    return (
        <>
            {
                props.ob.isRead === true ? <>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Card sx={{ cursor: 'pointer', display: 'flex', maxWidth: "auto", marginTop: "5px" }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 50, height: 50, marginLeft: "10px", marginTop: "15px", borderRadius: "50%" }}
                                image={props.ob.post.url}
                                alt="image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography variant="h7" fontWeight={400}>
                                        {props.ob.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {time.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActions>
                                    <IconButton onClick={deletenoti}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Box>
                        </Card>
                    </Box>
                </> : <>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Card sx={{ cursor: 'pointer', display: 'flex', maxWidth: "auto", marginTop: "5px", backgroundColor: '#b9dbed' }} onClick={handleclick}>
                            <CardMedia
                                component="img"
                                sx={{ width: 50, height: 50, marginLeft: "10px", marginTop: "15px", borderRadius: "50%" }}
                                image={props.ob.post.url}
                                alt="image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography variant="h7" fontWeight={400}>
                                        {props.ob.description} <FiberManualRecordIcon sx={{ color: '#00bfa5' }} />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {time.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActions>
                                    <IconButton onClick={deletenoti}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Box>
                        </Card>
                    </Box>
                </>
            }
        </>
    )
}

export default NotifyCard