import { Box } from '@mui/material'
import React from 'react'

export default function BgImage() {


    return (
        <Box sx={{display: 'flex' }}>
            <Box src='/assets/bg.jpg' component='img' sx={{ width: '100%' }} />
            <Box sx={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', background: 'rgba(0, 0, 0, 0.45)' }} />
        </Box>

    )
}
