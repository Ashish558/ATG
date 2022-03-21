import { Box, Button } from '@mui/material'
import React from 'react'

export default function Categories() {


    return (
        <Box>
            <Button disableRipple sx={{ ...styles.btn, ...styles.activeBtn }} >
                All Posts(345)
            </Button>
            <Button disableRipple sx={{ ...styles.btn }} >
                Article
            </Button>
            <Button disableRipple sx={{ ...styles.btn }} >
                Event
            </Button>
            <Button disableRipple sx={{ ...styles.btn }} >
                Education
            </Button>
            <Button disableRipple sx={{ ...styles.btn }} >
                Job
            </Button>
        </Box>
    )
}

const styles = {
    btn: {
        color: '#8A8A8A',
        textTransform: 'capitalize',
        py: '12px',
        pb: '15px',
        px: '2px',
        mr: '4px',
        borderRadius: '0',
        fontFamily: 'IBM_Plex_Sans_Medium',
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
    activeBtn: {
        color: 'black',
        borderBottom: '1px solid black'
    }
}
