import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Group from './Group'

export default function RecommenredGroups() {


    return (
        <Box>
            <Stack direction='row' alignItems='center' sx={{mb: '24px'}} >
                <Box component='img' src='/assets/thumbs-up.svg' />
                <Typography ml='8px' textTransform='uppercase' >
                    REcommended Groups
                </Typography>
            </Stack>
            
            <Stack spacing={3} mb='80px' >
                <Group name='Leisure' image='/assets/groups/group1.png' />
                <Group name='Activism' image='/assets/groups/group2.png' />
                <Group name='MBA' image='/assets/groups/group3.png' />
                <Group name='Philosophy' image='/assets/groups/group4.png' />
            </Stack>
            <Typography align='right' color='#2F6CE5' fontSize='13px' >See More...</Typography>
        </Box>
    )
}
