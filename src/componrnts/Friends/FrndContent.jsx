import { BottomNavigation, BottomNavigationAction, Box, Grid, Paper } from '@mui/material'
import React from 'react'
import CardFrnd from './CardFrnd'
import { Person, Home } from '@mui/icons-material'
import GroupAddIcon from '@mui/icons-material/GroupAdd';


const FrndContent = () => {

    const [value, setValue] = React.useState(1);
    const ref = React.useRef(null);

    return (
        <Box sx={{ flexGrow: 1, height: "100vh" }} >
            <Grid sx={{ display: { xs: "none", sm: "flex" } }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={3}>
                    <CardFrnd />
                </Grid>
                <Grid xs={3}>
                    <CardFrnd />
                </Grid>
                <Grid xs={3}>
                    <CardFrnd />
                </Grid>
                <Grid xs={3}>
                    <CardFrnd />
                </Grid>
            </Grid>

            <Grid sx={{ display: { xs: "flex", sm: "none" } }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6}>
                    <CardFrnd />
                </Grid>
                <Grid xs={6}>
                    <CardFrnd />
                </Grid>
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
                    <BottomNavigationAction label="Home" icon={<Home />} />
                    <BottomNavigationAction label="All Friends" icon={<Person />} />
                    <BottomNavigationAction label="Requests" icon={<GroupAddIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default FrndContent