import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './Profile/Profile.css';
import { alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import LinearProgress from '@mui/material/LinearProgress';
import logo from '../resources/wibrant1.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <NavLink className="navlink" to="/">
        WinBook
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp({ mode, setMode }) {

  const [passwordType, setPasswordType] = React.useState("password");
  const [state, setState] = React.useState(false);
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  const history = useNavigate();
  const handleSubmit = (event) => {
    setState(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('username').length >= 20) {
      alert({ message: 'Username should be less than 20 characters', type: 'error' });
      setState(false);
      return;
    }
    if ((data.get('username') || data.get('password') || data.get('email') || data.get('firstName') || data.get('lastName') !== "")) {
      // console.log(data.get('username'));
      fetch('https://winbookbackend.d3m0n1k.engineer/signup/', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
        },
        body: JSON.stringify({
          username: data.get('username'),
          password: data.get('password'),
          email: data.get('email'),
          first_name: data.get('firstName'),
          last_name: data.get('lastName'),
        })
      }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((data) => {
            // console.log(data);
          });
          alert({ message: 'Successfully Signed Up', type: 'success' });
          setState(false);
          history('/');
        }
        else {
          alert({ message: 'Something wrong. Try Again!', type: 'error' });
          setState(false);
        }

      });
    }
    else {
      alert({ message: 'Please fill all the fields', type: 'error' });
      setState(false);
    }
  };



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt="Winbook-Logo" border="0" width="150px" height="150px" />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {state ? <LinearProgress sx={{ marginBottom: 2 }} /> : <></>}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                placeholder='Username should not be more than 20 characters'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={passwordType}
                id="password"
                autoComplete="new-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {passwordType === "password" ? <VisibilityIcon onClick={togglePassword} /> : <VisibilityOffIcon onClick={togglePassword} />}
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 5, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <p className='mt-3'>Already have an account? <span><NavLink to="/">Sign In</NavLink></span></p>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}