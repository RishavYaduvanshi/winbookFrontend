import React from 'react'
import Box from '@mui/material/Box'
import Navbar from '../Navbar'
import "./Profile.css";
import Sidebar from '../Sidebar';
import { Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Posts from '../Posts';

export const ViewPost = (props) => {

    const [user, setUser] = useState([]);
    var pk;
    const { val } = useParams();
    //console.log("got props", val);
    useEffect(() => {
        pk = val;
        fetch('https://winbookbackend.d3m0n1k.engineer/post/' + pk + '/', {
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
    }, [pk]);

    document.title = "Winbook | Post";

    return (
        <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar setMode={props.setMode} mode={props.mode} />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar position="flex" setMode={props.setMode} mode={props.mode} />
                <Box flex={4} p={2} sx={{height:"auto"}}>
                <Posts ob={user} />
                </Box>
                <Box sx={{
                    display:{xs:"none",sm:"block"},
                    width: "25%",
                }}></Box>

            </Stack>
        </Box>
    )
}
