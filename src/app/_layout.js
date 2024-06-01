// app/_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import Layout from './components/layout';

export default function AppLayout() {
  return (
    <Layout>
      <Stack screenOptions={{ headerShown: false }} />
    </Layout>
  );
}
