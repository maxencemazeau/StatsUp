import React from 'react';
import BottomMenu from '../navigation/bottomMenu';
import { Container } from '@mui/material';
import { Slot } from 'expo-router';

export default function Layout() {

  return (
    <>
      <Container sx={{ height: '100%', width: '100%', padding: 0 }}>
        <Slot />
      </Container>
      <BottomMenu />
    </>
  );
}
