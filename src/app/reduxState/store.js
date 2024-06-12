import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation/navigationSlice"
import activityOffsetReducer from "./offset/activityOffsetSlice"
import goalOffsetReducer from "./offset/goalOffsetSlice";
import hasMoreActivityDataReducer from "./offset/hasMoreDataActivity";
import hasMoreGoalDataReducer from "./offset/hasMoreDataGoal";

export const store = configureStore({
    reducer: {
        navigation : navigationReducer,
        activityOffset: activityOffsetReducer,
        goalOffset: goalOffsetReducer,
        hasMoreActivityData : hasMoreActivityDataReducer,
        hasMoreGoalData : hasMoreGoalDataReducer
import navigationReducer from "./navigation/navigationSlice";
import loginReducer from './authentication/loginSlice';

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        login: loginReducer,
    },
});
