import { Avatar, Box, IconButton, Divider, InputAdornment, Menu, styled, TextField, Typography, Icon } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './ChatCard.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './ChatCard.css';
import { getChatMessages, getSock } from '../utils';


const StyledTextField = styled(TextField)({
    fullWidth: true,
    '& label.Mui-focused': {
        color: 'primary',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'primary',
    },
    marginTop: 2,
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: 50,
        },
    },
});


const ChatCard = (props) => {
    // console.log(props);
    var sock;
    const [socket, setsock] = useState(null);
    const [user, setuser] = useState([]);
    const [state, setstate] = useState(false);


    useEffect(() => {
        var userdata = getChats(props.user.id)
        userdata.then((data) => {
            // console.log(data);
            setuser(data);
        });
    }, [props, state]);

    useEffect(() => {
        sock = getSock();
        // console.log(sock);
        sock.then((data) => {
            setsock(data);
        })
    }, [props, state]);
    // console.log(socket)
    if (socket !== null) {
        socket.onmessage = (e) => {
            setstate(!state);
        }
    }

    console.log(user);
    const getChats = (userval) => {
        let res = getChatMessages(userval).then((data) => {
            return data.results;
        });
        return res;
    }

    const [anchorEli, setAnchorEli] = React.useState(null);
    const open2 = Boolean(anchorEli);

    const handleClick = (event) => {
        event.preventDefault();
        setAnchorEli(event.currentTarget);
    }

    const handleSubmit = (event) => {
        console.log(socket);
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('message'));
        var message = document.getElementById('message');
        message.value = "";
        const id = props.user.id;
        const message1 = data.get('message');
        socket.send(`{
            "handler": "message",
            "body": {
		        "to_user": ${id},
		        "message": "${message1}"
            }
        }`)
        setstate(!state);
    }

    const handleClose1 = () => {
        setAnchorEli(false);
    };

    const onEmojiClick = (emojiObject) => {
        document.getElementById('message').value += emojiObject.emoji;
    };

    const UserBox = styled(Box)(({ theme }) => ({
        flex: 4,
        height: "inherit",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        backgroundImage: props.mode === "dark" ? "#282929" : "#ffffff"
    }));

    const UserBox2 = styled(Box)(({ theme }) => ({
        overflowY: "scroll",
        height: "60vh",
        scrollbarWidth: "none",

        '&::-webkit-scrollbar': {
            display: "none",
        },
        backgroundImage: props.mode === "dark" ? "#1e1e1e" : "#ffffff"
    }));
    return (
        < UserBox>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Avatar src={props.user.dp}></Avatar>
                <Typography variant="h6" component="div" sx={{ marginTop: 0.5, marginLeft: 2 }}>
                    {props.user.username}
                </Typography>
            </Box>
            <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
            <UserBox2>
                {user.map((chat) => {
                    // console.log(chat);
                    var time_date = new Date(chat.created);
                    var time = time_date.toLocaleTimeString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true });
                    var date = time_date.toLocaleDateString("en-In", { year: 'numeric', month: 'numeric', day: 'numeric' });
                    // console.log(time, date);
                    return (
                        <div className={chat.from_user.name === localStorage.getItem("user") ? "message right" : "message left"}>
                            <div className="message-text">
                                {chat.message}{
                                    chat.from_user.name !== localStorage.getItem("user") ?
                                        <div className='right'><span class="time">{time}</span></div>
                                        :
                                        <div className='right'><Icon><DoneAllIcon sx={{ fontSize: "small", marginTop: 1.3 }} /></Icon><span class="time">{time}</span></div>
                                }
                            </div>
                        </div>
                    )
                })}

            </UserBox2>
            <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
            <StyledTextField id="message" name="message" component='form' onSubmit={handleSubmit} noValidate fullWidth placeholder="Message..." color='primary' variant="outlined"
                sx={{
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type='submit' sx={{
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'success.main',
                                },
                            }} >
                                <SendIcon sx={{ color: "white" }} /></IconButton>

                        </InputAdornment>
                    ),
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <EmojiEmotionsIcon color="success" onClick={
                                    handleClick
                                } />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />



            <Menu
                id="basic-menu"
                anchorEli={anchorEli}
                open={open2}
                onClose={handleClose1}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <EmojiPicker onEmojiClick={onEmojiClick} pickerStyle={{ width: "100%" }} />
            </Menu>

        </UserBox >

    )
}

export default ChatCard