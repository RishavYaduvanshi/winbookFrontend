import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const CardFrnd = () => {
    return (
        <>
            <Card sx={{ maxWidth: 250, marginTop: "10px" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image='https://media.gettyimages.com/id/175280583/photo/medhaghat-waterfall.jpg?s=612x612&w=gi&k=20&c=oGvSjTvmED80G-Y4b3-FKvvA4q6QbFRlsvgt6QPNQ3M='
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullwidth>Confirm</Button>
                    <Button variant="contained" color="error" fullwidth>Delete</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardFrnd