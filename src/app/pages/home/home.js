import React, { useState } from "react"
import { ScrollView } from 'react-native';
import ActivityCard from "../../components/HomeComponent/activityCard";
import GraphCard from "../../components/HomeComponent/graphCard"
import HomeNavigation from "../../navigation/homeNavigation";
import ProgressBar from "../../components/HomeComponent/progressBar";
import TopHomeBar from "../../components/HomeComponent/topHomeBar";
import { useSelector, useDispatch } from 'react-redux';
import GoalCard from "../../components/HomeComponent/goalCard";

export default function Home() {

    const active = useSelector((state) => state.navigation.value) 
    const dispatch = useDispatch()

    return (
        <>
            <ScrollView>
                <TopHomeBar/>
                <GraphCard />
                <ProgressBar />
                <HomeNavigation />
                {active === "ACTIVITY" ?
                <ActivityCard />
                :
                <GoalCard />
                }
            </ScrollView>
        </>
    )
}
