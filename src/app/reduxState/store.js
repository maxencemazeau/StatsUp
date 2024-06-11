import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation/navigationSlice";
import loginReducer from './authentication/loginSlice';

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        login: loginReducer,
    },
});
