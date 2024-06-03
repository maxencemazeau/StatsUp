import React, { useState } from "react"
import { ScrollView } from "react-native"
import BottomMenu from "../../navigation/bottomMenu"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Container, Divider, Grid } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from "@mui/material/Checkbox"
import Select from "@mui/material/Select"; import MenuItem from "@mui/material/MenuItem"
import InputLabel from "@mui/material/InputLabel"; import FormControl from "@mui/material/FormControl"
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function AddActivity({state, setModal}) {

    const goal = [
        {
            id:1,
            name: "1"
        },
        {
            id:2,
            name:"2"
        }
    ]
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setModal(open);
    };


    const [activateGoal, setActivateGoal] = useState(false)
    const [goalName, setGoalName] = useState(false)
    const [timerOption, setTimerOption] = useState(false)

    const changeActive = () => {
        setActivateGoal(prevState => !prevState)
    }

    const changeTimerOption = () => {
        setTimerOption(prevState => !prevState)
    }
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        if (event.target.value == 0) {
            setGoalName(true)
        } else {
            setGoalName(false)
        }
    }

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    return (
        <>
            <ScrollView>
            <SwipeableDrawer
        anchor={'bottom'}
        open={state}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
    >
                <Container sx={{ padding: 3 }}>
                    <Stack>
                        <ArrowBackIcon sx={{ paddingBottom: 3 }} onClick={toggleDrawer('bottom', false)}/>
                        <Typography variant="h6" sx={{ fontFamily: "Poppins_700Bold" }}>Create a new activity</Typography>
                        <TextField id="outlined-basic" label="Name" color={"warning"} variant="outlined" margin="normal" />
                        <Grid direction={"row"} container sx={{ paddingTop: 1 }}>
                            <Grid item xs={6} sx={{ marginBottom: 1 }}>
                                <Typography>Timer options ?</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Checkbox sx={{ padding: 0 }} onChange={changeTimerOption} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Link this activity to a goal ?</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Checkbox sx={{ padding: 0 }} onChange={changeActive} />
                            </Grid>
                        </Grid>
                       {activateGoal &&  
                       <>
                        <FormControl fullWidth sx={{marginTop:1}}>
                            <InputLabel id="demo-simple-select-label" color={"warning"}>Linked goal</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Linked goal"
                                color={"warning"}
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>New goal</MenuItem>
                                <Divider/>
                                {goal.map(goals => 
                                 <MenuItem key={goals.id} value={goals.name}>{goals.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        {goalName && <TextField id="outlined-basic" label="Name" color={"warning"} variant="outlined" margin="normal" /> }
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Time frame" variant="outlined" color={"warning"} margin="normal" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Frequency" variant="outlined" color={"warning"} margin="normal" />
                            </Grid>
                        </Grid>
                        </>
                        }
                        <Button variant={"contained"} sx={{ bgcolor: "#DD7A34", marginTop: 1 }} color={"warning"} disableElevation>Save</Button>
                    </Stack>
                </Container>
                </SwipeableDrawer>
            </ScrollView>
            <BottomMenu />
        </>
    )
}