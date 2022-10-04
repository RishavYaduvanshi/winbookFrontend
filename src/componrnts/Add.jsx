import { Button, ButtonGroup, Fab, LinearProgress, Menu, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { Image } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import { alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Picker from 'emoji-picker-react';

const Styledmodal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

const Add = (props) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState();
  const [state, setState] = useState(false);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image);
    }
    else {
      setPreview(null);
    }
  }, [image])

  const browse = (event) => {
    const fileUploaded = event.target.files[0];
    //console.log(fileUploaded);
    if (fileUploaded) {
      setImage(fileUploaded);
    }
    else {
      setImage("");
    }
  }

  //console.log(image);

  const handlechange = (e) => {
    setCaption(e.target.value);

  }
  //console.log(caption);

  const createpost = () => {
    setState(true);
    setPreview(null);
    const bdy = new FormData()
    bdy.append('url', image);
    bdy.append('caption', caption);
    // console.log(bdy.get('url'), bdy.get('caption'));

    fetch('https://winbookbackend.d3m0n1k.engineer/post/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Authorization": "Token " + localStorage.getItem('authtoken')
      },
      body: bdy,

    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setOpen(false);
        alert({ message: 'Post created successfully', type: 'success' });
        setState(false);
        props.func(true);
        setImage("");
      }
      else {
        alert({ message: 'Something went wrong! Please try again', type: 'error' });
        setState(false);
        setImage("");
      }
    })
  }

  const onEmojiClick = (emojiObject) => {
    document.getElementById("caption").value += emojiObject.emoji;
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Tooltip title="Create new Post" sx={{ position: "fixed", bottom: 20, left: 10 }}>
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={() => { setOpen(true) }} />
        </Fab>
      </Tooltip>
      <Styledmodal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} height={320} p={3} borderRadius={5} width={400}>
          <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
          <Userbox>
            <img alt="" src={localStorage.getItem('profile')} height="40px" width="40px" style={{ borderRadius: "50%" }} />
            <Typography variant='span' fontWeight={500}>{localStorage.getItem("user")}</Typography>
          </Userbox>
          <TextField
            id="caption"
            name="caption"
            multiline
            rows={3}
            placeholder="What's on your Mind?"
            sx={{ width: "100%" }}
            variant="standard"
            onChange={handlechange}
          />
          <br />
          <br />
          <Stack direction={"row"} mt={1} mb={4} gap={1}>
            <label htmlFor="formId">
              <input name="file" accept='image/*' type="file" id="formId" hidden onChange={browse} />
              <Image color="secondary" />
            </label><EmojiEmotionsIcon color="error" onClick={
              handleClick
            } />
            {/* <EmojiEmotions color='primary'/>  <VideoCameraBack color='success'/>  <PersonAdd color='error'/> */}
            {preview ? <Badge badgeContent={'x'} color="error" onClick={() => {
              setImage(null);
              setPreview(null);
            }}>
              <img src={preview} alt='new post' height={50} width={70} /></Badge> : <Paper elevation={12} />}
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <Button onClick={createpost}>Post</Button>
          </ButtonGroup>
          {state ? <LinearProgress /> : <></>}
        </Box>
      </Styledmodal>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: "100%" }} />
      </Menu>
    </Box>
  );
}

export default Add;