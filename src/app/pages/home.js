import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomMenu from "../navigation/bottomMenu";
import ActivityCard from "../components/HomeComponent/activityCard";
import GraphCard from "../components/HomeComponent/graphCard"
import HomeNavigation from "../navigation/homeNavigation";
import ProgressBar from "../components/HomeComponent/progressBar";
import { Provider } from "react-redux"
import { store } from "../../app/reduxState/store"


export default function Home() {


    return (
        <Provider store={store}>
            <ScrollView>
                <GraphCard />
                <ProgressBar />
                <HomeNavigation />
                <ActivityCard />
            </ScrollView>
            <BottomMenu />
        </Provider>
    )
}
