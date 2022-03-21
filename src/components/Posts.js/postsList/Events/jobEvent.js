import React from 'react'
import { Box, Typography } from '@mui/material'
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded'

export default function JobEvent() {

    return (
        <Box sx={{ mb: '18px', display: 'flex', alignItems: 'center' }} >
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '60px' }} >
                <WorkOutlineRoundedIcon sx={{ color: '#495057', width: '18px', mr: '4px' }} />

                <Typography fontSize='14px' fontWeight='600' >
                    Innovaccer Analytic...
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

