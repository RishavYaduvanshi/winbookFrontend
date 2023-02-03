import React from 'react'
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const CardFrnd = (props) => {
    // console.log(props);
    const history = useNavigate();
    var url = "https://winbookbackend.d3m0n1k.engineer" + props.follower.dp;
    return (
        <>
            <Card sx={{ maxWidth: "auto", margin: "10px", maxHeight: "auto" }} onClick={() => {
                history("/view/" + props.follower.username + "/")
            }}>
                <CardMedia
                    component="img"
                    height="120"
                    image={url}
                    alt="green iguana"
                    sx={{ objectFit: "contain", cursor: "pointer" }}
                />
                <CardContent
                    sx={{ cursor: "pointer" }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.follower.username}
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        {props.follower.first_name} {props.follower.last_name}
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