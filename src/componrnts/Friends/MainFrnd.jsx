import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import FriendsSidebar from './FriendsSidebar'
import { useState } from 'react';
import { useEffect } from 'react';
import Unauthorized from '../Unauthorized';
import FrndContent from './FrndContent';
const MainFrnd = (props) => {

    const [logindata, setLogindata] = useState([]);
    const [page, setPage] = useState(0);
    const calllogin = () => {
        var authtoken = localStorage.getItem("authtoken");
        if (authtoken && authtoken.length) {
            setLogindata(authtoken);
        }
    }
    useEffect(() => {
        calllogin();
    }, [])

    const pullData = (data) => {
        // console.log(data);
        setPage(data);
    }

    return (
        <>{
            logindata.length === 0 ? <Unauthorized /> :
                <>
                    <Box bgcolor={"background.default"} color={"text.primary"}>
                        <Navbar setMode={props.setMode} mode={props.mode} />
                        {/* <Typography>Friends</Typography> */}
                        <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ p: 2 }}>
                            <FriendsSidebar mode={props.mode} setMode={props.setMode} func={pullData} />
                            <FrndContent mode={props.mode} setMode={props.setMode} page={page} />
                        </Stack>
                    </Box>
                </>
        }
        </>
    )
}

export default MainFrnd