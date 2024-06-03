import React, { useState, useEffect } from "react"
import { Link } from "expo-router"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container"
import Divider from '@mui/material/Divider';
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { getActivity } from "../../axiosPath/axiosPath";
import axios from 'axios'

export default function ActivityCard() {
    
    const [timer, setTimer] = useState(false)
    const [timerText, setTimerText] = useState("START")
    const [activityList, setActivityList] = useState()

    useEffect(() => {
        const fetchData = async () => {
              const response = await axios.get(getActivity);
              setActivityList(response.data);
          };
      
          fetchData();
    }, [])
    console.log(activityList)

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    const changeTimer = () => {
        if(timer == false) {
            setTimer(true);
            setTimerText("STOP")
        } else {
            setTimer(false);
            setTimerText("START")
        }
        
    }

    return (
        <Container maxWidth="md" sx={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2 }}>
        {activityList && activityList.map(activities => (
            <Card key={activities.ActivityID} variant="outlined" sx={{ marginBottom: 3, borderRadius: 4 }}>
            <CardContent>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                    <Grid item xs={9} sm={10}>
                        <Typography variant="h6" sx={{fontFamily:"Poppins_700Bold"}} gutterBottom>{activities.ActivityName}</Typography>
                        <Typography variant="body1" sx={{ marginTop: 1, fontFamily:'Poppins_400Regular' }} gutterBottom>asdsasd</Typography>
                    </Grid>
                    <Grid item xs={2} sm={1}>
                        <Link href={{ pathname: "/pages/activity/activityDetail", params: { lastPage:"/pages/home/reduxHomeProvider"} }}>
                            <Button sx={{ bgcolor: "#DD7A34", borderRadius: 25, height: 50 }}>
                                <ArrowForwardIosIcon  sx={{ color: "white" }} />
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Divider></Divider>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                    <Grid item xs={9}>
                        <Typography variant="body1" color={timer == true ? 'red' : 'green'} sx={{ fontFamily:"Poppins_700Bold" }} onClick={() => changeTimer()}>{timerText}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" sx={{fontFamily:"Poppins_400Regular"}}>10:00:00</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        ))}
            <Card variant="outlined" sx={{ marginBottom: 3, borderRadius: 4 }}>
                <CardContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                        <Grid item xs={9} sm={10}>
                            <Typography variant="h6" sx={{fontFamily:"Poppins_700Bold"}} gutterBottom>MyActivity</Typography>
                            <Typography variant="body1" sx={{ marginTop: 1, fontFamily:'Poppins_400Regular' }} gutterBottom>asdsasd</Typography>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <Link href={{ pathname: "/pages/activity/activityDetail", params: { lastPage:"/pages/home/reduxHomeProvider"} }}>
                                <Button sx={{ bgcolor: "#DD7A34", borderRadius: 25, height: 50 }}>
                                    <ArrowForwardIosIcon  sx={{ color: "white" }} />
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                        <Grid item xs={9}>
                            <Typography variant="body1" color={timer == true ? 'red' : 'green'} sx={{ fontFamily:"Poppins_700Bold" }} onClick={() => changeTimer()}>{timerText}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{fontFamily:"Poppins_400Regular"}}>10:00:00</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )

}