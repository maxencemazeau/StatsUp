import React, { useState } from "react"
import { ScrollView } from 'react-native';
import { Link } from "expo-router"
import BottomMenu from "../navigation/bottomMenu"
import { Container, Grid, Card, Typography, Box } from "@mui/material"
import { LineChart } from '@mui/x-charts/LineChart';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';//import { useNavigationContext } from "../../hooks/useNavigationContext";

export default function ActivityDetail({ lastPage }) {

    const [period, setPeriod] = useState("WEEKLY")

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    const changePeriod = (number) => {

        switch (number) {
            case 1:
                setPeriod("WEEKLY")
                break;
            case 2:
                setPeriod("MONTLHY")
                break;
            case 3:
                setPeriod("YEARLY")
                break;
        }
    }

    return (
        <>
            <ScrollView>
                <Container sx={{ height: "100%", bgcolor: "#222121", padding: 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 3, gap: 2 }}>
                        <Link href={{ pathname: lastPage }}>
                            <ArrowBackIcon sx={{ color: "white" }} />
                        </Link>
                        <Typography sx={{
                            padding: 0, color: "white",
                            fontWeight: "bold",
                            fontFamily: 'Poppins_400Regular', fontSize: 20}}>ACTIVITY NAME</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, paddingLeft: 3 }}>
                        <Typography sx={{
                            textAlign: "left",
                            color: period === 'WEEKLY' ? '#DD7A34' : 'white', fontFamily: 'Poppins_400Regular', textDecorationLine: period === 'WEEKLY' ? "underline" : "none"
                        }} onClick={() => changePeriod(1)}>WEEKLY</Typography>
                        <Typography sx={{
                            textAlign: "left",
                            color: period === 'MONTLHY' ? '#DD7A34' : 'white', fontFamily: 'Poppins_400Regular', textDecorationLine: period === 'MONTLHY' ? "underline" : "none"
                        }} onClick={() => changePeriod(2)}>MONTLHY</Typography>
                        <Typography sx={{
                            textAlign: "left",
                            color: period === 'YEARLY' ? '#DD7A34' : 'white', fontFamily: 'Poppins_400Regular', textDecorationLine: period === 'YEARLY' ? "underline" : "none"
                        }}
                            onClick={() => changePeriod(3)}>YEARLY</Typography>
                    </Box>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                color : "#DD7A34"
                            },
                        ]}
                        sx={{stroke: "white"}}
                        width={400}
                        height={300}
                        fill={"white"}
                    />
                </Container>
                <Container sx={{ position: "absolute", top: "98%", left: 0, right: 0, height: "45%", bgcolor: "white", padding: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <Grid container spacing={2} sx={{ padding: 3 }}>
                        <Grid item xs={6}>
                            <Card variant="outlined" sx={{ marginBottom: 3, borderRadius: 4, height: 150 }} sm={{ height: 200 }}>
                                <Typography sx={{ paddingLeft: 2, paddingTop: 2, fontFamily: "Poppins_700Bold", fontSize: 48, color: "#DD7A34" }}>46</Typography>
                                <Typography sx={{ paddingLeft: 2, fontFamily: "Poppins_700Bold", fontSize: 18 }}>Total activity</Typography>
                                <Typography sx={{ paddingLeft: 2, fontFamily: "Poppins_700Bold", fontSize: 18 }}>completed</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </ScrollView >
            <BottomMenu />
        </>
    )
}