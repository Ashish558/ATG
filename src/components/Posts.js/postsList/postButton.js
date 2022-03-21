import { Button } from '@mui/material'
import React from 'react'

export default function PostButton({ color, text }) {

    return (
        <Button disableRipple fullWidth
            sx={{
                color: color,
                textTransform: 'capitalize',
                border: '1px solid #A9AEB8',
                mb: '30px',
                borderRadius: '8px',
                py: '8px',
                fontFamily: 'IBM_Plex_Sans_Semibold',
                '&:hover': { backgroundColor: 'transparent'},
            }} >
            {text}
        </Button>
    )
}
