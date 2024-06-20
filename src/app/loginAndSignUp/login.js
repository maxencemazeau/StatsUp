import React from 'react'
import {useState} from 'react'
import { View, ScrollView, Image } from 'react-native';
import { Link, useRouter} from "expo-router"
import { Container, Divider, TextField, Button, Typography } from "@mui/material"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { setLogin } from '../reduxState/authentication/loginSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { userLogin } from '../axiosPath/axiosPath'

export default function Login() {

    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()


    const handleLogin =  async () => {

        if (email === '' || password === '') {
            alert("Please enter your email and password")
            return
        }

        try {

            const response = await axios.post(userLogin, {
                email: email,
                password: password,
            })
            console.log(response.data)
            dispatch(setLogin(response.data));

            router.push('/pages/home/home');
        } catch (error) {
            console.error(error)
            alert("An error occurred during login. Please try again.")

        }
    };

    
    return (
        <>
            <View style={{ height: "100%", zIndex :0 }}>
                <ScrollView>
                    <Container sx={{ height: "100%", bgcolor: "#222121", padding: 2 }}>
                        <Image source={require("../assets/H.png")} style={{ height: 200, width: "100%" }}></Image>
                    </Container>
                    <Container sx={{ position: "absolute", top: "97%", left: 0, right: 0, height: "45%", bgcolor: "white", padding: 2, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TextField
                            id="email"
                            label="Email"
                            color={"warning"}
                            variant="outlined"
                            margin="normal"
                            sx={{ width: "100%" }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            color={"warning"}
                            variant="outlined"
                            margin="normal"
                            sx={{ width: "100%" }}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />                        
                            <Button variant={"contained"} sx={{
                                bgcolor: "#DD7A34", marginTop: 1, width: "100%", height: 50, fontFamily: "Poppins_700Bold", marginBottom: 3,
                                ':hover': {
                                    bgcolor: 'white', color: '#DD7A34', border: 1, borderColor: "lightgrey"
                                }
                            }}
                                color={"warning"} disableElevation
                                onClick={handleLogin}
                                >LOGIN
                                </Button>
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