import { BottomNavigation, BottomNavigationAction, Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import CardFrnd from './CardFrnd'
import { Person, Home } from '@mui/icons-material'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useEffect } from 'react';
import ShowPrev from './ShowPrev';
import PageView from './PageView';


const FrndContent = (props) => {
    // console.log(props.page);
    const [value, setValue] = React.useState(0);
    const pullData = (data) => {
        setValue(data);
    }

    return (
        <Box width="64%" sx={{ flexGrow: 1 }} >
            <PageView page={props.page} func={value} />
        </Box>
    )
}

export default FrndContent