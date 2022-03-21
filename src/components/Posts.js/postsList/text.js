import { Box } from '@mui/material'
import React from 'react'
import TextTruncate from 'react-text-truncate'

export default function Text({text}) {

    return (
        <Box sx={{color: '#495057', fontSize: '14px', mb: '14px' }} >

        <TextTruncate
            line={1}
            element="p"
            truncateText="…"
            text='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'
            
            />
            </Box>
    )
}
