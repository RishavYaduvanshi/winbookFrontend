import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const LikeList = (props) => {
    const history = useNavigate();
    // console.log(props.user);
    var dp = "https://winbookbackend.d3m0n1k.engineer" + props.user.dp;
    return (
        <Box onClick={
            () => {
                history("/view/" + props.user.username + "/");
            }
        }>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={props.user.username} src={dp} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.user.username}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.user.first_name + " " + props.user.last_name}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Box>
    )
}

export default LikeList