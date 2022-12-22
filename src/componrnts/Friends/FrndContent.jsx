import { Box, Grid } from '@mui/material'
import React from 'react'
import CardFrnd from './CardFrnd'

const FrndContent = (props) => {

    return (
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
        </Box>
    )
}

export default FrndContent