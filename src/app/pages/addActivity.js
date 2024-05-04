import React, { useState } from "react"
import { ScrollView } from "react-native"
import BottomMenu from "../navigation/bottomMenu"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Container, Grid } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chip from '@mui/material/Chip';

export default function AddActivity() {
    const [value, setValue] = useState(0)

    const [activateGoal, setActivateGoal] = useState(1)

    const changeActive = (number) => {
        if(number == 1) {
            setActivateGoal("ACTIVITY")
        } else{
            setActivateGoal("GOALS")
        }
    }

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    return (
        <>
            <ScrollView>
                <Container sx={{ padding: 3 }}>
                    <Stack>
                        <ArrowBackIcon sx={{ paddingBottom: 3 }} />
                        <Typography variant="h6" sx={{ fontFamily: "Poppins_700Bold" }}>Create a new activity</Typography>
                        <TextField id="outlined-basic" label="Name" color={"warning"} variant="outlined" margin="normal" />

                        <Stack direction="row" spacing={{ xs: 4, sm: 8, md: 8 }} sx={{ paddingRight: 3, paddingLeft: 3, paddingBottom: 3 }}>
                <Chip label="ACTIVITY" color={activateGoal === 'ACTIVITY' ? 'warning' : 'primary'} sx={{ width: "45%", fontWeight: "bold" }} onClick={() => changeActive(1)} />
                <Chip label="GOALS" color={activateGoal === 'GOALS' ? 'warning' : 'primary'} sx={{ width: "45%", fontWeight: "bold" }} onClick={() => changeActive(2)} />
        </Stack>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" color={"warning"} margin="normal" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" color={"warning"} margin="normal" />
                            </Grid>
                        </Grid>
                        <Button variant={"contained"} sx={{ bgcolor: "#DD7A34" }} disableElevation>asdasd</Button>
                    </Stack>
                </Container>
            </ScrollView>
            <BottomMenu />
        </>
    )
}