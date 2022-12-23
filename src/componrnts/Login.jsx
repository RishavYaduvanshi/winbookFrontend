import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';
import { alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import LinearProgress from '@mui/material/LinearProgress';
import logo from '../resources/wibrant1.png';

export const Login = ({ mode, setMode }) => {
  document.title = "Wibrant";

  React.useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const history = useNavigate();
  const [passwordType, setPasswordType] = React.useState("password");
  const [state, setstate] = React.useState(false);
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const handleSubmit = async (event) => {
    setstate(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cred = JSON.stringify({
      username: data.get('email'),
      password: data.get('password'),
    });
    fetch('https://winbookbackend.d3m0n1k.engineer/login/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
      },
      body: cred
    }).then((result) => {
      result.json().then((resp) => {
        localStorage.setItem("authtoken", resp.token);
        localStorage.setItem("user", data.get('email'));
        if (resp.token) {
          history('/home');
          alert({ message: 'Logged In ! Welcome', type: 'info' });
        }
        else {
          alert({ message: 'Invalid Credentials', type: 'error' });
          setstate(false);
        }
      })
    })
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://i.ibb.co/ZfpSJHK/Helps-you-connect-and-share-with-people-in-your-life-1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="Winbook-Logo" border="0" width="150px" height="150px" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {state ? <LinearProgress /> : <></>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User Name"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={passwordType}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {passwordType === "password" ? <IconButton><VisibilityIcon onClick={togglePassword} /></IconButton> : <IconButton><VisibilityOffIcon onClick={togglePassword} /></IconButton>}
                  </InputAdornment>
                )
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >

              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <NavLink to={'/forgot'} variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <p className='mt-3'>Don't have an account? <span><NavLink to="/signup">Sign Up</NavLink></span></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Login