import { Avatar, Box, IconButton, Divider, InputAdornment, Menu, styled, TextField, Typography, Icon } from '@mui/material';
import * as React from 'react';
import './ChatCard.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './ChatCard.css';

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


const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get('message'));
    var message = document.getElementById('message');
    message.value = "";
}


const ChatCard = (props) => {
    const [anchorEli, setAnchorEli] = React.useState(null);
    const open2 = Boolean(anchorEli);

    const handleClick = (event) => {
        event.preventDefault();
        setAnchorEli(event.currentTarget);
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
                <Avatar>GR</Avatar>
                <Typography variant="h6" component="div" sx={{ marginTop: 0.5, marginLeft: 2 }}>
                    Gagan
                </Typography>
            </Box>
            <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
            <UserBox2>
                <div className='message left'>
                    <div className='message-text'>
                        Hey there, I'm using WhatsApp.{/*<div><Icon><AccessTimeIcon sx={{
                            fontSize: "small", marginTop: 1
                        }} /></Icon><span class="time">time</span></div>*/}
                    </div>
                </div>
                <div className='message right'>
                    <div className='message-text'>
                        Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message left'>
                    <div className='message-text'>
                        Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message right'>
                    <div className='message-text'>
                        Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message left'>
                    <div className='message-text'>
                        Hey there, I'm using WhatsApp.
                    </div>
                </div>
                <div className='message right'>
                    <div className='message-text'>
                        Hey there, I'm using WhatsApp.
                    </div>
                </div>
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