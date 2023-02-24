import { Avatar, Box, Button, Divider, InputAdornment, styled, TextField, Typography } from '@mui/material';
import * as React from 'react';
import './ChatCard.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get('message'));
    var message = document.getElementById('message');
    message.value = "";
}



const ChatCard = (props) => {

    const UserBox = styled(Box)(({ theme }) => ({
        flex: 4,
        height: "83vh",
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
                <Avatar>GR</Avatar>
                <Typography variant="h6" component="div" sx={{ marginTop: 0.5, marginLeft: 2 }}>
                    Gagan
                </Typography>
            </Box>
            <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
            <UserBox2>
                <div className='message left'>
                    <div className='message-text'>
                        <div className='msg'>Gagan:</div> Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message right'>
                    <div className='message-text'>
                        <div className='msg'>You:</div> Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message left'>
                    <div className='message-text'>
                        <div className='msg'>Gagan:</div> Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message right'>
                    <div className='message-text'>
                        <div className='msg'>You:</div> Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message left'>
                    <div className='message-text'>
                        <div className='msg'>Gagan:</div> Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message right'>
                    <div className='message-text'>
                        <div className='msg'>You:</div> Hey there, I'm using WhatsApp.
                    </div>
                </div>
            </UserBox2>
            <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: { xs: 0, sm: 2 },
                }}
            >
                <TextField placeholder="Type a message..." variant="outlined"
                    fullWidth id="message" name="message"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmojiEmotionsIcon sx={{
                                    cursor: "pointer",
                                    color: "#000501",
                                }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" color="success" sx={{ margin: 1 }} endIcon={<SendIcon />}>Send</Button>
            </Box>

        </UserBox >


    )
}

export default ChatCard