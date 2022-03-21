import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function PostsHeader() {


    return (
        <>
            <Stack direction='row' alignItems='center' justifyContent='space-between' sx={styles.header} >
                <Typography fontFamily='IBM_Plex_Sans_Bold' >
                    Posts (368)
                </Typography>
                <Button disableRipple endIcon={<ArrowDropDownIcon />} sx={styles.btn} >
                    Filter
                </Button>
            </Stack>
          
        </>
    )
}


const styles = {
    header: {
        px: '16px',
        py: '10px',
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        },
    },
    btn: {
        color: 'black',
        fontFamily: 'IBM_Plex_Sans_Semibold',
        border: '0.5px solid white',
        textTransform: 'capitalize',
        backgroundColor: '#F1F3F5',
        px: 2,
        fontSize: ' 15px',
        '&:hover': {
            backgroundColor: '#F1F3F5',
        },
       
    }
}