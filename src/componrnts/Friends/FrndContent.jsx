import { Box, Grid } from '@mui/material'
import React from 'react'
import CardFrnd from './CardFrnd'

const FrndContent = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
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
        </Box>
    )
}

export default FrndContent