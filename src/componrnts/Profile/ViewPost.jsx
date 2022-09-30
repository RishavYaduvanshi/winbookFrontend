import React from 'react'
import Box from '@mui/material/Box'
import Navbar from '../Navbar'
import "./Profile.css";
import Sidebar from '../Sidebar';
import { CircularProgress, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Posts from '../Posts';

export const ViewPost = (props) => {

    const [user, setUser] = useState([]);
    const { val } = useParams();
    //console.log("got props", val);
    useEffect(() => {
        fetch('https://winbookbackend.d3m0n1k.engineer/post/' + val + '/', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            },
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                response.json().then((data) => {
                    setUser(data);
                    //console.log(data);
                })
            }
        })
    }, []);

    document.title = "Winbook | Post";
    if (user.length===0) return <Box flex={4} p={2}><CircularProgress/></Box>;

    return (
        <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar setMode={props.setMode} mode={props.mode} />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar position="flex" setMode={props.setMode} mode={props.mode} />
                <Box flex={4} p={2} sx={{height:"auto"}}>
                <Posts ob={user} st={true} />
                </Box>
                <Box sx={{
                    display:{xs:"none",sm:"block"},
                    width: "25%",
                }}></Box>

            </Stack>
        </Box>
    )
}
