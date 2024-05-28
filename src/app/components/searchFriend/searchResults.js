import React, { useState } from "react"
import { Box, Button, Container, Typography, Avatar } from "@mui/material"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import BottomMenu from "../../navigation/bottomMenu"


export default function SearchResults(){

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    return(
        <>
        <Container sx={{marginTop:2, padding:0}}>
            <Typography sx={{fontFamily:'Poppins_400Regular'}}>Results</Typography>
            <Container sx={{marginTop:2, padding:1, display:'flex', direction:'row', gap:2, alignItems:'center', justifyContent:'space-between', border:1, borderColor:'lightgrey', borderRadius:2}}>
                <Box sx={{display:'flex', direction:'row', gap:2, alignItems:'center'}}>
                    <Avatar alt="Remy Sharp" src="src/app/assets/H.png" />
                    <Typography sx={{fontFamily:'Poppins_400Regular'}}>Name</Typography>
                </Box>
                <Button sx={{fontFamily:'Poppins_400Regular'}}>Follow</Button>
            </Container>
        </Container>
        <BottomMenu/>
        </>
    )
}