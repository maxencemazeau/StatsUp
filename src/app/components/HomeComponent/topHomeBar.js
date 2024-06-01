import React from "react"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Container } from "@mui/material"
import { Link } from "expo-router"

export default function TopHomeBar(){

    return(
        <Container sx={{paddingLeft:2, paddingTop :2}}>
            <Link href="/pages/searchFriend"><PeopleAltIcon /></Link>
        </Container>
    )
}