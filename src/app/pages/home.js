import React from "react"
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomMenu from "../navigation/bottomMenu";
import ActivityCard from "../components/HomeComponent/activityCard";
import GraphCard from "../components/HomeComponent/graphCard"
import HomeNavigation from "../navigation/homeNavigation";

export default function Home(){
    
    return(
        <>
        <ScrollView>
            <GraphCard/>
            <HomeNavigation/>
            <ActivityCard/>
        </ScrollView>
        <BottomMenu />
        </>
    )
}
