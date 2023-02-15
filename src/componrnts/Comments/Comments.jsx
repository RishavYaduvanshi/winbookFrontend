import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { alert } from 'react-custom-alert';
import { getShowableText } from '../utils'

export default function Comments(props) {
  const history = useNavigate();
  const [dp, setdp] = useState("https://winbookbackend.d3m0n1k.engineer/static/authn/dp.png");
  const [userName, setuserName] = useState();


  useEffect(() => {
    fetch('https://winbookbackend.d3m0n1k.engineer/user/' + props.user + '/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setuserName(data.username);
        setdp(data.dp);
      });
  }, [props.user]);

  const viewprofile = () => {
    history('/view/' + userName + '/');
  }



  const deletecomment = () => {
    fetch('https://winbookbackend.d3m0n1k.engineer/comment/' + props.pk + '/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('authtoken')
      },
    })
      .then(data => {
        if (data.status === 204) {
          //console.log(data);
          props.funcn(true);
          alert({ message: 'Comment deleted', type: 'success' });
        }
        else {
          alert({ message: 'Error in deleting comment', type: 'error' });
        }
      });
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", marginTop: 0.5, marginBottom: 0.5 }}>
      <Card variant='outlined' sx={{ display: "flex", margin: 0.5, maxWidth: "100%", borderRadius: 10, marginLeft: 2 }}>
        <CardHeader
          avatar={
            <img src={dp} alt="profile pic" style={{ objectFit: 'cover', width: 40, height: 40, borderRadius: 20 }} onClick={viewprofile} />
          }
          title={<Typography fontWeight={500} fontSize={16} onClick={viewprofile}>{userName} :</Typography>
          }
          subheader={<Typography fontSize={14} fontWeight={400} color="text.secondary"><p dangerouslySetInnerHTML={{ __html: getShowableText(props.comment) }}></p></Typography>}
          action={
            <Box>
              <IconButton aria-label="settings" onClick={() => {

              }}>
                <ReplyIcon color='primary' />
              </IconButton>
              {props.user === parseInt(localStorage.getItem('id')) ? <><IconButton aria-label="settings">
                <DeleteForeverIcon color='error' onClick={deletecomment} />
              </IconButton></> : <></>}
            </Box>
          }
        >
        </CardHeader>
      </Card>
    </Box>
  );
}
