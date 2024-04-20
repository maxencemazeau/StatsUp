import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
import { Link } from "expo-router"

export default function BottomMenu() {

    const [value, setValue] = useState(0)

    return (
        <View style={style.container}>
        <Divider />    
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction icon={<Link href="/pages/home"><HomeIcon fontSize="large"/></Link>} />
            <BottomNavigationAction icon={<FavoriteIcon />} />
            <BottomNavigationAction icon={<LocationOnIcon />} />
        </BottomNavigation>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        position : 'absolute',
        bottom : 0,
        left: 0,
        right: 0
    }
})