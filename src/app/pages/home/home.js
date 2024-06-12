import React, { useState } from "react"
import { ScrollView, View, ActivityIndicator } from 'react-native';
import ActivityCard from "../../components/HomeComponent/activityCard";
import GraphCard from "../../components/HomeComponent/graphCard"
import HomeNavigation from "../../navigation/homeNavigation";
import ProgressBar from "../../components/HomeComponent/progressBar";
import TopHomeBar from "../../components/HomeComponent/topHomeBar";
import { useSelector, useDispatch } from 'react-redux';
import GoalCard from "../../components/HomeComponent/goalCard";
import { incrementActivityOffset } from "../../reduxState/offset/activityOffsetSlice";
import { incrementGoalOffset } from "../../reduxState/offset/goalOffsetSlice";
import { CircularProgress } from "@mui/material";

export default function Home() {

    const active = useSelector((state) => state.navigation.value) 
    const dispatch = useDispatch()
    const activityOffset = useSelector((state) => state.activityOffset.value)
    const goalOffset = useSelector((state) => state.goalOffset.value)
    const [bottomPage, setBottomPage] = useState(false)

    const loadMoreData = (event) => {
        if(isCloseToBottom(event.nativeEvent)){
            if(active === "ACTIVITY") {
                dispatch(incrementActivityOffset())
            } else {
                dispatch(incrementGoalOffset())
            }
        }
    }

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize}) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height;
    }

    return (
        <View style={{height:'95%'}}>
            <ScrollView
            onScroll={loadMoreData}
            scrollEventThrottle={16}>
                <TopHomeBar/>
                <GraphCard />
                <ProgressBar />
                <HomeNavigation />
                {active === "ACTIVITY" ?
                <ActivityCard activityOffset={activityOffset}/>
                :
                <GoalCard goalOffset={goalOffset}/>
                }
            </ScrollView>
        </View>
    )
}
