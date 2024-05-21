import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import { Provider } from "react-redux"
import { store } from "../app/reduxState/store"

export default function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
