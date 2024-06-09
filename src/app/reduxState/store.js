import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation/navigationSlice"
import activityOffsetReducer from "./offset/activityOffsetSlice"
import goalOffsetReducer from "./offset/goalOffsetSlice";
import hasMoreActivityDataReducer from "./offset/hasMoreDataActivity";

export const store = configureStore({
    reducer: {
        navigation : navigationReducer,
        activityOffset: activityOffsetReducer,
        goalOffset: goalOffsetReducer,
        hasMoreActivityData : hasMoreActivityDataReducer
    },
})

