import { Box, Typography } from '@mui/material'
import React from 'react'
import EventIcon from '@mui/icons-material/Event'

export default function MeetupEvent({Icon}) {


    return (
        <Box sx={{ mb: '18px', display: 'flex', alignItems: 'center' }} >
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '60px' }} >
                <EventIcon sx={{ color: '#495057', width: '18px', mr: '4px' }} />
                <Typography fontSize='14px' fontWeight='600' >
                    Fri, 12 Oct, 2018

                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Box component='img' src='/assets/location-on-icon.svg' sx={{ width: '14px', mr: '4px' }} />
                <Typography fontSize='14px' fontWeight='600' >
                    Ahmedabad, India
                </Typography>
            </Box>

        </Box>
    )
}

