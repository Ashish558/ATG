import React from 'react'
import { Box, Typography } from '@mui/material'
import ActionBtn from './actionBtn'

export default function PostTitle({ title }) {


    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb:'12px' }} >
            <Typography fontFamily='IBM_Plex_Sans_Bold' fontSize='18px' >
                {title}
            </Typography>
            <Box sx={{ ml: '5px' }} >
                <ActionBtn />
            </Box>
        </Box>
    )
}
