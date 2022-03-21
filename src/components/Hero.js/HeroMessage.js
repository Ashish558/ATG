import { Box, Typography } from '@mui/material'
import React from 'react'

export default function HeroMessage() {


    return (
        <Box sx={styles.message} >
            <Typography fontFamily='IBM_Plex_Sans_Bold' variant='h5' sx={{fontSize: {lg: '40px'}}} >
                Computer Engineering
            </Typography>
            <Typography>
                142,765 Computer Engineers follow this
            </Typography>
        </Box>
    )
}

const styles = {
    message: {
        position: 'absolute',
        bottom: '20px',
        left: '16px',
        color: 'white',
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '10%',
            left: '5%',
        },
    }
}
