import { Box } from '@mui/material'
import React from 'react'
import PageView from './PageView';


const FrndContent = (props) => {
    // console.log(props.page);
    const [value, setValue] = React.useState(0);
    const pullData = (data) => {
        // console.log(data);
        setValue(data);
    }

    return (
        <Box width="64%" sx={{ flexGrow: 1 }} >
            <PageView page={props.page} func={pullData} page1={value} />
        </Box>
    )
}

export default FrndContent