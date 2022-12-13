import { Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import FriendsSidebar from './FriendsSidebar'
import { useState } from 'react';
import { useEffect } from 'react';
import Unauthorized from '../Unauthorized';
import FrndContent from './FrndContent';

const MainFrnd = (props) => {

    const [logindata, setLogindata] = useState([]);
    const calllogin = () => {
        var authtoken = localStorage.getItem("authtoken");
        if (authtoken && authtoken.length) {
            setLogindata(authtoken);
        }
    }
    useEffect(() => {
        calllogin();
    }, [])

    return (
        <>{
            logindata.length === 0 ? <Unauthorized /> :
                <>
                    <Navbar setMode={props.setMode} mode={props.mode} />
                    {/* <Typography>Friends</Typography> */}
                    <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                        <FriendsSidebar mode={props.mode} setMode={props.setMode} />
                        <FrndContent mode={props.mode} setMode={props.setMode} />
                    </Stack>
                </>
        }
        </>
    )
}

export default MainFrnd