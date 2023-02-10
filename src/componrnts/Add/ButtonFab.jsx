import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RateReviewIcon from '@mui/icons-material/RateReview';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import StartIcon from '@mui/icons-material/Start';



export default function BasicSpeedDial(props) {
    const actions = [
        {
            icon: <RateReviewIcon color="error" onClick={
                () => {
                    props.func();
                }
            } />, name: 'Create Post'
        },
        { icon: <OpenInFullIcon color="error" />, name: 'Open Chats' },
        { icon: <StartIcon color="error" />, name: 'Start a new Chat' },
    ];
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 20, left: 10 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>
    );
}


// import { Fab, Tooltip } from '@mui/material'
// import React from 'react'
// import AddIcon from '@mui/icons-material/Add';
// import CloseIcon from '@mui/icons-material/Close';
// import RateReviewIcon from '@mui/icons-material/RateReview';
// import OpenInFullIcon from '@mui/icons-material/OpenInFull';
// import StartIcon from '@mui/icons-material/Start';

// const ButtonFab = (props) => {

//     const [click, setClick] = React.useState(false);
//     const [open, setOpen] = React.useState("none");

//     const toggleClick = () => {
//         setClick(!click);
//         if (open === "none") {
//             setOpen("flex");
//         }
//         else {
//             setOpen("none");
//         }

//     }

//     return (
//         <>
//             <Tooltip title="Activity Center" sx={{ position: "fixed", bottom: 20, left: 10 }}>
//                 {!click ? <Fab color="primary" onClick={toggleClick}>
//                     <AddIcon />
//                 </Fab> :
//                     <Fab color="error" onClick={toggleClick}>
//                         <CloseIcon />
//                     </Fab>}

//             </Tooltip>
//             <Tooltip
//                 title="Create Post"
//                 sx={{ position: "fixed", bottom: 100, left: 10, display: open }}
//             >
//                 <Fab color="primary" onClick={() => {
//                     props.func();
//                     toggleClick();
//                 }}>
//                     <RateReviewIcon />
//                 </Fab>
//             </Tooltip>
//             <Tooltip
//                 title="Open Chat"
//                 sx={{ position: "fixed", bottom: 80, left: 70, display: open }}
//             >
//                 <Fab color="primary" >
//                     <OpenInFullIcon />
//                 </Fab>
//             </Tooltip>
//             <Tooltip
//                 title="Start new chat"
//                 sx={{ position: "fixed", bottom: 20, left: 90, display: open }}
//             >
//                 <Fab color="primary" >
//                     <StartIcon />
//                 </Fab>
//             </Tooltip>

//         </>
//     )
// }

// export default ButtonFab