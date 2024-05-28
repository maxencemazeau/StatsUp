import React from 'react'
import { View, ScrollView, Image } from 'react-native';
import { Link } from "expo-router"
import { Container, Divider, TextField, Button, Typography, Box } from "@mui/material"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function signUp() {

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    return (
        <>
            <View style={{ height: "100%" }}>
                <ScrollView>
                    <Container sx={{ height: "100%", bgcolor: "#222121", padding: 2 }}>
                        <Image source={require("../assets/H.png")} style={{ height: 200, width: "100%" }}></Image>
                    </Container>
                    <Container sx={{ position: "absolute", top: "96%", left: 0, right: 0, height: "45%", bgcolor: "white", padding: 2, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: "center",
                            justifyContent: "space-around"
                        }}>
                            <Typography sx={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>Get Started</Typography>
                        </Box>
                        <TextField id="outlined-basic" label="Email" color={"warning"} variant="outlined" margin="normal" sx={{ width: "100%" }} />
                        <TextField id="outlined-basic" label="Username" color={"warning"} variant="outlined" margin="normal" sx={{ width: "100%" }} />
                        <TextField id="outlined-basic" label="Password" color={"warning"} variant="outlined" margin="normal" sx={{ width: "100%" }} />
                        <TextField id="outlined-basic" label="Confirm Password" color={"warning"} variant="outlined" margin="normal" sx={{ width: "100%" }} />
                        <Link href='/pages/home'>
                            <Button variant={"contained"} sx={{
                                bgcolor: "#DD7A34", marginTop: 1, width: "100%", height: 50, fontFamily: "Poppins_700Bold", marginBottom: 2,
                                ':hover': {
                                    bgcolor: 'white', color: '#DD7A34', border: 1, borderColor: "lightgrey"
                                }
                            }} disableElevation>SIGN UP</Button>
                        </Link>
                        <Divider><Typography sx={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>Already an account ?</Typography></Divider>
                        <Link href="/pages/login">
                            <Button variant={"contained"}
                                sx={{
                                    bgcolor: "white", marginTop: 1, width: "100%", height: 50,
                                    fontFamily: "Poppins_700Bold", marginTop: 2, color: "#DD7A34", border: 1, borderColor: "lightgrey", ':hover': {
                                        bgcolor: '#DD7A34',
                                        color: 'white'
                                    }
                                }} disableElevation>LOGIN</Button>
                        </Link>
                    </Container>
                </ScrollView >
            </View>
        </>
    )
}