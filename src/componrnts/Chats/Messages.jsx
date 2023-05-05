import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Messages = (props) => {
    const dp = "https://winbookbackend.d3m0n1k.engineer" + props.user.to_user.dp;
    const history = useNavigate();

    return (
        <List sx={{
            width: '100%', maxWidth: 360, bgcolor: 'background.paper', "& :hover": {
                backgroundColor: "#bcc1c2",
            },
            cursor: "pointer",
        }}
        >
            <ListItem alignItems="flex-start"
                onClick={() => {
                    history('/chat/' + props.user.to_user.name + '/');
                }}
            >
                <ListItemAvatar>
                    <Avatar alt="user-dp" src={dp} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.user.to_user.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.user.from_user.name}
                            </Typography>
                            {" :— " + props.user.message}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List >
    )
}

export default Messages