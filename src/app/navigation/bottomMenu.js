import React, { useState } from "react"
import { View, StyleSheet, Image } from "react-native"
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import { Link } from "expo-router"
import AddActivity from "../pages/activity/addActivity";
import CreateActivityAndGoal from "../pages/swipeableDrawer/createActivityAndGoal";


export default function BottomMenu() {

    const [value, setValue] = useState(0)
    const [state, setModal] = useState(false)

    const toggle = () =>{
        setModal(prevState => !prevState)
    }

    return (
        <>
        <View style={style.container}>
            <Divider />
            <BottomNavigation

                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<Link href="/pages/home/home"><HomeIcon fontSize="large" /></Link>} />
                <BottomNavigationAction icon={<AddIcon onClick={toggle} />} />
                <BottomNavigationAction icon={<Link href="/pages/feed/feed"><SearchIcon/></Link>} />
                <BottomNavigationAction icon={<Link href="/pages/profil/profil"><Image style={{ width:35, height:35, borderRadius : 100}} source={require("../assets/maxence.jpg")} /></Link>} />
            </BottomNavigation>
        </View>
        
        {state && <CreateActivityAndGoal state={state} setModal={setModal} /> }

    </>
    )
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})