import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container"
import Divider from '@mui/material/Divider';
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function GoalCard() {

    return (
        <Container maxWidth="md" sx={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2 }}>
            <Card variant="outlined" sx={{ marginBottom: 2, borderRadius: 4 }}>
                <CardContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                        <Grid item xs={9} sm={10}>
                            <Typography variant="h5" gutterBottom>MyGoal</Typography>
                            <Typography variant="body1" sx={{ marginTop: 1 }} gutterBottom>asdsasd</Typography>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <Button sx={{ bgcolor: "#DD7A34", borderRadius: 25, height: 50 }}>
                                <ArrowForwardIosIcon color="info" />
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 0.5 }}>
                        <Grid item xs={9}>
                            <Typography variant="body1" sx={{ color: "green", fontWeight: "bold" }}>START</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">10:00:00</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )

}