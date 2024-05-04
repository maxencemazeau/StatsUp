import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container"
import Divider from '@mui/material/Divider';
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LineChart } from '@mui/x-charts/LineChart';


export default function GraphCard() {

    return (
        <Container maxWidth="md" sx={{ paddingTop: 3, paddingRight: 3, paddingLeft: 3, paddingBottom: 0 }}>
            <Card variant="outlined" sx={{ marginBottom: 3, borderRadius: 4, height: 200 }} sm={{ height: 400 }}>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            area: true,
                            color: '#FF9505'
                        },
                    ]}
                    witdh={150}
                />
            </Card>
        </Container>
    )

}