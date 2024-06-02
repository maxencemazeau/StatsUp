import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container"
import { Link } from "expo-router"
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function GoalCard() {

    return (
        <Container maxWidth="md" sx={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2 }}>
            <Card variant="outlined" sx={{ marginBottom: 3, borderRadius: 4 }}>
                <CardContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                        <Grid item xs={9} sm={10}>
                            <Typography variant="h6" sx={{fontFamily:"Poppins_700Bold"}} gutterBottom>MyGoal</Typography>
                            <Typography variant="body1" sx={{ marginTop: 1, fontFamily:'Poppins_400Regular' }} gutterBottom>Weekly : 2/4</Typography>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <Link href={{ pathname: "/pages/goal/goalDetail", params: { lastPage:"/"} }}>
                                <Button sx={{ bgcolor: "#DD7A34", borderRadius: 25, height: 50 }}>
                                    <ArrowForwardIosIcon  sx={{ color: "white" }} />
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )

}