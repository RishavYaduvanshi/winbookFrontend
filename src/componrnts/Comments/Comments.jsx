import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions, CardHeader} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';

export default function Comments(props) {
  //console.log(props.user);
  const history = useNavigate();
  const [dp, setdp] = useState("https://winbookbackend.d3m0n1k.engineer/static/authn/dp.png");
  const [userName, setuserName] = useState();


  useEffect(() => {
    fetch('https://winbookbackend.d3m0n1k.engineer/user/'+props.user+'/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+localStorage.getItem('authtoken')
      },
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setuserName(data.username);
        setdp(data.dp);
      });
  }, [props.user]);

  const viewprofile = () => {
    // console.log(userName);
    history('/'+userName+'/');
  }

  return (
    <Box sx={{display:"flex", flexDirection:"row", marginTop:0.5, marginBottom:0.5}}>
      <Card variant='outlined' sx={{ display:"flex", margin: 0.5, maxWidth: "100%", borderRadius:10, marginLeft:2}}>
        <CardHeader
        avatar={
          <img src={dp} alt="profile pic" style={{ width: 40, height: 40, borderRadius: 20 }} onClick={viewprofile}/>
        }
        title={<Typography fontWeight={500} fontSize={16} onClick={viewprofile}>{userName}</Typography>
        }
        subheader={<Typography fontSize={14} color="text.secondary">{props.comment}</Typography>}
        action={
          <IconButton aria-label="settings">
            <ReplyIcon color='primary' />
          </IconButton>
        }
        >
        </CardHeader>
        </Card>
    </Box>
  );
}
