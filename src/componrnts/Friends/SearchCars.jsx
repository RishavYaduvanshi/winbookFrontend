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
            backgroundColor: "#e1e6e8",
        }
    },

}));


const SearchCars = (props) => {
    //console.log(props.ob.username);
    const history = useNavigate();
    const classes = useStyles();
    return (
        <Box className={classes.root} onClick={() => {
            history('/view/' + props.ob.username + '/');
            props.func(null)
        }} >
            <Card sx={{ display: 'flex', maxWidth: "auto", marginTop: "5px", cursor: "pointer" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50, marginLeft: "10px", marginTop: "10px", borderRadius: "50%" }}
                    image={props.ob.dp}
                    alt="image"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h7" fontWeight={500}>
                            {props.ob.username}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.ob.first_name} {props.ob.last_name}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}

export default SearchCars