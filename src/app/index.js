import React from "react"
import Login from "./loginAndSignUp/login";

import Home from "./pages/home/home";
import { store } from "../app/reduxState/store"
import { Provider } from "react-redux"
import SignUp from "./loginAndSignUp/signUp";

export default function Index() {

  return (
  
    <Provider store={store}>
      <Login />     
    </Provider>
  );
}
