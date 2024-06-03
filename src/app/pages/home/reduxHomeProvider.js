import React from "react"
import Home from "./home";
import { store } from "../../reduxState/store"
import { Provider } from "react-redux"

export default function ReduxHomeProvider() {

  return (
    <Provider store={store}>
      <Home /> 
    </Provider>
  );
}
