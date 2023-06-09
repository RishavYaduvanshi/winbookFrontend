import { AppBar, styled, Toolbar, Typography, Box, InputBase, Menu, MenuItem, Switch, Badge, IconButton } from '@mui/material'
import { AccountBox, Article, Group, Home, Person, Settings, ModeNight } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Divider, ListItemIcon } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';
import { alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import NotifyCard from './NotifyCard';
import SearchCars from './Friends/SearchCars';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: 0,
  marginLeft: 0,
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


// ++++++++++++++++++++++++++++++=================NAVBAR============++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const Navbar = (props) => {
  // console.log(props);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const [notifications, setNotifications] = React.useState([]);
  const [data1, setData1] = React.useState(true);
  const [noti, setNoti] = React.useState(0);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);


  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
    setSearch([]);
  };


  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if (tkn !== null) {
      setState({ ...state, [anchor]: open });
    } else {
      history('/')
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <Box sx={{ width: "10px", height: "10px", }}>
          </Box>
        </ListItem>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton onClick={() => {
            history("/home")
          }}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { history('/profile') }}>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            history('/chat/undefined')
          }}>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick3}>
            <ListItemIcon>
              <Badge badgeContent={noti} color="error" ><NotificationsIcon /></Badge>
            </ListItemIcon>
            <ListItemText primary="Alerts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { history('/connections') }}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Connections" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            {props.mode === 'dark' ? <MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={e => {
              props.setMode(props.mode === "light" ? "dark" : "light");
              localStorage.setItem("theme", props.mode === "light" ? "dark" : "light");
            }} /> : <MaterialUISwitch sx={{ m: 1 }} onChange={e => {
              props.setMode(props.mode === "light" ? "dark" : "light");
              localStorage.setItem("theme", props.mode === "light" ? "dark" : "light");
            }} />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const history = useNavigate();
  const tkn = localStorage.getItem('authtoken')
  const [search, setSearch] = useState([]);
  var background = "";
  const [Open, setOpen] = useState(false);
  const [profilephoto, setprofilephoto] = useState();
  if (props.mode === "light") {
    background = "white";
  }
  else {
    background = "#1a1a1a";
  }
  const logout = () => {
    localStorage.clear();
    history("/");
    alert({ message: 'Logged Out!', type: 'info' })
  }

  const logout1 = () => {
    localStorage.clear();
    history("/");
    alert({ message: 'Logged Out! You can now Log In to a different Account', type: 'info' })
  }

  const profile = () => {
    history('/profile');
  }

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: background,
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  useEffect(() => {
    if (localStorage.getItem('authtoken') !== null) {
      fetch('https://winbookbackend.d3m0n1k.engineer/user/f/' + localStorage.getItem('user') + '/', {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Authorization": "Token " + localStorage.getItem('authtoken')
        },
      }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((data) => {
            localStorage.setItem('id', data.id);
            localStorage.setItem('profile', data.dp);
            setprofilephoto(data.dp);
          })
        }
      })
    }
  }, [props.status]);

  useEffect(() => {
    // console.log("useEffect");
    if (localStorage.getItem('authtoken') !== null) {
      fetch('https://winbookbackend.d3m0n1k.engineer/notification/', {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Authorization": "Token " + localStorage.getItem('authtoken')
        },
      }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((data) => {
            setNotifications(data.results);
            // console.log(data.results);
            var count = 0;
            notifications.map((item) => {
              if (item.isRead === false) {
                count = count + 1;
              }
            })
            setNoti(count);
            // console.log(count);
          })
        }
      })
    }
  }, [data1]);

  const pull = (dat) => {

    if (data1 === true) {
      setData1(false);
    } else {
      setData1(true);
    }
    // console.log(data1);
  }

  const searchFrnd = async (e) => {
    e.preventDefault();
    var search = document.getElementById('src').value;
    fetch('https://winbookbackend.d3m0n1k.engineer/user/s/' + search + '/', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      },
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then((data) => {
          //console.log(data.results);
          setSearch(data.results);

        })
      }
    }
    )
    handleClick1(e);
  }

  const pulldat = (data) => {
    setAnchorEl1(null);
  }

  return (
    <AppBar position='sticky' sx={{ width: '100%' }}>
      <StyledToolBar>
        <NavLink to={"/home"} style={{ color: 'white', textDecoration: 'none' }}><Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Wibrant</Typography></NavLink>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Box sx={{ display: { xs: "block", sm: "none" }, justifyContent: "right" }}><MenuIcon onClick={toggleDrawer(anchor, true)} /></Box>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <Search >
          <Box component="form" noValidate onSubmit={searchFrnd}>
            <InputBase name="src" id="src" placeholder='Search...' />
          </Box>
        </Search>
        {tkn === null ? <Typography sx={{ display: { xs: 'none', sm: 'flex' } }} variant='span'>Not Logged In</Typography> :
          <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: "row" }}>
              <Box>
                <IconButton sx={{ marginRight: "9px", color: "white" }} onClick={handleClick3} ><Badge badgeContent={noti} color="error" ><NotificationsIcon /></Badge></IconButton>
              </Box>
              <img src={profilephoto} alt="profile pic" style={{ width: 40, height: 40, borderRadius: 20, objectFit: "cover" }} onClick={e => {
                tkn !== null ? setOpen(true) : setOpen(false);
              }} /></Box>
          </>}
        <UserBox onClick={e => {
          tkn !== null ? setOpen(true) : setOpen(false);
        }}>
          {tkn === null ? <Typography sx={{ display: { xs: 'block', sm: 'flex' } }} variant='span'>Not Logged In</Typography> : <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
            <img src={profilephoto} alt="profile pic" style={{ objectFit: "cover", width: 40, height: 40, borderRadius: 20 }} onClick={e => {
              tkn !== null ? setOpen(true) : setOpen(false);
            }} /></Box>}
        </UserBox>
      </StyledToolBar>

      {/* Menu for Profile */}
      <Menu
        id="account-menu"
        open={Open}
        onClose={e => setOpen(false)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={profile}>
          <img src={profilephoto} alt="profile pic" style={{ width: 30, height: 30, borderRadius: 20, objectFit: "cover" }} /> <Typography sx={{ marginLeft: "10px", overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>{localStorage.getItem('user')}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout1}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Menu for Notifications */}

      <Menu
        open={open3}
        onClose={handleClose3}
        anchorEl={anchorEl3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: 340, height: "auto", overflow: "auto" }}>
          <Typography variant='h6' sx={{ marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>Notifications</Typography>
          <>
            <Divider />
            {
              notifications.length === 0 ? <Typography sx={{ marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>No Notifications</Typography> : <></>
            }
          </>
          <>
            {
              notifications.map((item) => {
                return <NotifyCard ob={item} func={pull} />
              })
            }
          </>
        </Box>
      </Menu>

      {/* Menu for Desktop Search */}
      <Menu
        sx={{
          width: 500, height: "auto", overflow: "auto",
          top: "40px",
          left: "34%",
          display: { xs: "none", sm: "block" }
        }}
        open={open1}
        onClose={handleClose1}
        anchorEl={anchorEl1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: 340, height: "auto", overflow: "auto" }}>
          <Typography variant='h6' sx={{ marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>Search Results</Typography>
          <>
            <Divider />
            {
              search.length === 0 ? <Typography sx={{ marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>No Results</Typography> : <></>
            }
          </>
          <>

            {
              search.map((item) => {
                return <SearchCars ob={item} func={pulldat} />
              })
            }
          </>
        </Box>
      </Menu>
      {/* Menu for Mobile Search */}
      <Menu
        sx={{
          width: "auto", height: "auto", overflow: "auto",
          top: "40px",
          left: "1px",
          right: "1px",
          display: { xs: "block", sm: "none" }
        }}
        open={open1}
        onClose={handleClose1}
        anchorEl={anchorEl1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: 340, height: "auto", overflow: "auto" }}>
          <Typography variant='h6' sx={{ marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>Search Results</Typography>
          <>
            <Divider />
            {
              search.length === 0 ? <Typography sx={{ marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>No Results</Typography> : <></>
            }
          </>
          <>

            {
              search.map((item) => {
                return <SearchCars ob={item} />
              })
            }
          </>
        </Box>
      </Menu>

    </AppBar>
  )
}

export default Navbar