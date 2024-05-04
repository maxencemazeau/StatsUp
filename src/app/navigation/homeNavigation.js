import React, { useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';


export default function HomeNavigation({}) {

    const [active, setActive] = useState("ACTIVITY")

    const changeActive = (number) => {
        if(number == 1) {
            setActive("ACTIVITY")
        } else{
            setActive("GOALS")
        }
    }

    return (
        <Stack direction="row" spacing={{ xs: 4, sm: 8, md: 8 }} sx={{ paddingRight: 3, paddingLeft: 3, paddingBottom: 3 }}>
                <Chip label="ACTIVITY" color={active === 'ACTIVITY' ? 'warning' : 'primary'} sx={{ width: "45%", fontWeight: "bold" }} onClick={() => changeActive(1)} />
                <Chip label="GOALS" color={active === 'GOALS' ? 'warning' : 'primary'} sx={{ width: "45%", fontWeight: "bold" }} onClick={() => changeActive(2)} />
        </Stack>
    )
}