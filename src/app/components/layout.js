import React from 'react'
import BottomMenu from '../navigation/bottomMenu'
import { Container } from '@mui/material'
import { Slot, useRouter } from 'expo-router'

export  default function Layout(){

    const router = useRouter();
    const excludeFromLayout = ['/login', '/signup']; // Liste des routes à exclure
    const isExcludedRoute = excludeFromLayout.includes(router.pathname);

    return(
        <>
            <Container sx={{height:"100%", width:"100%", padding:0}}>
                <Slot/>
            </Container>
            {!isExcludedRoute && <BottomMenu/>}
        </>
    )
}