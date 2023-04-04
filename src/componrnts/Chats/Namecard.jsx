import { Box } from '@mui/material'
import React from 'react'
import { Card, CardMedia } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        "& :hover": {
            backgroundColor: "#bcc1c2",
        }
    },

}));

const Namecard = (props) => {
    // console.log(props);
    const dp = "https://winbookbackend.d3m0n1k.engineer" + props.user.to_user.dp;
    const history = useNavigate();
    const classes = useStyles();
    if (props.user.to_user.name === localStorage.getItem("user")) {
        return (
            <></>
        )
    }
    else {
        return (
            <Box className={classes.root} onClick={() => {
                history('/chat/' + props.user.to_user.name + '/');
            }} >
                <Card sx={{ display: 'flex', maxWidth: "auto", marginTop: "5px", cursor: "pointer" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 50, height: 50, marginLeft: "10px", marginTop: "10px", borderRadius: "50%" }}
                        image={dp}
                        alt="image"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography variant="h7" fontWeight={500}>
                                {props.user.to_user.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.user.from_user.name} - {props.user.message}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Box>
        )
    }
}

export default Namecard