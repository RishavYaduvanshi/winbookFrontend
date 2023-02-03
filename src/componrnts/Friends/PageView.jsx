import { BottomNavigation, BottomNavigationAction, Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import CardFrnd from './CardFrnd'
import { Person, Home } from '@mui/icons-material'
import { useEffect } from 'react';
import ShowPrev from './ShowPrev';
import { useNavigate } from 'react-router-dom';


const PageView = (props) => {
    const history = useNavigate();

    const [value, setValue] = React.useState(1);
    const [followers, setFollowers] = React.useState([]);
    const [data, setData] = React.useState([]);
    var text;
    var URL;
    if (props.page === 0) {
        URL = "https://winbookbackend.d3m0n1k.engineer/user/" + localStorage.getItem("id") + "/followers/"
        text = "Followers"
    }
    else {
        URL = "https://winbookbackend.d3m0n1k.engineer/user/" + localStorage.getItem("id") + "/following/"
        text = "Following"
    }

    useEffect(() => {
        fetch(URL, {
            Method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem("authtoken")
            }

        }).then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data.results);
            setData(data);
            setFollowers(data.results);
        })
    }, [URL])
    // console.log(data);

    return (
        <Box width="100%" sx={{ flexGrow: 1 }} >
            <Stack direction="column">
                <Box width="100%" >
                    <Typography variant="h5" color={"primary"} sx={{ fontWeight: "bold", mb: 2 }}>{text}</Typography>
                </Box>
                <Box width="100%" sx={{ flexGrow: 1, height: "100vh", }} >
                    <Grid sx={{ display: { xs: "none", sm: "flex" } }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        {
                            followers.map((follower) => {
                                return (
                                    <Grid xs={3}>
                                        <CardFrnd follower={follower} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                    <Grid sx={{ display: { xs: "flex", sm: "none" }, marginLeft: "0px" }} container >
                        {
                            followers.map((follower) => {
                                return (
                                    <Grid xs={6}>
                                        <CardFrnd follower={follower} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={8}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            sx={{ display: { xs: "flex", sm: "none" } }}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction label="Home" icon={<Home />} onClick={
                                () => {
                                    history("/home");
                                }
                            } />
                            <BottomNavigationAction label="Followers" icon={<Person />} onClick={
                                () => {
                                    props.func(0);
                                }
                            } />
                            <BottomNavigationAction label="Following" icon={<Person />} onClick={
                                () => {
                                    props.func(1);
                                }
                            } />
                        </BottomNavigation>
                    </Paper>
                    {data.next === null ? <></> : <ShowPrev />}
                </Box>
            </Stack>
        </Box>
    )
}

export default PageView