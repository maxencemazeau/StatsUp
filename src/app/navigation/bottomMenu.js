import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import { Link } from "expo-router"
import { Avatar } from "@mui/material";
import AddActivity from "../pages/addActivity";


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
                <BottomNavigationAction icon={<Link href="/"><HomeIcon fontSize="large" /></Link>} />
                {/* <BottomNavigationAction icon={<Link href="/pages/addActivity"><AddIcon /></Link>}/> */}
                <BottomNavigationAction icon={<AddIcon onClick={toggle} />} />
                <BottomNavigationAction icon={<SearchIcon />} />
                <BottomNavigationAction icon={<Avatar alt="Remy Sharp" src="src/app/assets/H.png" />} />
            </BottomNavigation>
        </View>
        
        {state && <AddActivity state={state} setModal={setModal} /> }

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