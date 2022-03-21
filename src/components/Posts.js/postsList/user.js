import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';

export default function User({ name, views, image }) {


    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between' >
            <Stack direction='row' alignItems='center' >
                <Box mr='10px' >
                    <Box component='img' src={image} />
                </Box>
                <Box>
                    <Typography fontFamily='IBM_Plex_Sans_Bold' fontSize='15px' > {name} </Typography>
                    <Typography color='#495057' fontSize='13px' > {views} views </Typography>
                </Box>
            </Stack>
            <Button disableRipple startIcon={<ShareIcon />} sx={styles.btn} >
                Share
            </Button>
        </Stack>
    )
}



const styles = {
    btn: {
        color: 'black',
        // fontFamily: 'IBM_Plex_Sans',
        border: '0.5px solid white',
        textTransform: 'capitalize',
        backgroundColor: '#F1F3F5',
        px: 1,
        fontSize: ' 15px',
        '&:hover': {
            backgroundColor: '#F1F3F5',
        },
    }
}
