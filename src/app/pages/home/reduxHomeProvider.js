import React from "react"
import Home from "./home";
import { store } from "../../reduxState/store"
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function ReduxHomeProvider() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Home />
        </QueryClientProvider> 
    </Provider>
  );
}
