// app/_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import Layout from '../components/layout';
import { Container } from '@mui/material';

export default function HomeLayout() {
  return (
    <Layout>
       <Stack screenOptions={{ headerShown: false }} />
     </Layout>
  );
}
