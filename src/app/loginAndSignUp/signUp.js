// src/pages/SignUp.js

import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Link, useRouter } from "expo-router";
import { Container, Divider, TextField, Button, Typography, Box } from "@mui/material";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import axios from 'axios';
import { userSignUp } from '../axiosPath/axiosPath';
import { useDispatch } from 'react-redux';
import { setLogin } from '../reduxState/authentication/loginSlice';
import { useNavigation } from '@react-navigation/native'; // Use this if you are using React Navigation

export default function SignUp() {
    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold,
    });

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter(); // Use this for Expo Router navigation

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    
        try {
            const response = await axios.post(userSignUp, {
                email,
                username,
                password
            });

            const data = response.data;
            
            if (data.error) {
                alert(data.error);
                return;
            }

            // Dispatch action to update authentication status
            dispatch(setLogin(response.data));
            
            // Navigate to the home page
            router.push('/pages/home/home'); // Adjust the path if needed

        } catch (error) {
            console.error(error);
            alert("An error occurred during sign up. Please try again.");
        }
    };

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
                            id="username"
                            label="Username"
                            color={"warning"}
                            variant="outlined"
                            margin="normal"
                            sx={{ width: "100%" }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <TextField
                            id="confirm-password"
                            label="Confirm Password"
                            color={"warning"}
                            variant="outlined"
                            margin="normal"
                            sx={{ width: "100%" }}
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button
                            variant={"contained"}
                            sx={{
                                bgcolor: "#DD7A34", marginTop: 1, width: "100%", height: 50, fontFamily: "Poppins_700Bold", marginBottom: 2,
                                ':hover': {
                                    bgcolor: 'white', color: '#DD7A34', border: 1, borderColor: "lightgrey"
                                }
                            }}
                            disableElevation
                            onClick={handleSignUp}
                            
                        >
                            SIGN UP
                        </Button>
                        <Divider>
                            <Typography sx={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>Already have an account?</Typography>
                        </Divider>
                        <Link href="/loginAndSignUp/login">
                            <Button
                                variant={"contained"}
                                sx={{
                                    bgcolor: "white", marginTop: 1, width: "100%", height: 50,
                                    fontFamily: "Poppins_700Bold", marginTop: 2, color: "#DD7A34", border: 1, borderColor: "lightgrey", ':hover': {
                                        bgcolor: '#DD7A34',
                                        color: 'white'
                                    }
                                }}
                                disableElevation
                            >
                                LOGIN
                            </Button>
                        </Link>
                    </Container>
                </ScrollView >
            </View>
        </>
    );
}
