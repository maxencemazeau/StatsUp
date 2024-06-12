import React from 'react'
import { View, ScrollView, Image } from 'react-native';
import { Link } from "expo-router"
import { Container, Divider, TextField, Button, Typography } from "@mui/material"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function Login() {

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    return (
        <>
            <View style={{ height: "100%", zIndex :0 }}>
                <ScrollView>
                    <Container sx={{ height: "100%", bgcolor: "#222121", padding: 2 }}>
                        <Image source={require("../assets/H.png")} style={{ height: 200, width: "100%" }}></Image>
                    </Container>
                    <Container sx={{ position: "absolute", top: "97%", left: 0, right: 0, height: "45%", bgcolor: "white", padding: 2, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <TextField id="outlined-basic" label="Email" color={"warning"} variant="outlined" margin="normal" sx={{ width: "100%", marginTop: 3, marginBottom: 3 }} />
                        <TextField id="outlined-basic" label="Password" color={"warning"} variant="outlined" margin="normal" sx={{ width: "100%", marginBottom: 5 }} />
                        <Link href='/pages/home/home'>
                            <Button variant={"contained"} sx={{
                                bgcolor: "#DD7A34", marginTop: 1, width: "100%", height: 50, fontFamily: "Poppins_700Bold", marginBottom: 3,
                                ':hover': {
                                    bgcolor: 'white', color: '#DD7A34', border: 1, borderColor: "lightgrey"
                                }
                            }}
                                color={"warning"} disableElevation>LOGIN</Button>
                        </Link>
                        <Divider><Typography sx={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>Or create one</Typography></Divider>
                        <Link href='/loginAndSignUp/signUp'>
                            <Button variant={"contained"}
                                sx={{
                                    bgcolor: "white", marginTop: 1, width: "100%", height: 50,
                                    fontFamily: "Poppins_700Bold", marginTop: 2, color: "#DD7A34", border: 1, borderColor: "lightgrey", ':hover': {
                                        bgcolor: '#DD7A34',
                                        color: 'white'
                                    }
                                }} disableElevation>SIGN UP</Button>
                        </Link>
                    </Container>
                </ScrollView >
            </View>
        </>
    )
}