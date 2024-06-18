// app/_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './reduxState/store';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function AppLayout() {
  return (
    <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Stack screenOptions={{ headerShown: false }} />
            </QueryClientProvider>
     </Provider>
  );
}
