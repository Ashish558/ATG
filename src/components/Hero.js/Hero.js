import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import BgImage from './bgImage'
import HeroMessage from './HeroMessage'

export default function Hero() {
    
    return (
        <Box sx={{position: 'relative'}} >
            <Navbar />
         
            <BgImage /> 
            <HeroMessage />
        </Box>
    )
}
