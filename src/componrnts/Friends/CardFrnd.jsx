import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ButtonGroup } from '@mui/material';

const CardFrnd = () => {
    return (
        <>
            <Card sx={{ maxWidth: "auto", margin: "10px", maxHeight: "auto" }}>
                <CardMedia
                    component="img"
                    height="120"
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
                {/* <CardActions>
                    <ButtonGroup disableElevation variant='contained' sx={{ display: { xs: "none", sm: "flex" } }} >
                        <Button color="primary" sx={{ marginRight: "2px" }} >Accept</Button>
                        <Button color="error" sx={{ marginLeft: "2px" }} >Delete</Button>
                    </ButtonGroup>
                    <ButtonGroup orientation='vertical' disableElevation variant='contained' sx={{ display: { xs: "flex", sm: "none" } }} >
                        <Button color="primary" sx={{ marginBottom: "2px" }} >Accept</Button>
                        <Button color="error" sx={{ marginTop: "2px" }} >Delete</Button>
                    </ButtonGroup>
                </CardActions> */}
            </Card>
        </>
    )
}

export default CardFrnd