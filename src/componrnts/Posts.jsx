import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Button, Divider, InputAdornment, ListItemIcon, Modal } from '@mui/material';
import { Menu, MenuItem, styled } from '@mui/material';
import { alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import { useNavigate } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Comments from './Comments/Comments';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import ChatIcon from '@mui/icons-material/Chat';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const StyledTextField = styled(TextField)({
  fullWidth: true,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 50,
    },
  },

});

const Styledmodal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});


const Posts = (props) => {
  //console.log("POST DATA: ",typeof(props.ob.url));
  const [like, setlike] = useState();
  const [status, setstatus] = useState();
  const history = useNavigate();
  const [state, setstate] = useState(false);
  const [com, setcom] = useState("");
  const [open1, setOpen1] = useState(false);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch('https://winbookbackend.d3m0n1k.engineer/post/' + props.ob.pk + '/', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Authorization": "Token " + localStorage.getItem('authtoken')
      },
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then((data) => {
          // console.log(data);
          setlike(data.liked_cnt);
          setstatus(data.likedStatus);
        })
      }
    })
  }, [props]);




  const deletePost = () => {
    setAnchorEl(false);
    setOpen1(false);
    fetch('https://winbookbackend.d3m0n1k.engineer/post/' + props.ob.pk + '/', {
      method: 'DELETE',
      headers: {
        "Accept": "application/json",
        "Authorization": "Token " + localStorage.getItem('authtoken')
      },
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        alert({ message: 'Post deleted', type: 'warning' });
        if (props.st === true) {
          history('/home');
        }
        else {
          props.func(true);
        }
      }
    })
  }

  const likePost = () => {
    fetch('https://winbookbackend.d3m0n1k.engineer/post/' + props.ob.pk + '/like/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Authorization": "Token " + localStorage.getItem('authtoken')
      },
    }).then((response) => {
      //console.log(response);
      if (response.status >= 200 && response.status < 300) {
        response.json().then((data) => {
          // console.log(data);
          setlike(data.likes_count);
          setstatus(data.hasOwnProperty('liked_status') ? data.liked_status : true);
        })
      }
    })
  }

  const viewprofile = () => {
    //console.log(props.ob.user);
    history('/view/' + props.ob.userName + '/');
  }

  const copyFunction = (text) => {
    navigator.clipboard.writeText(text);
    setAnchorEl(false);
    alert({ message: 'Link copied to clipboard', type: 'success' });
  }
  var datetime = new Date(props.ob.created_at);
  // console.log(like);

  const changestate = () => {
    if (state === true) {
      setstate(false);
    }
    else {
      setstate(true);
    }
  }



  const postcomment = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const comm = JSON.stringify({
      comment: data.get('filled-basic'),
    });
    fetch('https://winbookbackend.d3m0n1k.engineer/post/' + props.ob.pk + '/comment/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Authorization": "Token " + localStorage.getItem('authtoken'),
        "Content-Type": "application/json"
      },
      body: comm,
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setcom("");
        setstate(false);
        props.func(true);
        alert({ message: 'Comment posted', type: 'success' });
      }
      else {
        alert({ message: 'The comment ws not posted due to some error', type: 'error' });
      }
    })
  }

  const pull_data1 = (data) => {
    props.func(false);
  }

  const onEmojiClick = (emojiObject) => {
    document.getElementById("filled-basic").value += emojiObject.emoji;
  };


  const [anchorEli, setAnchorEli] = React.useState(null);
  const open2 = Boolean(anchorEli);

  const handleClick1 = (event) => {
    setAnchorEli(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEli(null);
  };



  return (
    <>
      <Card raised sx={{ margin: 0.8, }}>
        <CardHeader
          avatar={
            <img src={props.ob.userDp} alt="profile pic" style={{ objectFit: "cover", width: 40, height: 40, borderRadius: 20 }} onClick={viewprofile} />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={handleClick} />
            </IconButton>
          }
          title={<Typography onClick={viewprofile}>{props.ob.userName}</Typography>
          }
          subheader={datetime.toLocaleString()}
        />
        {props.ob.url === null ? <></> : <><CardMedia
          component="img"
          height="20%"
          image={props.ob.url}
          alt={props.ob.userName}
          sx={{ objectFit: "contain", cursor: "pointer", maxHeight: 400, }}
          onClick={() => history('/post/' + props.ob.pk + '/')}
        /></>}
        <CardContent>
          {props.ob.caption === "" ? <></> : <><Typography variant="body1" fontWeight={500} onClick={() => history('/post/' + props.ob.pk + '/')} color="text.secondary">
            {props.ob.caption}
          </Typography></>}
          <br />
          <Divider />
          <Typography variant="body2" color="text.secondary" marginTop={1} marginBottom={0}>
            Liked By <strong>{like}</strong> People in total
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {status === true ? <><Favorite sx={{ color: "red" }} onClick={likePost} /></> : <><FavoriteBorder color="primary" onClick={likePost} /></>}
            {/* <Checkbox icon={<FavoriteBorder />}  checkedIcon={<Favorite sx={{color:"red"}}/>} onClick={likePost}/> */}
            <h6>{like}</h6>
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon color="primary" onClick={changestate} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon color="primary" onClick={() => copyFunction(window.location.origin + "/post/" + props.ob.pk + "/")} />
          </IconButton>
        </CardActions>
        <Divider />
        {props.ob.comments.length !== 0 ? <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }}><IconButton onClick={() => history('/post/' + props.ob.pk + '/')} sx={{ fontSize: 16 }}>View all {props.ob.comments.length} Comments</IconButton></Box> : <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }}><Typography fontWeight={300}>No Comments Yet !</Typography></Box>}
        {state === true ? <CardContent>
          <StyledTextField id="filled-basic" name="filled-basic" autoFocus component='form' onSubmit={postcomment} noValidate fullWidth placeholder="Add your comment" color='primary' variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <EmojiEmotionsIcon color="error" onClick={
                      handleClick1
                    } />
                  </IconButton>
                  <IconButton type='submit' >
                    <SendIcon color='primary' /></IconButton>

                </InputAdornment>
              )
            }}
          />
        </CardContent> : <></>}

        {
          props.st ?
            <Typography variant="body2" color="text.secondary">
              {props.ob.comments.map((ob) => {
                return (
                  <>
                    <Comments user={ob.user} comment={ob.comment} funcn={pull_data1} pk={ob.pk} id={props.ob.user} />
                  </>
                )
              })}
            </Typography> :
            <>
              {props.ob.comments.length === 0 ? <></> :
                <Comments user={props.ob.comments[(props.ob.comments.length) - 1].user} id={props.ob.user} comment={props.ob.comments[(props.ob.comments.length) - 1].comment} funcn={pull_data1} pk={props.ob.comments[(props.ob.comments.length) - 1].pk} />
              }</>
        }

        {/*Menu Item of post*/}
        <Menu
          id="-enu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'left',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {props.ob.userName === localStorage.getItem('user') ? <div>
            <MenuItem ><ListItemIcon><EditIcon /></ListItemIcon>Edit Post</MenuItem>
            <Divider />
            <MenuItem onClick={() => {
              setOpen1(true);
            }}><ListItemIcon><DeleteForeverIcon /></ListItemIcon>Delete Post</MenuItem>
            <Divider />
          </div> : <div></div>}
          <MenuItem ><ListItemIcon><MobileScreenShareIcon /></ListItemIcon>Quick Share</MenuItem>
          <Divider />
          <MenuItem ><ListItemIcon><ChatIcon /></ListItemIcon>Send via chats</MenuItem>
          <Divider />
          <MenuItem onClick={() => copyFunction(window.location.origin + "/post/" + props.ob.pk + "/")} ><ListItemIcon><FileCopyIcon /></ListItemIcon>Copy Link</MenuItem>
        </Menu>
        {/*Menu Item of post*/}
        {/*Delete Post*/}
        <Styledmodal
          open={open1}
          onClose={e => setOpen1(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box bgcolor={"background.default"} color={"text.primary"} height={160} p={3} borderRadius={5} width={400}>
            <Typography variant='h6' color="error" textAlign="center">Confirm Delete?</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: 3 }}>
              <Typography variant='h7' color="error" textAlign="center" >
                Are You Sure You Want To Delete This Post?
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 5 }}>
              <Button variant="contained" color="error" onClick={deletePost} sx={{ marginRight: 1 }} >
                Delete
              </Button>
              <Button variant="contained" color="primary" sx={{ marginLeft: 1 }} onClick={e => { setOpen1(false); setAnchorEl(false) }}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Styledmodal>
        {/*Delete Post*/}
        <Menu
          id="basic-menu"
          anchorEli={anchorEli}
          open={open2}
          onClose={handleClose1}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <EmojiPicker onEmojiClick={onEmojiClick} pickerStyle={{ width: "100%" }} />
        </Menu>


      </Card>
    </>
  );
}

export default Posts